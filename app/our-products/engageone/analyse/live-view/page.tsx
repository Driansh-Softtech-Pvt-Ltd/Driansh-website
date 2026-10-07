import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { LiveConversationsVisual, LiveAgentStatusVisual, LiveAgentLoadVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "See how many conversations are currently open",
    description:
      "On the reports overview page, you can see the exact number of conversations that are currently open, unattended, and unassigned.",
    visual: <LiveConversationsVisual />,
  },
  {
    title: "See how many agents are currently online",
    description:
      "You can see the exact number of agents added to your Driansh EngageOne account who are currently online, busy, and offline. This helps you judge your organization’s requests-routing capacity at the moment.",
    visual: <LiveAgentStatusVisual />,
  },
  {
    title: "See who is attending how many conversations currently",
    description:
      "You can see exactly how many open or unattended conversations at the moment. By default, you’ll see your busiest agents on the top of the list.",
    visual: <LiveAgentLoadVisual />,
  },
];

export default function LiveViewPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="View the status of your conversations and agents in real-time"
        description="See the live view of your available agents, open conversations, and more — on one screen."
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
          title="Know what’s happening, right now"
          description="See the Driansh EngageOne live view in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
