import type { MetadataRoute } from "next";
import { getAllCategories, getAllArticles } from "@/lib/kb";

export const dynamic = "force-static";

const BASE_URL = "https://theledger.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
  ];

  const categoryEntries: MetadataRoute.Sitemap = getAllCategories().map((c) => ({
    url: `${BASE_URL}/learn/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${BASE_URL}/learn/${a.category}/${a.slug}`,
    lastModified: a.lastUpdated,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}
