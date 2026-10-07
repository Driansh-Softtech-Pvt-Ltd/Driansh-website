import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { SegmentFilterVisual, SegmentSidebarVisual } from "@/components/visuals/engageone/ManageVisuals";

const FEATURES = [
  {
    title: "Set up customized segments in seconds",
    description:
      "Use advanced filters to group your contacts, and save the group as a segment. Now you can name it what you want, and get on with creating the next one.",
    visual: <SegmentFilterVisual />,
  },
  {
    title: "Quickly access your segments",
    description:
      "You don't need to filter and sort your contacts again and again. Once you have saved a segment, it appears on the sidebar of your Contacts page. Simply click on the segment you wish to see and you get going.",
    visual: <SegmentSidebarVisual />,
  },
];

export default function ContactSegmentsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Organize your contacts into segments"
        description="Group your contacts using filters and save them into segments."
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
          title="Know your contacts, group by group"
          description="See Driansh EngageOne contact segments in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
