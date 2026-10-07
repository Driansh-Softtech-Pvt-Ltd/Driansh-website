import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { BotHandoffVisual, BotPlatformsVisual, RichMessagesVisual } from "@/components/visuals/engageone/WorkspaceVisuals";

const FEATURES = [
  {
    title: "Integrate with tools you love",
    description:
      "Connect the bot platform you already use, such as Dialogflow or your own bot through the API, and let it answer customers inside Driansh EngageOne.",
    visual: <BotPlatformsVisual />,
  },
  {
    title: "Agent-bot handoff: a win–win",
    description: (
      <>
        <p>
          Deliver the best of automation and human support. Let chatbots handle FAQs and repetitive
          workflows, then seamlessly pass the conversation to an agent when a customer needs deeper
          assistance.
        </p>
        <p className="mt-4">
          EngageOne keeps the full context of the conversation so agents never have to ask customers
          to repeat themselves.
        </p>
      </>
    ),
    visual: <BotHandoffVisual />,
  },
  {
    title: "More than words: rich message types",
    description:
      "Showcase your product offerings, collect customer feedback, or simply engage your audience, the rich message types have got you covered. Utilize cards, forms, carousels, and more to deliver personalized, visually appealing messages to your customers.",
    visual: <RichMessagesVisual />,
  },
];

export default function ChatbotsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Add a chatbot to your support squad"
        description="Scale up your customer service with chatbots. Provide quick, personalized, and efficient support and improve customer satisfaction and loyalty."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={feature.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={feature.title}
              description={feature.description}
              align="left"
              className="mb-0 md:mb-0"
            />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm">
        <CTABanner
          title="Scale your support with chatbots"
          description="See how Driansh EngageOne chatbots and agents work together with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
