import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Update multiple or all conversations at once",
    description:
      "Hover over your conversation cards to select some or select them all. Instantly assign labels, assign agents, or reopen/resolve/snooze conversations from one panel.",
    image: "/images/productivity/bulk-actions/bulk-actions.png",
    imageAlt: "Bulk action panel showing mass updates",
  },
  {
    title: "Smart actions",
    description:
      "Bulk actions stay aware of the conversations you select and suggest actions accordingly. Already resolved conversations will show reopen or snooze actions instead of resolve.",
    image: "/images/productivity/bulk-actions/smart-bulk-actions.png",
    imageAlt: "Smart suggestions for bulk actions",
  },
];

export default function BulkActionsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Perform key actions on multiple conversations at once"
        description="Enhance your productivity by bulk updating your conversations right from the Driansh OmniConnect dashboard."
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
          title="Do more in fewer clicks"
          description="See Driansh OmniConnect bulk actions in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
