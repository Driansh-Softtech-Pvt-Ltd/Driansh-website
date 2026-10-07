import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { LineChatVisual, LineSetupVisual } from "@/components/visuals/engageone/ChannelVisuals";

const lineHighlights = [
  {
    title: "Manage your LINE inbox easily",
    description:
      "Never miss out on any leads. Manage all your customer queries coming from the LINE app in Driansh EngageOne.",
    visual: <LineChatVisual />,
  },
  {
    title: "Quick and easy setup",
    description:
      "Enjoy the native LINE app integration. Choose LINE as the channel, connect your account, and start interacting with customers immediately.",
    visual: <LineSetupVisual />,
  },
];

export default function LineIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Manage your LINE customer interactions from Driansh EngageOne"
        description="Connect your LINE account with Driansh EngageOne and handle customer conversations without leaving the dashboard."
      />

      {lineHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={lineHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring LINE into Driansh EngageOne"
          description="Talk to our team to connect LINE and every other channel to one shared inbox."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
