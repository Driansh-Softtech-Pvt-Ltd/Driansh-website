import { BarChart3, Smartphone, Megaphone, ShoppingBag, Tag, Zap } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import {
  EcommerceAssistantVisual,
  EcommerceCampaignVisual,
  EcommerceInboxVisual,
} from "@/components/visuals/engageone/IndustryVisuals";
import { HelpCenterVisual } from "@/components/visuals/engageone/OverviewVisuals";

const BASE = "/our-products/engageone";

const SPLITS = [
  {
    eyebrow: "Shared inbox",
    title: "Order and delivery questions in one inbox",
    description:
      "Shoppers ask about orders on your website, WhatsApp, Instagram and email. EngageOne puts all of those chats in one list, so nothing waits in a forgotten app.",
    points: [
      "Website chat, WhatsApp, Instagram, Messenger and email together",
      "Store orders shown beside the chat with the Shopify integration",
      "Labels like \"returns\" or \"delivery\" to sort the work",
    ],
    visual: <EcommerceInboxVisual />,
  },
  {
    eyebrow: "WhatsApp campaigns",
    title: "Send offers and order updates on WhatsApp",
    description:
      "Use approved WhatsApp templates to tell customers about a sale, a restock or a shipped order. When they reply, the chat lands in your inbox.",
    points: ["Template messages to a list of contacts", "Schedule a campaign for later", "Replies handled by your team or the AI Assistant"],
    visual: <EcommerceCampaignVisual />,
  },
  {
    eyebrow: "AI Assistant",
    title: "Answer shipping and returns questions any time",
    description:
      "The EngageOne AI Assistant reads your help articles and policies. It answers the common questions and hands harder ones to your team.",
    points: ["Answers from your own content", "Hand-off to a person when needed", "Works on website chat and other channels"],
    visual: <EcommerceAssistantVisual />,
  },
  {
    eyebrow: "Help center",
    title: "Let shoppers help themselves",
    description:
      "Publish articles on sizes, delivery times, payments and returns. Customers can search them, and agents can share them in a chat.",
    points: ["Articles and categories on your own domain", "Search built in", "The same content powers the AI Assistant"],
    visual: <HelpCenterVisual />,
  },
];

const EXTRAS = [
  { title: "Canned responses", description: "Save replies for tracking links, refund steps and exchange rules.", icon: Zap },
  { title: "Automations", description: "Label and assign chats about returns or payments without manual work.", icon: Tag },
  { title: "Website campaigns", description: "Show a message to visitors on a product or checkout page.", icon: Megaphone },
  { title: "Contact segments", description: "Group customers by details you track, for follow-ups and campaigns.", icon: ShoppingBag },
  { title: "Reports and CSAT", description: "See reply times and how shoppers rate your support.", icon: BarChart3 },
  { title: "Mobile apps", description: "Reply to shoppers from your phone when you are away from your desk.", icon: Smartphone },
];

export default function EcommercePage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne for e-commerce"
        title="Support shoppers before and after they buy"
        description="Answer order questions from every channel in one inbox. See a customer's store orders while you chat, send WhatsApp offers and updates, and let the AI Assistant handle the usual questions."
        visual={<EcommerceInboxVisual />}
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
        <SectionHeader title="More tools for online stores" />
        <CardGrid>
          {EXTRAS.map(({ title, description, icon: Icon }) => (
            <FeatureCard key={title} title={title} description={description} icon={<Icon aria-hidden="true" />} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Bring your store's conversations together"
          description="See how EngageOne works with your channels and your Shopify store."
          cta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        />
      </Section>
    </>
  );
}
