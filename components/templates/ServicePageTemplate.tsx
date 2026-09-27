import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, CTABanner } from "@/components/site";
import FlowDiagram from "@/components/visuals/FlowDiagram";
import { breadcrumbsFor, contentJsonLd } from "@/lib/seo";
import type { ServicePageContent } from "@/content/types";
import JsonLd from "./JsonLd";
import { Chips, HighlightsStrip, IconCards, LeadFormSection, LinkCards, ProcessSteps, RelatedLinks } from "./parts";

/**
 * The one layout every service page uses (research-backed order):
 * hero → capabilities → intro → services → CTA → use cases → why us → process → FAQ → form → related.
 */
export default function ServicePageTemplate({ content: c }: { content: ServicePageContent }) {
  return (
    <>
      <JsonLd data={contentJsonLd(c)} />
      <PageHero
        breadcrumbs={breadcrumbsFor(c)}
        eyebrow={c.eyebrow}
        title={c.hero.title}
        description={c.hero.subtitle}
        primaryCta={{ label: c.hero.primaryCta, href: "#contact" }}
        secondaryCta={{ label: c.hero.secondaryCta, href: "#services" }}
        note="Free consultation with our engineers"
        visual={<FlowDiagram diagram={c.diagram} theme="dark" className="hidden sm:block" />}
      />
      <HighlightsStrip items={c.highlights} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeader title={c.intro.title} align="left" className="mb-6 md:mb-6" />
            <div className="text-lead space-y-4">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-surface p-6 lg:self-start">
            <h3 className="heading-3 text-ink">Technology we work with</h3>
            <Chips items={c.techStack} />
          </div>
        </div>
      </Section>

      <Section tone="muted" id="services">
        <SectionHeader eyebrow="What we offer" title={c.services.title} description={c.services.description} />
        <IconCards items={c.services.items} />
      </Section>

      <Section size="sm">
        <CTABanner title={c.cta.title} description={c.cta.text} cta={{ label: c.hero.primaryCta, href: "#contact" }} />
      </Section>

      <Section>
        <SectionHeader eyebrow="What we build" title={c.useCases.title} description={c.useCases.description} />
        <LinkCards items={c.useCases.items} />
      </Section>

      <Section tone="muted">
        <SectionHeader eyebrow="Why Driansh" title={c.whyUs.title} />
        <IconCards items={c.whyUs.items} columns={c.whyUs.items.length === 4 ? 4 : 3} />
      </Section>

      <ProcessSteps />

      <FAQ data={c.faqs} tone="muted" />

      <LeadFormSection title={c.cta.title} text={c.cta.text} />

      <RelatedLinks title="Related services" items={c.related} />
    </>
  );
}
