import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { LabelOverviewVisual, LabelFiltersVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh EngageOne constantly calculates and updates your metrics in the background, and gives you exact figures to look at. If you want to see your performance over time, there’s a bar graph too!",
    visual: <LabelOverviewVisual />,
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day or week, and enable Business Hours to view and download custom label reports. Quickly identify which labels need more attention.",
    visual: <LabelFiltersVisual />,
  },
];

export default function LabelReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Your conversations’ health report, filtered by labels"
        description="See which labels get the most conversations, and how long it takes to resolve them."
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={feature.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={feature.title}
              description={feature.description}
              align="left"
              className="mb-0 md:mb-0"
            />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm">
        <CTABanner
          title="Understand what your customers talk about"
          description="See Driansh EngageOne label reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
