import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Set up customized segments in seconds",
    description:
      "Use advanced filters to group your contacts, and save the group as a segment. Now you can name it what you want, and get on with creating the next one.",
    image: "/images/manage/contact-segment/contact-segment 1.png",
    imageAlt: "Creating a contact segment with filters",
  },
  {
    title: "Quickly access your segments",
    description:
      "You don't need to filter and sort your contacts again and again. Once you have saved a segment, it appears on the sidebar of your Contacts page. Simply click on the segment you wish to see and you get going.",
    image: "/images/manage/contact-segment/contact-segment.png",
    imageAlt: "Saved segments in the contacts sidebar",
  },
];

export default function ContactSegmentsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Organize your contacts into segments"
        description="Group your contacts using filters and save them into segments."
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
          title="Know your contacts, group by group"
          description="See Driansh OmniConnect contact segments in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
