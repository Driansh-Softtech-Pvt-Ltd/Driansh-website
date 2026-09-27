import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect constantly calculates and updates your metrics in the background, and gives you exact figures about each agent’s performance. If you want to see a particular agent’s trend over time, there’s a bar graph too.",
    image: "/images/analyse/agent-report/agent-overview.jpg",
    imageAlt: "Agent performance graph",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day or week, and enable Business Hours to view and download custom agent reports. Slice the data to compare agents and spot coaching opportunities quickly.",
    image: "/images/analyse/agent-report/agent-report-filters.png",
    imageAlt: "Agent report filters",
  },
];

export default function AgentReportPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Track your agents’ performance, with auto-updating reports"
        description="View important KPIs about your agents, right from your Driansh OmniConnect dashboard."
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit image={feature.image} imageAlt={feature.imageAlt} reverse={index % 2 === 1} framed>
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
          description="See Driansh OmniConnect agent reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
