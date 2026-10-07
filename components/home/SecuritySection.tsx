import { Cloud, Server } from "lucide-react";
import { CheckList, CtaLink, MediaSplit, Section, SectionHeader } from "@/components/site";
import { SecurityHeroVisual } from "@/components/visuals/engageone/FeatureVisuals";
import { ENGAGEONE_BASE } from "./links";

const DEPLOYMENT = [
  { title: "Driansh cloud", description: "We host, update and look after it for you.", icon: Cloud },
  { title: "Your own servers", description: "Self-host so conversations and contacts stay with you.", icon: Server },
];

export default function SecuritySection() {
  return (
    <Section tone="muted">
      <MediaSplit visual={<SecurityHeroVisual />}>
        <SectionHeader
          align="left"
          eyebrow="Security and deployment"
          title="Your data, on your terms"
          description="Choose where EngageOne runs and decide exactly who can see and change what."
          className="mb-6 md:mb-8"
        />
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {DEPLOYMENT.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-card p-5 shadow-sm">
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="heading-4 mt-3 text-ink">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
        <CheckList
          items={[
            "Built-in and custom roles with inbox-level access",
            "Audit logs of who changed what, and when",
            "Two-factor authentication and SAML single sign-on",
            "Signed webhooks your systems can verify",
          ]}
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink href={`${ENGAGEONE_BASE}/security`} variant="outline">
            Security details
          </CtaLink>
          <CtaLink href={`${ENGAGEONE_BASE}/pricing`} variant="outline" arrow={false}>
            See pricing
          </CtaLink>
        </div>
      </MediaSplit>
    </Section>
  );
}
