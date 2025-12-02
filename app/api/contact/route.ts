import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ═══════════════════════════════════════════════════════════════════════════
   KONTAKTFORMULÄR API-ROUTE
   Tar emot POST från kontaktformulären och skickar mejl via Resend
═══════════════════════════════════════════════════════════════════════════ */

// Validera e-postadress
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Sanitera input för säkerhet
function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
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

    // Initiera Resend med API-nyckel
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, organization, message, selectedPackages } = body;

    // Validera obligatoriska fält
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Namn saknas" },
        { status: 400 }
      );
    }

    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Ogiltig e-postadress" },
        { status: 400 }
      );
    }

    if (!organization?.trim()) {
      return NextResponse.json(
        { error: "Organisation saknas" },
        { status: 400 }
      );
    }

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Meddelande saknas" },
        { status: 400 }
      );
    }

    // Sanitera alla fält
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeOrganization = sanitize(organization);
    const safeMessage = sanitize(message);
    const safePackages: string[] = Array.isArray(selectedPackages)
      ? selectedPackages.map((p: string) => sanitize(p))
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
    
    console.log("Skickar e-post till:", JSON.stringify(toEmail));
    
    const { data, error } = await resend.emails.send({
      from: "KV Konsult <noreply@kvkonsult.com>",
      to: toEmail,
      replyTo: safeEmail,
      subject: `Kontaktförfrågan från ${safeName} (${safeOrganization})`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend-fel:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Kunde inte skicka meddelandet. Försök igen senare.", details: error.message },
        { status: 500 }
      );
    }

    console.log("E-post skickad:", data?.id);

    return NextResponse.json(
      { success: true, message: "Meddelandet har skickats!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("API-fel:", error);
    return NextResponse.json(
      { error: "Ett oväntat fel uppstod. Försök igen senare." },
      { status: 500 }
    );
  }
}

// Hantera OPTIONS för CORS (om det behövs i framtiden)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
