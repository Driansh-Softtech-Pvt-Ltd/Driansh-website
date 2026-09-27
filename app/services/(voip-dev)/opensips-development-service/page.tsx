import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_OPENSIPS_CARDS, SERVICES_OPENSIPS_EXPERT_CARDS, WHY_CHOOSE_VOIP } from "@/constants/services";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CTABanner,
  CtaLink,
} from "@/components/site";

export default function OpenSIPsDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Development"
        title="OpenSIPS Development Services"
        description="Build scalable, resilient SIP routing and proxy services with our expert OpenSIPS development and consulting services."
        backgroundImage="/images/services/voip-devlopment-service/opensips-devlopment-service/4Opensips-01-scaled.webp"
      />

      <Section>
        <SectionHeader
          title="OpenSIPS: High performing SIP based telecommunication solution built with a multi-functionality SIP server"
          description="OpenSIPS is a multipurpose SIP proxy server solution that can be used to build robust and reliable platforms for video, voice, instant messaging, and all other SIP elements. A team of experienced OpenSIPS developers at Driansh Softtech has proficiency in using this SIP proxy server at its optimal capacity."
          className="mb-0 max-w-4xl md:mb-0"
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/services/voip-devlopment-service/opensips-devlopment-service/OpenSIPs-Development.webp"
          imageAlt="Custom OpenSIPS Development Company"
        >
          <SectionHeader title="Custom OpenSIPS Development Company" align="left" className="mb-6 md:mb-6" />
          <div className="text-lead space-y-5">
            <p>
              We have been mastering the art of building the best in the industry telecom solutions using the OpenSIPS
              platform. Our OpenSIPS development team holds rich experience in this platform, plus, RTP engine, SIP/
              RTP/ SDP, WSS, DTLS, and more that can help you build the most powerful telephony applications.
            </p>
            <p>
              We can build the most powerful solutions that can handle thousands of concurrent calls per second (CPC).
              Our team of versatile OpenSIPS development experts can provide you with a whole range of services and
              support in this powerful VoIP development platform, which is more commonly popular as a SIP signaling
              server.
            </p>
            <p>
              From custom OpenSIPS solution development to bug fixing and customization, we have VoIP engineers to meet
              your requirements to build custom solutions using this famous VoIP technology.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <ServicesCards
        title="Our OpenSIPS Services"
        subtitle="Seamlessly manage telecommunication infrastructure with thousands of parallel calls or maintain the high availability of your system with our multitude of OpenSIPS services."
        data={SERVICES_OPENSIPS_CARDS}
      />

      <Section size="sm" className="pt-0 md:pt-0">
        <CTABanner
          title="Does your business need an OpenSIPS development partner?"
          description="Our OpenSIPS development company helps you build cost‑effective, performant, and highly interactive communication platforms and video streaming apps."
          cta={{ label: "Request a Quote", href: "/contact-us" }}
        />
      </Section>

      <ServicesCards
        tone="muted"
        title="Our Expert Solutions in OpenSIPS"
        subtitle="Seamlessly manage telecommunication infrastructure with thousands of parallel calls or maintain the high availability of your system with our multitude of OpenSIPS services."
        data={SERVICES_OPENSIPS_EXPERT_CARDS}
      />

      <Section>
        <MediaSplit
          image="/images/services/voip-devlopment-service/opensips-devlopment-service/Class-4-SoftSwitch-Solutions-11-11.webp"
          imageAlt="Class 4 SoftSwitch Solution"
        >
          <SectionHeader title="Class 4 SoftSwitch Solution" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            Our custom OpenSIPS development services cover coding of a class 4 softswitch solution that efficiently
            manages wholesale VoIP traffic and optimizes other operations. We help you build a highly scalable, robust
            switch leveraging modern VoIP technologies to grow a sustainable wholesale VoIP business.
          </p>
          <CheckList
            items={["Flawless traffic management", "Interconnected IP networks", "Comprehensive solution"]}
            className="mb-8"
          />
          <CtaLink href="/contact-us">Discover More</CtaLink>
        </MediaSplit>
      </Section>

      <WhyChooseUs
        data={WHY_CHOOSE_VOIP}
        subtitle="Top reasons to choose us for VoIP development services or consultation that drive success to your business."
      />

      <Section size="sm">
        <CTABanner
          title="Does your business need an OpenSIPS development partner?"
          cta={{ label: "Request a Quote", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
