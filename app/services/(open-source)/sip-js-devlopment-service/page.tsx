import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_SIPJS_CARDS, WHY_CHOOSE_SIPJS_THREE } from "@/constants/services";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner, CtaLink } from "@/components/site";

export default function SIPJsDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Open Source Development"
        title="Hire SIP.js Developer"
        description="Build Feature Packed Real Time Communication Apps with the Power of WebRTC and SIP"
        backgroundImage="/images/services/open-source-service/sipjs-devlopment-service/SIP-JS-01-scaled-1.webp"
      />

      <Section>
        <MediaSplit
          image="/images/services/open-source-service/sipjs-devlopment-service/SIP-JS.webp"
          imageAlt="SIP.js Development"
        >
          <SectionHeader
            title="Pool of Talented SIP.js Developers Available to Work on Your Communication Projects"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-5">
            <p>
              Building a SIP based communication solution, which also offers real time communication using browser
              technology with WebRTC was quite a complicated and tedious job for developers. However, with SIP.js
              libraries, it has become easier to implement both SIP and WebRTC within a single app using JavaScript
              libraries. You can develop flexible and scalable real time communication solutions to run your business or
              enhance your business communication by leveraging the power of WebRTC and SIP.
            </p>
            <p>
              We have a team of experienced SIP and WebRTC developers that have familiarity and specialization in working
              with the SIP.js library. We have flexible engagement models to offer. Depending on the project needs,
              businesses can hire a SIP.Js developer or a team of SIP.js developers for full time, part time, or as per
              the project&apos;s demand.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <ServicesCards
        tone="muted"
        title="Our SIP.Js Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_SIPJS_CARDS}
      />

      <Section size="sm">
        <CTABanner
          title="Does your business need a SIP.js development partner?"
          description="Our SIP.js development company helps you build cost‑effective, performant, and highly interactive video streaming apps."
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/services/open-source-service/sipjs-devlopment-service/Audio-Video-Conferencing-Solution-02.webp"
          imageAlt="Audio & Video Conferencing Solution"
          reverse
        >
          <SectionHeader title="Audio & Video Conferencing Solution" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            Our experienced developers will integrate the power of SIP into a web app to build the most reliable and
            robust audio and video conferencing solution. We specialize in using hybrid technologies to build scalable
            conferencing solutions; ranging from SIP js WebRTC to SIP js Asterisk, SIP js FreeSWITCH, and SIP js React
            Native. Let our team guide you through the process to build the most comprehensive audio and video
            conferencing software.
          </p>
          <CheckList
            items={["Excellent quality of calls", "Supports unlimited participants", "Actionable insights and updates"]}
            className="mb-8"
          />
          <CtaLink href="/contact-us">Discover More</CtaLink>
        </MediaSplit>
      </Section>

      <Section containerClassName="max-w-4xl">
        <SectionHeader title="SIP.Js Development Services" />
        <div className="text-lead space-y-4">
          <p>
            We are one of the leading telephony solution development companies. Our experienced SIP.js developers hold
            versatile experience working with different SIP technologies, JavaScript frameworks, and other technology
            platforms. The complete bundle of technical expertise is available to harness the full potential of SIP.js
            libraries and add them to your VoIP projects.
          </p>
          <p>
            Our SIP.js development services cover all your requirements to build a robust and real time communication
            platform that seamlessly handles SIP calls. We can help you develop a communication app consisting of voice
            calling, video calling, instant messaging, file sharing, screen sharing, and multiple other real time
            communication features. You don’t need to worry about adding a SIP server or adding and maintaining a long
            code in your telephony platform. Our SIP.js development services offer robust and reliable communication
            solution development using this popular JavaScript library.
          </p>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_SIPJS_THREE} subtitle="Discover the Benefits of Partnering with Our Team" />

      <Section size="sm">
        <CTABanner
          title="Does your business need a SIP.js development partner?"
          cta={{ label: "Request a Quote", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
