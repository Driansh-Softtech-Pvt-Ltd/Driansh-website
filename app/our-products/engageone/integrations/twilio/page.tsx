import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import {
  TwilioSetupVisual,
  TwilioSmsVisual,
  TwilioVoiceVisual,
  TwilioWhatsAppVisual,
} from "@/components/visuals/engageone/ChannelVisuals";

const twilioHighlights = [
  {
    title: "SMS on your Twilio numbers",
    description:
      "Connect a Twilio phone number or messaging service and handle text messages in Driansh EngageOne. Customers text your number and agents reply from the inbox.",
    visual: <TwilioSmsVisual />,
  },
  {
    title: "WhatsApp through Twilio",
    description:
      "Already send WhatsApp messages with Twilio? Connect that sender as a WhatsApp inbox and use approved templates to start or restart conversations.",
    visual: <TwilioWhatsAppVisual />,
  },
  {
    title: "Voice calls on the same number",
    description:
      "Turn on voice for a Twilio number and take calls inside EngageOne. Each call is logged in the conversation, so your team sees calls and messages together.",
    visual: <TwilioVoiceVisual />,
  },
  {
    title: "Connect with your Twilio credentials",
    description:
      "Choose SMS or WhatsApp, paste your Twilio account details and pick the number. Your Twilio account and billing stay as they are.",
    visual: <TwilioSetupVisual />,
  },
];

export default function TwilioIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Integrations"
        title="Use your Twilio numbers with Driansh EngageOne"
        description="Bring Twilio SMS, WhatsApp and voice calls into one shared inbox, alongside every other channel."
      />

      {twilioHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={twilioHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Twilio into Driansh EngageOne"
          description="Talk to our team to connect your Twilio numbers to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
