import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { EmailComposerVisual, EmailForwardingVisual, EmailImapVisual, EmailThreadVisual } from "@/components/visuals/engageone/ChannelVisuals";

const emailHighlights = [
  {
    title: "Manage your emails easily",
    description:
      "Stay in touch with your customers, manage all your business emails and customer queries through Driansh EngageOne’s email integration.",
    visual: <EmailThreadVisual />,
  },
  {
    title: "Forward to email",
    description:
      "Don’t lose sight of your email customer inquiries and support tickets. Select email as a channel, connect your account, and start forwarding emails into Driansh EngageOne.",
    visual: <EmailForwardingVisual />,
  },
  {
    title: "Send emails from Driansh EngageOne",
    description:
      "You don’t need to leave your Driansh EngageOne dashboard to respond. A quick IMAP setup lets you reply to emails straight from Driansh EngageOne.",
    visual: <EmailImapVisual />,
  },
  {
    title: "Native emailing options",
    description:
      "Need to CC/BCC folks? Attach files? Add your signature? Driansh EngageOne’s native email composer supports everything you need.",
    visual: <EmailComposerVisual />,
  },
];

export default function EmailIntegrationPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Manage your email customer interactions from Driansh EngageOne"
        description="Connect your email with Driansh EngageOne to manage threads without leaving the dashboard."
      />

      {emailHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={emailHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring email into Driansh EngageOne"
          description="Talk to our team to connect email and every other channel to one shared inbox."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
