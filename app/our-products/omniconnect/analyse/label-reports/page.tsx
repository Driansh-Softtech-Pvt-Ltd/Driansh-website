import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect constantly calculates and updates your metrics in the background, and gives you exact figures to look at. If you want to see your performance over time, there’s a bar graph too!",
    image: "/images/analyse/lable-report/label-overview.png",
    imageAlt: "Label report example",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day or week, and enable Business Hours to view and download custom label reports. Quickly identify which labels need more attention.",
    image: "/images/analyse/lable-report/label-report-filters.png",
    imageAlt: "Label report filters",
  },
];

export default function LabelReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Your conversations’ health report, filtered by labels"
        description="See which labels get the most conversations, and how long it takes to resolve them."
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
          title="Understand what your customers talk about"
          description="See Driansh OmniConnect label reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
