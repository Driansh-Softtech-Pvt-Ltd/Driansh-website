import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronDown, LifeBuoy } from "lucide-react";
import { CtaLink } from "@/components/site";
import DocFeedback from "@/components/docs/DocFeedback";
import DocsSidebar from "@/components/docs/DocsSidebar";
import {
  DOCS_BASE,
  getAdjacentDocArticles,
  getAllDocArticles,
  getDocArticle,
  getDocsNav,
  getDocsSearchIndex,
} from "@/lib/docs";
import { SITE_URL, docsMetadata } from "@/lib/seo";

type Props = { params: Promise<{ category: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDocArticles().map((a) => ({ category: a.categorySlug, slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params;
  const article = getDocArticle(category, slug);
  if (!article) notFound();
  return docsMetadata(article.href, article.title, article.description);
}

export default async function DocArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = getDocArticle(category, slug);
  if (!article) notFound();

  const { previous, next } = getAdjacentDocArticles(article.href);
  const toc = article.headings.filter((h) => h.level === 2);
  const categoryHref = `${DOCS_BASE}/${article.categorySlug}`;
  const crumbs = [
    { name: "Documentation", href: DOCS_BASE },
    { name: article.categoryTitle, href: categoryHref },
    { name: article.title, href: article.href },
  ];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <div className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="container-site grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[16rem_minmax(0,1fr)_13rem] xl:gap-12">
        <aside className="min-w-0">
          <DocsSidebar nav={getDocsNav()} index={getDocsSearchIndex()} currentHref={article.href} />
        </aside>

        <article className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              {crumbs.slice(0, -1).map((c) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  <Link href={c.href} className="hover:text-brand">
                    {c.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
              ))}
              <li aria-current="page" className="text-slate-700">
                {article.title}
              </li>
            </ol>
          </nav>

          <header className="mb-8 border-b border-slate-200 pb-8">
            <h1 className="heading-2 text-ink">{article.title}</h1>
            <p className="text-lead mt-3 text-slate-600">{article.description}</p>
          </header>

          {toc.length > 1 && (
            <details className="group mb-8 rounded-xl border border-slate-200 bg-surface xl:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                On this page
                <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <ul className="space-y-1 px-4 pb-4">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-sm text-slate-600 hover:text-brand">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <div
            className="prose docs-prose"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {(previous || next) && (
            <nav aria-label="More articles" className="mt-14 grid gap-4 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={previous.href}
                  className="group rounded-2xl border border-slate-200 p-5 transition-colors hover:border-brand/40 hover:bg-surface"
                >
                  <span className="flex items-center gap-1.5 text-sm text-slate-500">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                    Previous
                  </span>
                  <span className="mt-1 block font-semibold text-ink group-hover:text-brand">{previous.title}</span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next && (
                <Link
                  href={next.href}
                  className="group rounded-2xl border border-slate-200 p-5 text-right transition-colors hover:border-brand/40 hover:bg-surface"
                >
                  <span className="flex items-center justify-end gap-1.5 text-sm text-slate-500">
                    Next
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block font-semibold text-ink group-hover:text-brand">{next.title}</span>
                </Link>
              )}
            </nav>
          )}

          <footer className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-surface p-6 sm:p-8 md:grid-cols-2 md:items-center">
            <DocFeedback path={article.href} />
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <LifeBuoy className="h-5 w-5 text-brand" aria-hidden="true" />
              <span className="font-semibold text-ink">Still need help?</span>
              <CtaLink href="/contact-us" size="sm">
                Contact us
              </CtaLink>
            </div>
          </footer>
        </article>

        {toc.length > 0 && (
          <aside aria-label="On this page" className="hidden xl:block">
            <div className="sticky top-32">
              <p className="eyebrow mb-3 text-slate-500">On this page</p>
              <ul className="space-y-2 border-l border-slate-200">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-slate-600 hover:border-brand hover:text-brand"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
