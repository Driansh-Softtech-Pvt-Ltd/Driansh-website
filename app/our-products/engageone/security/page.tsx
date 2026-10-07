import { Cloud, Inbox, KeyRound, Server, Webhook } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import {
  AuditLogVisual,
  CustomRolesVisual,
  SecurityHeroVisual,
  SignInVisual,
} from "@/components/visuals/engageone/FeatureVisuals";

const DEPLOYMENT = [
  {
    title: "Driansh cloud",
    description: "We host, run and update EngageOne for you. Your team just signs in and starts working.",
    icon: <Cloud />,
  },
  {
    title: "Your own servers or private cloud",
    description:
      "Install EngageOne on infrastructure you control. When you self-host, your conversations and contact data stay on your servers.",
    icon: <Server />,
  },
];

const ROLE_POINTS = [
  "Start with the built-in administrator and agent roles.",
  "Create custom roles with only the permissions a person needs.",
  "Limit access to all conversations, unassigned ones, or only their own.",
  "Decide who can manage contacts, reports and the help center.",
];

const AUDIT_POINTS = [
  "See sign-ins and sign-outs for your team.",
  "Track changes to inboxes, teams, automation rules, macros and webhooks.",
  "Know who made a change and when it happened.",
];

const SIGN_IN_POINTS = [
  "Two-factor authentication with an authenticator app and backup codes.",
  "Single sign-on with SAML, so people sign in with your company identity provider.",
  "Map SAML users to roles in EngageOne.",
];

const MORE = [
  {
    title: "Inbox-level access",
    description: "Agents only see the inboxes they are added to. Keep teams and brands apart.",
    icon: <Inbox />,
  },
  {
    title: "Signed webhooks",
    description: "Webhooks can carry a signature, so your systems can check a request really came from EngageOne.",
    icon: <Webhook />,
  },
  {
    title: "Strong sign-in",
    description: "Add two-factor authentication or single sign-on for every account user.",
    icon: <KeyRound />,
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Security"
        title="Your data, your rules"
        description="Run EngageOne in the Driansh cloud or on your own servers. Control who sees what, and keep a record of every important change."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        secondaryCta={{ label: "Talk to us", href: "/contact-us" }}
        visual={<SecurityHeroVisual />}
      />

      <Section>
        <SectionHeader
          eyebrow="Deployment"
          title="Choose where EngageOne runs"
          description="Pick the setup that matches your IT and data rules."
        />
        <CardGrid columns={2}>
          {DEPLOYMENT.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<CustomRolesVisual />}>
          <SectionHeader
            eyebrow="Roles and permissions"
            title="Give each person the right access"
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={ROLE_POINTS} />
        </MediaSplit>
      </Section>

      <Section>
        <MediaSplit visual={<AuditLogVisual />} reverse>
          <SectionHeader
            eyebrow="Audit logs"
            title="A clear record of changes"
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={AUDIT_POINTS} />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<SignInVisual />}>
          <SectionHeader
            eyebrow="Sign-in"
            title="Safer sign-in for your team"
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={SIGN_IN_POINTS} />
        </MediaSplit>
      </Section>

      <Section>
        <CardGrid columns={3}>
          {MORE.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Talk to us about your security needs"
          description="We will walk you through deployment options and access controls."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
