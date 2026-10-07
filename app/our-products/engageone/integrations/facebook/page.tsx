import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { MessengerChatVisual, MessengerSetupVisual } from "@/components/visuals/engageone/ChannelVisuals";

const facebookHighlights = [
  {
    title: "No need to give agents access to your Facebook page",
    description:
      "Never miss out on any leads. Manage all your customer queries coming from Facebook pages inside Driansh EngageOne, without giving your team direct access to the Facebook page.",
    visual: <MessengerChatVisual />,
  },
  {
    title: "Quick and easy setup",
    description:
      "Enjoy the native Messenger integration. Choose Messenger as a channel, connect your Facebook account, and start interacting with customers immediately.",
    visual: <MessengerSetupVisual />,
  },
];

export default function FacebookIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Stay connected with your customers on Facebook"
        description="Connect your Facebook account with Driansh EngageOne, manage your Messenger DMs without leaving the dashboard."
      />

      {facebookHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={facebookHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Facebook into Driansh EngageOne"
          description="Talk to our team to connect Facebook and every other channel to one shared inbox."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
