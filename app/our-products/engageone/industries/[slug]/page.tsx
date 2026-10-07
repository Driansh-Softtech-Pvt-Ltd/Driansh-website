import { notFound } from "next/navigation";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import { FEATURES, INDUSTRIES } from "@/content/engageone/industries";
import {
  IndustryChatVisual,
  IndustryFlowVisual,
  IndustryInboxVisual,
} from "@/components/visuals/engageone/IndustryStoryVisuals";
import { pageMetadata } from "@/lib/seo";

const BASE = "/our-products/engageone";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return pageMetadata(`${BASE}/industries/${slug}`);
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  if (!industry) notFound();

  const visuals = [
    <IndustryChatVisual key="chat" industry={industry} />,
    <IndustryInboxVisual key="inbox" industry={industry} />,
    <IndustryFlowVisual key="flow" industry={industry} />,
  ];

  return (
    <>
      <PageHero
        size="md"
        eyebrow={`EngageOne for ${industry.name}`}
        title={industry.hero.title}
        description={industry.hero.description}
        visual={visuals[0]}
        primaryCta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        secondaryCta={{ label: "All industries", href: `${BASE}/industries` }}
      />

      <Section tone="muted">
        <SectionHeader title="What gets in the way" />
        <div className="mx-auto max-w-3xl">
          <CheckList columns={2} items={industry.challenges} />
        </div>
      </Section>

      {industry.splits.map((split, i) => (
        <Section key={split.title} tone={i % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={visuals[i]} reverse={i % 2 === 1}>
            <SectionHeader
              eyebrow={split.eyebrow}
              title={split.title}
              description={split.description}
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={split.points} />
          </MediaSplit>
        </Section>
      ))}

      <Section tone="muted">
        <SectionHeader title={`EngageOne features for ${industry.name}`} />
        <CardGrid>
          {industry.features.map((key) => {
            const { title, description, icon: Icon, href } = FEATURES[key];
            return <FeatureCard key={key} href={href} title={title} description={description} icon={<Icon aria-hidden="true" />} />;
          })}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title={`See EngageOne for ${industry.name}`}
          description="Tell us how you talk to customers today. We'll show you a setup that fits."
          cta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        />
      </Section>
    </>
  );
}
