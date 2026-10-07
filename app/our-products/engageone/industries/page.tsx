import { Headphones, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { PageHero, Section, SectionHeader, CardGrid, FeatureCard, CheckList, CTABanner } from "@/components/site";
import { RestaurantChatVisual } from "@/components/visuals/engageone/IndustryVisuals";

const BASE = "/our-products/engageone";

const INDUSTRIES = [
  {
    title: "Restaurants",
    description:
      "A chat bot that shows your menu, takes orders and table bookings, sends a payment link and a tax invoice, and keeps customers updated from a kitchen dashboard.",
    href: `${BASE}/industries/restaurants`,
    icon: UtensilsCrossed,
  },
  {
    title: "E-commerce",
    description:
      "Order and delivery questions in one inbox, store orders shown beside the chat, WhatsApp offers and order updates, and an AI Assistant for shipping and returns.",
    href: `${BASE}/industries/ecommerce`,
    icon: ShoppingBag,
  },
  {
    title: "Contact centers",
    description:
      "Queues across chat, email, WhatsApp, social and SMS, with auto-assignment, SLAs, phone and WhatsApp calls, and detailed reports.",
    href: `${BASE}/industries/contact-centers`,
    icon: Headphones,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne industries"
        title="One platform, set up for your kind of business"
        description="Every business talks to customers in its own way. See how teams in different industries use EngageOne for orders, support and sales."
        visual={<RestaurantChatVisual />}
        primaryCta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        secondaryCta={{ label: "Contact us", href: "/contact-us" }}
      />

      <Section tone="white">
        <SectionHeader title="Choose your industry" description="Each page shows the features and flows that matter most for that kind of team." />
        <CardGrid>
          {INDUSTRIES.map(({ title, description, href, icon: Icon }) => (
            <FeatureCard key={href} href={href} title={title} description={description} icon={<Icon aria-hidden="true" />}>
              <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more</span>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="What every industry gets"
          description="The same core product sits under each setup, so you can start small and add more later."
        />
        <div className="mx-auto max-w-3xl">
          <CheckList
            columns={2}
            items={[
              "One shared inbox for every channel",
              "EngageOne AI Assistant for common questions",
              "Bots, automations and canned responses",
              "Teams, labels and auto-assignment",
              "Help center on your own domain",
              "Reports and customer ratings",
            ]}
          />
        </div>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Don't see your industry?"
          description="Tell us how you work with customers today. We will show you how EngageOne can fit."
          cta={{ label: "Request a demo", href: `${BASE}/request-demo` }}
        />
      </Section>
    </>
  );
}
