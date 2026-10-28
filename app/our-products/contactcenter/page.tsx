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
  AdminDashboardVisual,
  AgentHomeVisual,
  AgentPerformanceVisual,
  AgentWorkspaceVisual,
  BreaksVisual,
  CallControlVisual,
  CallDetailVisual,
  DialerVisual,
  IncomingCallVisual,
  LiveFloorVisual,
  OutgoingCallVisual,
  QueueCampaignVisual,
  ReportsVisual,
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

/** A screen wide enough to need the whole container, with the points beneath it. */
function WideBlock({
  eyebrow,
  title,
  description,
  points,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  visual: React.ReactNode;
}) {
  return (
    <>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      {visual}
      <CheckList items={points} columns={2} className="mx-auto mt-12 max-w-3xl" />
    </>
  );
}

/** Three screens side by side, each under its own caption. */
function TriptychBlock({ items }: { items: { title: string; caption: string; visual: React.ReactNode }[] }) {
  return (
    // Subgrid keeps the three windows on one row and the three captions on the
    // next, so captions line up however tall each mock-up turns out to be.
    <div className="grid gap-8 md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-x-6 md:gap-y-0">
      {items.map(({ title, caption, visual }) => (
        <div key={title} className="md:row-span-2 md:grid md:grid-rows-subgrid md:gap-6">
          <div>{visual}</div>
          <div>
            <h3 className="heading-3 text-ink">{title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{caption}</p>
          </div>
        </div>
      ))}
    </div>
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

      {/* Agent home */}
      <Section id="agent-workspace" tone="white">
        <WideBlock
          eyebrow="Agent workspace"
          title="The agent's home screen"
          description="One screen holds the whole shift: availability and dial pad on the left, the queues the agent is signed into, and every conversation across voice, WhatsApp, live chat and email in the middle."
          points={[
            "Availability, session timer and global search in the app bar",
            "Status, dial pad and queue depth in the left column",
            "Active calls, open chats, missed and resolved counted for the day",
            "One list for every channel, with a tab and a count each",
          ]}
          visual={<AgentHomeVisual />}
        />
      </Section>

      {/* Call handling */}
      <Section tone="muted">
        <SectionHeader
          eyebrow="Call handling"
          title="Incoming, outgoing, and everything during the call"
          description="The softphone column never leaves the screen, so the agent answers, dials and controls a call from the same place, whatever else they have open."
        />
        <TriptychBlock
          items={[
            {
              title: "Incoming",
              caption:
                "A queue call rings with the number, the queue it came from and how many are still waiting, so the agent knows what they are picking up.",
              visual: <IncomingCallVisual />,
            },
            {
              title: "Outgoing",
              caption:
                "Dial from the keypad, a contact or a recent call. Preview and progressive campaigns place the call for the agent instead.",
              visual: <OutgoingCallVisual />,
            },
            {
              title: "Call control",
              caption:
                "Hold, mute, DTMF keypad, conference, and transfer to an agent, queue, process, IVR or outside number — warm or blind.",
              visual: <CallControlVisual />,
            },
          ]}
        />
        <div className="mt-16">
          <IconCards items={agentCards} />
        </div>
      </Section>

      {/* Call record */}
      <Section tone="white">
        <SplitBlock
          eyebrow="Call record"
          title="What happened on the call, kept with the call"
          description="Direction, hangup cause, queue, campaign, who dialled it, the timings and the recording — one record per call, and the note the agent left at wrap-up."
          points={[
            "Recording playback and download from the record itself",
            "Call back, add to contacts or tag without leaving the pane",
            "The contact's full history one click away",
          ]}
          visual={<CallDetailVisual />}
        />
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

      {/* Admin dashboard */}
      <Section tone="white">
        <WideBlock
          eyebrow="Admin dashboard"
          title="The tenant at a glance, the moment you sign in"
          description="Campaigns, agents, supervisors, queues, numbers and teams counted up front, with the day's key indicators, call volume, channel mix and the teams carrying the load."
          points={[
            "Answered, answer rate, average handle time and service level",
            "Call volume by hour, and the split across voice and digital",
            "Live overall stats beside the historic figures",
            "Counts that link straight into the list behind them",
          ]}
          visual={<AdminDashboardVisual />}
        />
      </Section>

      {/* Admin console */}
      <Section tone="muted">
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
      <Section tone="white">
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
      <Section tone="muted">
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

      {/* Queue and campaign live states */}
      <Section tone="white">
        <SplitBlock
          reverse
          eyebrow="Queue and campaign states"
          title="Which queue is holding, and which campaign is carrying it"
          description="Live queue and campaign boards sit beside the agent board: calls taken, how many are waiting, average talk and wait, and the service level each one is hitting right now."
          points={[
            "Active queues and campaigns with calls, waiting and SLA",
            "Average wait and average talk per queue and process",
            "Hourly trend under the day's totals",
            "Filter by campaign, domain or date range",
          ]}
          visual={<QueueCampaignVisual />}
        />
      </Section>

      {/* Agent performance */}
      <Section tone="muted">
        <SplitBlock
          eyebrow="Agent performance"
          title="One set of numbers, read by both sides"
          description="Calls handled, handle time, wrap-up, answer rate, adherence, QA score and CSAT. Supervisors see them across the team; each agent sees their own, updated through the day."
          points={[
            "Calls handled, AHT, ACW and answer rate per agent",
            "Inbound and outbound mix, and time spent in each state",
            "Adherence, QA score and CSAT beside the volume",
            "Trend over any date range, exportable",
          ]}
          visual={<AgentPerformanceVisual />}
        />
      </Section>

      {/* Workforce */}
      <Section tone="white">
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
      <Section tone="muted">
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
      <Section tone="white">
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
      <Section tone="muted">
        <SectionHeader
          title="Benefits"
          description="Driansh Contact Center combines role-based security with a multi-tenant architecture, automation that cuts manual work, and workforce management across every process type — with flexible lead ingestion, compliance governance, and live monitoring and dashboards behind the decisions."
        />
        <IconCards items={benefits} />
      </Section>

      {/* Key features */}
      <Section tone="white">
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
      <Section tone="muted">
        <SectionHeader
          title="CRM integrations"
          description="Connect Driansh Contact Center to the CRM and collaboration tools your team already uses, so leads, call outcomes and customer data stay in sync."
        />
        <IconCards items={crm} />
      </Section>

      <Section size="sm" tone="white">
        <CTABanner
          title="Ready to modernize your contact center?"
          description={`Talk to our team about deploying ${contactCenterProduct.title} for your business.`}
        />
      </Section>
    </>
  );
}
