import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appar & lösningar",
  description:
    "Skräddarsydda appar och digitala lösningar. Från idé till färdig produkt – vi bygger det ni behöver med modern teknik.",
  openGraph: {
    title: "Appar & lösningar | KV Konsult",
    description:
      "Vi bygger skräddarsydda appar och system som löser verkliga problem.",
  },
};

export default function LosningsarkitekterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
