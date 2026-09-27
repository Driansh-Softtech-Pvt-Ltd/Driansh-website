import { SOLUTION_GROUPS } from "@/content/solutions";
import { PageHero, Section, SectionHeader, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/solutions");

export default function SolutionsHubPage() {
  return (
    <>
      <PageHero
        size="md"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }]}
        eyebrow="Solutions"
        title="VoIP Solutions for Providers, Contact Centers & Businesses"
        description="Ready-to-customise platforms for switching, PBX hosting, billing, contact centers and collaboration. Choose a solution to see its features."
        primaryCta={{ label: "Book a Free Demo", href: "/contact-us" }}
      />
      {SOLUTION_GROUPS.map((group, i) => (
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
        <CTABanner title="Need something in between?" description="Most of our solutions can be combined or customised. Tell us what you need." cta={{ label: "Book a Free Demo", href: "/contact-us" }} />
      </Section>
    </>
  );
}
