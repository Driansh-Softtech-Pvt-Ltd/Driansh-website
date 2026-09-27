import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "See how many conversations are currently open",
    description:
      "On your Reports Overview page, you can see the exact number of conversations that are currently open, unattended, and unassigned. It’s really that simple.",
    image: "/images/analyse/live-view/live-view-of-open-conversations.png",
    imageAlt: "Snapshot of open conversations count",
  },
  {
    title: "See how many Agents are currently online",
    description:
      "You can see the exact number of Agents added to your Driansh OmniConnect account who are currently online, busy, and offline. This helps you judge your organization’s requests-routing capacity at the moment.",
    image: "/images/analyse/live-view/live-view-of-agents.png",
    imageAlt: "Agent status card showing availability",
  },
  {
    title: "See who is attending how many conversations currently",
    description:
      "You can see exactly which agent has how many number of open or unattended conversations at the moment. By default, you’ll see your busiest agents on the top of the list.",
    image: "/images/analyse/live-view/live-view-of-conversations-being-attended-by-agents.png",
    imageAlt: "Current conversations being handled by agents",
  },
];

export default function LiveViewPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="View the status of your conversations and agents in real-time"
        description="See the live view of your available agents, open conversations, and more — on one screen."
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
          title="Know what’s happening, right now"
          description="See the Driansh OmniConnect live view in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
