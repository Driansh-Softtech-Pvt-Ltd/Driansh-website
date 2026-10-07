import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { WhatsAppMediaVisual, WhatsAppTemplateVisual } from "@/components/visuals/engageone/ChannelVisuals";

const whatsappHighlights = [
  {
    title: "Easily manage WhatsApp templates",
    description:
      "No more struggling to respond to customers after the 24-hour window. Choose an approved message template from the Driansh EngageOne dashboard, fill in the relevant details, and send the response instantly.",
    visual: <WhatsAppTemplateVisual />,
  },
  {
    title: "Say more with rich media types",
    description:
      "Go beyond plain text. Send videos, audio, images, documents, locations, and stickers so customers always get context-rich replies right inside WhatsApp.",
    visual: <WhatsAppMediaVisual />,
  },
];

export default function WhatsAppIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Integrations"
        title="Communicate with your customers on WhatsApp, hassle-free."
        description="Join your customers on the world’s most-used messaging app with Driansh EngageOne’s official WhatsApp integration."
      />

      {whatsappHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={whatsappHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring WhatsApp into Driansh EngageOne"
          description="Talk to our team to connect WhatsApp and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
