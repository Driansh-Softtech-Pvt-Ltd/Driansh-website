"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, Globe, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow } from "@/components/visuals/engageone/primitives";

/*
 * Mock-up of the EngageOne help center for the sample brand
 * "DRIANSH RESTAURANT": a public portal on the left of the story and the
 * portals list that manages it. Domains, counts and articles are samples.
 */

export type HelpCenterFocus = "locales" | "domain" | "search" | "portals";

const PORTALS = [
  { name: "Guest help", domain: "help.example.com", articles: 42, band: "bg-brand-gradient", dot: "bg-brand-solid" },
  { name: "Delivery partners", domain: "partners.example.com", articles: 18, band: "bg-violet-600", dot: "bg-violet-500" },
  { name: "Franchise owners", domain: "franchise.example.com", articles: 27, band: "bg-emerald-600", dot: "bg-emerald-500" },
];

const LOCALES = [
  {
    code: "en",
    heading: "How can we help?",
    search: "Search articles…",
    articles: "articles",
    categories: ["Ordering & delivery", "Payments & refunds", "Table bookings", "Your account"],
  },
  {
    code: "hi",
    heading: "हम आपकी कैसे मदद कर सकते हैं?",
    search: "लेख खोजें…",
    articles: "लेख",
    categories: ["ऑर्डर और डिलीवरी", "भुगतान और रिफ़ंड", "टेबल बुकिंग", "आपका खाता"],
  },
  {
    code: "gu",
    heading: "અમે તમારી કેવી રીતે મદદ કરી શકીએ?",
    search: "લેખ શોધો…",
    articles: "લેખ",
    categories: ["ઓર્ડર અને ડિલિવરી", "ચુકવણી અને રિફંડ", "ટેબલ બુકિંગ", "તમારું ખાતું"],
  },
  {
    code: "es",
    heading: "¿Cómo podemos ayudarte?",
    search: "Buscar artículos…",
    articles: "artículos",
    categories: ["Pedidos y entregas", "Pagos y reembolsos", "Reservas de mesa", "Tu cuenta"],
  },
];

const PORTAL_CATEGORIES = [
  { names: LOCALES[0].categories, counts: [12, 8, 9, 13] },
  { names: ["Getting started", "Pickups", "Payouts", "Safety"], counts: [5, 6, 4, 3] },
  { names: ["Opening checklist", "Menu & pricing", "Staff training", "Reports"], counts: [7, 8, 6, 6] },
];

const QUERY = "refund";
const RESULTS = [
  { title: "How do refunds work?", category: "Payments & refunds" },
  { title: "Refund for a cancelled order", category: "Ordering & delivery" },
  { title: "When will my refund arrive?", category: "Payments & refunds" },
];

function step(progress: number, count: number) {
  return Math.min(count - 1, Math.floor(progress * count));
}

export default function HelpCenterPreview({ focus, progress }: { focus: HelpCenterFocus; progress: number }) {
  const portalIndex = focus === "portals" ? step(progress, PORTALS.length) : 0;
  const portal = PORTALS[portalIndex];
  const locale = LOCALES[focus === "locales" ? step(progress, LOCALES.length) : 0];
  const categories = PORTAL_CATEGORIES[portalIndex];
  const categoryNames = portalIndex === 0 ? locale.categories : categories.names;

  const typed = focus === "search" ? QUERY.slice(0, Math.max(0, Math.floor(((progress - 0.08) / 0.3) * QUERY.length))) : "";
  const showResults = focus === "search" && progress >= 0.42;

  return (
    <div className="mx-auto grid w-full max-w-xl gap-4">
      <AppWindow title="DRIANSH RESTAURANT · Help Center">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2">
          <span
            className={cn(
              "flex min-w-0 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] transition-colors",
              focus === "domain" ? "bg-brand-soft font-semibold text-brand ring-2 ring-brand/40" : "bg-slate-100 text-slate-500"
            )}
          >
            <Globe className="h-3 w-3 shrink-0" />
            <span className="truncate">{portal.domain}</span>
          </span>
        </div>

        <div className={cn("px-4 pb-4 pt-5 text-white transition-colors duration-500", portal.band)}>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
            DRIANSH RESTAURANT · {portal.name}
          </div>
          <div className="mt-1 truncate text-base font-semibold">{locale.heading}</div>
          <div
            className={cn(
              "mt-3 flex items-center gap-2 rounded-lg bg-card px-3 py-2 text-xs",
              focus === "search" ? "ring-2 ring-white/60" : ""
            )}
          >
            <Search className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            {typed ? (
              <span className="text-ink">
                {typed}
                {!showResults && <span className="ml-px inline-block h-3 w-px motion-safe:animate-pulse bg-ink align-middle" />}
              </span>
            ) : (
              <span className="truncate text-slate-400">{locale.search}</span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {LOCALES.map(({ code }) => (
              <span
                key={code}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase transition-colors",
                  code === locale.code ? "bg-card text-ink" : "bg-white/15 text-white"
                )}
              >
                {code}
              </span>
            ))}
          </div>
        </div>

        <div className="h-52 p-4">
          <AnimatePresence mode="wait" initial={false}>
            {showResults ? (
              <motion.ul
                key="results"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-1.5"
              >
                <li className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">3 results</li>
                {RESULTS.map((result, i) => (
                  <li
                    key={result.title}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg border px-3 py-2 text-xs",
                      i === 0 ? "border-brand/30 bg-brand-soft/60" : "border-slate-100"
                    )}
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0 text-brand" />
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-ink">{result.title}</span>
                      <span className="block truncate text-[10px] text-slate-500">{result.category}</span>
                    </span>
                  </li>
                ))}
              </motion.ul>
            ) : (
              <motion.div
                key={`cats-${portalIndex}-${locale.code}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-2 gap-2"
              >
                {categoryNames.map((name, i) => (
                  <div key={name} className="rounded-xl border border-slate-100 bg-surface p-3">
                    <div className="truncate text-xs font-semibold text-ink">{name}</div>
                    <div className="mt-0.5 text-[10px] text-slate-500">
                      {categories.counts[i]} {locale.articles}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AppWindow>

      <div
        aria-hidden="true"
        className={cn(
          "hidden select-none rounded-2xl border bg-card p-4 sm:block shadow-lg shadow-violet-900/10 transition-colors",
          focus === "portals" ? "border-brand/30" : "border-slate-200"
        )}
      >
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">Portals</span>
          <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">
            {PORTALS.length} portals
          </span>
        </div>
        <ul className="mt-3 space-y-1.5">
          {PORTALS.map((item, i) => (
            <li
              key={item.domain}
              className={cn(
                "flex items-center gap-2.5 rounded-xl border px-3 py-2 text-xs transition-colors",
                i === portalIndex ? "border-brand/30 bg-brand-soft/60" : "border-slate-100"
              )}
            >
              <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", item.dot)} />
              <span className="min-w-0">
                <span className="block truncate font-medium text-ink">{item.name}</span>
                <span className={cn("block truncate text-[10px]", focus === "domain" ? "font-semibold text-brand" : "text-slate-500")}>
                  {item.domain}
                </span>
              </span>
              <span className="ml-auto shrink-0 text-[10px] text-slate-500">{item.articles} articles</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
