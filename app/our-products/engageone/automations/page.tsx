import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import {
  AutomationActionsVisual,
  AutomationConditionsVisual,
  AutomationEventsVisual,
  AutomationRuleVisual,
} from "@/components/visuals/engageone/WorkspaceVisuals";

const FEATURES = [
  {
    title: "Easy to create",
    description:
      "Create your custom automation flow with a set of simple rules. Select a trigger from the drop-down menu, define one or multiple qualifying conditions, and set the desired actions - within minutes.",
    visual: <AutomationRuleVisual />,
  },
  {
    title: "Choose from 5 triggering events",
    description:
      "Start an automation when a conversation is created, updated, opened or resolved, or when a new message is created.",
    visual: <AutomationEventsVisual />,
  },
  {
    title: "Select from smart conditions",
    description:
      "Conditions are criteria to be checked before an action is executed. Driansh EngageOne suggests conditions to be set based on your triggering event, and gives you the option to add multiple conditions.",
    visual: <AutomationConditionsVisual />,
  },
  {
    title: "The bots are like your personal assistant",
    description:
      "Leave all the grunt work to your bots. Select from a wide range of options to automate tasks related to your conversations, or engage your team.",
    visual: <AutomationActionsVisual />,
  },
];

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Work smarter with automations"
        description="Save time by automating repetitive tasks and streamlining your workflows."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
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
          title="Put your support on auto-pilot"
          description="See how Driansh EngageOne automations can take repetitive work off your team."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
