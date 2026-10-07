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
      "Need to collaborate with teammates before replying? Pinch your message with /note in Slack and create a private note back in Driansh EngageOne.",
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
        size="md"
        eyebrow="EngageOne Integrations"
        title="Slack x Driansh EngageOne: for a super productive you."
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
          title="Bring Slack into Driansh EngageOne"
          description="Talk to our team to connect Slack and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
