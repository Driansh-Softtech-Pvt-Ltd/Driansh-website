import ServicesCards from "@/components/Services-cards";
import { SERVICES_LINPHONE_CARDS, SERVICES_LINPHONE_FAQ, WHY_CHOOSE_LINPHONE } from "@/constants/services";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList } from "@/components/site";

export default function LinphoneDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Open Source Development"
        title="Linphone App Development"
        description={
          <div className="space-y-4">
            <p>
              Empower your internal business communication and collaboration or launch a new revenue generating stream
              with custom linphone development services
            </p>
            <p className="text-base">
              Linphone is an open source SIP Softphone. It supports multiple devices and platforms, which makes it a
              versatile solution to meet the communication needs of businesses. Our specialization in Linphone app
              development makes us the right partner for companies that are interested in harnessing the existent
              supremacy of this SIP Softphone. It can be used as a mobile SIP dialer. We have the proficiency in
              bolstering the strength of mobile development and VoIP development and channelize it into our Linphone app
              development services to empower our clients.
            </p>
          </div>
        }
        backgroundImage="/images/services/open-source-service/linphone-devlopment-service/10Linphone-App.webp"
      />

      <ServicesCards
        tone="muted"
        title="Our Offerings in Linphone"
        subtitle="We have an adroit team that holds expertise in offering the top to bottom services in Linphone."
        data={SERVICES_LINPHONE_CARDS}
      />

      <Section>
        <MediaSplit
          image="/images/services/open-source-service/linphone-devlopment-service/linphone1.jpeg"
          imageAlt="Mobile Dialer"
          reverse
          framed
          className="[&_img]:mx-auto [&_img]:max-w-md"
        >
          <SectionHeader
            title="Does your business need a Linphone App development partner?"
            description="Our Android App development company helps you build cost-effective, performant, and highly interactive video streaming apps."
            align="left"
            className="mb-8 md:mb-8"
          />
          <CheckList items={["Intuitive layout", "Customizable", "Scalable and secure"]} />
        </MediaSplit>
      </Section>

      <Section tone="muted" containerClassName="max-w-5xl">
        <SectionHeader title="Linphone App Development Company" />
        <div className="text-lead space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p>
            We are one of the leading technologies companies that have a dexterous team of VoIP and mobile app
            developers. Moreover, we have the most innovative and creative UI UX designers onboard to deliver impressive
            layouts of our systems and mobile apps. We have been working in this industry for ages and this has given us
            the potency to build the best Linphone app. Our multitalented team with versatility in Linphone app
            development can deliver a tailored SIP Softphone app using this open source to let you achieve your business
            goals.
          </p>
          <p>
            Our Linphone app development company is renowned for its strategic approach and methodical course of action.
            We first gather and understand the requirements of the business, goals to be achieved, and other aspects to
            benefit the company with Linphone consulting services. Based on the defined criteria, we provide Linphone app
            development services that consist of designing attractive UI and UX for this unified communication app. Using
            our Linphone app development services, you can develop a simple mobile VoIP solution for voice calling or you
            can get a comprehensive SIP Softphone that supports voice, video, chat, file sharing, and other modes of
            communication.
          </p>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_LINPHONE} tone="white" />

      <FAQ data={SERVICES_LINPHONE_FAQ} tone="muted" />
    </>
  );
}
