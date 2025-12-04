import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PremiumBackground from "./components/PremiumBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Bas-URL för canonical-länkar och metadata
// Använder miljövariabel om satt, annars fallback
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kvkonsult.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KV Konsult – AI & Microsoft 365 som gör skillnad",
    template: "%s | KV Konsult",
  },
  description:
    "Vi hjälper företag och kommuner att ta nästa steg med AI, Microsoft 365 Copilot, utbildning och nulägesanalys.",
  keywords: ["AI", "Microsoft 365", "Copilot", "utbildning", "konsult", "digitalisering", "Sverige"],
  authors: [{ name: "KV Konsult" }],
  creator: "KV Konsult",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "KV Konsult",
    title: "KV Konsult – AI & Microsoft 365 som gör skillnad",
    description: "Vi hjälper företag och kommuner att ta nästa steg med AI, Microsoft 365 Copilot, utbildning och nulägesanalys.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KV Konsult – AI & Microsoft 365 som gör skillnad",
    description: "Vi hjälper företag och kommuner att ta nästa steg med AI, Microsoft 365 Copilot, utbildning och nulägesanalys.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <PremiumBackground />
        <Navigation />
        {/* Spacer för fixed navigation - matchar nav-höjden */}
        <div className="h-[72px]" />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
