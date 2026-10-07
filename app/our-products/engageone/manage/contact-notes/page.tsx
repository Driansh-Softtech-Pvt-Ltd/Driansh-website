import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { ContactNoteAddVisual, ContactNoteFormatVisual, ContactNoteDeleteVisual } from "@/components/visuals/engageone/ManageVisuals";

const FEATURES = [
  {
    title: "Add notes easily, anytime",
    description:
      "Anytime you decide to add a note to a conversation, you can simply open their contact page through the Driansh EngageOne Dashboard and add it. Just like that!",
    visual: <ContactNoteAddVisual />,
  },
  {
    title: "Rich text formatting",
    description:
      "Coz, why not? Format and highlight your notes the way you like.",
    visual: <ContactNoteFormatVisual />,
  },
  {
    title: "Delete them later",
    description:
      "If you don't need a note anymore, it is confusing your team members, or it has served its purpose, you can delete it by clicking on the bin icon.",
    visual: <ContactNoteDeleteVisual />,
  },
];

export default function ContactNotesPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Note down important info about your contacts"
        description="Never lose sight of your contacts, by simply adding notes to them."
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
          title="Keep the full picture of every contact"
          description="See Driansh EngageOne contact notes in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
