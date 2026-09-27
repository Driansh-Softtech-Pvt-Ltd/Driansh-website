import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easy to create",
    description:
      "Create your custom automation flow with a set of simple rules. Select a trigger from the drop-down menu, define one or multiple qualifying conditions, and set the desired actions - within minutes.",
    image: "/images/automation/adding-automation-rules-in-chatwoot.png",
    imageAlt: "UI for adding automation rules",
  },
  {
    title: "Choose from 3 types of Triggering Events",
    description:
      'Choose to trigger an Automation flow from these types of Events: "Conversation created", "Conversation updated", and "Message created".',
    image: "/images/automation/chatwoot-automation-events.png",
    imageAlt: "Automation triggering events dropdown",
  },
  {
    title: "Select from smart conditions",
    description:
      "Conditions are criteria to be checked before an action is executed. Driansh OmniConnect suggests conditions to be set based on your triggering event, and gives you the option to add multiple conditions.",
    image: "/images/automation/automation-conditions.png",
    imageAlt: "Table of automation conditions",
  },
  {
    title: "The bots are like your personal assistant",
    description:
      "Leave all the grunt work to your bots. Select from a wide range of options to automate tasks related to your conversations, or engage your team.",
    image: "/images/automation/automations-actions-options-in-chatwoot.png",
    imageAlt: "Automation actions options",
  },
];

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Work smarter with Automations"
        description="Save time by automating your repetitive tasks streamlining your workflows."
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
          title="Put your support on auto-pilot"
          description="See how Driansh OmniConnect automations can save your team hours every week."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
