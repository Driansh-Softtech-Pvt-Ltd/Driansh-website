import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner } from "@/components/site";
import { LiveChatWidgetsVisual, MultiBrandInboxVisual } from "@/components/visuals/engageone/WorkspaceVisuals";

const BRAND = {
  title: "A live chat that fits your brand",
  description:
    "Driansh EngageOne live chat widgets can be customized based on your brand, language, and customer journey. Configure everything from greeting messages to behavior on different pages.",
  points: [
    "Multilingual support with configurable widget text.",
    "Continue conversations over email when visitors go offline.",
    "Support emojis, file uploads, and rich message content.",
    "Customize widget colors, position, and branding.",
    "Typing indicators to improve the user experience.",
    "Distraction-free popup window for focused messaging.",
  ],
};

const MULTI_BRAND = {
  eyebrow: "Multi-brand inboxes",
  title: "Manage all your brands in one account",
  description:
    "Create more than one inbox for your brand and define different access levels for support teams. Route chats from multiple websites or products into a single EngageOne workspace while keeping visibility, permissions, and reporting separate.",
};

export default function WebsiteLiveChatPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Simple live chat software for businesses"
        description="Improve your customer experience using a live chat on your website. Engage visitors the moment they land on your site and convert conversations into lasting relationships."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        secondaryCta={{ label: "Talk to our team", href: "/contact-us" }}
      />

      <Section>
        <MediaSplit visual={<LiveChatWidgetsVisual />}>
          <SectionHeader
            title={BRAND.title}
            description={BRAND.description}
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={BRAND.points} />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<MultiBrandInboxVisual />} reverse>
          <SectionHeader
            eyebrow={MULTI_BRAND.eyebrow}
            title={MULTI_BRAND.title}
            description={MULTI_BRAND.description}
            align="left"
            className="mb-0 md:mb-0"
          />
        </MediaSplit>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Start talking to your website visitors"
          description="See Driansh EngageOne live chat in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
