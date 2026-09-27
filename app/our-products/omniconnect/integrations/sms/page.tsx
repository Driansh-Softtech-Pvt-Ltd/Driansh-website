import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const smsHighlights = [
  {
    title: "Manage your SMS inbox easily",
    description:
      "Stay in touch with customers by managing all interactions and promos through Driansh OmniConnect’s SMS integration.",
    imageSrc: "/images/integration/sms/massage.png",
    imageAlt: "SMS conversation inside Driansh OmniConnect",
  },
  {
    title: "Quick and easy setup",
    description:
      "Choose SMS as the communication channel, select Twilio or Bandwidth as the API provider, connect your phone number, and start messaging customers.",
    imageSrc: "/images/integration/sms/adding-sms-to-chatwoot.png",
    imageAlt: "SMS channel setup flow",
  },
];

export default function SMSIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Integrations"
        title="Manage your SMS customer interactions from Driansh OmniConnect"
        description="Connect your phone number with Driansh OmniConnect and manage business SMS without leaving the dashboard."
      />

      {smsHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={smsHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring SMS into Driansh OmniConnect"
          description="Talk to our team to connect SMS and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
