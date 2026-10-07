import { Clock3, FileSearch, MessageCircle, Smile, Users2, Zap } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import {
  ContactCenterCallVisual,
  ContactCenterQueueVisual,
  ContactCenterReportsVisual,
  ContactCenterRoutingVisual,
} from "@/components/visuals/engageone/IndustryVisuals";

const BASE = "/our-products/engageone";

const SPLITS = [
  {
    eyebrow: "Queues",
    title: "One queue for every channel",
    description:
      "Chat, email, WhatsApp, Messenger, Instagram and SMS arrive in the same place. Agents work one list instead of switching between apps.",
    points: [
      "Filter by inbox, team, label or status",
      "SLA policies for first response, next response and resolution time",
      "SLAs can count business hours only",
    ],
    visual: <ContactCenterQueueVisual />,
  },
  {
    eyebrow: "Routing",
    title: "Send each conversation to the right agent",
    description:
      "Put agents into teams and let EngageOne assign new conversations for you. Capacity limits stop anyone from getting more than they can handle.",
    points: ["Teams by skill, product or language", "Auto-assignment inside each inbox", "Agent capacity limits", "Business hours with an away message"],
    visual: <ContactCenterRoutingVisual />,
  },
  {
    eyebrow: "Calling",
    title: "Phone and WhatsApp calls next to chats",
    description:
      "Agents answer calls in the same screen they use for messages. Each call is saved in the customer's conversation history.",
    points: ["Phone calling", "WhatsApp calling", "Notes and follow-ups in the same conversation"],
    visual: <ContactCenterCallVisual />,
  },
  {
    eyebrow: "Reports",
    title: "Measure speed and quality",
    description:
      "Track volume, first response time and resolution time. Compare agents, teams and inboxes, and read customer ratings after each conversation.",
    points: ["Live view of open conversations", "Agent, team, inbox and label reports", "CSAT ratings and comments"],
    visual: <ContactCenterReportsVisual />,
  },
];

const EXTRAS = [
  { title: "Canned responses", description: "Saved replies agents insert with a short code.", icon: MessageCircle },
  { title: "Macros", description: "Run several actions, like label, reply and resolve, with one click.", icon: Zap },
  { title: "Teams", description: "Group agents and route work to the right group.", icon: Users2 },
  { title: "Business hours", description: "Set working hours per inbox and an away message.", icon: Clock3 },
  { title: "CSAT surveys", description: "Ask customers to rate the help they got.", icon: Smile },
  { title: "Audit logs", description: "See who changed settings, and when.", icon: FileSearch },
];

export default function ContactCentersPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne for contact centers"
        title="Run every channel from one contact center"
        description="Bring chat, email, WhatsApp, social, SMS and calls into shared queues. Route work to the right team, keep an eye on SLAs and measure how you are doing."
        visual={<ContactCenterQueueVisual />}
        primaryCta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        secondaryCta={{ label: "Contact us", href: "/contact-us" }}
      />

      {SPLITS.map((split, i) => (
        <Section key={split.title} tone={i % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={split.visual} reverse={i % 2 === 1}>
            <SectionHeader
              eyebrow={split.eyebrow}
              title={split.title}
              description={split.description}
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={split.points} />
          </MediaSplit>
        </Section>
      ))}

      <Section tone="white">
        <SectionHeader title="Built for busy teams" description="Tools that save agents time on every conversation." />
        <CardGrid>
          {EXTRAS.map(({ title, description, icon: Icon }) => (
            <FeatureCard key={title} title={title} description={description} icon={<Icon aria-hidden="true" />} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Plan your contact center with us"
          description="Tell us your channels and team size. We will show you how EngageOne can handle the load."
          cta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        />
      </Section>
    </>
  );
}
