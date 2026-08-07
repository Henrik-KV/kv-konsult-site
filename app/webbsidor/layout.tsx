import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webbsidor",
  description:
    "Professionella hemsidor för 9 999 kr i startavgift med löpande underhåll från 499 kr per månad. Alla priser exklusive moms.",
  openGraph: {
    title: "Webbsidor | KV Konsult",
    description:
      "Vi bygger, kopplar upp och underhåller moderna hemsidor till tydliga priser.",
  },
};

export default function WebbsidorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
