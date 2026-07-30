import type { MetadataRoute } from "next";
import { productionUrl } from "./lib/content";

const routes = ["", "/tjanster", "/utbildning-ai", "/losningsarkitekter", "/webbsidor", "/sociala-medier", "/kommuner", "/foretag", "/demo-appar", "/om-oss", "/kontakt", "/integritetspolicy", "/villkor"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({ url: `${productionUrl}${route}`, changeFrequency: index < 3 ? "weekly" : index < 11 ? "monthly" : "yearly", priority: index === 0 ? 1 : index < 6 ? .8 : index < 11 ? .7 : .3 }));
}
