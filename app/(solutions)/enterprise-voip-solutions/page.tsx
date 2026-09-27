import {
  ENTERPRISE_VOIP_FEATURES,
  ENTERPRISE_VOIP_WHY_CHOOSE_US,
  ENTERPRISE_VOIP_FAQ,
} from "@/constants/solutions";
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

const LANDLINE_DIFFERENCES = [
  {
    label: "Advanced Features",
    text: "VoIP enterprise solutions include features like video conferencing, voicemail to email, call forwarding, real time messaging, and integration with CRM systems. These tools streamline communication and enhance team collaboration, which are not possible with traditional landlines.",
  },
  {
    label: "Scalability and Cost Efficiency",
    text: "VoIP for enterprise solutions easily scale to accommodate business growth. They also reduce costs associated with physical infrastructure and long distance calls, offering a more economical solution compared to landlines.",
  },
];

export default function EnterpriseVoipPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Seamless Connectivity with an Enterprise VoIP Solution"
        description="Designed to scale effortlessly with your business needs. Enjoy crystal clear voice quality, robust security, and unparalleled reliability in the enterprise VoIP solution."
        image="/images/solutions/enterprise-voip/image-01.png"
        imageAlt="Enterprise VoIP Solution"
        primaryCta={{ label: "Get in Touch", href: "/contact-us" }}
      />

      <Section>
        <MediaSplit
          image="/images/solutions/enterprise-voip/image-02.png"
          imageAlt="Enterprise VoIP Solution"
        >
          <SectionHeader title="What is Enterprise VoIP?" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead">
            Enterprise VoIP solutions are state-of-the-art VoIP communication
            solutions that use digital channels to communicate via the
            Internet rather than using traditional telephone lines. It lets
            businesses access wide ranging, advanced communication features
            with superior call quality, reduced costs, and seamless
            scalability. VoIP enterprise solutions are perfect for businesses
            aiming for top tier communication. Moreover, it ensures reliable,
            high quality collaboration for teams everywhere.
          </p>
        </MediaSplit>
      </Section>

      <SolutionsBenifits
        data={ENTERPRISE_VOIP_FEATURES}
        title="Features of the Best Enterprise VoIP Phone System"
        description="The best enterprise VoIP solution is tailored to enhance global operations with reliable, scalable, and advanced communication, collaboration, and monitoring features."
      />

      <Section>
        <MediaSplit
          image="/images/solutions/enterprise-voip/image-03.png"
          imageAlt="Enterprise VoIP Solution"
        >
          <SectionHeader
            title="How Do Enterprise VoIP Solutions Differ from Standard Landlines?"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              Enterprise telephony solutions operate over the internet rather
              than PSTN lines. Thus, they provide more flexibility and advanced
              features compared to traditional landlines. Unlike landlines, VoIP
              integrates seamlessly with other digital communication tools,
              enhancing productivity and collaboration. Additionally, an
              enterprise VoIP solution offers scalability and cost efficiency,
              making it ideal for businesses of all sizes.
            </p>
            <p>
              In contrast, standard landlines rely on physical phone lines,
              limiting mobility and expansion capabilities. Landlines lack the
              integration options and advanced functionalities that enterprise
              telephony solutions provide, such as video conferencing and real
              time messaging. Furthermore, maintaining landline infrastructure
              can be more costly and less adaptable to modern business needs.
            </p>
          </div>
          <CheckList
            className="mt-6"
            items={LANDLINE_DIFFERENCES.map((item) => (
              <>
                <strong className="font-semibold text-ink">{item.label}:</strong> {item.text}
              </>
            ))}
          />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/enterprise-voip/image-04.png"
          imageAlt="Enterprise VoIP Solution"
          reverse
        >
          <SectionHeader
            title="The Benefits of Transitioning to Enterprise Telephony Solutions"
            description="Discover how VoIP enterprise solutions can transform your business communication."
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList
            items={[
              "Enjoy higher uptime and reliability ensuring continuous communication",
              "Advanced features to augment the communication experience",
              "Access the best enterprise VoIP phone system from anywhere",
              "Reduce costs with lower call rates and minimal infrastructure expenses",
            ]}
          />
        </MediaSplit>
      </Section>

      <Section>
        <MediaSplit
          image="/images/solutions/enterprise-voip/image-05.png"
          imageAlt="Enterprise VoIP Solution"
        >
          <SectionHeader
            title="Compatible Devices for Enterprise Hosted VoIP Solutions"
            description="Unlock the versatility of enterprise hosted VoIP communication solutions with a wide range of compatible devices. This flexibility ensures you can connect and communicate effectively from virtually any device, anywhere."
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList
            items={[
              "Smartphones and tablets (via mobile apps)",
              "IP phones/ SIP phones",
              "Laptops/ Desktop computers (via Softphones or Software providing a Cloud PBX system/ Hosted PBX)",
            ]}
          />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Why Partner with Us for Enterprise VoIP Solution?"
          description="Experience unparalleled service and innovation with our enterprise telephony solutions and related services."
        />
        <CardGrid>
          {ENTERPRISE_VOIP_WHY_CHOOSE_US.map((card, index) => (
            <FeatureCard key={index} title={card.title} description={card.desc}>
              {card.features?.length > 0 && (
                <CheckList items={card.features} className="mt-6 [&_li]:text-base" />
              )}
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <FAQ data={ENTERPRISE_VOIP_FAQ} />
    </>
  );
}
