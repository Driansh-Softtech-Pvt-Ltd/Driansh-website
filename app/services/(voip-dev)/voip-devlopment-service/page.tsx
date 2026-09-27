import { Server, Award, Globe, HeadphonesIcon, Lightbulb, Rocket } from "lucide-react";
import { SERVICES_VOIP_CARDS, SERVICES_VOIP_FAQ, WHY_CHOOSE_VOIP } from "@/constants/services";
import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
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

const TECHNOLOGIES = [
  {
    title: "FreeSWITCH Development",
    image: "/images/services/voip-devlopment-service/freeswitch-devlopment-service/image.png",
    imageAlt: "FreeSWITCH Developer",
    description:
      "FreeSWITCH is a highly scalable and resilient platform ideal for building VoIP business solutions capable of managing video calls, voice calls, data exchange, and other forms of communication within a unified system. It is designed to handle high volumes of traffic, making it a top choice for modern VoIP service providers.",
    points: [
      "Our expert FreeSWITCH development services are crafted to help you build robust and scalable VoIP platforms.",
      "We deliver reliable communication solutions that leverage the advanced capabilities and flexibility of FreeSWITCH.",
    ],
  },
  {
    title: "Asterisk Development",
    image: "/images/services/voip-devlopment-service/asterisk-devlopment-service/Asterisk-img.jpeg",
    imageAlt: "Asterisk Developer",
    description:
      "Asterisk is a powerful open-source framework for building SIP-based telephony systems. Known for its flexibility and maturity, it supports the development of scalable and feature-rich VoIP communication solutions for businesses and telecom service providers across the globe.",
    points: [
      "Our Asterisk development services are designed to help you create or enhance modern VoIP systems with optimal performance.",
      "We assist businesses in upgrading their Asterisk platforms with advanced features, better stability, and improved communication efficiency.",
    ],
  },
  {
    title: "OpenSIPS Development",
    image: "/images/services/voip-devlopment-service/opensips-devlopment-service/openSIP-img.png",
    imageAlt: "OpenSIPS Developer",
    description:
      "OpenSIPS is a robust and flexible SIP server technology capable of powering a wide range of VoIP tools like SIP proxies, redirect servers, gateways, and load balancers. Its versatility makes it a reliable solution for building real-time communication systems tailored to various business needs.",
    points: [
      "Our OpenSIPS development experts help you build secure, scalable, and customizable SIP-based communication platforms.",
      "We offer full-cycle development services to implement reliable OpenSIPS solutions that align with your technical and business goals.",
    ],
  },
  {
    title: "Kamailio Development",
    image: "/images/services/voip-devlopment-service/kamailio-devlopment-service/kamailio-img.png",
    imageAlt: "Kamailio Developer",
    description:
      "Kamailio is a high-performance SIP server known for its ability to operate across diverse environments from embedded systems to enterprise-scale platforms. It enables the development of scalable VoIP applications for global communication service providers.",
    points: [
      "Our Kamailio development services help you build flexible, high-capacity SIP infrastructures customized for your business needs.",
      "We specialize in delivering secure, optimized VoIP systems using Kamailio's advanced routing, load balancing, and signaling capabilities.",
    ],
  },
  {
    title: "WebRTC Development",
    image: "/images/services/voip-devlopment-service/webrtc-devlopment-service/webRTC-img.jpeg",
    imageAlt: "WebRTC Developer",
    description:
      "WebRTC is an open-source technology that enables real-time communication directly through web browsers and mobile apps without the need for plugins. It’s widely used to build secure, scalable, and interactive applications like video conferencing, live chat, and online collaboration tools.",
    points: [
      "Our WebRTC development services help you create browser-based voice, video, and data sharing applications with low latency and high quality.",
      "We specialize in building customized WebRTC solutions for telehealth, edtech, remote support, and enterprise-grade collaboration platforms.",
    ],
  },
];

const EXPERTISE = [
  { icon: <HeadphonesIcon />, title: "Round the clock availability of highly experienced resources" },
  { icon: <Rocket />, title: "Attitude to help you maximize resource utilization & valuation" },
  { icon: <Globe />, title: "Demonstrated expertise in out-of-the-box VoIP solutions" },
  { icon: <Lightbulb />, title: "Strategic thinking & innovative approach" },
  { icon: <Award />, title: "Product development & marketing experience to help you prosper" },
  { icon: <Server />, title: "Proficiency in system migration for seamless digital transformation" },
];

