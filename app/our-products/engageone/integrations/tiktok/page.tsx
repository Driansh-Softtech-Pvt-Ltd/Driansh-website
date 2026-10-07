import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { TikTokChatVisual, TikTokSetupVisual, TikTokTeamVisual } from "@/components/visuals/engageone/ChannelVisuals";

const tiktokHighlights = [
  {
    title: "Answer TikTok DMs from the shared inbox",
    description:
      "Direct messages sent to your TikTok business account arrive in Driansh EngageOne. Read them and reply without opening the TikTok app.",
    visual: <TikTokChatVisual />,
  },
  {
    title: "Handle them like any other conversation",
    description:
      "TikTok DMs sit beside your chat, email and social conversations. Assign them, label them and add private notes for your team.",
    visual: <TikTokTeamVisual />,
  },
  {
    title: "Quick and easy setup",
    description:
      "Choose TikTok as the channel, sign in with your TikTok business account and allow access. New DMs start arriving in the inbox.",
    visual: <TikTokSetupVisual />,
  },
];

export default function TikTokIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Reply to TikTok messages from Driansh EngageOne"
        description="Connect your TikTok business account and manage its direct messages in the same inbox as every other channel."
      />

      {tiktokHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={tiktokHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring TikTok into Driansh EngageOne"
          description="Talk to our team to connect TikTok and every other channel to one shared inbox."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
