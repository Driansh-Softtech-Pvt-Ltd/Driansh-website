import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy and quick set up",
    description:
      "Save as many canned responses as you want. Enter the content once and reuse it whenever similar questions pop up, saving tons of typing time.",
    image: "/images/productivity/canned-responses/cancel.png",
    imageAlt: "Canned responses list",
  },
  {
    title: "Utilize canned responses directly in conversations",
    description:
      "In the text editor, type a `/` followed by the keyword for the canned response you need. Provide consistent and timely support without repetitive typing.",
    image: "/images/productivity/canned-responses/cancel-1.png",
    imageAlt: "Using canned response inside chat",
  },
  {
    title: "Canned responses library",
    description:
      "Leave the hassle of creating canned responses from scratch behind. Explore ready-made responses for common scenarios and focus on meaningful conversations.",
    image: "/images/productivity/canned-responses/canned-responses-library.jpg",
    imageAlt: "Library of canned responses",
  },
];

export default function CannedResponsesPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Super quick responses to customer conversations. Super productive agents."
        description="Canned responses cut down repetitive typing and save replies to simple, single-answer questions."
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
          title="Answer common questions in seconds"
          description="See Driansh OmniConnect canned responses in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
