import {
  Activity,
  BarChart3,
  CalendarClock,
  ChevronDown,
  ClipboardList,
  Clock3,
  Contact,
  FileSearch,
  Hash,
  Inbox,
  ListChecks,
  Mic,
  Phone,
  PhoneForwarded,
  Radio,
  Target,
  Users2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { OUR_PRODUCTS } from "@/constants";
import { benefits, keyFeaturesWithDesc, additionalFeaturesWithDesc, crm } from "@/constants/function";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CardGrid,
  FeatureCard,
  CheckList,
  CTABanner,
  ctaClasses,
} from "@/components/site";
import { cn } from "@/lib/utils";
import {
  AccessVisual,
  AdminConsoleVisual,
  AgentWorkspaceVisual,
  BreaksVisual,
  DialerVisual,
  LiveFloorVisual,
  ReportsVisual,
  SoftphoneVisual,
  WrapUpVisual,
} from "@/components/visuals/contactcenter/OverviewVisuals";

const DEMO = "/contact-us";

type IconCard = { title: string; description: string; icon: React.ComponentType<{ className?: string }> };

/* ----------------------------- page content ----------------------------- */

const agentCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "One inbox for every channel",
    description:
      "Calls, WhatsApp, live chat and email arrive in the same list, with a tab and a count per channel, so nothing waits in a window nobody opened.",
    icon: Inbox,
  },
  {
    title: "Softphone in the browser",
    description:
      "Agents take calls over WebRTC with nothing to install, or register a desk IP phone instead. Remote agents can work from a mobile line on the same login.",
    icon: Phone,
  },
  {
    title: "The customer, beside the call",
    description:
      "Campaign, process, queue, attempt number and the lead's own fields sit next to the conversation, with past calls, chats and notes for that contact.",
    icon: Contact,
  },
  {
    title: "Transfer and conference",
    description:
      "Move a call to an agent, a queue, a process, an IVR menu, a supervisor or an outside number — warm or blind — or pull a third party into a conference.",
    icon: PhoneForwarded,
  },
  {
    title: "Three-level dispositions",
    description:
      "Close each call with a disposition, sub-disposition and sub-sub-disposition plus a comment. Auto-disposition steps in when wrap-up time runs out.",
    icon: ClipboardList,
  },
  {
    title: "Callbacks that come back",
    description:
      "Schedule a callback for yourself or for the queue. It returns to the dialer at the agreed time, with a reminder and the history already attached.",
    icon: CalendarClock,
  },
];

const adminCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Campaigns",
    description:
      "Build inbound and outbound campaigns, assign supervisors and team leads, set the dialer rules, map DID and DNC lists, and attach the lists to work from.",
    icon: Target,
  },
  {
    title: "Processes",
    description:
      "A process carries the routing, the skills, the recording rules and the wrap-up timer. Point it at a call flow, a voice bot, a prompt or a hang-up.",
    icon: Workflow,
  },
  {
    title: "Lead and list management",
    description:
      "Load leads by upload, SFTP or blob storage, then reset, pause, resume, re-order or flush a list. Daily attempt limits and DNC rules hold while it runs.",
    icon: ListChecks,
  },
  {
    title: "IVR and call flows",
    description:
      "Multi-level menus, greetings, prompts and business hours, with speech-to-text and text-to-speech where a recorded prompt is not enough.",
    icon: Radio,
  },
  {
    title: "Numbers and trunks",
    description:
      "Manage SIP trunks with prefixes and channel limits, allocate inbound DIDs, and rotate outbound caller IDs within the rules you are bound by.",
    icon: Hash,
  },
  {
    title: "Teams, skills and breaks",
    description:
      "Map agents to processes and teams, give each supervisor their floor, and define the break reasons — tea, lunch, training — that adherence is measured against.",
    icon: Users2,
  },
];

const reportCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Call details and recordings",
    description:
      "Every leg of every call, searchable by date, campaign, queue or number, with the recording attached for audits and coaching.",
    icon: Mic,
  },
  {
    title: "Agent performance",
    description: "Calls handled, talk time, average handle time, wrap-up and disposition mix, per agent and per team.",
    icon: BarChart3,
  },
  {
    title: "Adherence and breaks",
    description: "Login, idle, break and talk time against the shift, with the break reason behind each gap in the day.",
    icon: Clock3,
  },
  {
    title: "Campaign and queue reports",
    description: "Daily and hourly views of attempts, connects, abandons and service level, for each campaign and queue.",
    icon: Activity,
  },
  {
    title: "Outcome summary",
    description: "What the dispositions add up to — contacted, interested, converted — and what a list has left to give.",
    icon: ClipboardList,
  },
  {
    title: "Audit log",
    description: "Who changed a campaign, a permission or a number, and when, kept apart from the operational reports.",
    icon: FileSearch,
  },
];

function IconCards({ items }: { items: IconCard[] }) {
  return (
    <CardGrid>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={<Icon aria-hidden="true" />}
          />
        );
      })}
    </CardGrid>
  );
}

function SplitBlock({
  eyebrow,
  title,
  description,
  points,
  visual,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <MediaSplit visual={visual} reverse={reverse}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} align="left" className="mb-6 md:mb-8" />
      <CheckList items={points} />
    </MediaSplit>
  );
}

/* --------------------------------- page --------------------------------- */

