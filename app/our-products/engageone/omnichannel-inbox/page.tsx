import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner } from "@/components/site";
import EngageOneInboxVisual from "@/components/visuals/EngageOneInboxVisual";
import {
  ApiChannelVisual,
  ChannelBadges,
  SocialInboxVisual,
  WhatsAppChatVisual,
} from "@/components/visuals/engageone/ChannelVisuals";

const FEATURES = [
  {
    title: "Manage your Facebook page & Instagram DM",
    description:
      "Connect your Facebook page & Instagram DM with EngageOne and see all the conversations from Messenger in one place.",
    points: [
      "Receive and reply to DMs in a single shared inbox.",
      "Manage your inbox with simple rules without providing page access.",
      "Label conversations and mute spam conversations.",
    ],
    visual: <SocialInboxVisual />,
  },
  {
    title: "WhatsApp Business accounts",
    description:
      "Create a business account for WhatsApp, connect it with EngageOne and start engaging your customers instantly.",
    points: [
      "Send and receive messages from multiple WhatsApp numbers.",
      "Centralize all WhatsApp conversations alongside other channels.",
      "Provide rich support with quick replies and media attachments.",
    ],
    visual: <WhatsAppChatVisual />,
  },
  {
    title: "Build custom channels using API",
    description:
      "Use API channels to create custom sources. EngageOne provides flexibility to integrate with any third-party system so you can bring every conversation into one inbox.",
    points: [
      "Send messages using the EngageOne API.",
      "Receive webhooks when customers reply to your messages.",
    ],
    visual: <ApiChannelVisual />,
  },
];

export default function OmnichannelInboxPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Delight your customers wherever they are"
        description="Connect any conversation channel and engage your customers from one place. Driansh EngageOne brings all of your customer touchpoints into a single, unified experience."
        visual={<EngageOneInboxVisual />}
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
      />

      <Section size="sm">
        <p className="text-lead text-center text-slate-600">
          Connect with your customers through more than one channel.
        </p>
        <div className="mt-6">
          <ChannelBadges />
        </div>
      </Section>

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "muted" : "white"}>
          <MediaSplit visual={feature.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={feature.title}
              description={feature.description}
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={feature.points} />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm">
        <CTABanner
          title="Every channel, one inbox"
          description="See how Driansh EngageOne brings all your customer conversations together with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
