import {
  UNIFIED_COMMUNICATION_FEATURES,
  UNIFIED_COMMUNICATION_WHY_CHOOSE_US,
  UNIFIED_COMMUNICATION_FAQ,
} from "@/constants/solutions/index";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function UnifiedCommunicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Enterprise Unified Communications Solution"
        description={
          <>
            <p className="font-semibold text-white">Connect. Communicate. Conquer.</p>
            <p className="mt-3">
              A powerful collaboration solution that brings transformative
              revolution across all communication touchpoints.
            </p>
          </>
        }
        image="/images/solutions/unified-communications/Main-Banner.webp"
        imageAlt="Unified Communications Solution"
        primaryCta={{ label: "Get in Touch", href: "/contact-us" }}
      />

      <Section>
        <SectionHeader
          title="Necessity of a Unified Communication Phone System (UCaaS)"
          className="max-w-4xl"
          description={
            <div className="space-y-4">
              <p>
                With the growing trend of digitization and modernization, the number
                of communication tools is increasing; ranging from IP telephony to
                voice calling, video calling, instant messaging, desktop sharing,
                mobility, voicemail, and the list goes on. Enterprise unified
                communications features incorporated into the best unified
                communications solution introduce a streamlined, all-encompassing
                solution designed to harmonize these diverse channels into a single
                UCAAS phone system.
              </p>
              <p>
                Embrace the future with our unified communications phone system –
                where simplicity meets sophistication in the quest for flawless
                communication.
              </p>
            </div>
          }
        />
      </Section>

      <SolutionsBenifits
        data={UNIFIED_COMMUNICATION_FEATURES}
        title="White Label Unified Communications Solution Features"
        description="A white label UCaaS phone system offers a comprehensive suite of features designed to empower businesses with a seamless, reliable, scalable, and robust communication tool."
      />

      <Section>
        <MediaSplit
          image="/images/solutions/unified-communications/Unified-Communication-01.webp"
          imageAlt="Unified Communications Solution"
          reverse
        >
          <SectionHeader
            title="Amplify Growth Rate with a Unified Communications Phone System"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              A unified communication system provides futuristic communication
              and collaboration tools to enterprises, which propel the business
              ahead in the digital era. Moreover, it ensures that you exceed the
              expectations of your clients. By unifying distinct communication
              channels and mediums into a single, intuitive interface, the best
              unified communications solution. The unified communications VoIP
              platform simplifies the process of connecting with new clients,
              plus, expanding your business globally using preferred unified
              communication channels to ensure seamless collaboration across
              teams and geographies.
            </p>
            <p>
              Use the cutting edge UCaaS phone system to build a positive and
              collaborative ambiance for letting your team work more
              productively. On the other hand, seamless communication with
              clients will ensure better customer retention, higher
              productivity, reduced overheads, and several other business
              advantages.
            </p>
          </div>
          <CheckList
            className="mt-6"
            items={[
              "All information and communication is centrally controlled",
              "An integrated solution extends scalability and security",
            ]}
          />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Empowering Teams with Tailored Unified Communications Solutions"
          description="We build a comprehensive white label unified communications solutions that are tailored to meet unique communication needs of your teams. We assure a higher degree of flexibility and improved user experience."
        />
        <CheckList
          columns={2}
          className="mx-auto max-w-3xl lg:grid-cols-3 lg:max-w-5xl"
          items={[
            "Custom development",
            "Remote access",
            "Integration with your business tools",
            "Easy to use",
            "Engaging and intuitive",
            "Cost effective",
          ]}
        />
      </Section>

      <Section>
        <SectionHeader
          title="A comprehensive contact center solution with value added elements"
          description="Our feature rich audio and video conferencing solutions are developed to eradicate all limitations caused due to geographical or time zone differences. It has several advantages to offer to businesses, enterprises, and peers."
        />
        <CardGrid>
          {UNIFIED_COMMUNICATION_WHY_CHOOSE_US.map((card, index) => (
            <FeatureCard key={index} title={card.title} description={card.desc}>
              {card.features?.length > 0 && (
                <CheckList items={card.features} className="mt-6 [&_li]:text-base" />
              )}
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <FAQ data={UNIFIED_COMMUNICATION_FAQ} tone="muted" />
    </>
  );
}
