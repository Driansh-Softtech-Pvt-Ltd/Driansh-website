import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { ConversationOverviewVisual, ConversationFiltersVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh EngageOne constantly calculates and updates your metrics in the background, and gives you exact figures to look at. If you want to see your performance over time, there’s a bar graph too!",
    visual: <ConversationOverviewVisual />,
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, choose the graph for a particular metric only, group your graph by day/week, and enable Business Hours to view and download custom conversation reports.",
    visual: <ConversationFiltersVisual />,
  },
];

export default function ConversationReportPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Get detailed insights into your conversations"
        description="Track important metrics and KPIs about your conversations."
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
          title="Turn conversations into insights"
          description="See Driansh EngageOne conversation reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
