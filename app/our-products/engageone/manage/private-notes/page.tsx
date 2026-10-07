import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { PrivateNoteThreadVisual, PrivateNoteMentionVisual } from "@/components/visuals/engageone/ManageVisuals";

const FEATURES = [
  {
    title: "Discuss a conversation without the customer seeing it",
    description:
      "Switch the reply box to Private Note and leave a message for your team right inside the conversation. Notes stay visible only to your agents, so you can share context, ask for approvals, and agree on an answer before you reply.",
    visual: <PrivateNoteThreadVisual />,
  },
  {
    title: "Mention teammates to bring them in",
    description:
      "Type @ followed by a teammate's name to mention them in a private note. They get notified straight away and can jump into the conversation to help, with the full history in front of them.",
    visual: <PrivateNoteMentionVisual />,
  },
];

export default function PrivateNotesPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Collaborate on conversations with private notes"
        description="Add notes that only your team can see, mention teammates, and solve tricky questions together."
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
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
          title="Collaborate without leaving the conversation"
          description="See Driansh EngageOne in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
