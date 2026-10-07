import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PageHero, Section } from "@/components/site";
import DocIcon from "@/components/docs/DocIcon";
import DocsHelpBanner from "@/components/docs/DocsHelpBanner";
import { DOCS_BASE, getDocCategories, getDocCategory } from "@/lib/docs";
import { docsMetadata } from "@/lib/seo";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getDocCategories().map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const category = getDocCategory(slug);
  if (!category) notFound();
  return docsMetadata(category.href, `${category.title} – EngageOne Docs`, category.description);
}

export default async function DocsCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getDocCategory(slug);
  if (!category) notFound();
  const others = getDocCategories().filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHero
        size="md"
        eyebrow="Documentation"
        title={category.title}
        description={category.description}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Documentation", href: DOCS_BASE },
          { name: category.title, href: category.href },
        ]}
        primaryCta={null}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="min-w-0">
            <p className="mb-5 text-sm font-medium text-slate-500">
              {category.articles.length} {category.articles.length === 1 ? "article" : "articles"}
            </p>
            {category.articles.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-300 p-8 text-slate-600">
                Articles for this section are on their way. In the meantime,{" "}
                <Link href="/contact-us" className="font-medium text-brand hover:underline">
                  contact us
                </Link>{" "}
                and we&apos;ll help you directly.
              </p>
            ) : (
              <ol className="space-y-4">
                {category.articles.map((article, i) => (
                  <li key={article.slug}>
                    <Link
                      href={article.href}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-card p-5 shadow-sm transition-all hover:border-brand/30 hover:shadow-md sm:p-6"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="heading-4 block text-ink group-hover:text-brand">{article.title}</span>
                        <span className="mt-1 block leading-relaxed text-slate-600">{article.description}</span>
                      </span>
                      <ChevronRight
                        className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <aside aria-label="Other sections">
            <h2 className="eyebrow mb-4 text-slate-500">Other sections</h2>
            <ul className="space-y-1">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={c.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-surface hover:text-brand"
                  >
                    <DocIcon name={c.icon} className="h-4 w-4 shrink-0 text-brand" />
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section size="sm" className="pt-0 md:pt-0">
        <DocsHelpBanner />
      </Section>
    </>
  );
}
