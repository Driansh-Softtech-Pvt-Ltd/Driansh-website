import Link from "next/link";
import {
  Activity,
  Bot,
  Clock3,
  Code2,
  Command,
  FileSearch,
  FileText,
  Headphones,
  Inbox,
  Layers,
  ListChecks,
  ListFilter,
  Lock,
  Mail,
  MessageCircle,
  MessageCircleMore,
  Rocket,
  Send,
  ShoppingBag,
  Smartphone,
  Smile,
  Tag,
  UserCheck,
  Users2,
  UtensilsCrossed,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CardGrid,
  FeatureCard,
  CTABanner,
  CtaLink,
} from "@/components/site";
import EngageOneInboxVisual from "@/components/visuals/EngageOneInboxVisual";
import {
  AiAssistantVisual,
  CallingVisual,
  CampaignsVisual,
  ChannelsVisual,
  HelpCenterVisual,
  ReportsVisual,
  SecurityVisual,
  TeamInboxVisual,
} from "@/components/visuals/engageone/OverviewVisuals";

const BASE = "/our-products/engageone";
const DEMO = `${BASE}/request-demo`;

type LinkCard = { title: string; description: string; href: string; icon: LucideIcon };

const channelCards: LinkCard[] = [
  { title: "Website live chat", description: "A chat widget in your colours that visitors can use on any page.", href: `${BASE}/website-live-chat`, icon: MessageCircleMore },
  { title: "Omnichannel inbox", description: "Every channel feeds one list of conversations for your team.", href: `${BASE}/omnichannel-inbox`, icon: Inbox },
  { title: "WhatsApp", description: "Reply to WhatsApp Business messages and send approved templates.", href: `${BASE}/integrations/whatsapp`, icon: MessageCircle },
  { title: "Facebook", description: "Answer Messenger chats from your Facebook page.", href: `${BASE}/integrations/facebook`, icon: MessageCircle },
  { title: "Instagram", description: "Handle Instagram direct messages next to every other chat.", href: `${BASE}/integrations/instagram`, icon: MessageCircle },
  { title: "Telegram", description: "Connect a Telegram bot and reply from the shared inbox.", href: `${BASE}/integrations/telegram`, icon: Send },
  { title: "Line", description: "Talk to customers who reach you on Line.", href: `${BASE}/integrations/line`, icon: Layers },
  { title: "SMS", description: "Send and receive text messages from the same screen.", href: `${BASE}/integrations/sms`, icon: Smartphone },
  { title: "Email", description: "Turn support emails into conversations your team can share.", href: `${BASE}/integrations/email`, icon: Mail },
  { title: "Slack", description: "Get conversations in Slack and reply without switching tools.", href: `${BASE}/integrations/slack`, icon: MessageCircleMore },
  { title: "API channel", description: "Bring messages from your own app or system into EngageOne.", href: `${BASE}/integrations/api-channel`, icon: Code2 },
  { title: "Pre-chat form", description: "Ask for a name, email or topic before a chat starts.", href: `${BASE}/pre-chat-forms`, icon: ListChecks },
  { title: "Mobile apps", description: "Reply to customers from your phone when you are away from your desk.", href: `${BASE}/mobile-apps`, icon: Smartphone },
];

const teamCards: LinkCard[] = [
  { title: "Team collaboration", description: "Work on the same inbox without stepping on each other.", href: `${BASE}/team-collaboration`, icon: Layers },
  { title: "Automations", description: "Set rules that assign, label or reply for you.", href: `${BASE}/automations`, icon: Rocket },
  { title: "Chatbots", description: "Connect a bot to answer simple questions before a person joins.", href: `${BASE}/chatbots`, icon: Bot },
  { title: "Teams", description: "Group agents by skill or department and route work to them.", href: `${BASE}/manage/teams`, icon: Users2 },
  { title: "Labels", description: "Tag conversations so they are easy to find and report on.", href: `${BASE}/manage/labels`, icon: Tag },
  { title: "Private notes", description: "Leave notes and mention teammates inside a conversation.", href: `${BASE}/manage/private-notes`, icon: Lock },
  { title: "Contact notes", description: "Keep useful details about a customer on their profile.", href: `${BASE}/manage/contact-notes`, icon: FileText },
  { title: "Contact segments", description: "Filter contacts into groups you can save and reuse.", href: `${BASE}/manage/contact-segments`, icon: ListFilter },
  { title: "Business hours", description: "Show when you are online and set an away message.", href: `${BASE}/manage/business-hours`, icon: Clock3 },
  { title: "Canned responses", description: "Save common replies and insert them with a short code.", href: `${BASE}/productivity/canned-responses`, icon: MessageCircle },
  { title: "Agent capacity", description: "Limit how many conversations each agent gets at once.", href: `${BASE}/productivity/agent-capacity`, icon: Users2 },
  { title: "Bulk actions", description: "Assign, label or resolve many conversations in one go.", href: `${BASE}/productivity/bulk-actions`, icon: FileSearch },
  { title: "Keyboard shortcuts", description: "Move through the inbox without reaching for the mouse.", href: `${BASE}/productivity/keyboard-shortcuts`, icon: Zap },
  { title: "Command bar", description: "Search and run actions from one quick menu.", href: `${BASE}/productivity/command-bar`, icon: Command },
];

