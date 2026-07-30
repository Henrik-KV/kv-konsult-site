import type { Metadata } from "next";
import { productionUrl } from "./content";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? productionUrl : `${productionUrl}${path}`;

  return {
    title: { absolute: `${title} | KV Konsult` },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      url: canonical,
      siteName: "KV Konsult",
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "KV Konsult – från komplexitet till klarhet" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
