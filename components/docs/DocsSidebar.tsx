"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { DocsNav, DocSearchEntry } from "@/lib/docs";
import { cn } from "@/lib/utils";
import DocsSearch from "./DocsSearch";

/** Left navigation for /docs: every category and article. Collapses behind a toggle below lg. */
export default function DocsSidebar({
  nav,
  index,
  currentHref,
}: {
  nav: DocsNav;
  index: DocSearchEntry[];
  currentHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto lg:pr-2 lg:pb-8">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="docs-sidebar-nav"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm lg:hidden"
      >
        <span className="flex items-center gap-2">
          <Menu className="h-4 w-4 text-brand" aria-hidden="true" />
          Browse documentation
        </span>
        {open ? <X className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
      </button>

      <div id="docs-sidebar-nav" className={cn("mt-3 lg:mt-0 lg:block", open ? "block" : "hidden")}>
        <DocsSearch index={index} variant="compact" className="mb-5" />
        <nav aria-label="Documentation">
          <ul className="space-y-1">
            {nav.map((category) => {
              const current = currentHref.startsWith(`${category.href}/`) || currentHref === category.href;
              return (
                <li key={category.slug}>
                  <details open={current} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 text-sm font-semibold text-ink hover:bg-surface [&::-webkit-details-marker]:hidden">
                      {category.title}
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul className="mt-1 mb-2 ml-2 space-y-0.5 border-l border-slate-200 pl-2">
                      {category.articles.map((article) => {
                        const active = article.href === currentHref;
                        return (
                          <li key={article.slug}>
                            <Link
                              href={article.href}
                              aria-current={active ? "page" : undefined}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block rounded-lg px-3 py-1.5 text-sm leading-snug transition-colors",
                                active
                                  ? "bg-brand-soft font-semibold text-brand"
                                  : "text-slate-600 hover:bg-surface hover:text-ink"
                              )}
                            >
                              {article.title}
                            </Link>
                          </li>
                        );
                      })}
                      {category.articles.length === 0 && (
                        <li className="px-3 py-1.5 text-sm text-slate-400">Articles coming soon</li>
                      )}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
