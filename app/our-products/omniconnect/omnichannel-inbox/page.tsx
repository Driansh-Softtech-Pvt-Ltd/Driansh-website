import Image from "next/image";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Manage your Facebook page & Instagram DM",
    description:
      "Connect your Facebook page & Instagram DM with OmniConnect and see all the conversations from Messenger in one place.",
    points: [
      "Receive and reply to DMs in a single shared inbox.",
      "Manage your inbox with simple rules without providing page access.",
      "Label conversations and mute spam conversations.",
    ],
    image: "/images/omnichannel/messenger-voice.png",
    imageAlt: "Sample live chat and voice messages",
  },
  {
    title: "WhatsApp Business Accounts",
    description:
      "Create a business account for WhatsApp, connect it with OmniConnect and start engaging your customers instantly.",
    points: [
      "Send and receive messages from multiple WhatsApp numbers.",
      "Centralize all WhatsApp conversations alongside other channels.",
      "Provide rich support with quick replies and media attachments.",
    ],
    image: "/images/omnichannel/whatsapp-chat.png",
    imageAlt: "Sample WhatsApp business conversation",
  },
  {
    title: "Build custom channels using API",
    description:
      "Use API channels to create custom sources. OmniConnect provides flexibility to integrate with any third-party system so you can bring every conversation into one inbox.",
    points: [
      "Send messages using the OmniConnect API.",
      "Receive webhooks when customers reply to your messages.",
    ],
    image: "/images/omnichannel/api-diagram.png",
    imageAlt: "API and webhooks integration diagram",
  },
];

export default function OmnichannelInboxPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Delight your customers wherever they are"
        description="Connect any conversation channel and engage your customers from one place. Driansh OmniConnect brings all of your customer touchpoints into a single, unified experience."
        image="/images/omnichannel/omni-hero.png"
        imageAlt="Customers chatting with your business across channels"
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
      />

      <Section size="sm">
        <p className="text-lead text-center text-slate-600">
          Connect with your customers through more than one channel.
        </p>
        <Image
          src="/images/omnichannel/channel-icons.png"
          alt="Omnichannel icons like Facebook, Instagram, WhatsApp and more"
          width={4086}
          height={530}
          sizes="(min-width: 1024px) 56rem, 90vw"
          className="mx-auto mt-6 h-auto w-full max-w-4xl"
        />
      </Section>

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "muted" : "white"}>
          <MediaSplit image={feature.image} imageAlt={feature.imageAlt} reverse={index % 2 === 1} framed>
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
          description="See how Driansh OmniConnect brings all your customer conversations together with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
