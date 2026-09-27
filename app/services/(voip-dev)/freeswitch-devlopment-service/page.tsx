import { Settings, Users, Phone, Database, Cloud, Server } from "lucide-react";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_FREESWITCH_CARDS1, SERVICES_FREESWITCH_EXPERT_CARDS } from "@/constants/services";
import {
  PageHero,
  Section,
  SectionHeader,
  CheckList,
  CTABanner,
  CtaLink,
  FeatureCard,
  CardGrid,
} from "@/components/site";

const WHY_CHOOSE_FREESWITCH = [
  {
    title: "Timely Delivery",
    description:
      "We follow the best practices and standardization to ensure on-time delivery of your custom VoIP development projects, which ensures reduced time to market.",
    points: ["Excellent management", "Skilled team", "Best performance"],
  },
  {
    title: "End-To-End Solutions",
    description:
      "We provide a full cycle service to ensure that all types of demands and needs related to VoIP solutions are fulfilled at our VoIP solution development company.",
    points: ["Software development", "Module development", "Customization & integration"],
  },
  {
    title: "100% Client Satisfaction",
    description:
      "Skilled developers and empathetic business team ensure swift transitions throughout the project lifecycle to ensure you receive hassle-free experience and deliverables.",
    points: ["Client first approach", "Dedicated account manager", "Open discussions"],
  },
];

const CASE_STUDIES = [
  {
    client: "Conexo Technologies",
    title: "Leveraged Competitive Edge & Strengthened Communication With A Tailored UCC Platform",
    location: "Italy (Europe)",
    industry: "Technology, Telephony, Managed Services",
    summary:
      "We delivered a completely tailor‑made UCC platform helping the client modernize collaboration and improve operational efficiency.",
  },
  {
    client: "BelSmart",
    title: "Custom Multi‑Tenant Call Center Software in FreeSWITCH with PBX Features for a Solution Provider",
    location: "India (Asia)",
    industry: "Communication, Software Provider",
    summary:
      "The all‑inclusive platform centralized operations and enabled high‑quality call handling with advanced PBX features.",
  },
];

export default function FreeSwitchDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Development"
        title="FreeSWITCH Development Services"
        description="Building scalable and robust telephony solutions to meet the unparalleled vision of next-generation businesses with our expert FreeSWITCH development and consulting services."
        backgroundImage="/images/services/voip-devlopment-service/freeswitch-devlopment-service/FreeSWITCH_Developmen_tCompany.webp"
      />

      <Section>
        <SectionHeader title="FreeSWITCH Development Company" align="left" className="mb-6 md:mb-8" />
        <div className="text-lead max-w-4xl space-y-6">
          <p>
            FreeSWITCH is a renowned telephony stack with modular architecture that provides building blocks for custom
            FreeSWITCH solution development projects. The role of FreeSWITCH development in bringing revolutionary
            transition in the VoIP communication and telecom switch based industry is phenomenal.
          </p>
          <p>
            FreeSWITCH, at the forefront of telecom evolution, leads the transition from traditional telecom switches to
            a dynamic and digitized landscape. Expert FreeSWITCH solution development unfolds a transformative journey in
            telecommunication.
          </p>
          <p>
            FreeSWITCH provides a robust platform, protocols, features, codecs, encryption methods, modular architecture,
            interoperability, and numerous other driving factors that make FreeSWITCH development services seamless and
            powerful. This platform versatility ensures that FreeSWITCH solution development can cater to diverse
            business communication needs and provide impeccable and customized telephony solutions.
          </p>
          <p>
            We have years of experience as a leading FreeSWITCH development company. We help enterprises with FreeSWITCH
            consulting services to take distinctive advantage of FreeSWITCH. Furthermore, we help providers to
            effortlessly integrate third party APIs and custom solution development to build a comprehensive solution
            that aligns with similar protocols. These FreeSWITCH based telephony solutions enhance the scalability and
            adaptability of the communication solutions to foster a cohesive and interconnected communication ecosystem.
          </p>
        </div>
      </Section>

      <ServicesCards
        tone="muted"
        title="Major FreeSWITCH Development Services"
        subtitle="We have expertise in developing tailored software solutions that precisely match the unique requirements of your business and clients."
        data={SERVICES_FREESWITCH_CARDS1}
      />

      <Section size="sm">
        <CTABanner
          title="Looking to Hire Professional and Expert FreeSWITCH Developers"
          description="for Your Ongoing Projects?"
          cta={{ label: "Hire FreeSWITCH Developers Now", href: "/contact-us" }}
        />
      </Section>

      <ServicesCards tone="muted" title="Our Expert Solutions in FreeSWITCH" data={SERVICES_FREESWITCH_EXPERT_CARDS} />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <SectionHeader title="Multi Tenant IP PBX Solution" align="left" className="mb-6 md:mb-6" />
            <p className="text-lead mb-6">
              Enrich the communication ecosystem with a private telephony system specifically developed for your
              business. A multi tenant system will provide further capabilities to extend communication features and
              benefits to other offices and even to customers.
            </p>
            <CheckList
              items={[
                "Leverage the potential of FreeSWITCH",
                "Augment communication features",
                "Enjoy excellent scalability",
                "Save money by reducing expenses",
              ]}
              className="mb-8"
            />
            <CtaLink href="/contact-us">Discover More</CtaLink>
          </div>

          {/* Multi Tenant PBX illustration */}
          <div className="mx-auto w-full max-w-xl lg:order-1" aria-hidden="true">
            <div className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-xl sm:p-10">
              <div className="flex flex-col items-center rounded-xl bg-white px-6 py-10 text-center">
                <div className="relative mb-8">
                  <div className="flex h-24 w-32 items-center justify-center rounded-xl bg-navy text-white">
                    <Server className="h-10 w-10" />
                  </div>
                  <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="absolute -bottom-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                    <Database className="h-4 w-4" />
                  </span>
                </div>
                <div className="mb-6 flex justify-center gap-4">
                  {[Users, Cloud, Settings].map((Icon, i) => (
                    <span key={i} className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                  ))}
                </div>
                <p className="font-semibold text-ink">Multi Tenant IP PBX</p>
                <p className="mt-1 text-sm text-slate-500">Enterprise Communication Solution</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <WhyChooseUs
        data={WHY_CHOOSE_FREESWITCH}
        subtitle="Top reasons to choose us for VoIP development services or consultation that drive success to your business."
      />

      <Section size="sm">
        <CTABanner title="Does your business need a FreeSWITCH development partner?" />
      </Section>

      <Section tone="muted">
        <SectionHeader title="Our Case Studies" />
        <CardGrid columns={2}>
          {CASE_STUDIES.map((study) => (
            <FeatureCard
              key={study.client}
              title={study.title}
              className="flex flex-col"
            >
              <p className="eyebrow order-first mb-3 text-brand">{study.client}</p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Location</dt>
                  <dd className="text-slate-600">{study.location}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Industry</dt>
                  <dd className="text-slate-600">{study.industry}</dd>
                </div>
              </dl>
              <p className="mt-4 leading-relaxed text-slate-600">{study.summary}</p>
              <div className="mt-6">
                <CtaLink href="/contact-us" variant="outline">
                  Download Case Study
                </CtaLink>
              </div>
            </FeatureCard>
          ))}
        </CardGrid>
        <div className="mt-10 text-center">
          <CtaLink href="/contact-us">See All Case Studies</CtaLink>
        </div>
      </Section>
    </>
  );
}
