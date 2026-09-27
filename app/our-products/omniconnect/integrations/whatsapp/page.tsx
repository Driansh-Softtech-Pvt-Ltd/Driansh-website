import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const whatsappHighlights = [
  {
    title: "Easily manage WhatsApp templates",
    description:
      "No more struggling to respond to customers after the 24-hour window. Choose an approved message template from the Driansh OmniConnect dashboard, fill in the relevant details, and send the response instantly.",
    imageSrc: "/images/integration/whatsapp/access-whatsapp-templates.png",
    imageAlt: "WhatsApp template management screen",
  },
  {
    title: "Say more with rich media types",
    description:
      "Go beyond plain text. Send videos, audio, images, documents, locations, and stickers so customers always get context-rich replies right inside WhatsApp.",
    imageSrc: "/images/integration/whatsapp/send-rich-content.jpg",
    imageAlt: "WhatsApp conversation showing rich media",
  },
];

export default function WhatsAppIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Integrations"
        title="Communicate with your customers on WhatsApp, hassle-free."
        description="Join your customers on the world’s most-used messaging app with Driansh OmniConnect’s official WhatsApp integration."
      />

      {whatsappHighlights.map((highlight, index) => (
        <Section key={highlight.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit
            image={highlight.imageSrc}
            imageAlt={highlight.imageAlt}
            reverse={index % 2 === 1}
            framed
          >
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
          title="Bring WhatsApp into Driansh OmniConnect"
          description="Talk to our team to connect WhatsApp and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
