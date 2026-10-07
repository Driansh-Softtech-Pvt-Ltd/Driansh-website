import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { InboxOverviewVisual, InboxFiltersVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh EngageOne calculates and updates your metrics in the background. See how busy a particular inbox has been, or what the resolution times look like, over a period of time, with a bar graph.",
    visual: <InboxOverviewVisual />,
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day/week/month, and enable Business Hours to view and download custom inbox reports tailored to the way you operate.",
    visual: <InboxFiltersVisual />,
  },
];

export default function InboxReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Get insights into your inboxes, with auto-updating reports"
        description="See which of your inboxes get the most activity, and what the resolution times look like."
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
          title="See which inboxes need your attention"
          description="See Driansh EngageOne inbox reports in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
