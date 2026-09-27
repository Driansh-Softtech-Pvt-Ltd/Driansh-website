import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const instagramHighlights = [
  {
    title: "Instagram customer service made easy",
    description:
      "Never miss out on any leads. Manage all your customer interactions within Instagram DMs on a single Driansh OmniConnect dashboard.",
    imageSrc: "/images/integration/instagram/instagram-chats-in-chatwoot.png",
    imageAlt: "Instagram DM view inside Driansh OmniConnect",
  },
  {
    title: "Quick and easy setup",
    description:
      "Enjoy the native Messenger integration. Choose Messenger as your channel, connect your Instagram business account, and start talking to customers right away.",
    imageSrc: "/images/integration/instagram/add-messenger-to-chatwoot.png",
    imageAlt: "Messenger channel setup flow",
  },
];

export default function InstagramIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Integrations"
        title="Stay connected with your customers on Instagram"
        description="Connect your Instagram business account with Driansh OmniConnect and manage DMs without leaving the dashboard."
      />

      {instagramHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={instagramHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Instagram into Driansh OmniConnect"
          description="Talk to our team to connect Instagram and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
