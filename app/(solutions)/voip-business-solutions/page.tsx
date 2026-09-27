import { VOIP_BUSINESS_FEATURES, VOIP_BUSINESS_FAQ } from "@/constants/solutions/index";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList } from "@/components/site";

export default function VoipBusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="VoIP Business Solutions"
        description={
          <>
            <p className="font-semibold text-white">
              Scalable Business VoIP Solutions for Growing SMBs and Large
              Enterprises
            </p>
            <p className="mt-3">
              Experience consistent performance, flexible features, and
              unmatched support tailored to your needs built into our business
              VoIP solutions. Enjoy seamless communication that evolves with
              you.
            </p>
          </>
        }
        image="/images/solutions/voip-business/image-01.webp"
        imageAlt="VoIP Business Solution"
        primaryCta={{ label: "Get in Touch", href: "/contact-us" }}
      />

      <Section>
        <MediaSplit image="/images/solutions/voip-business/image-02.png" imageAlt="VoIP Business Solution">
          <SectionHeader
            title="Business VoIP Solutions for Empowering Enterprise Communication"
            align="left"
            className="mb-6 md:mb-6"
          />
          <p className="text-lead">
            Our business VoIP solutions provide reliable, scalable, robust,
            and high quality communication tools that meet the needs of any
            sized growing businesses. Whether you run a small business or a
            large enterprise, our scalable VoIP phone Solution ensures smooth,
            uninterrupted voice and video calls. Moreover, our VoIP based
            communication Solution enhances productivity across your teams.
            With advanced features and seamless integration capabilities, we
            help businesses stay connected effortlessly. Experience the
            abundant benefits of a tailored VoIP solution for small businesses
            and enterprises that adapts to business needs and keeps
            communication efficient and effective.
          </p>
        </MediaSplit>
      </Section>

      <SolutionsBenifits
        data={VOIP_BUSINESS_FEATURES}
        title="Drive Customer Engagement and Success with Our Business VoIP Solutions"
        description="Simplify communication with tailored communication tools that entice customers more effectively through high quality and professional communication and collaboration features."
      />

      <Section>
        <MediaSplit
          image="/images/solutions/voip-business/image-03.png"
          imageAlt="VoIP Business Solution"
          reverse
        >
          <SectionHeader
            title="Top-Tier VoIP Phone Services Developed Just for You"
            align="left"
            className="mb-6 md:mb-6"
          />
          <p className="text-lead">
            We are renowned for developing top-tier VoIP phone services, which
            are customized for client’s businesses. Our seasoned VoIP experts
            build business VoIP solutions to match the unique communication
            needs of enterprises. As your business grows, our scalable
            enterprise VoIP solutions adapt easily. Certainly, you benefit
            from a solution that delivers reliability, efficiency, and
            flexibility. With this personalized approach, your business gains
            a competitive edge.
          </p>
          <CheckList
            className="mt-6"
            items={[
              <>
                <span className="font-semibold text-ink">Expert Guidance:</span> Our solutions
                are developed by experienced VoIP professionals, ensuring optimal system
                performance and scalability. With ongoing support, we guarantee your
                communication tools evolve smoothly as your business grows.
              </>,
              <>
                <span className="font-semibold text-ink">Future-Proof Solutions:</span> Our VoIP
                solutions scale effortlessly with your business and allow easy expansion and
                feature incorporation. Built for long-term reliability, they ensure seamless
                communication without the need for frequent upgrades.
              </>,
            ]}
          />
        </MediaSplit>
      </Section>

      <FAQ data={VOIP_BUSINESS_FAQ} tone="muted" />
    </>
  );
}
