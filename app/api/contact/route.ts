import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ═══════════════════════════════════════════════════════════════════════════
   KONTAKTFORMULÄR API-ROUTE
   Tar emot POST från kontaktformulären och skickar mejl via Resend.
   Skydd: validering, längdgränser, rate limiting, honeypot, sanering.
═══════════════════════════════════════════════════════════════════════════ */

// Maxlängder för fält (skydd mot missbruk)
const LIMITS = {
  name: 200,
  email: 254,
  organization: 200,
  message: 5000,
  packages: 25,
} as const;

// Enkel rate limiting per IP (in-memory, per serverinstans)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minuter
const RATE_LIMIT_MAX = 5; // max 5 förfrågningar per fönster
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// Rensa gamla poster så minnet inte växer
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}

// Validera e-postadress
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= LIMITS.email;
}

// Sanitera input för säkerhet: HTML-escape, ta bort kontrolltecken, begränsa längd
function sanitize(str: string, maxLength: number): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  try {
    // Kontrollera att API-nyckeln finns
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY saknas i miljövariabler");
      return NextResponse.json(
        { error: "Serverkonfigurationsfel. Försök igen senare." },
        { status: 500 }
      );
    }

    // Rate limiting per IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "För många förfrågningar. Vänta en stund och försök igen." },
        { status: 429 }
      );
    }
    if (rateLimitMap.size > 1000) cleanupRateLimitMap();

    // Begränsa payload-storlek
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 50_000) {
      return NextResponse.json({ error: "För stor förfrågan." }, { status: 413 });
    }

    const body = await request.json();
    const { name, email, organization, message, selectedPackages, website } = body;

    // Honeypot: fältet "website" är dolt för människor.
    // Om det är ifyllt är det en bot – svara "ok" utan att skicka mejl.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Meddelandet har skickats!" },
        { status: 200 }
      );
    }

    // Validera obligatoriska fält
    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Namn saknas" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.trim() || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "Ogiltig e-postadress" },
        { status: 400 }
      );
    }

    if (typeof organization !== "string" || !organization.trim()) {
      return NextResponse.json(
        { error: "Organisation saknas" },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Meddelande saknas" },
        { status: 400 }
      );
    }

    // Initiera Resend med API-nyckel
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Sanitera alla fält och begränsa längd
    const safeName = sanitize(name, LIMITS.name);
    const safeEmail = sanitize(email, LIMITS.email);
    const safeOrganization = sanitize(organization, LIMITS.organization);
    const safeMessage = sanitize(message, LIMITS.message);
    const safePackages: string[] = Array.isArray(selectedPackages)
      ? selectedPackages
          .filter((p: unknown): p is string => typeof p === "string")
          .slice(0, LIMITS.packages)
          .map((p) => sanitize(p, 100))
      : [];

    // Bygg upp e-postinnehållet
    const packagesList = safePackages.length > 0
      ? `\n\n📦 VALDA PAKET:\n${safePackages.map(p => `  • ${p}`).join("\n")}`
      : "";

    const emailContent = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NYTT MEDDELANDE FRÅN KONTAKTFORMULÄR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 AVSÄNDARE:
  Namn: ${safeName}
  E-post: ${safeEmail}
  Organisation: ${safeOrganization}
${packagesList}

💬 MEDDELANDE:
${safeMessage}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Skickat via kontaktformuläret på kvkonsult.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    // Skicka e-post via Resend
    // Använder noreply@kvkonsult.com som avsändare (verifierad domän)
    const toEmail = (process.env.CONTACT_EMAIL || "info@kvkonsult.com").trim();

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "KV Konsult <noreply@kvkonsult.com>",
      to: toEmail,
      replyTo: safeEmail,
      subject: `Kontaktförfrågan från ${safeName} (${safeOrganization})`,
      text: emailContent,
    });

    if (error) {
      // Logga internt men läck inte detaljer till klienten
      console.error("Resend-fel:", error.name);
      return NextResponse.json(
        { error: "Kunde inte skicka meddelandet. Försök igen senare." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Meddelandet har skickats!" },
      { status: 200 }
    );

  } catch {
    return NextResponse.json(
      { error: "Ett oväntat fel uppstod. Försök igen senare." },
      { status: 500 }
    );
  }
}
