import Image from "next/image";
import { OUR_PRODUCTS } from "@/constants";
import { Activity, BarChart, Building, ChevronDown, LucideLayoutDashboard, Target } from "lucide-react";
import { benefits, keyFeaturesWithDesc, additionalFeaturesWithDesc, crm } from "@/constants/function";
import {
  PageHero,
  Section,
  SectionHeader,
  CardGrid,
  FeatureCard,
  CheckList,
  CTABanner,
  ctaClasses,
} from "@/components/site";
import { cn } from "@/lib/utils";

const MODULES = [
  {
    title: "Dashboard overview",
    icon: LucideLayoutDashboard,
    description:
      "The Dashboard offers a quick view of your operational setup, displaying counts for active Campaigns and core Processes. It tracks team resources, showing the number of available Agents and Supervisors. Functionally, the Call Summary monitors performance, detailing Inbound and Outbound volumes. This allows administrators to immediately assess call efficiency using Connected and Not Connected metrics.",
  },
  {
    title: "Monitor",
    icon: Target,
    description:
      "Real-time monitoring dashboard that displays live Agent Status, Call Activity, and Queue Performance. Admins can track ongoing calls, idle time, duration, and workflow direction. It provides instant visibility into alerts and operational bottlenecks to ensure smooth contact center performance.",
  },
  {
    title: "Tenant",
    icon: Building,
    description:
      "Tenant administration lets Super Admins manage organization-level Business Groups. It supports adding new tenants, configuring their users, assigning permissions, activating or deactivating groups, and mapping SSO profiles. This ensures structured management of multiple customers under one platform.",
  },
  {
    title: "Management",
    icon: Activity,
    description:
      "This module handles end-to-end configuration of outbound and inbound campaigns. Admins can assign supervisors, set dialer rules, configure DNC & DID mappings, manage lists, and enable auto-disposition. It centralizes everything needed to run large-scale call campaigns efficiently.",
  },
  {
    title: "Reports",
    icon: BarChart,
    description:
      "The Reporting module provides detailed analytics for calls, agents, and campaigns. It includes performance dashboards, call summaries, agent productivity logs, and hourly traffic reports. Admins can export reports, monitor KPIs, and make data-driven decisions based on real-time and historical insights.",
  },
];

type IconCard = { title: string; description: string; icon: React.ComponentType<{ className?: string }> };

function IconCards({ items }: { items: IconCard[] }) {
  return (
    <CardGrid>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={<Icon aria-hidden="true" />}
          />
        );
      })}
    </CardGrid>
  );
}

export default function ContactCenterPage() {
  const contactCenterProduct = OUR_PRODUCTS.find((product) => product.id === "contactCenter");

  if (!contactCenterProduct) return null;

  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={contactCenterProduct.title}
        description={contactCenterProduct.description}
        image={contactCenterProduct.image}
        imageAlt={contactCenterProduct.title}
      >
        <CheckList items={contactCenterProduct.points} theme="dark" className="mt-8" />
      </PageHero>

      {/* Platform modules */}
      <Section tone="muted">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-ink">{module.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{module.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:sticky lg:top-28">
            <Image
              src="/images/contactcenter/all-combine.png"
              alt="Driansh Contact Center overview"
              width={800}
              height={800}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full rounded-2xl border border-slate-200 bg-card shadow-xl dark:border-white/10 dark:brightness-90"
            />
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeader
          title="Benefits"
          description="Driansh Contact Center combines role-based security with a multi-tenant architecture, intelligent automation that reduces manual work, and comprehensive workforce management across 7 process types. It provides advanced lead management with flexible ingestion, compliance governance, and real-time analytics with live monitoring and dashboards for data-driven decision-making."
        />
        <IconCards items={benefits} />
      </Section>

      {/* Key features */}
      <Section tone="muted">
        <SectionHeader
          title="Key features"
          description="Driansh Contact Center includes calling, IVR, ACD, queue management, advanced dialers, reporting, and agent tools. It supports multi-tenant deployment, multi-lingual operations, CRM integrations, add-on modules, and real-time monitoring for efficient and scalable customer engagement."
        />
        <IconCards items={keyFeaturesWithDesc} />

        <details className="group mt-12">
          <summary className={cn(ctaClasses(), "mx-auto flex w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden")}>
            <span className="group-open:hidden">Show more features</span>
            <span className="hidden group-open:inline">Show fewer features</span>
            <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="mt-12">
            <IconCards items={additionalFeaturesWithDesc} />
          </div>
        </details>
      </Section>

      {/* CRM */}
      <Section>
        <SectionHeader
          title="CRM integrations"
          description="Connect Driansh Contact Center to the CRM and collaboration tools your team already uses, so leads, call outcomes and customer data stay in sync."
        />
        <IconCards items={crm} />
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Ready to modernize your contact center?"
          description="Talk to our team about deploying Driansh Contact Center for your business."
        />
      </Section>
    </>
  );
}
