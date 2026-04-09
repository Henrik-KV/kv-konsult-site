import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta KV Konsult för en kostnadsfri avstämning. Vi hjälper er med AI, Microsoft 365 Copilot, appar och digitala lösningar.",
  openGraph: {
    title: "Kontakt | KV Konsult",
    description:
      "Boka ett samtal eller skicka ett meddelande. Vi svarar inom 24 timmar.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
