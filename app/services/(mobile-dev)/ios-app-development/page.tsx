import { Code, Quote } from "lucide-react";
import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  SERVICES_IOS_FAQ,
  SERVICES_IOS_CARDS,
  WHY_CHOOSE_ANDROID,
  SERVICES_IOS_WHATOURCLIENTSAY,
} from "@/constants/services";
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

export default function IOSDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile App Development"
        title="iOS App Development"
        description="iOS app development is a process to build feature-rich and robust iOS applications for Apple devices. With our iOS app development services, you can capture the profitable market of iPhone, iPad, Apple Watch, Apple TV, and other Apple device users."
        backgroundImage="/images/services/mobile-devlopment-service/ios-devlopment-service/14iOS-App.jpg"
      />

      <Section>
        <MediaSplit
          image="/images/services/mobile-devlopment-service/ios-devlopment-service/Deliver-An-Exceptional-Experience.webp"
          imageAlt="iOS App Development"
        >
          <SectionHeader
            title="iOS App Development: Deliver an exceptional experience to all generations with future forward iOS app development for apple devices"
            align="left"
            className="mb-6 md:mb-6"
          />
          <p className="text-lead">
            Apple users set the expectation bars high and our professional{" "}
            <span className="font-semibold text-brand">iOS app development services</span> are popular to match those
            expectations at their best. We have specialization in{" "}
            <span className="font-semibold text-ink">Apple app programming</span> for the Apple ecosystem consisting of{" "}
            <span className="font-semibold text-ink">iOS, tvOS, macOS, and WatchOS</span>.
          </p>
        </MediaSplit>
      </Section>

      <ServicesCards
        tone="muted"
        title="Our iOS App Development Services"
        subtitle="We have experience in providing world class development, customization, support, and multiple other services in iOS."
        data={SERVICES_IOS_CARDS}
      />

      <Section size="sm">
        <CTABanner title="Does your business need an iOS App development partner?" />
      </Section>

      <Section tone="muted">
        <SectionHeader title="iOS App Development Company" />
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed">
          <p>
            We, one of the best iOS app development companies in India, cater to worldwide users with our divergent iOS
            app development services. We provide native app development services for all different Apple devices, from
            iPhones to iPads, Apple Watches, Apple TVs, and more to capture this profitable market.
          </p>
          <p>
            Our iOS application development company also has expertise in building web apps by harnessing the power of
            this renowned mobile app development platform. With our end to end and dynamic services, we have benefited
            enterprises and consultants to grow and flourish at a rapid rate in the most competitive iOS market.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Technology Stack We Use" />
        <CardGrid columns={2} className="mx-auto max-w-2xl">
          {["Swift", "Objective-C"].map((tech) => (
            <FeatureCard key={tech} icon={<Code />} title={tech} className="text-center [&>div:first-child]:mx-auto" />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/services/mobile-devlopment-service/ios-devlopment-service/Cross-Platform-Development-1.webp"
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

      <WhyChooseUs
        tone="white"
        data={WHY_CHOOSE_ANDROID}
        subtitle="Discover the Benefits of Partnering with Our Team"
      />

      <Section size="sm">
        <CTABanner
          title="Does your business need an iOS App development partner?"
          description="Our iOS App development company helps you build cost-effective, performant, and highly interactive video streaming apps."
        />
      </Section>

      <Section tone="muted">
        <SectionHeader title="What Our Client Say" />
        <CardGrid>
          {SERVICES_IOS_WHATOURCLIENTSAY.map((testimonial, index) => (
            <figure
              key={index}
              className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <Quote className="absolute top-5 right-5 h-10 w-10 text-brand-soft" aria-hidden="true" />
              <blockquote className="mb-6 flex-1 pr-8 italic leading-relaxed text-slate-700">
                {testimonial.quote}
              </blockquote>
              <figcaption className="border-t border-slate-200 pt-4">
                <p className="font-bold text-ink">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </CardGrid>
      </Section>

      <FAQ data={SERVICES_IOS_FAQ} />
    </>
  );
}
