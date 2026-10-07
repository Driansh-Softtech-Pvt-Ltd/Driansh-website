import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { TelegramChatVisual, TelegramSetupVisual } from "@/components/visuals/engageone/ChannelVisuals";

const telegramHighlights = [
  {
    title: "Manage your Telegram inbox easily",
    description:
      "Never miss out on any leads. Manage all your customer queries coming from Telegram inside Driansh EngageOne.",
    visual: <TelegramChatVisual />,
  },
  {
    title: "Quick and easy setup",
    description:
      "Enjoy the native Telegram integration. Choose Telegram as the channel, connect your account, and start interacting with customers instantly.",
    visual: <TelegramSetupVisual />,
  },
];

export default function TelegramIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Integrations"
        title="Manage your Telegram customer interactions from Driansh EngageOne"
        description="Connect your Telegram account with Driansh EngageOne and manage your customer messages without leaving the dashboard."
      />

      {telegramHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={telegramHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Telegram into Driansh EngageOne"
          description="Talk to our team to connect Telegram and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
