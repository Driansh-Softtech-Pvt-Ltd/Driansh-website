import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { PageHero, Section, SectionHeader, CardGrid, FeatureCard, CTABanner } from "@/components/site";

type Integration = {
  name: string;
  logo: string;
  description: string;
  tags: string[];
  /** Detail page, when one exists. */
  href?: string;
};

const integrations: Integration[] = [
  {
    name: "HubSpot",
    logo: "/images/integrations/hubspot.png",
    description:
      "Seamlessly sync customer conversations, contacts, and deals with HubSpot. Track engagement metrics and customer journey across both platforms. Automate lead qualification in real-time.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "CRM",
    logo: "/images/integrations/zoho-crm.png",
    description:
      "Unify customer communication and CRM data in one powerful workspace. Automate lead creation and contact updates from chat conversations. Sync customer activities, and support tickets.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Attio",
    logo: "/images/integrations/attio.png",
    description:
      "Transform conversations into actionable relationship Intelligence. Automatically capture and organize customer Interactions in Attio. Leverage AI-powered Insights to strengthen customer relationships.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Leadsquared",
    logo: "/images/integrations/leadsquared.png",
    description:
      "Convert chat conversations into qualified leads automatically. Track lead engagement and activities across multiple touchpoints. Optimize sales workflows with integrated lead scoring and routing.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Shopify",
    logo: "/images/integrations/shopify.png",
    description:
      "Access customer order history and product details during live chat. Track shopping cart activity and provide personalized support. Automate order status updates and shipping notifications.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "WooCommerce",
    logo: "/images/integrations/woocommerce.png",
    description:
      "View customer purchase history and cart details in real-time. Provide instant support for order-related queries and product Information. Automate responses for common e-commerce scenarios and FAQs.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Dialogflow",
    logo: "/images/integrations/dialogflow.png",
    description:
      "Create Intelligent chatbots powered by Google's NLP technology. Handle common queries automatically with AI-driven conversations. Seamlessly transition between bot and human agents when needed.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Slack",
    logo: "/images/integrations/slack.png",
    href: "/our-products/omniconnect/integrations/slack",
    description:
      "Handle customer conversations directly within your Slack channels. Receive instant notifications for new messages and priority cases. Collaborate with team members without leaving Slack.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Google Translate",
    logo: "/images/integrations/googletranslate.png",
    description:
      "Automatically translate customer messages in real-time. Support customers in 100+ languages without language barriers. Maintain conversation context across multiple languages.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Dyte",
    logo: "/images/integrations/dyte.png",
    description:
      "Launch video and voice calls directly from chat conversations. Share screens and collaborate in real-time with customers. Provide high-quality, secure video support sessions.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Linear",
    logo: "/images/integrations/linear.png",
    description:
      "Convert customer feedback into actionable Linear Issues. Track feature requests and bug reports with automated Issue creation. Streamline development workflows with bidirectional updates.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "GitHub",
    logo: "/images/integrations/github.png",
    description:
      "Create and link GitHub Issues directly from chat conversations. Track development progress and share updates with customers. Automate issue management and pull request notifications.",
    tags: ["Cloud", "Self Hosted", "June 2025"],
  },
  {
    name: "Calendly",
    logo: "/images/integrations/calendly.png",
    description:
      "Schedule customer meetings without leaving the chat Interface. Share available time slots and confirm appointments instantly. Automate meeting reminders and follow-up notifications.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Cal.com",
    logo: "/images/integrations/calcom.png",
    description:
      "Integrate open-source scheduling directly into conversations. Manage availability and bookings with complete customization. Automate scheduling workflows with webhook support.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Stripe",
    logo: "/images/integrations/stripe.png",
    description:
      "Access customer payment history and subscription details instantly. Resolve billing queries with real-time payment Information. Process refunds and manage subscriptions directly from chat.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
];

const CHANNELS = [
  { name: "WhatsApp", href: "/our-products/omniconnect/integrations/whatsapp" },
  { name: "Facebook", href: "/our-products/omniconnect/integrations/facebook" },
  { name: "Instagram", href: "/our-products/omniconnect/integrations/instagram" },
  { name: "Telegram", href: "/our-products/omniconnect/integrations/telegram" },
  { name: "Line", href: "/our-products/omniconnect/integrations/line" },
  { name: "SMS", href: "/our-products/omniconnect/integrations/sms" },
  { name: "Email", href: "/our-products/omniconnect/integrations/email" },
  { name: "Slack", href: "/our-products/omniconnect/integrations/slack" },
];

const getTagColor = (tag: string) =>
  tag === "Available"
    ? "bg-green-50 text-green-700 border-green-200"
    : "bg-brand-soft text-brand border-brand/20";

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect Integrations"
        title="Integrations"
        description="Driansh OmniConnect connects with your favourite apps"
      />

      <Section>
        <CardGrid>
          {integrations.map((integration) => (
            <FeatureCard
              key={integration.name}
              href={integration.href}
              className="flex flex-col"
              icon={
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={160}
                  height={64}
                  className="h-14 w-40 object-contain object-left"
                />
              }
              iconClassName="h-14 w-40 justify-start rounded-none bg-transparent"
              title={integration.name}
              description={integration.description}
            >
              <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                {integration.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
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
              icon={<MessageCircle aria-hidden="true" />}
            >
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Learn more</span>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Need an integration we don't list?"
          description="Talk to our team about connecting Driansh OmniConnect to your tools."
        />
      </Section>
    </>
  );
}
