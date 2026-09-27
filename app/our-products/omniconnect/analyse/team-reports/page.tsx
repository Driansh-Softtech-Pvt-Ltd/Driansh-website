import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect calculates and updates your metrics in the background. See how busy a particular team has been, or what the resolution times look like over time, with a bar graph.",
    image: "/images/analyse/team-report/team.png",
    imageAlt: "Team performance chart",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day/week/month, and enable Business Hours to view and download custom team reports. Pinpoint teams that need extra resources instantly.",
    image: "/images/analyse/team-report/team-overview.png",
    imageAlt: "Team report filters",
  },
];

export default function TeamReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Track how each of your teams is performing, with auto-updating reports"
        description="Get insight into your teams—see which ones get the most conversations, what the resolution times look like, and more."
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
          title="Give every team the support it needs"
          description="See Driansh OmniConnect team reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
