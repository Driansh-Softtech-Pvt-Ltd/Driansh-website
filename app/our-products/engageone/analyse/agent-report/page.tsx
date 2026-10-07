import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { AgentOverviewVisual, AgentFiltersVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh EngageOne constantly calculates and updates your metrics in the background, and gives you exact figures about each agent’s performance. If you want to see a particular agent’s trend over time, there’s a bar graph too.",
    visual: <AgentOverviewVisual />,
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day or week, and enable Business Hours to view and download custom agent reports. Slice the data to compare agents and spot coaching opportunities quickly.",
    visual: <AgentFiltersVisual />,
  },
];

export default function AgentReportPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Track your agents’ performance, with auto-updating reports"
        description="View important KPIs about your agents, right from your Driansh EngageOne dashboard."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
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
          title="Know how every agent is performing"
          description="See Driansh EngageOne agent reports in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
