import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  SERVICES_REACT_NATIVE_CARDS,
  SERVICES_REACT_NATIVE_FAQ,
  WHY_CHOOSE_REACT_NATIVE,
} from "@/constants/services";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner, CtaLink } from "@/components/site";

export default function ReactNativeDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile App Development"
        title="React Native App Development"
        description="Extraordinary mobile apps with exceptional functionality developed by React Native app development experts"
        backgroundImage="/images/services/mobile-devlopment-service/reactNative-devlopment-service/15React-Native-App-development.jpg"
      />

      <Section>
        <MediaSplit
          image="/images/services/mobile-devlopment-service/reactNative-devlopment-service/React-Native-App-Development-01.webp"
          imageAlt="React Native App Development"
        >
          <SectionHeader title="React Native App Development" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead">
            React Native is the best{" "}
            <span className="font-semibold text-ink">cross platform app development framework</span> that helps you
            build spectacular apps to dominate your niche with exceptional features.{" "}
            <span className="font-semibold text-brand">Cost efficiency</span> and{" "}
            <span className="font-semibold text-brand">code reusability</span> are the USPs of this mobile app
            programming platform.
          </p>
        </MediaSplit>
      </Section>

      <ServicesCards
        tone="muted"
        title="Our React Native App Services"
        subtitle="We have experience in providing world class development, customization, support, and multiple other services in React Native."
        data={SERVICES_REACT_NATIVE_CARDS}
      />

      <Section size="sm">
        <CTABanner title="Does your business need a React Native App development partner?" />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/services/mobile-devlopment-service/android-devlopment-service/CrossPlatform-img.png"
          imageAlt="Native App Development"
        >
          <SectionHeader title="Native App Development" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            Build an engaging experience for your premium clients with native custom mobile application development
            services. Our iOS and Android app development services harness platform specific features to help you
            improve quality and performance at the same time.
          </p>
          <CheckList
            items={["Capture strategic opportunities", "Match your vision", "On-time deliverables"]}
            className="mb-8"
          />
          <CtaLink href="/contact-us">Get in Touch</CtaLink>
        </MediaSplit>
      </Section>

      <Section>
        <SectionHeader title="React Native App Development Company" />
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed">
          <p>
            Our top React Native app development company has a team of experienced React Native app developers that
            knows this platform upside down. Our React Native app development services have benefited various companies
            and individuals across the globe with excellent mobile app programming.
          </p>
          <p>
            Our specialty in building a world class experience for your customers with professional React Native apps
            makes us the best React Native app development company for your project. Diversification of the team
            includes creative mobile layout designers, app developers, and a QA team that can help you build the best app
            within a short span and investment to boost your ROI.
          </p>
        </div>
      </Section>

      <Section size="sm" className="pt-0 md:pt-0">
        <CTABanner
          title="Does your business need a React Native App development partner?"
          description="Our React Native App development company helps you build cost-effective, performant, and highly interactive video streaming apps."
        />
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_REACT_NATIVE} subtitle="Discover the Benefits of Partnering with Our Team" />

      <FAQ data={SERVICES_REACT_NATIVE_FAQ} />
    </>
  );
}
