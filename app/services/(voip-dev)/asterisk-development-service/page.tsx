import { BarChart3 } from "lucide-react";
import FAQ from "@/components/FAQ";
import {
  SERVICES_ASTERISK_FAQ,
  SERVICES_ASTERISK_CARDS,
  WHY_CHOOSE_ASTERISK,
  SERVICES_ASTERISK_SERVICES,
} from "@/constants/services";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  PageHero,
  Section,
  SectionHeader,
  CheckList,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function AsteriskDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Development"
        title="Asterisk Development Service"
        description="Asterisk has set the stepping stone for developing VoIP based communication tools with its powerful IP PBX Solution. It can be used to build a variety of communication and collaboration solutions to meet day to day needs of businesses and end users. Our focused Asterisk services can benefit you and leverage the power of this pioneer VoIP development technology."
        backgroundImage="/images/services/voip-devlopment-service/asterisk-devlopment-service/Asterisk-min.webp"
      />

      <Section>
        <SectionHeader
          title="Asterisk Development Company"
          description={
            <>
              <p>
                We are one of the renowned Asterisk development companies that expertise in building custom and open
                source VoIP solutions. Our experienced Asterisk developers hold a detailed understanding of each feature
                of this open source VoIP development platform and how to turn scattered features into a full fledged
                communication solution.
              </p>
              <p className="mt-4">
                We follow an agile approach to building the best telephony solution with our meticulous Asterisk
                development services.
              </p>
            </>
          }
          className="mb-0 max-w-4xl md:mb-0"
        />
      </Section>

      <Section size="sm" className="pt-0 md:pt-0">
        <CTABanner
          title="Does your business need an Asterisk development partner?"
          description="Our Asterisk development company helps you build cost-effective, performant, and highly interactive video streaming apps."
        />
      </Section>

      <ServicesCards
        tone="muted"
        title="Our Asterisk Services"
        subtitle="We have experience in providing world class development, customization, support, and multiple other services in Asterisk."
        data={SERVICES_ASTERISK_CARDS}
      />

      <Section>
        <SectionHeader
          title="Our Expert Solutions in Asterisk"
          description="We have experience in providing world class development, customization, support, and multiple other services in Asterisk."
        />
        <CardGrid>
          {SERVICES_ASTERISK_SERVICES.map((solution, index) => (
            <FeatureCard key={index} title={solution.title} description={solution.description} />
          ))}
        </CardGrid>

        <div className="mt-12 overflow-hidden rounded-2xl bg-navy p-6 text-slate-300 sm:p-10 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="heading-2 mb-6 text-white">Calling Card Solution</h3>
              <CheckList
                theme="dark"
                items={["Voucher management", "Real time actions", "Reseller network support"]}
              />
            </div>
            <div className="flex justify-center" aria-hidden="true">
              <div className="rounded-2xl bg-white/10 p-8 text-violet-200">
                <BarChart3 className="h-28 w-28 sm:h-40 sm:w-40" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_ASTERISK} />

      <FAQ data={SERVICES_ASTERISK_FAQ} />
    </>
  );
}
