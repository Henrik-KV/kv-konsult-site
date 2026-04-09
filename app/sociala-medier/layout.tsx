import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sociala medier",
  description:
    "Löpande innehållsproduktion för sociala medier. Strategi, grafisk design, copy och publicering för LinkedIn, Instagram och Facebook.",
  openGraph: {
    title: "Sociala medier | KV Konsult",
    description:
      "Professionell hantering av era sociala medier – strategi, innehåll och publicering.",
  },
};

export default function SocialaMedierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