const reportCards: LinkCard[] = [
  { title: "Live view", description: "See open conversations and who is online right now.", href: `${BASE}/analyse/live-view`, icon: Activity },
  { title: "Conversation report", description: "Track volume, first reply time and resolution time.", href: `${BASE}/analyse/conversation-report`, icon: MessageCircle },
  { title: "Agent report", description: "See how each agent is doing over any date range.", href: `${BASE}/analyse/agent-report`, icon: UserCheck },
  { title: "Team reports", description: "Compare the workload and speed of each team.", href: `${BASE}/analyse/team-reports`, icon: Users2 },
  { title: "Inbox reports", description: "Find out which channels bring the most conversations.", href: `${BASE}/analyse/inbox-reports`, icon: Inbox },
  { title: "Label reports", description: "Learn which topics come up most and how fast they close.", href: `${BASE}/analyse/label-reports`, icon: Tag },
  { title: "CSAT reports", description: "Read customer ratings and comments after each chat.", href: `${BASE}/analyse/csat-reports`, icon: Smile },
  { title: "Audit logs", description: "Check who changed what in your account, and when.", href: `${BASE}/manage/audit-logs`, icon: FileSearch },
];

const industryCards: LinkCard[] = [
  { title: "Restaurants", description: "Take orders, payments and table bookings in chat, with a kitchen dashboard.", href: `${BASE}/industries/restaurants`, icon: UtensilsCrossed },
  { title: "E-commerce", description: "Answer order questions and send offers and order updates on WhatsApp.", href: `${BASE}/industries/ecommerce`, icon: ShoppingBag },
  { title: "Contact centers", description: "Run queues, SLAs, calls and reports across every channel.", href: `${BASE}/industries/contact-centers`, icon: Headphones },
];

function CardLinks({ cards }: { cards: LinkCard[] }) {
  return (
    <CardGrid>
      {cards.map(({ title, description, href, icon: Icon }) => (
        <FeatureCard key={href} href={href} title={title} description={description} icon={<Icon aria-hidden="true" />}>
          <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more</span>
        </FeatureCard>
      ))}
    </CardGrid>
  );
}

function SplitBlock({
  eyebrow,
  title,
  description,
  points,
  visual,
  link,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  visual: React.ReactNode;
  link: { label: string; href: string };
  reverse?: boolean;
}) {
  return (
    <MediaSplit visual={visual} reverse={reverse}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} align="left" className="mb-6 md:mb-8" />
      <CheckList items={points} />
      <div className="mt-8">
        <CtaLink href={link.href} variant="outline">
          {link.label}
        </CtaLink>
      </div>
    </MediaSplit>
  );
}

