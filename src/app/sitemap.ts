import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { flightPages } from "@/lib/flight-pages";
import { destinations } from "@/lib/destinations";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = site;
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "services", priority: 0.9, freq: "monthly" },
    { path: "how-it-works", priority: 0.8, freq: "monthly" },
    { path: "destinations", priority: 0.8, freq: "weekly" },
    { path: "blog", priority: 0.8, freq: "weekly" },
    { path: "reviews", priority: 0.7, freq: "monthly" },
    { path: "faq", priority: 0.7, freq: "monthly" },
    { path: "about", priority: 0.6, freq: "yearly" },
    { path: "privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "terms", priority: 0.3, freq: "yearly" },
    { path: "refund-policy", priority: 0.3, freq: "yearly" },
    { path: "cookie-policy", priority: 0.3, freq: "yearly" },
    { path: "accessibility", priority: 0.3, freq: "yearly" },
    { path: "contact", priority: 0.5, freq: "yearly" },
    { path: "sitemap", priority: 0.2, freq: "monthly" },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((entry) => ({
    url: entry.path ? `${siteUrl}/${entry.path}` : siteUrl,
    lastModified: now,
    changeFrequency: entry.freq,
    priority: entry.priority,
  }));

  const flights: MetadataRoute.Sitemap = flightPages.map((page) => ({
    url: `${siteUrl}/flights/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const destinationPages: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${siteUrl}/destinations/${dest.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...flights, ...destinationPages, ...blogPages];
}
