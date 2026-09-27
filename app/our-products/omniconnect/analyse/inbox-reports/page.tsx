import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect calculates and updates your metrics in the background. See how busy a particular inbox has been, or what the resolution times look like, over a period of time, with a bar graph.",
    image: "/images/analyse/inbox-report/inbox-overview0.png",
    imageAlt: "Inbox overview report",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day/week/month, and enable Business Hours to view and download custom inbox reports tailored to the way you operate.",
    image: "/images/analyse/inbox-report/inbox-overview 1.png",
    imageAlt: "Inbox report filters",
  },
];

export default function InboxReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Get insights into your inboxes, with auto-updating reports"
        description="See which of your inboxes get the most activity, and what the resolution times look like."
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
          title="See which inboxes need your attention"
          description="See Driansh OmniConnect inbox reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
