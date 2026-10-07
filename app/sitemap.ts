import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/seo";
import { getDocCategories } from "@/lib/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = Object.keys(PAGES).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  const docs: MetadataRoute.Sitemap = getDocCategories().flatMap((category) => [
    { url: `${SITE_URL}${category.href}`, changeFrequency: "monthly", priority: 0.6 },
    ...category.articles.map((article) => ({
      url: `${SITE_URL}${article.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]);

  return [...pages, ...docs];
}
