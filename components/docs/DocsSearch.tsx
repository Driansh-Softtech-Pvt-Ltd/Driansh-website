"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import type { DocSearchEntry } from "@/lib/docs";
import { cn } from "@/lib/utils";

const MAX_RESULTS = 8;

type Result = { entry: DocSearchEntry; href: string; context?: string; score: number };

function search(index: DocSearchEntry[], query: string): Result[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);

  const results: Result[] = [];
  for (const entry of index) {
    const title = entry.title.toLowerCase();
    const description = entry.description.toLowerCase();
    const category = entry.category.toLowerCase();
    const headings = entry.headings.map((h) => ({ ...h, lower: h.text.toLowerCase() }));
    const haystack = [title, description, category, ...headings.map((h) => h.lower)].join(" ");
    if (!terms.every((t) => haystack.includes(t))) continue;

    let score = title.includes(q) ? 10 : 0;
    for (const t of terms) {
      if (title.includes(t)) score += 3;
      if (headings.some((h) => h.lower.includes(t))) score += 2;
      if (description.includes(t)) score += 1;
      if (category.includes(t)) score += 1;
    }
    // Deep-link to the best-matching section when the title itself doesn't match.
    const heading = title.includes(terms[0]) ? undefined : headings.find((h) => terms.some((t) => h.lower.includes(t)));
    results.push({
      entry,
      href: heading ? `${entry.href}#${heading.id}` : entry.href,
      context: heading?.text,
      score,
    });
  }
  return results.sort((a, b) => b.score - a.score).slice(0, MAX_RESULTS);
}

export default function DocsSearch({
  index,
  variant = "hero",
  className,
}: {
  index: DocSearchEntry[];
  variant?: "hero" | "compact";
  className?: string;
}) {
  const router = useRouter();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const results = useMemo(() => search(index, query), [index, query]);
  const showPanel = open && query.trim().length >= 2;
  const hero = variant === "hero";

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active].href);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={cn("relative w-full", className)}>
      <label className="sr-only" htmlFor={`${listId}-input`}>
        Search the documentation
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400",
            hero ? "h-5 w-5" : "h-4 w-4 left-3"
          )}
        />
        <input
          id={`${listId}-input`}
          type="search"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={`${listId}-list`}
          aria-autocomplete="list"
          autoComplete="off"
          value={query}
          placeholder={hero ? "Search articles, e.g. “business hours” or “WhatsApp”" : "Search docs"}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className={cn(
            "w-full rounded-xl border border-slate-200 bg-white text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 [&::-webkit-search-cancel-button]:hidden",
            hero ? "h-14 pr-12 pl-12 text-base shadow-lg" : "h-10 pr-9 pl-9 text-sm"
          )}
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery("")}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-ink",
              hero ? "right-3" : "right-2"
            )}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showPanel && (
        <div
          className={cn(
            "absolute inset-x-0 z-30 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-xl",
            !hero && "min-w-0"
          )}
        >
          {results.length === 0 ? (
            <p className="px-4 py-5 text-sm text-slate-600">
              No articles match “{query.trim()}”. Try another word, or{" "}
              <Link href="/contact-us" className="font-medium text-brand hover:underline">
                contact us
              </Link>
              .
            </p>
          ) : (
            <ul id={`${listId}-list`} role="listbox" className="max-h-96 overflow-y-auto py-1">
              {results.map((r, i) => (
                <li key={r.href} role="option" aria-selected={i === active}>
                  <Link
                    href={r.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                    onMouseEnter={() => setActive(i)}
                    className={cn("block px-4 py-3", i === active && "bg-brand-soft")}
                  >
                    <span className="block text-xs font-medium text-slate-500">{r.entry.category}</span>
                    <span className="block font-semibold text-ink">{r.entry.title}</span>
                    <span className="mt-0.5 line-clamp-1 block text-sm text-slate-600">
                      {r.context ? `Section: ${r.context}` : r.entry.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
