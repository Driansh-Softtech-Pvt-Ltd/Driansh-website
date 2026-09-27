import Image from "next/image";
import {
  CALL_CENTER_SOLUTION,
  CALL_CENTER_SOLUTION_FEATURES,
  CALL_CENTER_SOLUTION_CARDS,
  CALL_CENTER_SOLUTION_TENANTS,
  CALL_CENTER_SOLUTION_FAQ,
} from "@/constants/solutions/index";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  CheckList,
  CtaLink,
  FeatureCard,
  CardGrid,
} from "@/components/site";

const iconImg = (src: string) => (
  <Image src={src} alt="" width={28} height={28} className="object-contain" />
);

export default function CallCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Readymade FreeSWITCH Driven Contact Center Solution"
        description="Deploy a ready-to-use contact center solution with features like Auto Dialer, Predictive Dialer, WhatsApp Chat, IVR, call routing, real-time analytics, and CRM integration."
        backgroundImage="/images/solutions/call-center/image-01.webp"
        primaryCta={{ label: "Get in Touch", href: "/contact-us" }}
      />

      <Section>
        <SectionHeader
          title="Single platform to proficiently manage the complete buyer’s cycle, streamline operations and optimize the workforce to double the success and growth rate"
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              With the shifting focus to client centric operations, the
              essentiality of a feature packed call center solution has been
              increasing. The elevating competition also enforces businesses to
              focus on increased customer retention and constant new onboarding of
              clients. Our technology driven and feature packed contact center
              software contributes to the growth of businesses by optimizing
              operations with automation, artificial intelligence, and other
              trending tools encompassed in a single platform. It gives the
              required details and features to the agents to clutch the
              conversation with context driven information and lead the call to a
              favorable conclusion.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/call-center/call-center-img.png"
          imageAlt="Contact Center Solution"
          className="[&_img]:rounded-2xl"
        >
          <SectionHeader
            title="Call Center Solution Provider Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              We have been working in the call center industry for decades and
              have invested in scrupulous research of the industry, business
              goals, customer demands, trending technologies, and more. We build
              the most powerful contact center software by taking advantage of our
              conscientious research and experience. It streamlines and optimizes
              business processes. It supports the tenant model and has omnichannel
              customer support capabilities to cater to customers across all touch
              points. We have designed the most intuitive user experience and user
              interface of this call center software to elevate the experience of
              agents. We acknowledge the importance of agent experience to augment
              performance and productivity at the core.
            </p>
            <p>
              Our team of call center software developers has proficiency in
              customizing the existing features. Using this potential of our
              experts, we have empowered several businesses and enterprises with a
              tailored call center solution. We are entitled as the top call
              center solution provider company for our innovative approach and
              dexterity in unleashing the power of technology. We have built the
              most comprehensive contact center software that is empowered with
              integrated solutions. It provides access to features of call center
              billing, CRM, PBX, etc. within the software to empower agents to
              have guided calls with more control. The admin and supervisors can
              empower agents with their experience in real time with our live
              monitoring features and insightful reports.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <Section>
        <SectionHeader
          title="Diversified Varieties of Call Center Solutions"
          description="To meet the goal-oriented business needs of call centers, we have developed theme-based call center solutions."
        />
        <CardGrid columns={2}>
          {CALL_CENTER_SOLUTION.map((item) => (
            <FeatureCard
              key={item.id}
              icon={iconImg(item.icon)}
              iconClassName="p-2.5"
              title={item.title}
              description={item.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Exceptional Features for Outstanding Businesses"
          description="Our contact center solutions are built with standard and futuristic features that redefine the business success rate."
        />
        <CardGrid columns={2}>
          {CALL_CENTER_SOLUTION_FEATURES.map((item) => (
            <FeatureCard
              key={item.id}
              icon={iconImg(item.icon)}
              iconClassName="p-2.5"
              title={item.title}
              description={item.description}
            >
              {item.features.length > 0 && (
                <CheckList
                  items={item.features.flat()}
                  columns={2}
                  className="mt-6 [&_li]:text-base"
                />
              )}
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader
          title="A comprehensive contact center solution with value added elements"
          description="Our feature rich audio and video conferencing solutions are developed to eradicate all limitations caused due to geographical or time zone differences. It has several advantages to offer to businesses, enterprises, and peers."
        />
        <CardGrid>
          {CALL_CENTER_SOLUTION_CARDS.map((card, index) => (
            <FeatureCard
              key={index}
              icon={iconImg(card.icon)}
              iconClassName="p-2.5"
              title={card.title}
              description={card.description}
            >
              {card.features?.length > 0 && (
                <CheckList items={card.features} className="mt-6 [&_li]:text-base" />
              )}
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="An Ideal Contact Center Solution with Tenant Support"
          description="Rule your own niche or empower small call centers to generate revenue with tenant based call center software."
        />
        <div className="space-y-16 md:space-y-20">
          {CALL_CENTER_SOLUTION_TENANTS.map((item, index) => (
            <MediaSplit
              key={index}
              image={item.image}
              imageAlt={item.title}
              reverse={index % 2 === 0}
              className="[&_img]:max-h-80"
            >
              <h3 className="heading-3 mb-4 text-ink sm:text-2xl">{item.title}</h3>
              <p className="text-lead">{item.desc}</p>
            </MediaSplit>
          ))}
        </div>
      </Section>

      <Section>
        <MediaSplit
          image="/images/solutions/call-center/image-05.webp"
          imageAlt="Call Center Solution"
          reverse
        >
          <SectionHeader
            eyebrow="Top Reasons to Choose"
            title="Call Center Solution"
            align="left"
            className="mb-8 md:mb-8"
          />
          <CtaLink href="/contact-us">Get in Touch</CtaLink>
        </MediaSplit>
      </Section>

      <FAQ
        tone="muted"
        data={CALL_CENTER_SOLUTION_FAQ}
        sub_title="All commonly asked questions related to the call center solution are answered by our adroit team for you."
      />
    </>
  );
}
