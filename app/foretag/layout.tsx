import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "För företag",
  description:
    "AI-lösningar för företag – effektivisera administration, förbättra kundupplevelsen och implementera Microsoft 365 Copilot med KV Konsult.",
  openGraph: {
    title: "För företag | KV Konsult",
    description:
      "Skräddarsydda AI-lösningar för företag. Effektivisera med Microsoft 365 Copilot.",
  },
};

export default function ForetagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
