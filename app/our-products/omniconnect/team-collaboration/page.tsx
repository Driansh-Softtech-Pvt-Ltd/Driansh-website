import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "A shared inbox for your team",
    description:
      "Talk to your customers and your team from one place. Communicate internally and resolve customer queries efficiently by assigning conversations, mentioning teammates, and tracking status.",
    image: "/images/team_collaboration/multiple-inboxes.png",
    imageAlt: "Multiple shared inboxes managed in one account",
  },
  {
    title: "Private Notes",
    description:
      "Use private notes to communicate with your team. Use @mentions to share information and communicate efficiently within the team without exposing internal messages to customers.",
    image: "/images/team_collaboration/private-notes.png",
    imageAlt: "Using private notes inside a conversation",
  },
  {
    title: "Canned Responses",
    description:
      "Access the saved replies easily using slash commands in your reply box. Provide faster responses to frequently asked questions while keeping your messaging consistent.",
    image: "/images/team_collaboration/canned-responses.png",
    imageAlt: "Agent using canned responses in a conversation",
  },
];

export default function TeamCollaborationPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="A shared inbox for your team"
        description="Talk to your customers and your team from one place. Communicate internally and resolve customer queries efficiently with Driansh OmniConnect."
        image="/images/team_collaboration/one-inbox-for-all.png"
        imageAlt="Team collaborating in a shared inbox"
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit image={feature.image} imageAlt={feature.imageAlt} reverse={index % 2 === 1} framed>
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
          description="See how Driansh OmniConnect helps your team collaborate with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
