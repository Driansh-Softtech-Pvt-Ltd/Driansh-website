import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { ShortcutsMenuVisual, ShortcutsListVisual } from "@/components/visuals/engageone/ProductivityVisuals";

const FEATURES = [
  {
    title: "Remember one shortcut to see all others",
    description:
      "Press CMD + / or Win + / to display the list of available keyboard shortcuts, or pick “Keyboard Shortcuts” from your profile menu. You only need to remember this one shortcut.",
    visual: <ShortcutsMenuVisual />,
  },
  {
    title: "Do regular actions, quickly",
    description:
      "There are things you do regularly within Driansh EngageOne—reply, resolve, assign, mute, snooze, and more. We have a shortcut for each of these actions so you stay productive.",
    visual: <ShortcutsListVisual />,
  },
];

export default function KeyboardShortcutsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Master Driansh EngageOne with Keyboard Shortcuts"
        description="Work faster, better, and improve your productivity with shortcuts for every routine action."
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
          title="Keep your hands on the keyboard"
          description="See Driansh EngageOne keyboard shortcuts in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
