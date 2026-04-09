import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utbildning & AI-partnerskap",
  description:
    "AI-utbildning, föreläsningar om Microsoft 365 Copilot, workshops och löpande AI-partnerskap för företag och kommuner.",
  openGraph: {
    title: "Utbildning & AI-partnerskap | KV Konsult",
    description:
      "Föreläsningar, workshops och löpande AI-stöd för hela organisationen.",
  },
};

export default function UtbildningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
