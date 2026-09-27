import ServicesCards from "@/components/Services-cards";
import {
  SERVICES_PRODUCT_CARDS1,
  SERVICES_PRODUCT_CARDS2,
  SERVICES_PRODUCT_CARDS3,
  SERVICES_PRODUCT_CARDS4,
  SERVICES_VOIP_TESTING_FAQ,
} from "@/constants/services";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function ProductEngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Engineering"
        title="Expert Product Engineering Services"
        description="From concept to launch, we design, develop, and scale high-performance software products that drive measurable business outcomes."
        backgroundImage="/images/services/product-engineering-service/product-engineering-page-background-image.png"
      />

      <Section>
        <MediaSplit
          image="/images/services/product-engineering-service/Neutral-Design-Thinking-Brainstorm.webp"
          imageAlt="What is Product Engineering"
        >
          <SectionHeader title="What is Product Engineering?" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead">
            Product engineering is the end-to-end process of designing, developing, testing, deploying, and maintaining
            software products. It combines technical expertise, user experience design, and business strategy to turn
            innovative ideas into scalable, market-ready solutions.
          </p>
        </MediaSplit>
      </Section>

      <ServicesCards
        tone="muted"
        title="Why Businesses Trust Driansh for Product Engineering"
        subtitle="At Driansh, we don't just build software we engineer scalable, secure, and intelligent products that deliver real business value. With 15+ years of experience in VoIP, AI, FinTech, and Healthcare, we bring a strategic approach to product development, from ideation to growth."
        data={SERVICES_PRODUCT_CARDS3}
      />

      <Section>
        <SectionHeader
          title="Our Product Engineering Services"
          description="Top reasons to choose us as your development partner for FreeSWITCH projects"
        />
        <CardGrid>
          {SERVICES_PRODUCT_CARDS2.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              iconClassName="h-auto w-fit bg-transparent"
              title={service.title}
            >
              <CheckList items={service.description} className="mt-5 [&_li]:text-base" />
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <ServicesCards
        tone="muted"
        title="Industries We Serve"
        subtitle="Top reasons to choose us as your development partner for FreeSWITCH projects"
        data={SERVICES_PRODUCT_CARDS4}
      />

      <ServicesCards
        title="Our VoIP Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_PRODUCT_CARDS1}
      />

      <FAQ data={SERVICES_VOIP_TESTING_FAQ} tone="muted" />

      <Section size="sm">
        <CTABanner
          title="Ready to Transform Your Ideas Into Reality?"
          description="Let's discuss how our product engineering services can help your business grow."
          cta={{ label: "Contact Us Today", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
