import Image from "next/image";
import {
  ABOUT_PAGE_SECTIONS,
  ABOUT_PAGE_FEATURES,
  ABOUT_PAGE_TECH_ADVANTAGES,
} from "@/constants/index";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Driansh Softtech"
        description="We are a passionate VoIP solutions startup focused on delivering innovative and scalable communication systems."
        backgroundImage="/images/about-us-img1.png"
        primaryCta={null}
      />

      <Section>
        <MediaSplit image="/images/about_2.svg" imageAlt="Our Startup Journey Illustration">
          <SectionHeader title="Our Journey" align="left" className="mb-6 md:mb-6" />
          <div className="text-lead space-y-4">
            <p>
              Driansh Softtech was founded in 2025 with a bold vision — to
              democratize enterprise-grade VoIP technology for businesses of all
              sizes. As a young startup, we identified the gap between complex,
              expensive telephony systems and the growing need for accessible,
              innovative communication solutions.
            </p>
            <p>
              Our founding team brings together fresh perspectives and deep
              technical expertise in VoIP technologies. We’re passionate about
              FreeSWITCH, FusionPBX, Kamailio. We believe that startup agility
              combined with technical excellence can deliver superior results at
              competitive prices.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <CardGrid columns={2}>
          {ABOUT_PAGE_SECTIONS.map((card) => (
            <FeatureCard
              key={card.title}
              icon={<Image src={card.image} alt="" width={40} height={40} className="h-10 w-10 object-contain" />}
              iconClassName="h-16 w-16"
              title={card.title}
              description={card.text}
            />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader
          title="Our Core Values"
          description="These values guide every decision we make and every solution we deliver."
        />
        <CardGrid columns={4}>
          {ABOUT_PAGE_FEATURES.map((item, idx) => (
            <FeatureCard key={idx} icon={item.icon} title={item.title} description={item.desc} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Why Choose Our VoIP Startup?"
          description="We combine startup innovation with specialized VoIP expertise to deliver exceptional results."
        />
        <CardGrid>
          {ABOUT_PAGE_TECH_ADVANTAGES.map((item, idx) => (
            <FeatureCard key={idx} icon={item.icon} title={item.title} description={item.desc} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Ready to Work With Us?"
          description="Let's discuss how we can help transform your business with innovative technology solutions."
          cta={{ label: "Get Started", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