export default function EngageOnePage() {
  return (
    <>
      <PageHero
        eyebrow="EngageOne by Driansh"
        title="Every customer conversation in one place"
        description="EngageOne is a shared inbox for chat, WhatsApp, email, social messages, SMS and calls. The EngageOne AI Assistant handles common questions. Your team handles the rest, with the full history in front of them."
        visual={<EngageOneInboxVisual />}
        primaryCta={{ label: "Request a demo", href: DEMO }}
        secondaryCta={{ label: "See features", href: "#channels" }}
      />

      <Section id="channels" tone="white">
        <SplitBlock
          eyebrow="Channels"
          title="Meet customers on the apps they already use"
          description="Connect your website, WhatsApp, email, social pages and phone line. Each one becomes an inbox, and every message shows up in the same list."
          points={[
            "Website chat, WhatsApp, Messenger, Instagram, Telegram, Line, SMS and email",
            "One customer profile with every past conversation",
            "Your own channels through the API",
          ]}
          visual={<ChannelsVisual />}
          link={{ label: "View all integrations", href: `${BASE}/integrations` }}
        />
        <div className="mt-16">
          <CardLinks cards={channelCards} />
        </div>
      </Section>

      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="AI Assistant"
          title="Let the EngageOne AI Assistant take the first reply"
          description="The assistant learns from your help articles and documents. It answers routine questions at any hour and passes the chat to a person when it should."
          points={[
            "Answers based on your own content",
            "Hands over to your team with the chat so far",
            "Suggests replies to help agents answer faster",
          ]}
          visual={<AiAssistantVisual />}
          link={{ label: "Explore the AI Assistant", href: `${BASE}/ai-assistant` }}
        />
      </Section>

      <Section tone="white">
        <SplitBlock
          eyebrow="Calling"
          title="Take calls next to your chats"
          description="Answer phone and WhatsApp calls inside EngageOne. The call is saved in the customer's conversation, so the next agent knows what happened."
          points={["Phone and WhatsApp calling", "Calls linked to the customer's history", "Private notes after each call"]}
          visual={<CallingVisual />}
          link={{ label: "Explore calling", href: `${BASE}/calling` }}
        />
      </Section>

      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="Campaigns"
          title="Reach out before customers ask"
          description="Send WhatsApp template messages and SMS to a group of contacts, or show a chat message to website visitors on a chosen page."
          points={[
            "WhatsApp and SMS campaigns to a list of contacts",
            "Website messages based on page and time on page",
            "Replies come back to the shared inbox",
          ]}
          visual={<CampaignsVisual />}
          link={{ label: "Explore campaigns", href: `${BASE}/campaigns` }}
        />
      </Section>

      <Section tone="white">
        <SplitBlock
          eyebrow="Team inbox"
          title="Tools that help your team work faster"
          description="Assign chats, talk in private notes, reuse saved replies and let rules take care of the routine steps."
          points={[
            "Auto-assignment by team and agent capacity",
            "Canned responses, macros and keyboard shortcuts",
            "Labels, notes and contact segments",
          ]}
          visual={<TeamInboxVisual />}
          link={{ label: "Explore team collaboration", href: `${BASE}/team-collaboration` }}
        />
        <div className="mt-16">
          <CardLinks cards={teamCards} />
        </div>
      </Section>

      <Section tone="muted">
        <SplitBlock
          reverse
          eyebrow="Help center"
          title="Publish answers customers can find on their own"
          description="Write articles, group them into categories and publish a help center on your own domain. Share an article in a chat with a click."
          points={["Articles and categories in more than one language", "Search built in", "Content the AI Assistant can use"]}
          visual={<HelpCenterVisual />}
          link={{ label: "Explore the help center", href: `${BASE}/help-center` }}
        />
      </Section>

      <Section tone="white">
        <SplitBlock
          eyebrow="Reports"
          title="Know how your support is doing"
          description="See conversation volume, reply times and customer ratings. Break them down by agent, team, inbox or label."
          points={["Live view of open work", "Reports you can filter by date", "Customer satisfaction (CSAT) ratings"]}
          visual={<ReportsVisual />}
          link={{ label: "See the live view", href: `${BASE}/analyse/live-view` }}
        />
        <div className="mt-16">
          <CardLinks cards={reportCards} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Industries"
          title="Set up for the way your business works"
          description="See how EngageOne fits restaurants, online stores and contact centers."
        />
        <CardLinks cards={industryCards} />
        <div className="mt-10 flex justify-center">
          <CtaLink href={`${BASE}/industries`} variant="outline">
            All industries
          </CtaLink>
        </div>
      </Section>

      <Section tone="white">
        <MediaSplit visual={<SecurityVisual />}>
          <SectionHeader
            eyebrow="Security and deployment"
            title="Control who sees what"
            description="Give each person only the access they need. Sign in with single sign-on and check every change in the audit log."
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList
            items={[
              "Single sign-on (SAML) and two-factor sign-in",
              "Custom roles and permissions",
              "Audit logs for account changes",
              "Ask us about hosting and deployment options",
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href={`${BASE}/security`} variant="outline">
              Security details
            </CtaLink>
            <CtaLink href={`${BASE}/pricing`} variant="outline">
              See pricing
            </CtaLink>
          </div>
        </MediaSplit>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="See EngageOne with your own channels"
          description="Book a short demo. We will show you how it fits your team and answer your questions."
          cta={{ label: "Request a demo", href: DEMO }}
        />
        <p className="mt-6 text-center text-slate-600">
          Prefer to talk first?{" "}
          <Link href="/contact-us" className="font-semibold text-brand hover:underline">
            Contact us
          </Link>
        </p>
      </Section>
    </>
  );
}
