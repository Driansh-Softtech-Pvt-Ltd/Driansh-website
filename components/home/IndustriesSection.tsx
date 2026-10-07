import Link from "next/link";
import { ArrowRight, Headphones, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { CtaLink, Section, SectionHeader } from "@/components/site";
import { INDUSTRIES } from "@/content/engageone/industries";
import IndustryScroller from "./IndustryScroller";
import { ENGAGEONE_BASE } from "./links";

const INDUSTRIES_HREF = `${ENGAGEONE_BASE}/industries`;

const CARDS = [
  {
    name: "Restaurants",
    summary: "Menus, orders, payment links and table bookings in chat, with a kitchen dashboard for staff.",
    href: `${INDUSTRIES_HREF}/restaurants`,
    icon: UtensilsCrossed,
  },
  {
    name: "E-commerce",
    summary: "Order and delivery questions in one inbox, plus WhatsApp offers and order updates.",
    href: `${INDUSTRIES_HREF}/ecommerce`,
    icon: ShoppingBag,
  },
  {
    name: "Contact centers",
    summary: "Queues, auto-assignment, calls and reports across every channel your agents handle.",
    href: `${INDUSTRIES_HREF}/contact-centers`,
    icon: Headphones,
  },
  ...INDUSTRIES.map(({ name, summary, slug, icon }) => ({ name, summary, href: `${INDUSTRIES_HREF}/${slug}`, icon })),
];

export default function IndustriesSection() {
  return (
    <Section tone="white" className="overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          align="left"
          eyebrow="Industries"
          title="Set up for the way your business works"
          description="From restaurants to public services, see how teams use EngageOne for orders, bookings, support and sales."
          className="mb-0 md:mb-0"
        />
        <CtaLink href={INDUSTRIES_HREF} variant="outline" className="shrink-0 self-start md:self-end">
          All industries
        </CtaLink>
      </div>

      <div className="mt-10">
        <IndustryScroller label="Industries using EngageOne">
          {CARDS.map(({ name, summary, href, icon: Icon }) => (
            <li key={href} className="w-[17rem] shrink-0 snap-start sm:w-[19rem]">
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="heading-3 text-ink">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </IndustryScroller>
      </div>
    </Section>
  );
}
