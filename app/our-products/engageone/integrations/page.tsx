import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Braces,
  Facebook,
  Instagram,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  Send,
  Slack,
  Smartphone,
  Sparkles,
  Webhook,
} from "lucide-react";
import { PageHero, Section, SectionHeader, CardGrid, FeatureCard, CTABanner } from "@/components/site";

type Integration = {
  name: string;
  /** Brand logo, when we have one. */
  logo?: string;
  /** Fallback icon when there is no logo. */
  icon?: LucideIcon;
  description: string;
  category: string;
  /** Detail page, when one exists. */
  href?: string;
};

// Apps that ship with the product today.
const integrations: Integration[] = [
  {
    name: "Slack",
    logo: "/images/integrations/slack.png",
    href: "/our-products/engageone/integrations/slack",
    description:
      "Get new conversations in a Slack channel and reply from a thread. Your answer reaches the customer from your EngageOne profile.",
    category: "Collaboration",
  },
  {
    name: "Shopify",
    logo: "/images/integrations/shopify.png",
    description:
      "See a customer’s Shopify orders beside the chat. Answer order questions without switching to your store admin.",
    category: "Commerce",
  },
  {
    name: "Linear",
    logo: "/images/integrations/linear.png",
    description:
      "Create a Linear issue from a conversation, or link an existing one. Bug reports and requests reach your product team with full context.",
    category: "Productivity",
  },
  {
    name: "Notion",
    icon: BookOpen,
    description:
      "Connect your Notion workspace so the AI assistant can use your pages and databases when it drafts answers.",
    category: "Knowledge",
  },
  {
    name: "Dialogflow",
    logo: "/images/integrations/dialogflow.png",
    description:
      "Connect a Dialogflow agent to an inbox. It handles the first questions and hands the chat to a person when needed.",
    category: "Chatbots",
  },
  {
    name: "Google Translate",
    logo: "/images/integrations/googletranslate.png",
    description:
      "Translate customer messages into your agent’s language with one click, so your team can help customers in any language.",
    category: "Productivity",
  },
  {
    name: "OpenAI",
    icon: Sparkles,
    description:
      "Use your OpenAI key for reply suggestions, conversation summaries, rephrasing, spelling fixes and label suggestions.",
    category: "AI",
  },
  {
    name: "Dyte video calls",
    logo: "/images/integrations/dyte.png",
    description:
      "Start a video or voice call with a customer straight from the conversation when chat is not enough.",
    category: "Calling",
  },
  {
    name: "LeadSquared",
    logo: "/images/integrations/leadsquared.png",
    description:
      "Create leads in LeadSquared from new contacts and log conversation activity, so sales sees the full story.",
    category: "CRM",
  },
  {
    name: "Webhooks",
    icon: Webhook,
    description:
      "Subscribe to events such as new conversations, new messages and contact updates, and receive them on your own server.",
    category: "Developers",
  },
  {
    name: "Dashboard apps",
    icon: LayoutDashboard,
    description:
      "Embed your own web app inside the conversation screen to show orders, payments or account details next to the chat.",
    category: "Developers",
  },
  // Planned integrations.
  {
    name: "HubSpot",
    logo: "/images/integrations/hubspot.png",
    description: "Keep HubSpot contacts and deals in step with your conversations, so sales and support see the same customer history.",
    category: "Coming soon",
  },
  {
    name: "Zoho CRM",
    logo: "/images/integrations/zoho-crm.png",
    description: "Create and update Zoho CRM leads and contacts from chats, and log each conversation against the right record.",
    category: "Coming soon",
  },
  {
    name: "Attio",
    logo: "/images/integrations/attio.png",
    description: "Save customer conversations to Attio records so your team has every interaction in one place.",
    category: "Coming soon",
  },
  {
    name: "WooCommerce",
    logo: "/images/integrations/woocommerce.png",
    description: "See a shopper’s WooCommerce orders and cart beside the chat to answer order questions faster.",
    category: "Coming soon",
  },
  {
    name: "GitHub",
    logo: "/images/integrations/github.png",
    description: "Open a GitHub issue from a conversation and keep the customer posted as the fix moves forward.",
    category: "Coming soon",
  },
  {
    name: "Calendly",
    logo: "/images/integrations/calendly.png",
    description: "Share your Calendly availability in the chat and let customers book a meeting without leaving the conversation.",
    category: "Coming soon",
  },
  {
    name: "Cal.com",
    logo: "/images/integrations/calcom.png",
    description: "Offer Cal.com booking links in conversations and keep appointments in sync with your calendar.",
    category: "Coming soon",
  },
  {
    name: "Stripe",
    logo: "/images/integrations/stripe.png",
    description: "Look up a customer’s Stripe payments and subscriptions from the chat to settle billing questions quickly.",
    category: "Coming soon",
  },
];

const CHANNELS: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "WhatsApp", href: "/our-products/engageone/integrations/whatsapp", icon: MessageCircle },
  { name: "Facebook", href: "/our-products/engageone/integrations/facebook", icon: Facebook },
  { name: "Instagram", href: "/our-products/engageone/integrations/instagram", icon: Instagram },
  { name: "TikTok", href: "/our-products/engageone/integrations/tiktok", icon: Music2 },
  { name: "Telegram", href: "/our-products/engageone/integrations/telegram", icon: Send },
  { name: "LINE", href: "/our-products/engageone/integrations/line", icon: MessageCircle },
  { name: "SMS", href: "/our-products/engageone/integrations/sms", icon: Smartphone },
  { name: "Twilio", href: "/our-products/engageone/integrations/twilio", icon: Phone },
  { name: "Email", href: "/our-products/engageone/integrations/email", icon: Mail },
  { name: "API channel", href: "/our-products/engageone/integrations/api-channel", icon: Braces },
  { name: "Slack", href: "/our-products/engageone/integrations/slack", icon: Slack },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        size="md"
        eyebrow="EngageOne integrations"
        title="Integrations"
        description="Connect Driansh EngageOne to your messaging channels and the apps your team already uses."
      />

      <Section>
        <SectionHeader
          title="Apps"
          description="Connect the tools your team already uses. Each app is set up from the integrations screen in EngageOne."
        />
        <CardGrid>
          {integrations.map((integration) => (
            <FeatureCard
              key={integration.name}
              href={integration.href}
              className="flex flex-col"
              icon={
                integration.logo ? (
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={160}
                    height={64}
                    className="h-14 w-40 object-contain object-left"
                  />
                ) : (
                  integration.icon && <integration.icon aria-hidden="true" />
                )
              }
              iconClassName={integration.logo ? "h-14 w-40 justify-start rounded-none bg-transparent" : "h-14 w-14"}
              title={integration.name}
              description={integration.description}
            >
              <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
                <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {integration.category}
                </span>
                {integration.href && <span className="ml-auto text-sm font-semibold text-brand">Learn more</span>}
              </div>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader title="Channels" />
        <CardGrid columns={4}>
          {CHANNELS.map((channel) => (
            <FeatureCard
              key={channel.href}
              href={channel.href}
              title={channel.name}
              icon={<channel.icon aria-hidden="true" />}
            >
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Learn more</span>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
          title="Need an integration we don't list?"
          description="Talk to our team about connecting Driansh EngageOne to your tools."
        />
      </Section>
    </>
  );
}
