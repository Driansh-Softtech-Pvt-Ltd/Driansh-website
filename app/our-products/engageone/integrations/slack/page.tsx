import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { SlackConnectVisual, SlackNoteVisual, SlackSyncVisual } from "@/components/visuals/engageone/ChannelVisuals";

const slackHighlights = [
  {
    title: "Seamless syncing",
    description:
      "Take control of your conversations by managing them from your preferred Slack channel while seamlessly sending responses from your Driansh EngageOne agent profile.",
    visual: <SlackSyncVisual />,
  },
  {
    title: "Create private notes from Slack",
    description:
      "Need to collaborate with teammates before replying? Start your message with /note in Slack and create a private note back in Driansh EngageOne.",
    visual: <SlackNoteVisual />,
  },
  {
    title: "Two-click setup",
    description:
      "Connect and allow to enable the Driansh EngageOne app in Slack. It’s faster than copying webhook URLs.",
    visual: <SlackConnectVisual />,
  },
];

export default function SlackIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Answer Driansh EngageOne conversations from Slack"
        description="Use Slack to answer your customer queries coming into Driansh EngageOne."
      />

      {slackHighlights.map((highlight, index) => (
        <Section key={highlight.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={highlight.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={highlight.title}
              description={highlight.description}
              align="left"
              className="mb-0 md:mb-0"
            />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm" tone={slackHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Connect Slack to Driansh EngageOne"
          description="Talk to our team about connecting Slack to your shared inbox."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
