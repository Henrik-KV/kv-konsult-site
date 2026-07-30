import type { MetadataRoute } from "next";
import { productionUrl } from "./lib/content";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }], sitemap: `${productionUrl}/sitemap.xml`, host: productionUrl };
}
