import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "För kommuner",
  description:
    "AI och digitalisering för kommuner – minska digitalt utanförskap, effektivisera förvaltning och stärk medarbetare med KV Konsult.",
  openGraph: {
    title: "För kommuner | KV Konsult",
    description:
      "AI-stöd för kommuner: utbildning, Microsoft 365 Copilot och nulägesanalys.",
  },
};

export default function KommunerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
