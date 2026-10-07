import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { BusinessHoursScheduleVisual, BusinessHoursPerInboxVisual, BusinessHoursReportsVisual } from "@/components/visuals/engageone/ManageVisuals";

const FEATURES = [
  {
    title: "Set your daily working hours and an unavailable message",
    description:
      "Set your working hours defined by time zone, and let your visitors know that you or your team is currently not working.",
    visual: <BusinessHoursScheduleVisual />,
  },
  {
    title: "Set business hours for each inbox",
    description:
      "Business hours are not account-wide. Choose custom business hours for every inbox (and hence, the agents associated with that inbox) configured on your Driansh EngageOne account, separately.",
    visual: <BusinessHoursPerInboxVisual />,
  },
  {
    title: "Adjust your performance reports for business hours",
    description:
      "Get the correct sense of your account's performance and metrics. View your conversation, agent, inbox, label and team reports, with or without data adjusted for business hours.",
    visual: <BusinessHoursReportsVisual />,
  },
];

export default function BusinessHoursPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Let customers know you're not available to answer their questions"
        description="Set office hours for your inbox channels, and display a custom unavailable message to your visitors."
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
          title="Set expectations, even when you’re away"
          description="See Driansh EngageOne business hours in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
