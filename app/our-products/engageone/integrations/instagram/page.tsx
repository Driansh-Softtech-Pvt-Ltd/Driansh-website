import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { InstagramChatVisual, InstagramSetupVisual } from "@/components/visuals/engageone/ChannelVisuals";

const instagramHighlights = [
  {
    title: "Instagram customer service made easy",
    description:
      "Never miss out on any leads. Manage all your customer interactions within Instagram DMs on a single Driansh EngageOne dashboard.",
    visual: <InstagramChatVisual />,
  },
  {
    title: "Quick and easy setup",
    description:
      "Choose Instagram as your channel, sign in with your Instagram business account, and start talking to customers right away.",
    visual: <InstagramSetupVisual />,
  },
];

export default function InstagramIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Stay connected with your customers on Instagram"
        description="Connect your Instagram business account with Driansh EngageOne and manage DMs without leaving the dashboard."
      />

      {instagramHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={instagramHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Instagram into Driansh EngageOne"
          description="Talk to our team to connect Instagram and every other channel to one shared inbox."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
