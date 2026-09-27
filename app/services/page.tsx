import { SERVICE_GROUPS } from "@/content/services";
import { PageHero, Section, SectionHeader, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/services");

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        size="md"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
        eyebrow="Services"
        title="VoIP, Mobile & Web Development Services"
        description="One team for telephony platforms, the apps on top of them and the cloud they run on. Pick a service to see what we build."
        primaryCta={{ label: "Talk to an Engineer", href: "/contact-us" }}
      />
      {SERVICE_GROUPS.map((group, i) => (
        <Section key={group.title} tone={i % 2 === 0 ? "white" : "muted"}>
          <SectionHeader title={group.title} description={group.description} align="left" />
          <CardGrid>
            {group.items.map((s) => {
              const Icon = s.diagram.center.icon;
              return <FeatureCard key={s.path} href={s.path} icon={<Icon />} title={s.name} description={s.hero.subtitle} />;
            })}
          </CardGrid>
        </Section>
      ))}
      <Section size="sm">
        <CTABanner title="Not sure which service you need?" description="Describe your project and we'll recommend the right stack and team." />
      </Section>
    </>
  );
}
