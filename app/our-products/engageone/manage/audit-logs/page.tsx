import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";
import { AuditLogCategoriesVisual, AuditLogActivitiesVisual } from "@/components/visuals/engageone/ManageVisuals";

const FEATURES = [
  {
    title: "Comprehensive tracking: who, what, when, and where",
    description:
      "Get a close look at the actions taken within your account. Audit logs show the specifics of what's been happening, when it occurred, and the originating IP addresses.",
    visual: <AuditLogCategoriesVisual />,
  },
  {
    title: "Tailored tracking for users, accounts, and more",
    description:
      "Track a range of activities related to users, account configurations, or modifications made to automation rules, macros, inboxes, webhooks, and teams.",
    visual: <AuditLogActivitiesVisual />,
  },
];

export default function AuditLogsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Track and trace account activities with ease"
        description="Conduct audits, stay secure, and stay compliant with detailed audit logs."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit visual={feature.visual} reverse={index % 2 === 1}>
            <SectionHeader
              title={feature.title}
              description={feature.description}
              align="left"
              className="mb-0 md:mb-0"
            />
          </MediaSplit>
        </Section>
      ))}

      <Section size="sm">
        <CTABanner
          title="Stay secure and compliant"
          description="See Driansh EngageOne audit logs in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
