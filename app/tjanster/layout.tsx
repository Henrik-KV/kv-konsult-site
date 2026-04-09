import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Utbildning, AI-rådgivning, apputveckling, webbsidor och sociala medier. Se alla tjänster KV Konsult erbjuder företag och kommuner.",
  openGraph: {
    title: "Tjänster | KV Konsult",
    description:
      "Utbildning, AI-rådgivning, apputveckling, webbsidor och sociala medier för företag och kommuner.",
  },
};

export default function TjansterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
