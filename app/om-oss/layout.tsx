import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Lär känna KV Konsult – vi hjälper företag och kommuner med AI, Microsoft 365, utbildning och digitala lösningar som gör verklig skillnad.",
  openGraph: {
    title: "Om oss | KV Konsult",
    description:
      "Lär känna teamet bakom KV Konsult och vår vision för AI-driven digitalisering.",
  },
};

export default function OmOssLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
