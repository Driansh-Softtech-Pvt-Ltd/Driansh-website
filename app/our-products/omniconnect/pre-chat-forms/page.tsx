import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy and quick set-up",
    description:
      "Enable your pre-chat form, enable the fields you want to show in the form, add helpful text and you are ready to publish!",
    image: "/images/pre-chat-form/pre-chat.png",
    imageAlt: "Pre-chat form settings",
  },
  {
    title: "Map fields with your custom attributes",
    description:
      "Don't be limited by names and email IDs. Collect as much information as you need to through the pre-chat form. Simply, map the fields of your pre-chat form with the custom attributes you create on your Driansh OmniConnect account.",
    image: "/images/pre-chat-form/mapping-in-prechat-forms.png",
    imageAlt: "Mapping custom attributes to pre-chat form fields",
  },
];

export default function PreChatFormsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="User context on your fingertips, faster resolutions"
        description="Collect Info about a contact/conversation before entering into a conversation with them, with pre-chat forms."
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
          title="Know your visitors before you say hello"
          description="See Driansh OmniConnect pre-chat forms in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
