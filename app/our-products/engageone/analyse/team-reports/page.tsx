import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { TeamOverviewVisual, TeamFiltersVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh EngageOne calculates and updates your metrics in the background. See how busy a particular team has been, or what the resolution times look like over time, with a bar graph.",
    visual: <TeamOverviewVisual />,
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day/week/month, and enable Business Hours to view and download custom team reports. Pinpoint teams that need extra resources instantly.",
    visual: <TeamFiltersVisual />,
  },
];

export default function TeamReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Track how each of your teams is performing, with auto-updating reports"
        description="Get insight into your teams—see which ones get the most conversations, what the resolution times look like, and more."
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
          title="Give every team the support it needs"
          description="See Driansh EngageOne team reports in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
