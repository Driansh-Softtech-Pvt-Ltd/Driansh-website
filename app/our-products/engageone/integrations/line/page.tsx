import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { LineChatVisual, LineSetupVisual } from "@/components/visuals/engageone/ChannelVisuals";

const lineHighlights = [
  {
    title: "Manage your Line inbox easily",
    description:
      "Never miss out on any leads. Manage all your customer queries coming from the Line app in Driansh EngageOne.",
    visual: <LineChatVisual />,
  },
  {
    title: "Quick and easy setup",
    description:
      "Enjoy the native Line app integration. Choose Line as the channel, connect your account, and start interacting with customers immediately.",
    visual: <LineSetupVisual />,
  },
];

export default function LineIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Integrations"
        title="Manage your Line customer interactions from Driansh EngageOne"
        description="Connect your Line account with Driansh EngageOne and handle customer conversations without leaving the dashboard."
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
          title="Bring Line into Driansh EngageOne"
          description="Talk to our team to connect Line and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
