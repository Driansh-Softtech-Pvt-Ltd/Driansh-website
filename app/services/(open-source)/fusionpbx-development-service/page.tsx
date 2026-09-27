import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SERVICES_FUSIONPBX_CARDS, SERVICES_FUSIONPBX_FAQ, WHY_CHOOSE_FUSIONPBX } from "@/constants/services";
import FAQ from "@/components/FAQ";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { PageHero, Section, SectionHeader } from "@/components/site";

const PARTNER_POINTS = [
  { title: "Rapid Prototyping", description: "Quick development and deployment of your ideas" },
  { title: "Native Feature Availability", description: "Access to all platform-specific capabilities" },
  { title: "Consistent User Experience", description: "Seamless experience across all devices" },
];

export default function FusionPBXDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Open Source Development"
        title="Expert FusionPBX Services"
        description="FusionPBX is a very well known hosted PBX solution with multi tenant support. It is an open source PBX system, which makes it a more preferred choice for many. To harness the benefits of this powerful multi tenant IP PBX software, it is necessary to hold rich experience in FreeSWITCH and FusionPBX, both. Our FusionPBX consultants have been benefiting businesses with their proficiency in this open source VoIP platform. Our consulting service includes on-demand and standard support, recommendations, and other services from FusionPBX experts that can help you maximize your returns."
        backgroundImage="/images/services/open-source-service/fusionpbx-devlopment-service/9FusionPBX-scaled.webp"
      />

      <Section containerClassName="max-w-4xl">
        <SectionHeader title="FusionPBX Consulting Services" />
        <p className="text-lead text-center">
          FusionPBX is a very well known hosted PBX solution with multi tenant support. It is an open source PBX system,
          which makes it a more preferred choice for many. To harness the benefits of this powerful multi tenant IP PBX
          software, it is necessary to hold rich experience in FreeSWITCH and FusionPBX, both. Our FusionPBX consultants
          have been benefiting businesses with their proficiency in this open source VoIP platform. Our consulting service
          includes on-demand and standard support, recommendations, and other services from FusionPBX experts that can
          help you maximize your returns.
        </p>
      </Section>

      <ServicesCards
        tone="muted"
        title="Our FusionPBX Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_FUSIONPBX_CARDS}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              title="Does your business need a FusionPBX development partner?"
              description="Our FusionPBX development company helps you build cost-effective, performant, and highly interactive video streaming apps."
              align="left"
              className="mb-8 md:mb-8"
            />
            <ul className="space-y-5">
              {PARTNER_POINTS.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                    <p className="text-slate-600">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="Cross Platform Development"
              width={800}
              height={600}
              unoptimized
              className="h-auto w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted" containerClassName="max-w-4xl">
        <SectionHeader title="FusionPBX Development Company" />
        <div className="text-lead space-y-6">
          <p>
            We are renowned for our skills in all major open source VoIP and telephony platforms, including FusionPBX. We
            have years of experience in handling custom requirements or customization demands of customers using this
            powerful, multi tenant PBX software. Our FreeSWITCH developers have a swift hand in handling different demands
            that can meet short term and long term goals of businesses that they want to meet with this IP PBX system.
          </p>
          <p>
            We provide white labeling, FusionPBX theme development and integration, custom feature production,
            customization of existing features, integration of third party APIs, and all other development services to
            FusionPBX users. Our services cover UI/UX enhancements to performance improvement, bug fixing, VoIP billing
            system integration, and other expert services offered at an affordable cost to empower businesses using this
            software.
          </p>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_FUSIONPBX} tone="white" />

      <FAQ data={SERVICES_FUSIONPBX_FAQ} tone="muted" />
    </>
  );
}
