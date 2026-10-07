import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import {
  PreChatFormVisual,
  PreChatMappingVisual,
  PreChatSettingsVisual,
} from "@/components/visuals/engageone/WorkspaceVisuals";

const FEATURES = [
  {
    title: "Easy and quick set-up",
    description:
      "Enable your pre-chat form, enable the fields you want to show in the form, add helpful text and you are ready to publish!",
    visual: <PreChatSettingsVisual />,
  },
  {
    title: "Map fields with your custom attributes",
    description:
      "Don't be limited by names and email IDs. Collect as much information as you need to through the pre-chat form. Simply, map the fields of your pre-chat form with the custom attributes you create on your Driansh EngageOne account.",
    visual: <PreChatMappingVisual />,
  },
];

export default function PreChatFormsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="User context on your fingertips, faster resolutions"
        description="Collect Info about a contact/conversation before entering into a conversation with them, with pre-chat forms."
        visual={<PreChatFormVisual />}
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
          title="Know your visitors before you say hello"
          description="See Driansh EngageOne pre-chat forms in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
