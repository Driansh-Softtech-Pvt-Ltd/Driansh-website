import Image from "next/image";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/site";
import { TESTIMONIALS, type Testimonial } from "@/content/engageone/testimonials";

/** Renders nothing until real, approved quotes are added to the data file. */
export default function CustomerStoriesSection({ items = TESTIMONIALS }: { items?: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Customer stories"
        title="Teams that talk to customers with EngageOne"
        description="In their own words."
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {items.map(({ quote, name, company, logo }) => (
          <li key={`${name}-${company}`}>
            <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-card p-6 shadow-sm">
              <Quote className="h-6 w-6 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">{quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                {logo && (
                  <Image src={logo} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-xl object-contain" />
                )}
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{name}</span>
                  <span className="block text-sm text-slate-500">{company}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