export default function VoIPServicePage() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Development"
        title="Custom VoIP Development Services"
        description={
          <>
            <p>Unlock the full potential of tailored communication with our Custom VoIP Development Services.</p>
            <p className="mt-3">
              With decades of experience, we deliver scalable, secure, and feature-rich VoIP solutions aligned with
              your unique business needs.
            </p>
            <p className="mt-3">
              Leverage our deep expertise in building robust telephony products using cutting-edge VoIP technologies
              and frameworks, built to power your growth.
            </p>
          </>
        }
        backgroundImage="/images/services/voip-devlopment-service/voip-devlopment/VoIP-Development-Services-Background-Image-1.webp"
      />

      <Section>
        <SectionHeader
          title="Custom VoIP Development: Build a future-proof communication platform"
          align="left"
          className="mb-6 md:mb-8"
        />
        <div className="text-lead max-w-4xl space-y-6">
          <p>
            VoIP technologies have gifted some really powerful and robust VoIP business solutions that empower different
            types of enterprises and end users to communicate seamlessly and that also at competitive rates. Our expert
            VoIP software development company has strengthened the communication ecosystem for the best VoIP service
            provider in the USA and all over the globe besides several other small, medium, and large scale enterprises.
            Our tailored VoIP solutions and on-demand VoIP development services bridge the communication gap along with
            adding future-proof technology at competitive rates for global businesses across industries.
          </p>
          <p>
            Our proficiency in harnessing the true potential of open source VoIP solutions and platforms for the benefit
            of our clients is our masterstroke. Moreover, we persistently invest in innovation and growth to upgrade
            technology and our VoIP application development services that regard us as the top VoIP solution
            development company.
          </p>
        </div>
      </Section>

      <Section tone="muted" className="pb-0 md:pb-0">
        <SectionHeader
          title="Proficient VoIP Development Services"
          description="Our VoIP development company aims to align our expertise with your requirements to build the most sought-after solutions. We provide technology specific VoIP application development services, also you can hire our expert VoIP developers that can meet your preference, budget, and vision of building next generation telephony platforms. Our expertise lies in all major open source technologies available for custom VoIP development."
          className="mb-0 md:mb-0"
        />
      </Section>

      {TECHNOLOGIES.map((tech, i) => (
        <Section key={tech.title} tone={i % 2 === 0 ? "muted" : "white"}>
          <MediaSplit image={tech.image} imageAlt={tech.imageAlt} reverse={i % 2 === 0} framed>
            <SectionHeader title={tech.title} align="left" className="mb-6 md:mb-6" />
            <p className="text-lead mb-6">{tech.description}</p>
            <CheckList items={tech.points} />
          </MediaSplit>
        </Section>
      ))}

      <ServicesCards
        tone="white"
        title="Trusted VoIP Development Services"
        subtitle="Our VoIP software development company is renowned for its expert services that assist providers and businesses to build comprehensive telephony platforms. Moreover, we have experience in building multipurpose and exclusive software applications popular in the VoIP telephony industry."
        data={SERVICES_VOIP_CARDS}
      />

      <Section tone="muted">
        <SectionHeader title="VoIP Consultation Services" align="left" className="mb-6 md:mb-8" />
        <div className="text-lead max-w-4xl space-y-6">
          <p>
            The VoIP industry is gigantic and crowded with numerous jargons that can leave you extremely confused.
            Additionally, resources shared by different VoIP software development companies, independent developers,
            communities, and other sources provide a multitude of choices while thinking about building an app.
            Therefore, you may find enormous options for the development of VoIP business solutions, hosting them, and
            managing other relevant technicalities. To ensure you get through this process seamlessly and put the best
            foot forward, you need to have complete know-how of this industry, different technologies, upcoming trends,
            existing roadblocks, and several other driving factors. Fret not.
          </p>
          <p>
            We are a leading VoIP solution development company with a team of immensely experienced and gifted
            developers, designers, and technical experts. We provide VoIP consulting services to help you through
            different stages of app development in this industry to hit the bull’s eye of performance, scalability, and
            reliability. From scope development to roadmap design, technology selection, effective role delegation,
            marketing approach definition, high performance architecture design, and multiple other segments are covered
            in our VoIP consultation services to ensure you get the much needed expert advice from a single space. We
            will help you define success with our proficiency.
          </p>
        </div>
      </Section>

      <Section>
        <MediaSplit image="/images/services/voip-devlopment-service/voip-devlopment/VoIP-04.webp" imageAlt="Expertise">
          <SectionHeader title="Our Expertise = Your Business Success" align="left" className="mb-8 md:mb-10" />
          <CardGrid columns={2} className="gap-4">
            {EXPERTISE.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                className="sm:p-6 [&_h3]:text-base [&_h3]:font-medium"
              />
            ))}
          </CardGrid>
        </MediaSplit>
      </Section>

      <WhyChooseUs tone="muted" data={WHY_CHOOSE_VOIP} />

      <FAQ tone="white" data={SERVICES_VOIP_FAQ} />

      <Section size="sm">
        <CTABanner
          title="Ready to Build Your VoIP Solution?"
          description="Let's discuss your VoIP requirements and create a customized solution"
          cta={{ label: "Contact Our VoIP Experts", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
