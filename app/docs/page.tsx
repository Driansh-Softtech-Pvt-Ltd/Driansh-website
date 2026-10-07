import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site";
import DocIcon from "@/components/docs/DocIcon";
import DocsSearch from "@/components/docs/DocsSearch";
import DocsHelpBanner from "@/components/docs/DocsHelpBanner";
import { getDocCategories, getDocsSearchIndex } from "@/lib/docs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/docs");

const PREVIEW_COUNT = 3;

export default function DocsHomePage() {
  const categories = getDocCategories();

  return (
    <>
      <PageHero
        size="md"
        title="EngageOne documentation"
        description="Step-by-step guides for setting up Driansh EngageOne, connecting your channels and helping customers faster."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Documentation", href: "/docs" },
        ]}
        primaryCta={null}
      />

      {/* Sits over the hero edge, outside its overflow-hidden box so results aren't clipped. */}
      <div className="container-site relative z-20 -mt-7">
        <DocsSearch index={getDocsSearchIndex()} className="mx-auto max-w-2xl" />
      </div>

      <Section className="pt-12 md:pt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <DocIcon name={category.icon} className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="heading-3 text-ink">
                    <Link href={category.href} className="hover:text-brand">
                      {category.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-500">
                    {category.articles.length} {category.articles.length === 1 ? "article" : "articles"}
                  </p>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">{category.description}</p>
              {category.articles.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {category.articles.slice(0, PREVIEW_COUNT).map((article) => (
                    <li key={article.slug}>
                      <Link href={article.href} className="text-sm font-medium text-slate-700 hover:text-brand">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={category.href}
                className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand"
              >
                View all
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section size="sm" className="pt-0 md:pt-0">
        <DocsHelpBanner />
      </Section>
    </>
  );
}
