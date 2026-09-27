import { PageHero, Section, SectionHeader, MediaSplit, CTABanner } from "@/components/site";

const FEATURES = [
  {
    title: "Comprehensive tracking: who, what, when, and where",
    description:
      "Get a close look at the actions taken within your account. Audit Logs reveal the specifics of what's been happening, when it occurred, and the originating IP addresses.",
    image: "/images/manage/audit-logs/audit-log-categories.webp",
    imageAlt: "Audit log categories",
  },
  {
    title: "Tailored tracking for users, accounts, and more",
    description:
      "Track a range of activities related to users, account configurations, or modifications made to automation rules, macros, inboxes, webhooks, and teams.",
    image: "/images/manage/audit-logs/audit-log-activities.webp",
    imageAlt: "Audit log activities",
  },
];

export default function AuditLogsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="OmniConnect"
        title="Track and trace account activities with ease"
        description="Conduct audits, stay secure, and stay compliant with detailed audit logs"
        primaryCta={{ label: "Book a Demo", href: "/contact-us" }}
      />

      {FEATURES.map((feature, index) => (
        <Section key={feature.title} tone={index % 2 === 0 ? "white" : "muted"}>
          <MediaSplit image={feature.image} imageAlt={feature.imageAlt} reverse={index % 2 === 1} framed>
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
          description="See Driansh OmniConnect audit logs in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
