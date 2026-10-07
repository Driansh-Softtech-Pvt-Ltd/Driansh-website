import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner } from "@/components/site";
import {
  ApiChannelVisual,
  ApiInboxVisual,
  ApiUseCasesVisual,
  ClientApiVisual,
  WebhookEventsVisual,
} from "@/components/visuals/engageone/ChannelVisuals";

const apiHighlights = [
  {
    title: "Send customer messages in with the Client API",
    description:
      "Create an API inbox and call the Client API from your own app. Create a contact, open a conversation and post each message the customer sends.",
    points: [
      "Create and identify contacts from your app.",
      "Open conversations and add messages over HTTPS.",
      "Fetch the message history to show it in your own UI.",
    ],
    visual: <ClientApiVisual />,
  },
  {
    title: "Get every update through webhooks",
    description:
      "Set a webhook URL on the inbox and EngageOne posts events to your backend as they happen. Each request carries a signature header, so your server can check it came from EngageOne.",
    points: [
      "conversation_created, conversation_status_changed and conversation_updated.",
      "message_created and message_updated.",
      "Typing events when an agent starts or stops typing.",
    ],
    visual: <WebhookEventsVisual />,
  },
  {
    title: "Agents reply from the same inbox",
    description:
      "Conversations from your API channel sit beside chat, email and social messages. Agents assign, add private notes and reply as usual. Replies go back to your app through the webhook.",
    points: [
      "Same assignment, labels and automations as other inboxes.",
      "Private notes stay inside your team.",
      "Reports cover API conversations too.",
    ],
    visual: <ApiInboxVisual />,
  },
  {
    title: "Build the channel you need",
    description:
      "Use the API channel when a built-in channel does not fit. It works for any surface that can make HTTP requests.",
    points: [
      "Native support chat inside your mobile app.",
      "A custom chat surface on a kiosk, TV or product screen.",
      "Your own bot that hands over to an agent.",
    ],
    visual: <ApiUseCasesVisual />,
  },
];

export default function ApiChannelIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Build your own channel on the EngageOne API"
        description="Bring conversations from any app into Driansh EngageOne. Your app sends messages in through the API, and webhooks send agent replies back."
        visual={<ApiChannelVisual />}
      />

      {apiHighlights.map((highlight, index) => (
        <Section key={highlight.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={highlight.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={highlight.title}
              description={highlight.description}
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={highlight.points} />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm" tone={apiHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Plan your custom channel with us"
          description="Talk to our team about connecting your app to Driansh EngageOne through the API."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
