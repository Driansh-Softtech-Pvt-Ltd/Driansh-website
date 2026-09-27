import { Users, Quote } from "lucide-react";
import FAQ from "@/components/FAQ";
import {
  SERVICES_WEBRTC_BENEFITS,
  SERVICES_WEBRTC_CARDS,
  SERVICES_WEBRTC_FAQ,
  SERVICES_WEBRTC_TESTIMONIALS,
  WHY_CHOOSE_WEBRTC,
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

export default function WebRTCDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="VoIP Development"
        title="Ready-to-Use WebRTC VoIP Softphone"
        description="Effortlessly deploy our WebRTC VoIP softphone for seamless real-time communication. Stay connected with secure, high-quality voice and video calls instantly."
        backgroundImage="/images/services/voip-devlopment-service/webrtc-devlopment-service/Webrtc-01-scaled.webp"
      />

      {/* What is WebRTC */}
      <Section containerClassName="max-w-4xl">
        <SectionHeader title="What is WebRTC" />
        <div className="text-lead space-y-6">
          <p>
            WebRTC (Web Real-Time Communication) is an open-source technology that allows real-time voice and video
            calls, messaging, screen sharing, and file transfers directly within web browsers and mobile apps. It removes
            the need for plugins, extensions, or third-party installations, providing instant and smooth communication
            experiences.
          </p>
          <p>
            WebRTC is supported by all major browsers, including Chrome, Firefox, Safari, and Edge. It provides an
            incredible foundation for building interactive, secure and high-performance communication applications.
            Establishing peer-to-peer connections it also helps enabling developers to build rich multimedia experiences
            without the hassle of integrating with external services.
          </p>
          <p>
            From one-on-one video chats to complex multi-user conferencing and integrated enterprise collaboration tools,
            WebRTC empowers developers and organizations to deliver low-latency, cross-device, and highly scalable
            real-time communication solutions—entirely within the browser environment.
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="muted">
        <SectionHeader title="How can WebRTC Benefit your Business?" />
        <CheckList
          items={SERVICES_WEBRTC_BENEFITS}
          columns={2}
          className="mx-auto max-w-5xl gap-4 [&_li]:rounded-2xl [&_li]:border [&_li]:border-slate-200 [&_li]:bg-white [&_li]:p-5 [&_li]:shadow-sm"
        />
      </Section>

      <Section size="sm">
        <CTABanner
          title="Does your business need a WebRTC development partner?"
          description="Our WebRTC development company helps you build cost-effective, performant, and highly interactive video streaming apps."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>

      <ServicesCards
        tone="muted"
        title="Features of WebRTC Development Software"
        subtitle="Our WebRTC development company helps you build cost-effective, performant, and highly interactive video streaming apps."
        data={SERVICES_WEBRTC_CARDS}
      />

      {/* Company */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader title="WebRTC Development Company" align="left" className="mb-6 md:mb-6" />
            <div className="text-lead space-y-4">
              <p>
                We, Driansh Technologies, are one of the leading WebRTC development companies. Our in-house team of
                WebRTC experts has built a whole gamut of communication and collaboration solutions using this VoIP
                development technology.
              </p>
              <p>
                With our expertise in using WebRTC to build ideal teleconferencing and broadcasting WebRTC solutions, we
                have empowered the communication infrastructure of many businesses. We use the best software development
                approach to leverage the full advantage of WebRTC to fulfill the communication and collaboration needs of
                any business in a highly secured manner. We are one of the preferred WebRTC development and support
                companies.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-brand-soft p-4 sm:p-8">
            <FeatureCard
              icon={<Users />}
              title="Unified communication solutions"
              description="Leverage the potential of all popular collaboration channels incorporated within your business communication solution and empowered with the power of real time communication technology, WebRTC."
              className="hover:translate-y-0"
            >
              <CheckList
                items={["Increased agility", "Streamlined processes", "Better team building"]}
                className="mt-6 [&_li]:text-base"
              />
            </FeatureCard>
          </div>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_WEBRTC} />

      <Section size="sm">
        <CTABanner
          title="Are You Looking For Experts And Professional WebRTC Developers For Your Projects?"
          cta={{ label: "Contact Us Today", href: "/contact-us" }}
        />
      </Section>

      {/* Testimonials */}
      <Section tone="muted">
        <SectionHeader title="What Our Client Say" />
        <CardGrid>
          {SERVICES_WEBRTC_TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={index}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Quote className="h-6 w-6" aria-hidden="true" />
              </div>
              <blockquote className="flex-1 italic leading-relaxed text-slate-700">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-semibold text-ink">{testimonial.author}</p>
                {testimonial.company && <p className="text-sm text-slate-600">{testimonial.company}</p>}
              </figcaption>
            </figure>
          ))}
        </CardGrid>
      </Section>

      <FAQ data={SERVICES_WEBRTC_FAQ} />

      <Section size="sm" tone="muted">
        <CTABanner
          title="Ready to Transform Your Communication?"
          description="Let's discuss your WebRTC development needs and create a custom solution for your business"
          cta={{ label: "Schedule a Consultation", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
