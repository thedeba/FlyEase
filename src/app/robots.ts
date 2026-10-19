import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const INDEX_UTILITY_PAGES =
  process.env.NEXT_PUBLIC_INDEX_UTILITY_PAGES === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: INDEX_UTILITY_PAGES
          ? []
          : ["/privacy-policy", "/terms", "/contact"],
      },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
