import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.domain,
      lastModified: new Date("2026-11-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.domain}/privacidade`,
      lastModified: new Date("2026-11-21"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