export default function ContactCenterPage() {
  const contactCenterProduct = OUR_PRODUCTS.find((product) => product.id === "contactCenter");

  if (!contactCenterProduct) return null;

  return (
    <>
      <PageHero
        eyebrow="Contact Center by Driansh"
        title="Every call, queue and campaign in one workspace"
        description="Driansh Contact Center gives agents one screen for calls, WhatsApp, live chat and email, and gives supervisors the campaigns, dialers, live floor and reports behind it. Voice-first, multi-tenant, and deployed on your infrastructure or ours."
        visual={<AgentWorkspaceVisual />}
        primaryCta={{ label: "Talk to our team", href: DEMO }}
        secondaryCta={{ label: "See the agent workspace", href: "#agent-workspace" }}
      />

      {/* Agent workspace */}
      <Section id="agent-workspace" tone="white">
        <SplitBlock
          eyebrow="Agent workspace"
          title="The call, the customer and the controls on one screen"
          description="The softphone column never leaves the screen, so answer, hold, mute, transfer, conference and hang up are always one click away, whatever else the agent has open."
          points={[
            "Answer in the browser over WebRTC, or on a registered IP phone",
            "Availability, campaign, process and extension always in view",
            "Recording, hold and transfer without leaving the conversation",
          ]}
          visual={<SoftphoneVisual />}
        />
        <div className="mt-16">
          <IconCards items={agentCards} />
        </div>
      </Section>

      {/* Wrap-up */}
      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="After call work"
          title="No call closes without an outcome"
          description="Wrap-up is where the reporting data comes from. Agents pick a disposition down three levels, add a comment, and book the callback while the conversation is still fresh."
          points={[
            "Disposition, sub-disposition and sub-sub-disposition on every call",
            "Auto-disposition when the wrap-up timer runs out",
            "Callbacks scheduled to the agent or back to the queue",
            "Re-attempt rules driven by the outcome, not a fixed retry count",
          ]}
          visual={<WrapUpVisual />}
        />
      </Section>

      {/* Admin console */}
      <Section tone="white">
        <SplitBlock
          eyebrow="Admin console"
          title="Set it up once, then run it every day"
          description="Campaigns, processes, lists, numbers and routing live in one console, so a supervisor can change what a campaign does without waiting on an engineer."
          points={[
            "Inbound and outbound campaigns with their own dialer rules",
            "Lead lists you can load, pause, re-order and flush",
            "IVR menus, greetings, business hours and call flows",
            "DNC, attempt limits and caller-ID rules enforced as calls are placed",
          ]}
          visual={<AdminConsoleVisual />}
        />
        <div className="mt-16">
          <IconCards items={adminCards} />
        </div>
      </Section>

      {/* Dialers */}
      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="Dialers"
          title="Choose how each process reaches the list"
          description="One platform runs a predictive floor, a careful preview desk and an inbound queue side by side. The mode belongs to the process, so one team can change without disturbing another."
          points={[
            "Predictive, progressive, preview and manual outbound",
            "Inbound queues with skills-based distribution",
            "Voice bot and IVR campaigns for calls that need no agent",
            "Pacing that answers to agent availability and answer rate",
          ]}
          visual={<DialerVisual />}
        />
      </Section>

      {/* Live floor */}
      <Section tone="white">
        <SplitBlock
          eyebrow="Live monitoring"
          title="See the floor as it is right now"
          description="Agent states, live calls, queue depth and occupancy update as they happen. When a call needs help, the supervisor can step into it from the same board."
          points={[
            "Agent board with state, campaign, duration and extension",
            "Listen silently, whisper to the agent, coach, or barge in",
            "Queue and campaign dashboards beside the agent board",
            "Force logout and re-assign when a shift changes under you",
          ]}
          visual={<LiveFloorVisual />}
        />
      </Section>

      {/* Workforce */}
      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="Workforce"
          title="Breaks, shifts and the day an agent actually had"
          description="Break reasons are yours to define, and every one of them is timed. Agents watch their own day build; supervisors see adherence across the team."
          points={[
            "Aux codes for tea, lunch, training and anything else you run",
            "Login, idle, talk and break time per agent, per shift",
            "Each agent's own performance view, updated through the day",
          ]}
          visual={<BreaksVisual />}
        />
      </Section>

      {/* Reports */}
      <Section tone="white">
        <SplitBlock
          eyebrow="Reports"
          title="The numbers a contact center is run on"
          description="Call detail records, recordings, agent productivity and campaign results, filtered by date, campaign, queue or agent, and exported when someone outside the platform needs them."
          points={[
            "Live dashboards and historical reports from the same data",
            "Recordings attached to the call they belong to",
            "Exports for audits, payroll and client reporting",
          ]}
          visual={<ReportsVisual />}
        />
        <div className="mt-16">
          <IconCards items={reportCards} />
        </div>
      </Section>

      {/* Security and tenancy */}
      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="Security and tenancy"
          title="Many businesses, one platform, separate walls"
          description="Each business group is its own tenant, with its own users, numbers, campaigns and branding. Roles decide what a person can open, down to the individual screen."
          points={[
            "Business groups with isolated data and their own SSO profile",
            "Agent, Team Lead, Supervisor, QA, Admin and Super Admin roles",
            "Permissions assignable from the UI, per module and per screen",
            "An audit log behind every configuration change",
          ]}
          visual={<AccessVisual />}
        />
      </Section>

      {/* Benefits */}
      <Section tone="white">
        <SectionHeader
          title="Benefits"
          description="Driansh Contact Center combines role-based security with a multi-tenant architecture, automation that cuts manual work, and workforce management across every process type — with flexible lead ingestion, compliance governance, and live monitoring and dashboards behind the decisions."
        />
        <IconCards items={benefits} />
      </Section>

      {/* Key features */}
      <Section tone="muted">
        <SectionHeader
          title="Key features"
          description="Calling, IVR, ACD, queue management, advanced dialers, reporting and agent tools, with multi-tenant deployment, multi-lingual operations, CRM integrations, add-on modules and real-time monitoring."
        />
        <IconCards items={keyFeaturesWithDesc} />

        <details className="group mt-12">
          <summary className={cn(ctaClasses(), "mx-auto flex w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden")}>
            <span className="group-open:hidden">Show more features</span>
            <span className="hidden group-open:inline">Show fewer features</span>
            <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-12">
            <IconCards items={additionalFeaturesWithDesc} />
          </div>
        </details>
      </Section>

      {/* CRM */}
      <Section tone="white">
        <SectionHeader
          title="CRM integrations"
          description="Connect Driansh Contact Center to the CRM and collaboration tools your team already uses, so leads, call outcomes and customer data stay in sync."
        />
        <IconCards items={crm} />
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Ready to modernize your contact center?"
          description={`Talk to our team about deploying ${contactCenterProduct.title} for your business.`}
        />
      </Section>
    </>
  );
}
