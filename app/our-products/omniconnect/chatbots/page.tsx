import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Integrate with tools you love",
    description:
      "Driansh OmniConnect Integrates with your favourite tools to provide a seamless agent experience. Leverage the capabilities of trusted platforms to deliver exceptional customer experiences without any compromise.",
    image: "/images/chatbots/supported-platforms.png",
    imageAlt: "Supported chatbot platforms such as Rasa and Dialogflow",
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
          OmniConnect keeps the full context of the conversation so agents never have to ask customers
          to repeat themselves.
        </p>
      </>
    ),
    image: "/images/chatbots/agent-bot-handoff.png",
    imageAlt: "Chat example showing transfer from bot to human agent",
  },
  {
    title: "More than words: rich message types",
    description:
      "Showcase your product offerings, collect customer feedback, or simply engage your audience, the rich message types have got you covered. Utilize cards, forms, carousels, and more to deliver personalized, visually appealing messages to your customers.",
    image: "/images/chatbots/message-types.png",
    imageAlt: "Examples of different rich message types",
  },
];

export default function ChatbotsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Add a chatbot to your support squad"
        description="Scale up your customer service with chatbots. Provide quick, personalized, and efficient support and improve customer satisfaction and loyalty."
        primaryCta={{ label: "Request a demo", href: "/contact-us" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit image={feature.image} imageAlt={feature.imageAlt} reverse={index % 2 === 1} framed>
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
          description="See how Driansh OmniConnect chatbots and agents work together with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
