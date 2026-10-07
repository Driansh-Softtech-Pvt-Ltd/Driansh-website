import { Building2, Cloud, Server } from "lucide-react";
import { PageHero, Section, SectionHeader, CheckList, CardGrid, FeatureCard, CTABanner, CtaLink } from "@/components/site";
import FAQ from "@/components/FAQ";
import { PricingHeroVisual } from "@/components/visuals/engageone/FeatureVisuals";

const PLANS = [
  {
    name: "Cloud",
    tagline: "Hosted and managed by Driansh.",
    icon: <Cloud />,
    points: [
      "We host, monitor and update EngageOne",
      "Connect your channels and start quickly",
      "Help with setup and onboarding",
      "Support from the Driansh team",
    ],
    cta: { label: "Request a demo", href: "/our-products/engageone/request-demo" },
  },
  {
    name: "Self-hosted",
    tagline: "Installed on your servers or private cloud.",
    icon: <Server />,
    points: [
      "Your data stays on your infrastructure",
      "Installation and setup by Driansh",
      "Help with upgrades",
      "Support from the Driansh team",
    ],
    cta: { label: "Talk to our team", href: "/contact-us" },
  },
  {
    name: "Enterprise",
    tagline: "For larger teams with special needs.",
    icon: <Building2 />,
    points: [
      "Cloud or self-hosted",
      "Custom integrations with your systems",
      "Dedicated support contact",
      "Service levels agreed in your contract",
    ],
    cta: { label: "Talk to our team", href: "/contact-us" },
  },
];

const PRICE_FACTORS = [
  "How many agents will use EngageOne.",
  "Which channels you want to connect.",
  "Cloud or self-hosted deployment.",
  "Any custom work or extra support you need.",
];

const FAQS = [
  {
    question: "Why is there no price on this page?",
    answer:
      "Every setup is different. The price depends on your number of agents, your channels and how you want to deploy. Tell us what you need and we will send a clear quote.",
  },
  {
    question: "Can we start on the cloud and move to self-hosted later?",
    answer: "Yes. Talk to us about your plans and we will help you choose a path that fits.",
  },
  {
    question: "Who looks after a self-hosted setup?",
    answer:
      "It runs on your servers, and Driansh helps with installation, upgrades and support. We agree the details with you before you start.",
  },
  {
    question: "Can we see EngageOne before we decide?",
    answer: "Yes. Book a demo and we will show you the product with your own use case in mind.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne plans"
        title="Plans that fit how you work"
        description="Choose the Driansh cloud, your own servers, or an enterprise setup. We will shape a plan around your team and send you a quote."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        secondaryCta={{ label: "Talk to our team", href: "/contact-us" }}
        visual={<PricingHeroVisual />}
      />

      <Section>
        <SectionHeader eyebrow="Plans" title="Three ways to run EngageOne" description="Every plan includes the EngageOne platform and support from Driansh." />
        <CardGrid columns={3}>
          {PLANS.map((plan) => (
            <FeatureCard key={plan.name} title={plan.name} description={plan.tagline} icon={plan.icon} className="flex flex-col">
              <CheckList items={plan.points} className="mt-6 [&_li]:text-base" />
              <CtaLink href={plan.cta.href} className="mt-8 w-full">
                {plan.cta.label}
              </CtaLink>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="Pricing"
            title="What your price depends on"
            description="We do not publish fixed prices. Your quote is based on what you actually use."
            align="left"
            className="mb-0 md:mb-0"
          />
          <CheckList items={PRICE_FACTORS} />
        </div>
      </Section>

      <FAQ title="Pricing questions" data={FAQS} />

      <Section size="sm">
        <CTABanner
          title="Get a quote for your team"
          description="Tell us about your agents, channels and setup. We will come back with a plan."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
