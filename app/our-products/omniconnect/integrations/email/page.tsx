import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const emailHighlights = [
  {
    title: "Manage your emails easily",
    description:
      "Stay in touch with your customers, manage all your business emails and customer queries through Driansh OmniConnect’s email integration.",
    imageSrc: "/images/integration/sms/massage.png",
    imageAlt: "Driansh OmniConnect email conversation",
  },
  {
    title: "Forward to email",
    description:
      "Don’t lose sight of your email customer inquiries and support tickets. Select email as a channel, connect your account, and start forwarding emails into Driansh OmniConnect.",
    imageSrc: "/images/integration/email/email.png",
    imageAlt: "Forward to email configuration screenshot",
  },
  {
    title: "Send emails from Driansh OmniConnect",
    description:
      "You don’t need to leave your Driansh OmniConnect dashboard to respond. A quick IMAP setup lets you reply to emails straight from Driansh OmniConnect.",
    imageSrc: "/images/integration/email/imap-email-settings-in-chatwoot.png",
    imageAlt: "IMAP email settings in Driansh OmniConnect",
  },
  {
    title: "Native emailing options",
    description:
      "Need to CC/BCC folks? Attach files? Add your signature? Driansh OmniConnect’s native email composer supports everything you need.",
    imageSrc: "/images/integration/email/rich-emails-in-chatwoot.png",
    imageAlt: "Rich email composer options",
  },
];

export default function EmailIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Integrations"
        title="Manage your email customer interactions from Driansh OmniConnect"
        description="Connect your email with Driansh OmniConnect to manage threads without leaving the dashboard."
      />

      {emailHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={emailHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Email into Driansh OmniConnect"
          description="Talk to our team to connect Email and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
