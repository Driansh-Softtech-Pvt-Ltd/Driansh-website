import { PageHero, Section, CTABanner, CtaLink } from "@/components/site";
import { MobileAppVisual } from "@/components/visuals/engageone/WorkspaceVisuals";

// The app-store badges have no store listing yet, so they point to /contact-us.
const STORE_LINKS = [
  { label: "Download on the App Store", href: "/contact-us" },
  { label: "Get it on Google Play", href: "/contact-us" },
];

export default function MobileAppsPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Manage conversations on the go"
        description="Don't miss out on the new customers, download our mobile apps and talk to your customers easily."
        visual={<MobileAppVisual />}
        primaryCta={null}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          {STORE_LINKS.map((store) => (
            <CtaLink key={store.label} href={store.href} variant="outline-light" arrow={false}>
              {store.label}
            </CtaLink>
          ))}
        </div>
      </PageHero>

      <Section size="sm">
        <CTABanner
          title="Take your inbox wherever you go"
          description="See the Driansh EngageOne mobile apps in action with a personalised demo."
          cta={{ label: "Book a Demo", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
