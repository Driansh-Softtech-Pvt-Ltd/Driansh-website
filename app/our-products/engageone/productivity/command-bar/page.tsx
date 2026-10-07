import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { CommandBarQuickAccessVisual, CommandBarNavigationVisual, CommandBarActionsVisual } from "@/components/visuals/engageone/ProductivityVisuals";

const FEATURES = [
  {
    title: "Quick Access",
    description:
      "You don’t need to waste a single second trying to navigate through your dashboard. Simply hit Cmd + K or Ctrl + K, type a keyword, and get going.",
    visual: <CommandBarQuickAccessVisual />,
  },
  {
    title: "Swift Navigation",
    description:
      "The command bar lets you quickly navigate to pages such as Settings, Reports, Notifications, or anything else. Type the page name, press Enter, and jump there instantly.",
    visual: <CommandBarNavigationVisual />,
  },
  {
    title: "Conversation Actions",
    description:
      "Stay aware of where you are in the dashboard and act without lifting your hands from the keyboard. Assign, resolve, snooze, or label conversations directly from the command bar.",
    visual: <CommandBarActionsVisual />,
  },
];

export default function CommandBarPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="⌘ + K your way into productivity"
        description="The command bar opens up with a simple shortcut, lets you jump to any page or action, and suggests smart actions based on where you are in your dashboard."
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
          title="Navigate your dashboard at the speed of thought"
          description="See the Driansh EngageOne command bar in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
