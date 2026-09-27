import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const slackHighlights = [
  {
    title: "Seamless syncing",
    description:
      "Take control of your conversations by managing them from your preferred Slack channel while seamlessly sending responses from your Driansh OmniConnect agent profile.",
    imageSrc: "/images/integration/slack/slack.png",
    imageAlt: "Driansh OmniConnect conversations inside Slack",
  },
  {
    title: "Create private notes from Slack",
    description:
      "Need to collaborate with teammates before replying? Pinch your message with /note in Slack and create a private note back in Driansh OmniConnect.",
    imageSrc: "/images/integration/slack/slack1.png",
    imageAlt: "Private notes created from Slack",
  },
  {
    title: "Two-click setup",
    description:
      "Connect and allow to enable the Driansh OmniConnect app in Slack. It’s faster than copying webhook URLs.",
    imageSrc: "/images/integration/slack/slack0.jpg",
    imageAlt: "Slack integration setup flow",
  },
];

export default function SlackIntegrationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Integrations"
        title="Slack x Driansh OmniConnect: for a super productive you."
        description="Use Slack to answer your customer queries coming into Driansh OmniConnect."
      />

      {slackHighlights.map((highlight, index) => (
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

      <Section size="sm" tone={slackHighlights.length % 2 === 0 ? "white" : "muted"}>
        <CTABanner
          title="Bring Slack into Driansh OmniConnect"
          description="Talk to our team to connect Slack and every other channel to one shared inbox."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
