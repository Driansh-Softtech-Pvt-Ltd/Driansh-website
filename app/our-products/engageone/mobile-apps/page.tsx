import { PageHero, Section, CTABanner } from "@/components/site";
import { MobileAppVisual } from "@/components/visuals/engageone/WorkspaceVisuals";

export default function MobileAppsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Manage conversations on the go"
        description="Reply to customers, pick up assigned conversations and get notified about new messages from the Driansh EngageOne mobile apps."
        visual={<MobileAppVisual />}
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
      />

      <Section size="sm">
        <CTABanner
          title="Take your inbox wherever you go"
          description="See the Driansh EngageOne mobile apps in action with a personalised demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
