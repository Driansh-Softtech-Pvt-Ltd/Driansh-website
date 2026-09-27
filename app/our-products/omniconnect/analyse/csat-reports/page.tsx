import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Let your customers express with emoji",
    description:
      "Driansh OmniConnect's CSAT software integrates with every chosen inbox. When a customer is done chatting with you, they’ll be automatically asked to provide feedback on a simple emoji scale, so you always know what makes them frown or smile.",
    image: "/images/analyse/csat-report/emoji-csat-rating.jpg",
    imageAlt: "Emoji based CSAT rating card",
  },
  {
    title: "View and download your CSAT reports",
    description:
      "Learn how your customers feel about your service and brand. Dive into CSAT ratings, individual feedback, response rates, and agent performance filtered by specific periods.",
    image: "/images/analyse/csat-report/csat-report-on-your-chatwoot-dashboard.png",
    imageAlt: "CSAT reports dashboard",
  },
];

export default function CSATReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Send and track Customer Satisfaction surveys on autopilot"
        description="Put your customers first with Driansh OmniConnect's support suite and CSAT integration. Collect feedback and improve your service for transformative customer satisfaction."
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
          title="Know exactly how your customers feel"
          description="See Driansh OmniConnect CSAT surveys and reports in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
