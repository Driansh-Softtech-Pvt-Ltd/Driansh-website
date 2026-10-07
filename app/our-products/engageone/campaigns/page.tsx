import { CalendarClock, Image as ImageIcon, MessageCircle, MousePointerClick, Smartphone, Tag } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import {
  CampaignPersonaliseVisual,
  CampaignsHeroVisual,
  LiveChatCampaignVisual,
  TemplateBuilderVisual,
} from "@/components/visuals/engageone/FeatureVisuals";

const TEMPLATE_POINTS = [
  "Add a text or image header.",
  "Use variables in the body, like the customer's name.",
  "Add quick reply or website buttons.",
  "Submit to Meta for approval and track the status in EngageOne.",
];

const CAMPAIGN_POINTS = [
  "Pick an approved template and choose who gets it by label.",
  "Fill variables with contact fields such as the customer's name.",
  "Set a fallback value for when a field is empty, or skip those customers.",
  "Send now or schedule it for later.",
  "See how many messages were sent, delivered, read or failed.",
];

const CAMPAIGN_TYPES = [
  {
    title: "WhatsApp campaigns",
    description: "Send approved templates to a labelled group of contacts, with personal details in every message.",
    icon: <MessageCircle />,
  },
  {
    title: "SMS campaigns",
    description: "Send one-off SMS messages to contacts with a chosen label from your SMS inbox.",
    icon: <Smartphone />,
  },
  {
    title: "Live chat campaigns",
    description: "Greet website visitors with a message based on the page they are on and how long they stay.",
    icon: <MousePointerClick />,
  },
];

const EXTRAS = [
  { title: "Label-based audiences", description: "Reuse the labels your team already applies to contacts.", icon: <Tag /> },
  { title: "Image headers", description: "Add a picture to a WhatsApp template to make it stand out.", icon: <ImageIcon /> },
  { title: "Scheduling", description: "Plan a campaign ahead and let it go out on time.", icon: <CalendarClock /> },
];

export default function CampaignsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne campaigns"
        title="Reach customers first, on the channels they read"
        description="Build WhatsApp templates, send personal campaigns to the right people, and start conversations with website visitors. All from EngageOne."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        secondaryCta={{ label: "Talk to our team", href: "/contact-us" }}
        visual={<CampaignsHeroVisual />}
      />

      <Section>
        <SectionHeader
          eyebrow="Campaign types"
          title="One place for outbound messages"
          description="Pick the channel that fits the message."
        />
        <CardGrid columns={3}>
          {CAMPAIGN_TYPES.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<TemplateBuilderVisual />}>
          <SectionHeader
            eyebrow="WhatsApp templates"
            title="Create templates without leaving EngageOne"
            description="No need to switch to another tool. Write the template, then send it to Meta for review."
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={TEMPLATE_POINTS} />
        </MediaSplit>
      </Section>

      <Section>
        <MediaSplit visual={<CampaignPersonaliseVisual />} reverse>
          <SectionHeader
            eyebrow="WhatsApp campaigns"
            title="Personal messages, sent at scale"
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={CAMPAIGN_POINTS} />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<LiveChatCampaignVisual />}>
          <SectionHeader
            eyebrow="Live chat campaigns"
            title="Say hello before visitors ask"
            description="Show a proactive message to people on a chosen page after a set time. Replies land in your inbox like any other chat."
            align="left"
            className="mb-0 md:mb-0"
          />
        </MediaSplit>
      </Section>

      <Section>
        <CardGrid columns={3}>
          {EXTRAS.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Plan your first campaign with us"
          description="See templates, WhatsApp campaigns and live chat campaigns in a short demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
