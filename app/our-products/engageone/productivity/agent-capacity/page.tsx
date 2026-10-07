import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { AgentCapacityLimitsVisual, InboxCapacityVisual } from "@/components/visuals/engageone/ProductivityVisuals";

const FEATURES = [
  {
    title: "Easily set auto-assignment limits",
    description:
      "Set a number to limit the conversations that can be auto-assigned to a particular agent. Keep workloads realistic and predictable.",
    visual: <AgentCapacityLimitsVisual />,
  },
  {
    title: "Inbox-wise limits",
    description:
      "Define custom agent capacity limits for each inbox—website widget support, email support, WhatsApp support, and more—so every inbox stays balanced.",
    visual: <InboxCapacityVisual />,
  },
];

export default function AgentCapacityPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Let Driansh EngageOne manage your agents’ workload"
        description="Set limits for auto-assigning conversations to your agents and keep every channel running smoothly."
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
          title="Keep workloads balanced"
          description="See Driansh EngageOne agent capacity in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
