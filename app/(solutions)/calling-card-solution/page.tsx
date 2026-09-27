import { CALLING_CARD_FEATURES, CALLING_CARD_BENIFITS, CALLING_CARD_FAQ } from "@/constants/solutions";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, MediaSplit } from "@/components/site";

export default function CallingCardPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Calling Card Solution"
        description="Run a high profit making VoIP business with an evergreen solution to provide callback and PINless dialing services with a feature rich calling card solution."
        backgroundImage="/images/solutions/calling-card/image-01.jpg"
      />

      <Section>
        <SectionHeader
          title="Expand your revenue generating streams by jumping into the ever-blossoming business of international calling with a power packed and feature rich VoIP calling card solution"
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              An increasing number of international travelers has also amplified
              the demand for reliable and cheap calling solutions. Convenience in
              communication along with mobility has become the prime apprehension
              of the users. Our calling card solution facilitates VoIP service
              providers to meet the increasing demand for quality and affordable
              communication tools. It does not need customers to install any
              software or app or force the recipient to have the same software to
              attend the call. The calling card software based communication
              empowers customers to make SIP to SIP and SIP to PRI calls
              seamlessly as they are using their own default phone app.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/calling-card/image-02.jpg"
          imageAlt="Calling Card Solution"
          className="[&_img]:rounded-2xl"
        >
          <SectionHeader
            title="Calling Card Solution Provider Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              We have an adroit team that holds a vast understanding of the
              calling card business, whether it is a hosted calling card system
              or building an open source calling card software solution. We can
              fulfill all your business needs to run a growing and profit making
              calling card business. Our intuitive software design makes the
              management of DID numbers, vouchers, recharge, PIN authentication,
              etc. simplified. You will not need to invest in learning the
              technicalities of VoIP or calling card software and still you can
              manage a full fledged calling card business with our software.
            </p>
            <p>
              As we recognize that the calling card business has a huge
              potential and it is ever flourishing, we have added support for
              multiple currencies and a multilingual platform. This lets you
              expand your business wings in all global territories. The
              integrated VoIP billing system for the VoIP calling card platform
              will automate the invoicing and billing, as well as, all major
              jobs related to payment processing to make your business processes
              stress free. Managing an international VoIP calling and callback
              service business could never be as easy as it is with our
              software.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionFeatures
        data={CALLING_CARD_FEATURES}
        title="Key Features"
        description="We have catered to small to large scaled calling card businesses with a prevailing calling card system and tailored features and integrations."
      />

      <SolutionsBenifits
        data={CALLING_CARD_BENIFITS}
        title="Key Benefits"
        description="The best VoIP calling card software is designed to provide comprehensive features and meet the shifting demands of communication by tourists, corporate professionals, and students with excellent advantages."
      />

      <FAQ
        data={CALLING_CARD_FAQ}
        sub_title="All commonly asked questions in regard to the calling card systems are answered by our veteran team for you."
      />
    </>
  );
}
