import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import {
  CannedResponsesVisual,
  PrivateNotesVisual,
  SharedInboxListVisual,
  TeamInboxHeroVisual,
} from "@/components/visuals/engageone/WorkspaceVisuals";

const FEATURES = [
  {
    title: "A shared inbox for your team",
    description:
      "Talk to your customers and your team from one place. Communicate internally and resolve customer queries efficiently by assigning conversations, mentioning teammates, and tracking status.",
    visual: <SharedInboxListVisual />,
  },
  {
    title: "Private notes",
    description:
      "Use private notes to communicate with your team. Use @mentions to share information and communicate efficiently within the team without exposing internal messages to customers.",
    visual: <PrivateNotesVisual />,
  },
  {
    title: "Canned responses",
    description:
      "Access the saved replies easily using slash commands in your reply box. Provide faster responses to frequently asked questions while keeping your messaging consistent.",
    visual: <CannedResponsesVisual />,
  },
];

export default function TeamCollaborationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="A shared inbox for your team"
        description="Talk to your customers and your team from one place. Communicate internally and resolve customer queries efficiently with Driansh EngageOne."
        visual={<TeamInboxHeroVisual />}
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
          title="Resolve queries faster, together"
          description="See how Driansh EngageOne helps your team collaborate with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
