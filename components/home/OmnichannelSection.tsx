import { CtaLink, Section, SectionHeader } from "@/components/site";
import { ChannelsVisual } from "@/components/visuals/engageone/OverviewVisuals";
import NumberedFeatures from "./NumberedFeatures";
import { ENGAGEONE_BASE } from "./links";

const FEATURES = [
  {
    title: "Bring every channel together",
    description: "Website chat, WhatsApp, Instagram, Messenger, email, SMS and more each become an inbox in the same workspace.",
  },
  {
    title: "One profile per customer",
    description: "A customer who writes on WhatsApp and later emails is still one contact, with one history.",
  },
  {
    title: "Route work automatically",
    description: "Send conversations to the right team and keep each agent within the number of chats they can handle.",
  },
  {
    title: "A chat widget for every site",
    description: "Run separate widgets for each website or brand, styled in your own colours, all answered from one place.",
  },
  {
    title: "Reply from anywhere",
    description: "Use the mobile apps to keep conversations moving when you are away from your desk.",
  },
];

export default function OmnichannelSection() {
  return (
    <Section tone="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:order-2">
          <SectionHeader
            align="left"
            eyebrow="Omnichannel"
            title="Every channel, one conversation history"
            description="Customers pick the channel. Your team works from one inbox and never loses the thread."
            className="mb-8 md:mb-10"
          />
          <NumberedFeatures items={FEATURES} />
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaLink href={`${ENGAGEONE_BASE}/omnichannel-inbox`}>Explore the omnichannel inbox</CtaLink>
            <CtaLink href={`${ENGAGEONE_BASE}/integrations`} variant="outline" arrow={false}>
              All integrations
            </CtaLink>
          </div>
        </div>
        <div className="lg:order-1">
          <ChannelsVisual />
        </div>
      </div>
    </Section>
  );
}
