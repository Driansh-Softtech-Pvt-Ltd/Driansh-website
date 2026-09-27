import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect constantly calculates and updates your metrics in the background, and gives you exact figures to look at. If you want to see your performance over time, there’s a bar graph too!",
    image: "/images/analyse/conversation-report/conversation.png",
    imageAlt: "Conversation report bar chart",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, choose the graph for a particular metric only, group your graph by day/week, and enable Business Hours to view and download custom conversation reports.",
    image: "/images/analyse/conversation-report/conversation-report traffic.png",
    imageAlt: "Conversation reporting filters",
  },
];

export default function ConversationReportPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Get detailed insights into your conversations"
        description="Track important metrics and KPIs about your conversations."
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
          title="Turn conversations into insights"
          description="See Driansh OmniConnect conversation reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
