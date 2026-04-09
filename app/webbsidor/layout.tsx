import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webbsidor",
  description:
    "Moderna, snabba webbsidor med AI-stöd. Responsiv design, SEO-optimering och innehåll som konverterar – byggt med modern teknik.",
  openGraph: {
    title: "Webbsidor | KV Konsult",
    description:
      "Vi bygger moderna webbsidor som är snabba, tillgängliga och SEO-optimerade.",
  },
};

export default function WebbsidorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
