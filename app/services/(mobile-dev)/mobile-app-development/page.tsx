import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_MOBILE_FAQ, SERVICES_MOBILE_CARDS, WHY_CHOOSE_MOBILE } from "@/constants/services";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner, CtaLink } from "@/components/site";

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile App Development"
        title="Mobile App Development"
        description="Complement your web solutions or increase revenue or reach with award winning mobile apps."
        backgroundImage="/images/services/mobile-devlopment-service/mobile-devlopment/Mobile_App-_Development_.webp"
      />

      <Section>
        <SectionHeader
          title="Mobile App: Stellar mobile app development services to elevate your business success"
          description={
            <>
              We help individuals, enterprises, and businesses to scale up their products by transforming their ideas
              into intuitive mobile app designs. We have expertise in developing{" "}
              <span className="font-semibold text-ink">native, hybrid, and wearable apps</span> that redefine the
              future.
            </>
          }
          className="mb-0 md:mb-0"
        />
      </Section>

      <ServicesCards tone="muted" title="Our Mobile App Development Services" data={SERVICES_MOBILE_CARDS} />

      <Section size="sm">
        <CTABanner
          title="Does your business need a Mobile App development partner?"
          description="Our Mobile App development company helps you build cost-effective, performant, and highly interactive apps."
          cta={{ label: "Get In Touch", href: "/contact-us" }}
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/services/mobile-devlopment-service/mobile-devlopment/Custom-Mobile-and-Web-App-Development-Services.webp"
          imageAlt="Custom Mobile and Web App Development Services"
          reverse
        >
          <SectionHeader title="Custom Mobile and Web App Development Services" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            Premium mobile and web development services leveraging the power of bleeding edge technologies to build
            sustainable and scalable mobile, websites and web applications. We can help you develop all types of
            solutions; ranging from marketing to a SaaS product.
          </p>
          <CheckList
            items={[
              "Skilled team of mobile and web developers",
              "Tailored mobile and web app development services",
              "Client centric approach",
            ]}
            className="mb-8"
          />
          <CtaLink href="/contact-us">Discover More</CtaLink>
        </MediaSplit>
      </Section>

      <Section>
        <SectionHeader title="Mobile App Development Company" />
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed">
          <p>
            We, Driansh, are popular as one of the leading mobile app development companies that offer full cycle mobile
            app development, including, design, development, integration, and maintenance of the mobile app. Whether you
            have an idea for a utility app, enterprise app, transformative app, or a unique smartphone app, our team of
            expert mobile app developers can transform it into a real, practical working mobile app.
          </p>
          <p>
            We have ample experience in building a mobile app from scratch and maintaining an existing application with
            our dominant experience in the mobile application development industry for Apple and Android devices. Our
            artistically designed app layouts will engage your customers and its superlight speed will retain them for a
            longer time. We are experts in reinventing mobile app concepts to enhance user experience and business models.
          </p>
        </div>
      </Section>

      <Section size="sm" className="pt-0 md:pt-0">
        <CTABanner
          title="Have an Amazing Mobile App Development Idea and Need Cost Estimation?"
          cta={{ label: "Get a Quote", href: "/contact-us" }}
        />
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_MOBILE} subtitle="Discover the benefits of partnering with our team" />

      <FAQ data={SERVICES_MOBILE_FAQ} />
    </>
  );
}
