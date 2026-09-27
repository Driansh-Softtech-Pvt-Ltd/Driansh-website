import { Server, Shield, Layers, BarChart3, Clock, Zap, Users } from "lucide-react";
import FAQ from "@/components/FAQ";
import { SERVICES_KAMAILIO_CARDS, SERVICES_KAMAILIO_FAQ, WHY_CHOOSE_KAMAILIO } from "@/constants/services";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { cn } from "@/lib/utils";
import {
  PageHero,
  Section,
  SectionHeader,
  CheckList,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

const SOLUTIONS = [
  {
    badge: "High Performance",
    icon: BarChart3,
    title: "Load Balancing with Failover",
    description:
      "Distribute incoming traffic intelligently across multiple servers to ensure optimal performance and prevent system overload. Our advanced load balancing solutions guarantee seamless failover capabilities.",
    points: [
      { title: "Automatic Failover", text: "Instant traffic redirection during server failures" },
      { title: "Scalable Architecture", text: "Handle thousands of concurrent calls efficiently" },
      { title: "Real-time Monitoring", text: "Track server health and performance metrics" },
    ],
  },
  {
    badge: "Security First",
    icon: Shield,
    title: "Session Border Controller Solution",
    description:
      "Safeguard your VoIP software, infrastructure and business from major VoIP threats and hack attacks with our enterprise-grade SBC solution.",
    points: [
      { title: "Advanced Security", text: "Protection against DoS, fraud, and malicious attacks" },
      { title: "Protocol Translation", text: "Seamless communication between different networks" },
      { title: "Quality Assurance", text: "Ensure high-quality voice and video transmission" },
    ],
  },
];

const SOFTSWITCH_FEATURES = [
  { icon: <BarChart3 />, title: "Insightful Dashboards", description: "Comprehensive analytics and reporting tools" },
  { icon: <Clock />, title: "Real-time Billing", description: "Accurate billing with live call rating" },
  { icon: <Layers />, title: "Manifold Features", description: "Complete suite of telecom features and tools" },
];

const COMPANY_PILLARS = [
  {
    icon: <Layers />,
    title: "Strategic Approach",
    description:
      "Distinctive Kamailio development services are tactically defined to manage diverse driving factors that collectively contribute to your success.",
    points: ["Visionary mindset", "Opportunity identification", "Proactive support"],
  },
  {
    icon: <Users />,
    title: "Customer Satisfaction",
    description:
      "With our client-first approach, we always ensure that our clients receive the best in the industry services, tailored solutions, and on-time deliverables.",
    points: ["Easy access to experts", "Well-defined processes", "Competitive rates"],
  },
  {
    icon: <Zap />,
    title: "Technology and Technique",
    description:
      "We take pride in our approach of perfectly blending the right technology with the smart techniques that can yield the most thriving business and sustainable solutions.",
    points: ["Technical expertise", "Tailored solutions", "Adaptability and flexibility"],
  },
];

function IconPanel({ icon: Icon, className }: { icon: typeof Server; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center bg-brand-soft p-10 text-brand sm:p-14", className)}
    >
      <Icon className="h-24 w-24 sm:h-40 sm:w-40" strokeWidth={1.25} />
    </div>
  );
}

function Badge({ icon: Icon, children }: { icon: typeof Server; children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function KamailioDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Development"
        title="Kamailio Development Services"
        description="VoIP has been one of the most reliable platforms to carry out professional and personal communication and that also at cheaper rates. This encourages many businesses, VoIP open source development companies, and individuals to bridge communication gaps without making holes in their pockets using a reliable and robust VoIP based communication solution. We help our customers in the process of building the most scalable, secure, and feature rich VoIP solutions and hail the success of your ventures."
        backgroundImage="/images/services/voip-devlopment-service/kamailio-devlopment-service/Kamailio-01-scaled.webp"
      />

      <Section>
        <SectionHeader
          title="Kamailio: Tried and tested SIP server solution to run budding internet telephony business"
          description="VoIP has been one of the most reliable platforms to carry out professional and personal communication and that also at cheaper rates. This encourages many businesses, VoIP open source development companies, and individuals to bridge communication gaps without making holes in their pockets using a reliable and robust VoIP based communication solution. We help our customers in the process of building the most scalable, secure, and feature rich VoIP solutions and hail the success of your ventures. Services can benefit you and leverage the power of this pioneer VoIP development technology."
          className="mb-0 max-w-4xl md:mb-0"
        />
      </Section>

      <ServicesCards
        tone="muted"
        title="Our Expertise in VoIP Platforms"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_KAMAILIO_CARDS}
      />

      <Section size="sm">
        <CTABanner
          title="Does your business need a Kamailio development partner?"
          description="Our Kamailio development company helps you build cost-effective, performant, and highly interactive video streaming apps."
          cta={{ label: "Contact Us Today", href: "/contact-us" }}
        />
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Our Expert Solutions in Kamailio"
          description="Comprehensive Kamailio solutions designed to power your telecommunications infrastructure"
        />
        <div className="space-y-8">
          {SOLUTIONS.map((solution, i) => (
            <div
              key={solution.title}
              className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-2"
            >
              <div className={cn("flex flex-col justify-center p-6 sm:p-10", i % 2 === 1 && "md:order-2")}>
                <Badge icon={solution.icon}>{solution.badge}</Badge>
                <h3 className="heading-3 mb-4 text-2xl text-ink">{solution.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-600">{solution.description}</p>
                <CheckList
                  items={solution.points.map((p) => (
                    <>
                      <span className="block font-semibold text-ink">{p.title}</span>
                      <span className="block text-base text-slate-600">{p.text}</span>
                    </>
                  ))}
                  className="gap-4"
                />
              </div>
              <IconPanel icon={solution.icon} className={cn(i % 2 === 1 && "md:order-1")} />
            </div>
          ))}

          <div className="grid overflow-hidden rounded-2xl bg-navy text-slate-300 shadow-sm md:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-violet-200">
                <Server className="h-4 w-4" aria-hidden="true" />
                Enterprise Grade
              </span>
              <h3 className="heading-3 mb-4 text-2xl text-white">Class 5 SoftSwitch Solutions</h3>
              <p className="mb-8 leading-relaxed">
                Deploy carrier-grade softswitch infrastructure with comprehensive features for complete
                telecommunications management.
              </p>
              <div className="grid gap-4">
                {SOFTSWITCH_FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-200 [&_svg]:h-5 [&_svg]:w-5">
                      {f.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white">{f.title}</h4>
                      <p className="mt-1 text-sm">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="bg-brand-gradient flex items-center justify-center p-10 text-white sm:p-14"
            >
              <Server className="h-24 w-24 sm:h-40 sm:w-40" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Kamailio Development Company" />
        <div className="text-lead mx-auto mb-12 max-w-4xl space-y-6 md:mb-16">
          <p>
            Kamailio is a well known SIP server solution that has empowered several internet telephony service
            providers across the globe to deliver reliable telephony services to thousands of customers in parallel.
            We, Driansh Technologies, are renowned as a leading Kamailio development company to deliver outstanding
            Kamailio development services to global telephony service providers and businesses.
          </p>
          <p>
            Our skilled team of Kamailio developers can provide custom telephony product development by leveraging the
            full spectrum of features available in this powerful SIP server solution. From building futuristic,
            enterprise grade solutions to developing carrier grade software, we are adroit to build any Kamailio based
            solution.
          </p>
        </div>
        <CardGrid>
          {COMPANY_PILLARS.map((pillar) => (
            <FeatureCard key={pillar.title} icon={pillar.icon} title={pillar.title} description={pillar.description}>
              <CheckList items={pillar.points} className="mt-6 [&_li]:text-base" />
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_KAMAILIO} />

      <FAQ data={SERVICES_KAMAILIO_FAQ} />

      <Section size="sm" tone="muted">
        <CTABanner
          title="Does your business need a Kamailio development partner?"
          description="Our Kamailio development company helps you build cost-effective, performant, and highly interactive video streaming apps."
          cta={{ label: "Get In Touch", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
