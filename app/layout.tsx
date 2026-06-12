import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
    default: "KV Konsult – AI-utbildning, AI-strategi & digitala lösningar",
    template: "%s | KV Konsult",
  },
  description:
    "AI-utbildning, workshops, AI-strategi och praktisk AI-hjälp för företag, kommuner och organisationer i hela Sverige. Vi gör AI begripligt och användbart i vardagen.",
  keywords: [
    "AI-utbildning",
    "AI-konsult",
    "AI-workshop",
    "AI-strategi",
    "Microsoft 365 Copilot",
    "AI för kommuner",
    "AI för företag",
    "digitalisering",
    "Sverige",
  ],
  authors: [{ name: "KV Konsult AB" }],
  creator: "KV Konsult AB",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteUrl,
    siteName: "KV Konsult",
    title: "KV Konsult – AI-utbildning, AI-strategi & digitala lösningar",
    description:
      "AI-utbildning, workshops, AI-strategi och praktisk AI-hjälp för företag, kommuner och organisationer i hela Sverige.",
    images: [
      {
        url: "/images/kvkonsult-logo.png",
        width: 512,
        height: 512,
        alt: "KV Konsult – AI-utbildning och strategi",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "KV Konsult – AI-utbildning, AI-strategi & digitala lösningar",
    description:
      "AI-utbildning, workshops, AI-strategi och praktisk AI-hjälp för företag, kommuner och organisationer i hela Sverige.",
    images: ["/images/kvkonsult-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ARIDJsQU-6bWU5jNSxku8mhG5lc5hAlhGekJ2OwlsZA",
  },
};

// JSON-LD Organization schema för Google
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KV Konsult AB",
  url: siteUrl,
  logo: `${siteUrl}/images/kvkonsult-logo.png`,
  description:
    "AI-utbildning, workshops, AI-strategi och praktisk AI-hjälp för företag, kommuner och organisationer i hela Sverige.",
  email: "info@kvkonsult.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SE",
  },
  areaServed: {
    "@type": "Country",
    name: "Sverige",
  },
  knowsAbout: [
    "AI-utbildning",
    "AI-strategi",
    "Microsoft 365 Copilot",
    "Workshops",
    "Digitalisering",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@kvkonsult.com",
    availableLanguage: ["Swedish"],
  },
  sameAs: [],
};

// JSON-LD WebSite schema för sitelinks i Google
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KV Konsult",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        {/* Skip-link för tangentbordsanvändare */}
        <a href="#innehall" className="skip-link">
          Hoppa till innehåll
        </a>
        <Navigation />
        {/* Spacer för fixed navigation - matchar nav-höjden */}
        <div className="h-[72px]" />
        <div id="innehall">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
