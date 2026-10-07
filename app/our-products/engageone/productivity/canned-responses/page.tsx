import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { CannedResponsesListVisual, CannedResponsesInChatVisual, CannedResponsesSharedVisual } from "@/components/visuals/engageone/ProductivityVisuals";

const FEATURES = [
  {
    title: "Easy and quick set up",
    description:
      "Save as many canned responses as you want. Enter the content once and reuse it whenever similar questions pop up, saving tons of typing time.",
    visual: <CannedResponsesListVisual />,
  },
  {
    title: "Utilize canned responses directly in conversations",
    description:
      "In the text editor, type a `/` followed by the keyword for the canned response you need. Provide consistent and timely support without repetitive typing.",
    visual: <CannedResponsesInChatVisual />,
  },
  {
    title: "Shared with your whole team",
    description:
      "Canned responses are saved to your account, so every agent can use the same approved answers. Update a response once and the whole team replies with the latest wording.",
    visual: <CannedResponsesSharedVisual />,
  },
];

export default function CannedResponsesPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Super quick responses to customer conversations. Super productive agents."
        description="Canned responses cut down repetitive typing and save replies to simple, single-answer questions."
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
          title="Answer common questions in seconds"
          description="See Driansh EngageOne canned responses in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
