import {
  Zap,
  MessageCircle,
  Layers,
  MessageCircleMore,
  Bot,
  Rocket,
  Smartphone,
  Plug,
  BookOpenText,
  Inbox,
  Tag,
  Users2,
  FileText,
  Lock,
  ListFilter,
  Clock3,
  FileSearch,
  Activity,
  UserCheck,
  Smile,
  type LucideIcon,
} from "lucide-react";
import { PageHero, Section, SectionHeader, CardGrid, FeatureCard, CTABanner, CtaLink } from "@/components/site";
import { OUR_PRODUCTS } from "@/constants";
import OmniInboxVisual from "@/components/visuals/OmniInboxVisual";

const productCards = [
  {
    title: "Website Live Chat",
    description: "Simple and elegant live chat for your website.",
    href: "/our-products/omniconnect/website-live-chat",
  },
  {
    title: "Omnichannel inbox",
    description: "Connect any channel and engage your customers from one place.",
    href: "/our-products/omniconnect/omnichannel-inbox",
  },
  {
    title: "Team collaboration",
    description: "Collaborate and manage conversations using a shared inbox.",
    href: "/our-products/omniconnect/team-collaboration",
  },
  {
    title: "Chatbots",
    description:
      "Easily integrate with chatbot platforms like Rasa or Dialogflow to reduce the workload of your agents.",
    href: "/our-products/omniconnect/chatbots",
  },
  {
    title: "Automations",
    description:
      "Avoid repetitive tasks by automating your workflows and run your business on auto-pilot.",
    href: "/our-products/omniconnect/automations",
  },
  {
    title: "Mobile apps",
    description:
      "Don't miss out on the new customers, download our mobile apps and talk to your customers easily.",
    href: "/our-products/omniconnect/mobile-apps",
  },
  {
    title: "Pre-Chat Form",
    description: "Add a customisable chat form before a user initiates a chat.",
    href: "/our-products/omniconnect/pre-chat-forms",
  },
  {
    title: "Help Center",
    description: "Build knowledge base for happier agents and customers.",
    href: "/our-products/omniconnect/help-center",
  },
];

const manageCards = [
  {
    title: "Labels",
    description: "Add labels to your chats and keep them well-organized.",
    href: "/our-products/omniconnect/manage/labels",
  },
  {
    title: "Teams",
    description: "Create internal teams for efficient collaboration.",
    href: "/our-products/omniconnect/manage/teams",
  },
  {
    title: "Contact Notes",
    description: "Add notes to contacts.",
    href: "/our-products/omniconnect/manage/contact-notes",
  },
  {
    title: "Private Notes",
    description: "Privately discuss customer queries with your teammates.",
    href: "/our-products/omniconnect/manage/private-notes",
  },
  {
    title: "Contact Segments",
    description: "Filter and group your contacts into segments.",
    href: "/our-products/omniconnect/manage/contact-segments",
  },
  {
    title: "Business Hours",
    description: "Let customers know you’re not available to answer their questions.",
    href: "/our-products/omniconnect/manage/business-hours",
  },
  {
    title: "Audit Logs",
    description: "Track and trace account activities with ease.",
    href: "/our-products/omniconnect/manage/audit-logs",
  },
];

const analyseCards = [
  {
    title: "Live view",
    description: "Get realtimes insights about your support operations.",
    href: "/our-products/omniconnect/analyse/live-view",
  },
  {
    title: "Conversation Report",
    description: "Get details insights on your conversations.",
    href: "/our-products/omniconnect/analyse/conversation-report",
  },
  {
    title: "Agent Report",
    description: "Track your agents’ performance, with auto-updating reports.",
    href: "/our-products/omniconnect/analyse/agent-report",
  },
  {
    title: "Label Reports",
    description:
      "See which labels get the most conversations, and how long it takes to resolve them.",
    href: "/our-products/omniconnect/analyse/label-reports",
  },
  {
    title: "CSAT Reports",
    description: "Get reports on how customers respond to your chat.",
    href: "/our-products/omniconnect/analyse/csat-reports",
  },
  {
    title: "Inbox Reports",
    description: "Get insights into your inboxes.",
    href: "/our-products/omniconnect/analyse/inbox-reports",
  },
  {
    title: "Team Reports",
    description: "Analyse how each of your teams is performing.",
    href: "/our-products/omniconnect/analyse/team-reports",
  },
];

const productivityCards = [
  {
    title: "Keyboard Shortcuts",
    description: "Master Driansh OmniConnect with keyboard shortcuts.",
    href: "/our-products/omniconnect/productivity/keyboard-shortcuts",
  },
  {
    title: "Command Bar",
    description: "Use the command bar to perform actions.",
    href: "/our-products/omniconnect/productivity/command-bar",
  },
  {
    title: "Bulk Actions",
    description: "Update multiple conversations at once.",
    href: "/our-products/omniconnect/productivity/bulk-actions",
  },
  {
    title: "Canned Responses",
    description: "Save frequently sent messages as templates.",
    href: "/our-products/omniconnect/productivity/canned-responses",
  },
  {
    title: "Agent Capacity",
    description: "Set limits to auto-assigning conversations to your agents.",
    href: "/our-products/omniconnect/productivity/agent-capacity",
  },
];

