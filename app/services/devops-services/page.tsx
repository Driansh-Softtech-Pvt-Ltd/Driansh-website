import ServicesCards from "@/components/Services-cards";
import { SERVICES_DEVOPS_CARDS1, SERVICES_DEVOPS_CARDS2, SERVICES_DEVOPS_FAQ, WHY_CHOOSE_DEVOPS } from "@/constants/services";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import { PageHero, Section, SectionHeader, CTABanner } from "@/components/site";

export default function DevOpsServices() {
  return (
    <>
      <PageHero
        eyebrow="DevOps"
        title="DevOps Services"
        description="Continuity, automation, agility, governance, and revenue generation, everything is accelerated with a modernized product engineering cycle by DevOps experts of our team. We have specialization in assisting businesses to build resilient and enterprise grade systems with our DevOps development services and other forms of technical assistance. Make the most out of all resources to build the best, most comprehensive, and most sustainable product with zero downtimes or delays in any process with expert DevOps services. Hit the market early and continue harnessing the power of the market with the best DevOps development company, Driansh."
        backgroundImage="/images/services/devops-service/Devops.webp"
      />

      <Section containerClassName="max-w-4xl">
        <SectionHeader title="DevOps Services by the Top DevOps Development Company" />
        <p className="text-lead text-center">
          Continuity, automation, agility, governance, and revenue generation, everything is accelerated with a
          modernized product engineering cycle by DevOps experts of our team. We have specialization in assisting
          businesses to build resilient and enterprise grade systems with our DevOps development services and other
          forms of technical assistance. Make the most out of all resources to build the best, most comprehensive, and
          most sustainable product with zero downtimes or delays in any process with expert DevOps services. Hit the
          market early and continue harnessing the power of the market with the best DevOps development company,
          Driansh.
        </p>
      </Section>

      <ServicesCards tone="muted" title="Benefits of our DevOps Services" data={SERVICES_DEVOPS_CARDS1} />

      <ServicesCards title="Our DevOps Services" data={SERVICES_DEVOPS_CARDS2} />

      <WhyChooseUs data={WHY_CHOOSE_DEVOPS} />

      <FAQ data={SERVICES_DEVOPS_FAQ} />

      <Section size="sm" tone="muted">
        <CTABanner
          title="Does your business need a DevOps development partner?"
          description="Our DevOps development company helps you build cost-effective, performant, and highly interactive video streaming apps."
          cta={{ label: "Get Started Today", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
