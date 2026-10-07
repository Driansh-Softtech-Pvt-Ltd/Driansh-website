import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { CsatSurveyVisual, CsatReportVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Let your customers express with emoji",
    description:
      "Driansh EngageOne's CSAT software integrates with every chosen inbox. When a customer is done chatting with you, they’ll be automatically asked to provide feedback on a simple emoji scale, so you always know what makes them frown or smile.",
    visual: <CsatSurveyVisual />,
  },
  {
    title: "View and download your CSAT reports",
    description:
      "Learn how your customers feel about your service and brand. Dive into CSAT ratings, individual feedback, response rates, and agent performance filtered by specific periods.",
    visual: <CsatReportVisual />,
  },
];

export default function CSATReportsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Send and track customer satisfaction (CSAT) surveys automatically"
        description="Ask customers to rate their conversation when it ends, then use the ratings and feedback to improve your service."
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
          title="Know exactly how your customers feel"
          description="See Driansh EngageOne CSAT surveys and reports in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