const integrationCards = [
  {
    title: "WhatsApp",
    description: "Manage your WhatsApp business interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/whatsapp",
  },
  {
    title: "Facebook",
    description: "Stay connected with your customers on Facebook.",
    href: "/our-products/omniconnect/integrations/facebook",
  },
  {
    title: "Instagram",
    description: "Stay connected with your customers on Instagram.",
    href: "/our-products/omniconnect/integrations/instagram",
  },
  {
    title: "Telegram",
    description: "Manage your Telegram customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/telegram",
  },
  {
    title: "Line",
    description: "Manage your Line customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/line",
  },
  {
    title: "SMS",
    description: "Manage your SMS customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/sms",
  },
  {
    title: "Email",
    description: "Manage your email customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/email",
  },
  {
    title: "Slack",
    description: "Answer your customer queries from Slack.",
    href: "/our-products/omniconnect/integrations/slack",
  },
];

const productIcons: Record<string, LucideIcon> = {
  "Website Live Chat": MessageCircleMore,
  "Omnichannel inbox": Inbox,
  "Team collaboration": Layers,
  "Chatbots": Bot,
  "Automations": Rocket,
  "Mobile apps": Smartphone,
  "Integrations": Plug,
  "Pre-Chat Form": MessageCircle,
  "Help Center": BookOpenText,
};

const manageIcons: Record<string, LucideIcon> = {
  "Labels": Tag,
  "Teams": Users2,
  "Contact Notes": FileText,
  "Private Notes": Lock,
  "Contact Segments": ListFilter,
  "Business Hours": Clock3,
  "Audit Logs": FileSearch,
};

const analyseIcons: Record<string, LucideIcon> = {
  "Live view": Activity,
  "Conversation Report": MessageCircle,
  "Agent Report": UserCheck,
  "Label Reports": Tag,
  "CSAT Reports": Smile,
  "Inbox Reports": Inbox,
  "Team Reports": Users2,
};

const productivityIcons: Record<string, LucideIcon> = {
  "Keyboard Shortcuts": Zap,
  "Command Bar": Activity,
  "Bulk Actions": FileSearch,
  "Canned Responses": MessageCircle,
  "Agent Capacity": Users2,
};

const integrationIcons: Record<string, LucideIcon> = {
  "WhatsApp": Smartphone,
  "Facebook": MessageCircle,
  "Instagram": MessageCircle,
  "Telegram": Smartphone,
  "Line": Layers,
  "SMS": Smartphone,
  "Email": Inbox,
  "Slack": MessageCircleMore,
};

type LinkCard = { title: string; description: string; href: string };

function CardLinks({
  cards,
  icons,
  fallback,
}: {
  cards: LinkCard[];
  icons: Record<string, LucideIcon>;
  fallback: LucideIcon;
}) {
  return (
    <CardGrid>
      {cards.map((card) => {
        const Icon = icons[card.title] ?? fallback;
        return (
          <FeatureCard
            key={card.title}
            href={card.href}
            title={card.title}
            description={card.description}
            icon={<Icon aria-hidden="true" />}
          >
            <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more</span>
          </FeatureCard>
        );
      })}
    </CardGrid>
  );
}

export default function OmniConnectFeaturesPage() {
  const omniConnect = OUR_PRODUCTS.find((product) => product.id === "omniConnect");

  return (
    <>
      <PageHero
        eyebrow="OmniConnect"
        title={omniConnect?.title ?? "Driansh OmniConnect"}
        description={omniConnect?.description}
        visual={<OmniInboxVisual />}
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
        secondaryCta={{ label: "Explore Features", href: "#features" }}
      />

      <Section id="features" tone="white">
        <SectionHeader title="Driansh OmniConnect Features" />
        <CardLinks cards={productCards} icons={productIcons} fallback={MessageCircleMore} />
      </Section>

      <Section tone="muted">
        <SectionHeader title="Manage" />
        <CardLinks cards={manageCards} icons={manageIcons} fallback={FileText} />
      </Section>

      <Section tone="white">
        <SectionHeader title="Analyse" />
        <CardLinks cards={analyseCards} icons={analyseIcons} fallback={Activity} />
      </Section>

      <Section tone="muted">
        <SectionHeader title="Productivity" />
        <CardLinks cards={productivityCards} icons={productivityIcons} fallback={Activity} />
      </Section>

      <Section tone="white">
        <SectionHeader title="Integrations" />
        <CardLinks cards={integrationCards} icons={integrationIcons} fallback={Plug} />
        <div className="mt-10 flex justify-center">
          <CtaLink href="/our-products/omniconnect/integrations" variant="outline">
            View all integrations
          </CtaLink>
        </div>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="See Driansh OmniConnect in action"
          description="Book a demo and discover how one inbox can connect every customer conversation."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
