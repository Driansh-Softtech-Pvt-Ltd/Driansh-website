import { Code } from "lucide-react";
import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_ANDROID_FAQ, SERVICES_ANDROID_CARDS, WHY_CHOOSE_ANDROID } from "@/constants/services";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CTABanner,
  CtaLink,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function AndroidDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile App Development"
        title="Android App Development"
        description="More than 2.5 billion users use the Android platform and the figure keeps on increasing due to the cost efficiency of Android devices. This makes Android app development the first choice of many businesses that desire native app development within their budget. Android also has several supported features, plug-ins, and more to help Android developers enhance app programming."
        backgroundImage="/images/services/mobile-devlopment-service/android-devlopment-service/13Andorid-App-development.webp"
      />

      <Section>
        <MediaSplit
          image="/images/services/mobile-devlopment-service/android-devlopment-service/Android-Development-01.webp"
          imageAlt="Android App Development"
        >
          <SectionHeader title="Android App Development" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead">
            More than <span className="font-semibold text-brand">2.5 billion users</span> use the{" "}
            <span className="font-semibold text-brand">Android platform</span> and the figure keeps on increasing due
            to the <span className="font-semibold text-ink">cost efficiency of Android devices</span>. This makes{" "}
            <span className="font-semibold text-ink">Android app development</span> the first choice of many businesses
            that desire native app development within their budget. Android also has several supported features,
            plug-ins, and more to help Android developers enhance app programming.
          </p>
        </MediaSplit>
      </Section>

      <ServicesCards
        tone="muted"
        title="Our Android App Development Services"
        subtitle="We have experience in providing world class development, customization, support, and multiple other services in Android."
        data={SERVICES_ANDROID_CARDS}
      />

      <Section size="sm">
        <CTABanner title="Does your business need an Android App development partner?" />
      </Section>

      <Section tone="muted">
        <SectionHeader title="Technology Stack We Use" />
        <CardGrid columns={2} className="mx-auto max-w-2xl">
          {["Java", "Kotlin"].map((tech) => (
            <FeatureCard key={tech} icon={<Code />} title={tech} className="text-center [&>div:first-child]:mx-auto" />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <MediaSplit
          image="/images/services/mobile-devlopment-service/android-devlopment-service/CrossPlatform-img.png"
          imageAlt="Cross Platform Development"
          reverse
        >
          <SectionHeader title="Cross Platform Development" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            Reach a wider audience at low cost with our client centric cross platform mobile app development services
            available in Flutter and React Native. A single codebase can help you improve app engagement and revenue
            boost with excellent performance across mobile app platforms.
          </p>
          <CheckList
            items={["Rapid prototyping", "Native feature availability", "Consistent user experience"]}
            className="mb-8"
          />
          <CtaLink href="/contact-us">Contact Us</CtaLink>
        </MediaSplit>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_ANDROID} subtitle="Discover the Benefits of Partnering with Our Team" />

      <Section size="sm">
        <CTABanner
          title="Does your business need an Android App development partner?"
          description="Our Android App development company helps you build cost-effective, performant, and highly interactive video streaming apps."
        />
      </Section>

      <FAQ data={SERVICES_ANDROID_FAQ} />
    </>
  );
}
