import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { TeamCreateVisual, TeamAutoAssignVisual } from "@/components/visuals/engageone/ManageVisuals";
import { TeamOverviewVisual } from "@/components/visuals/engageone/ReportVisuals";

const FEATURES = [
  {
    title: "Set up your teams in seconds",
    description:
      "All you have to do is set a name and description for your desired team, and add agents to it. Later, you will be able to see your teams through your chat sidebar, and select the relevant one for that conversation.",
    visual: <TeamCreateVisual />,
  },
  {
    title: "Auto assign your conversations to specific teams",
    description:
      "With Automations, you can set conditions and keywords in your incoming messages to automatically assign such conversations to the relevant team. This helps you and your customers get faster resolutions.",
    visual: <TeamAutoAssignVisual />,
  },
  {
    title: "Team Analytics",
    description:
      "Easily see how each of your teams is performing. View metrics like conversations, incoming and outgoing messages, First Response Time, etc. filtered by your teams. Filter these reports by duration and business hours, and download them to your system.",
    visual: <TeamOverviewVisual />,
  },
];

export default function TeamsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Organize your agents into teams"
        description="Create internal teams in your account to assign them conversations when working collaboratively."
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
          title="Route every conversation to the right team"
          description="See Driansh EngageOne teams in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
