import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_FLUTTER_FAQ, SERVICES_FLUTTER_CARDS, WHY_CHOOSE_FLUTTER } from "@/constants/services";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner, CtaLink } from "@/components/site";

export default function FlutterDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile App Development"
        title="Flutter App Development"
        description="Build a platform independent digital experience with low investment and enjoy high returns with our Flutter app development services."
        backgroundImage="/images/services/mobile-devlopment-service/flutter-app-devlopment-service/16Flutter-App-development.jpg"
      />

      <Section>
        <MediaSplit
          image="/images/services/mobile-devlopment-service/flutter-app-devlopment-service/Flutter-App-Development-01.webp"
          imageAlt="Flutter App Development"
        >
          <SectionHeader
            title="Flutter App Development Services: Deliver a native app like experience and reduce time to market using excellent Flutter development"
            align="left"
            className="mb-6 md:mb-6"
          />
          <p className="text-lead">
            <span className="font-semibold text-brand">Flutter</span> is a revolutionary framework invented by{" "}
            <span className="font-semibold text-ink">Google</span> to build multi platform apps using a single code
            base. Flutter is a <span className="font-semibold text-ink">web and mobile app development SDK</span>, which
            can be used to build dynamic and feature rich mobile applications for mobile, desktop, and web users.
          </p>
        </MediaSplit>
      </Section>

      <ServicesCards
        tone="muted"
        title="Our Flutter App Development Services"
        subtitle="We have experience in providing world class development, customization, support, and multiple other services in Flutter."
        data={SERVICES_FLUTTER_CARDS}
      />

      <Section>
        <SectionHeader title="Flutter App Development Company" />
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed">
          <p>
            We are one of the popular Flutter app development companies that build full of life apps for mobile, web,
            and desktop users by harnessing the potential of Flutter. Respond to the evolving business world at a rapid
            rate with our best in the industry Flutter mobile app development services and web app development services.
          </p>
          <p>
            Our versatile team of Flutter developers is skilled in building web, desktop, and mobile apps to deliver a
            consistent experience across platforms with a single codebase. We ace the game of Flutter app development as
            we have a proven track record in providing end to end services to our clients to build apps that are a visual
            treat for their users and consumers.
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/services/mobile-devlopment-service/android-devlopment-service/CrossPlatform-img.png"
          imageAlt="Native Mobile App Development"
          reverse
        >
          <SectionHeader title="Native Mobile App Development Services" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            Deliver consistent experience to native users that prefer investing in native mobile apps with our native
            mobile app development services. Surpass client expectations with platform specific mobile apps developed to
            enjoy top listed app positions.
          </p>
          <CheckList
            items={["Optimized interfaces", "Tailored solutions", "Consolidated security"]}
            className="mb-8"
          />
          <CtaLink href="/contact-us">Discover More</CtaLink>
        </MediaSplit>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Does your business need a Flutter App development partner?"
          description="Our Flutter App development company helps you build cost-effective, performant, and highly interactive apps."
        />
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_FLUTTER} subtitle="Discover the Benefits of Partnering with Our Team" />

      <FAQ data={SERVICES_FLUTTER_FAQ} />
    </>
  );
}
