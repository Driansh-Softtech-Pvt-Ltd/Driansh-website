import { Zap, Lightbulb, SlidersHorizontal } from "lucide-react";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_SIGNALWIRE_FAQ, WHY_CHOOSE_SIGNALWIRE } from "@/constants/services";
import { PageHero, Section, SectionHeader, CTABanner, FeatureCard, CardGrid } from "@/components/site";

const SIGNALWIRE_SERVICES = [
  {
    icon: <Zap />,
    title: "SignalWire API Integration",
    description:
      "Create an omnichannel experience for your users or simply add a missing functionality in an existing telephony solution with our SignalWire API integration services.",
  },
  {
    icon: <Lightbulb />,
    title: "SignalWire API Consultation",
    description:
      "Our SignalWire API consulting services cover all aspects of SIP telephony product development and deployment with the right APIs of SignalWire.",
  },
  {
    icon: <SlidersHorizontal />,
    title: "Third-party Integration",
    description:
      "We assist in building unified communication solutions and reduce time to market with SignalWire and third party API integration services.",
  },
];

export default function SignalWirePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform Services"
        title="SignalWire API Integration"
        description="Enjoy the sophistication of IP telephony blended with WebRTC features and amalgamated with a conventional telecom system with our SignalWire API integration services."
        backgroundImage="/images/services/platform-services/signalwire-devlopment-service/Singalwire-01-scaled.webp"
      />

      {/* The original remote image (i0.wp.com/Driansh.com/.../SignalWire-API-Consulting-Services-01.jpg) returns 403, so this section is text-only. */}
      <Section containerClassName="max-w-4xl">
        <SectionHeader title="SignalWire API Consulting Services" />
        <p className="text-lead text-center">
          SignalWire has developed several APIs for voice, video, and messaging, which can be part of any VoIP
          software development project to achieve some predefined functionalities. We have been working with
          FreeSWITCH technology along with SignalWire APIs for several years. It bestows an in-depth understanding of
          various SignalWire APIs to our developers and consultants. Our SignalWire API integration company can help
          you with our lifecycle services, from strategy building to the selection of the right APIs, successful
          integration, and product branding with our industry expertise and services as part of our SignalWire API
          consulting services.
            </p>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Our SignalWire Services"
          description="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        />
        <CardGrid>
          {SIGNALWIRE_SERVICES.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </CardGrid>
      </Section>

      <Section containerClassName="max-w-4xl">
        <SectionHeader title="SignalWire API Integration Company" />
        <div className="text-lead space-y-6">
          <p>
            SignalWire is a product platform that provides voice, video, and SMS APIs to build next generation
            communication solutions. The SignalWire APIs are available across major clouds, which makes it more adept to
            cater to customers without any long delays or latencies. There are multiple APIs available with REST and
            WebSockets to help VoIP developers use them as per their skills to provide a seamless communication
            experience to users.
          </p>
          <p>
            We, being one of the top SignalWire API integration companies, have been working with SignalWire APIs
            closely. We have developed multiple custom products for our clients using these APIs. The unified
            communication solutions developed with these APIs provide exceptional outcomes. We provide a range of
            services to our clients with our expertise in SignalWire API, from strategy building to API selection,
            integration, product development, and more.
          </p>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_SIGNALWIRE} />

      <FAQ data={SERVICES_SIGNALWIRE_FAQ} />

      <Section size="sm" tone="muted">
        <CTABanner
          title="Ready to Build Your Next Communication Solution?"
          description="Let's discuss how our SignalWire expertise can transform your business communication"
          cta={{ label: "Get Started Today", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
