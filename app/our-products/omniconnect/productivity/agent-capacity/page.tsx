import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Easily set auto-assignment limits",
    description:
      "Set a number to limit the conversations that can be auto-assigned to a particular agent. Keep workloads realistic and predictable.",
    image: "/images/productivity/agent-capacity/agent-capacity-in-chatwoot.png",
    imageAlt: "Auto-assignment limits configuration",
  },
  {
    title: "Inbox-wise limits",
    description:
      "Define custom agent capacity limits for each inbox—website widget support, email support, Twitter support, and more—so every inbox stays balanced.",
    image: "/images/productivity/agent-capacity/inbox-wise-agent-capacity.png",
    imageAlt: "Inbox-wise agent capacity settings",
  },
];

export default function AgentCapacityPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Let Driansh OmniConnect manage your agents’ workload"
        description="Set limits for auto-assigning conversations to your agents and keep every channel running smoothly."
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
          title="Keep workloads balanced"
          description="See Driansh OmniConnect agent capacity in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
