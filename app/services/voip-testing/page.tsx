import { Activity } from "lucide-react";
import {
  SERVICES_VOIP_TESTING_FAQ,
  SERVICES_VOIP_TESTING_PROTOCOLTEST,
  SERVICES_VOIP_TESTING_SERVICES_INDUSTRIES,
  SERVICES_VOIP_TESTING_SERVICES_PROCESSSTEPS,
  SERVICES_VOIP_TESTING_SERVICES_TRUSTPOINTS,
  SERVICES_VOIPTESTING_CARD,
  SERVICES_VOIPTESTING_CARD1,
  SERVICES_VOIPTESTING_CARD2,
} from "@/constants/services";
import ServicesCards from "@/components/Services-cards";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  Section,
  SectionHeader,
  CheckList,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function VoIPTestingPage() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Testing"
        title="VoIP Testing Services"
        description={
          <div className="space-y-4">
            <p>
              VoIP testing is the process of evaluating and validating the performance, reliability, and audio quality of
              a Voice over IP (VoIP) communication system. Through VoIP testing, you can detect and resolve issues such as
              jitter, delay, packet loss, and poor audio quality before they affect your customers.
            </p>
            <p>
              Our end-to-end VoIP testing solutions ensure every call is clear, consistent, and reliable, so you can
              deliver the best voip audio quality without delays or disruptions.
            </p>
          </div>
        }
        backgroundImage="/images/services/voip-devlopment-service/voip-devlopment/VoIP-Development-Services-Background-Image-1.webp"
      />

      {/* Why VoIP Testing Matters */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader title="Why VoIP Testing Matters" align="left" className="mb-6 md:mb-6" />
            <div className="text-lead space-y-6">
              <p>
                Unclear voice, dropped calls, or poor WebRTC connectivity aren&apos;t just technical glitches they hurt
                user experience, team productivity, and brand trust. In today&apos;s real-time communication world,
                quality is non-negotiable.
              </p>
              <p>
                At Driansh, we go beyond basic voice tests. Our VoIP testing services proactively identify and eliminate
                performance bottlenecks across SIP and WebRTC environments ensuring your system is battle-ready.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: "15+", label: "Years of Experience" },
                { value: "100%", label: "Quality Assurance" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-surface p-5 sm:p-6">
                  <div className="text-gradient mb-1 text-3xl font-bold">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:block">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-brand-soft">
              <Activity className="h-24 w-24 text-brand sm:h-32 sm:w-32" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Section>

      {/* What We Test */}
      <Section tone="muted">
        <SectionHeader
          title="What We Test"
          description="We evaluate your entire VoIP infrastructure from signaling to media using real-world simulation and advanced diagnostics"
        />
        <h3 className="heading-3 mb-8 text-center text-ink">VoIP &amp; WebRTC Call Quality</h3>
        <CardGrid>
          {SERVICES_VOIPTESTING_CARD.map((card, index) => (
            <FeatureCard key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </CardGrid>
      </Section>

      {/* Protocol-Level Testing */}
      <Section>
        <SectionHeader title="Protocol-Level SIP & WebRTC Testing" />
        <CardGrid columns={2}>
          {SERVICES_VOIP_TESTING_PROTOCOLTEST.map((test, index) => (
            <FeatureCard
              key={index}
              icon={<span className="text-lg font-bold">{index + 1}</span>}
              iconClassName="bg-brand-gradient text-white"
              title={test.title}
              description={test.description}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Our VoIP Testing Process */}
      <Section tone="muted">
        <SectionHeader
          title="Our VoIP Testing Process"
          description="We combine deep domain expertise with automated tools and manual validation to deliver reliable, actionable results"
        />
        <CardGrid>
          {SERVICES_VOIP_TESTING_SERVICES_PROCESSSTEPS.map((step, index) => (
            <FeatureCard
              key={index}
              icon={<span className="text-gradient text-4xl font-bold">{step.number}</span>}
              iconClassName="h-auto w-fit bg-transparent"
              title={step.title}
              description={step.description}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Who Needs VoIP Testing */}
      <ServicesCards
        title="Who Needs VoIP Quality Test & WebRTC Testing?"
        subtitle="Our services are essential for any business where call quality, system reliability, and real-time communication directly impact customer experience and operations"
        data={SERVICES_VOIPTESTING_CARD2}
      />

      {/* Why Choose Driansh */}
      <ServicesCards
        tone="muted"
        title="Why Choose Driansh for VoIP Testing?"
        subtitle="Driansh stands as a trusted partner in delivering reliable, scalable, and secure VoIP solutions. Our VoIP Testing services are backed by years of telecom expertise, robust infrastructure testing capabilities, and real-world experience across global deployments."
        data={SERVICES_VOIPTESTING_CARD1}
      />

      <Section tone="navy">
        <SectionHeader title="Here's why industry leaders trust us" theme="dark" />
        <CheckList
          items={SERVICES_VOIP_TESTING_SERVICES_TRUSTPOINTS}
          columns={2}
          theme="dark"
          className="mx-auto max-w-5xl gap-y-5"
        />
      </Section>

      {/* Industries We Serve */}
      <Section>
        <SectionHeader title="Industries We Serve" />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {SERVICES_VOIP_TESTING_SERVICES_INDUSTRIES.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-soft text-brand">
                {industry.icon}
              </div>
              <h3 className="text-base font-semibold text-ink sm:text-lg">{industry.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Our VoIP Services */}
      <ServicesCards
        tone="muted"
        title="Our VoIP Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business"
        data={SERVICES_VOIPTESTING_CARD}
      />

      <FAQ data={SERVICES_VOIP_TESTING_FAQ} />

      <Section size="sm" tone="muted">
        <CTABanner
          title="Ready to Ensure Crystal-Clear VoIP Quality?"
          description="Let's discuss how our VoIP testing services can help you deliver flawless voice communication experiences."
          cta={{ label: "Schedule a Consultation", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
