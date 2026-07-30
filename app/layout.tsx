import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope/wght.css";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollDirector from "./components/ScrollDirector";
import { contacts, productionUrl } from "./lib/content";

const isPreview = process.env.VERCEL_ENV === "preview";
const isVercel = Boolean(process.env.VERCEL);

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: { default: "KV Konsult – AI som går att använda", template: "%s | KV Konsult" },
  description: "KV Konsult hjälper svenska företag, kommuner och organisationer att utbilda, införa och bygga användbara AI- och digitala lösningar.",
  applicationName: "KV Konsult",
  authors: [{ name: "KV Konsult AB" }],
  creator: "KV Konsult AB",
  alternates: { canonical: productionUrl },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: productionUrl,
    siteName: "KV Konsult",
    title: "KV Konsult – AI som går att använda",
    description: "Utbilda, införa och bygga: praktisk AI och digital utveckling för svenska organisationer.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "KV Konsult – från komplexitet till klarhet" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: isPreview ? { index: false, follow: false, noarchive: true } : { index: true, follow: true },
  verification: { google: "ARIDJsQU-6bWU5jNSxku8mhG5lc5hAlhGekJ2OwlsZA" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KV Konsult AB",
  url: productionUrl,
  logo: `${productionUrl}/images/kv-logo-blue.jpg`,
  description: "AI-utbildning, införande och digitala lösningar för företag, kommuner och organisationer i Sverige.",
  email: "info@kvkonsult.com",
  areaServed: { "@type": "Country", name: "Sverige" },
  contactPoint: contacts.map((contact) => ({
    "@type": "ContactPoint",
    name: contact.name,
    telephone: contact.phoneHref,
    email: contact.email,
    contactType: "customer service",
    availableLanguage: ["sv"],
  })),
  knowsAbout: ["AI-utbildning", "Microsoft 365 Copilot", "AI-införande", "Webbutveckling", "Applikationsutveckling"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <a href="#main-content" className="skip-link">Hoppa till innehållet</a>
        <Navigation />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
        <ScrollDirector />
        {isVercel && <Analytics />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
