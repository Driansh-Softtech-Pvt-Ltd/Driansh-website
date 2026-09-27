import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, CTABanner, CheckList } from "@/components/site";
import FlowDiagram from "@/components/visuals/FlowDiagram";
import { breadcrumbsFor, contentJsonLd } from "@/lib/seo";
import type { SolutionPageContent } from "@/content/types";
import JsonLd from "./JsonLd";
import { Chips, FeatureList, HighlightsStrip, IconCards, LeadFormSection, LinkCards, RelatedLinks } from "./parts";

/**
 * The one layout every solution page uses (research-backed order):
 * hero → capabilities → overview → features → benefits → CTA → how it works → integrations → FAQ → form → related.
 */
export default function SolutionPageTemplate({ content: c }: { content: SolutionPageContent }) {
  return (
    <>
      <JsonLd data={contentJsonLd(c)} />
      <PageHero
        breadcrumbs={breadcrumbsFor(c)}
        eyebrow={c.eyebrow}
        title={c.hero.title}
        description={c.hero.subtitle}
        primaryCta={{ label: c.hero.primaryCta, href: "#contact" }}
        secondaryCta={{ label: c.hero.secondaryCta, href: "#features" }}
        note="Free demo, tailored to your use case"
        visual={<FlowDiagram diagram={c.diagram} theme="dark" className="hidden sm:block" />}
      />
      <HighlightsStrip items={c.highlights} />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader title={c.overview.title} className="mb-6 md:mb-6" />
          <div className="text-lead space-y-4">
            {c.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="flex justify-center [&_ul]:justify-center">
            <Chips items={c.overview.audiences} label="Built for" />
          </div>
        </div>
      </Section>

      <Section tone="muted" id="features">
        <SectionHeader eyebrow="Features" title={c.features.title} description={c.features.description} />
        <FeatureList items={c.features.items} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Benefits" title={c.benefits.title} />
        <IconCards items={c.benefits.items} columns={4} />
      </Section>

      <Section size="sm" tone="white" className="pt-0 md:pt-0">
        <CTABanner title={c.cta.title} description={c.cta.text} cta={{ label: c.hero.primaryCta, href: "#contact" }} />
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader eyebrow="How it works" title={c.howItWorks.title} align="left" className="mb-6 md:mb-6" />
            <p className="text-lead mb-6">{c.howItWorks.text}</p>
            <CheckList items={c.howItWorks.points} />
          </div>
          <FlowDiagram diagram={c.diagram} />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Works with" title={c.integrations.title} description={c.integrations.description} />
        <LinkCards items={c.integrations.items} />
      </Section>

      <FAQ data={c.faqs} tone="muted" />

      <LeadFormSection title={c.cta.title} text={c.cta.text} />

      <RelatedLinks title="Related solutions" items={c.related} />
    </>
  );
}
