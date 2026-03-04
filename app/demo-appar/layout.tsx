import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo-appar – KV Konsult",
  description:
    "Se våra senaste demo-appar. Från idé till fungerande app – vi bygger skräddarsydda mobil- och webbapplikationer.",
  openGraph: {
    title: "Demo-appar | KV Konsult",
    description:
      "Se våra senaste demo-appar. Vi bygger skräddarsydda applikationer som löser verkliga problem.",
  },
};

export default function DemoApparLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
