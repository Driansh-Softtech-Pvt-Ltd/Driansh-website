import Image from "next/image";
import {
  CLASS_5_SOFTWITCH_FEATURES,
  CLASS_5_SOFTWITCH_BUSINESS_MODELS,
  CLASS_5_SOFTWITCH_BENIFITS,
  CLASS_5_SOFTWITCH_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function Class5SoftwitchPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Class 5 Softswitch"
        description="Harness the power of a carrier grade retail Softswitch solution with extended features and functionalities to broaden your business and revenue generating streams"
        backgroundImage="/images/solutions/class5-softwitch/image-01.webp"
      />

      <Section>
        <SectionHeader
          title="Enjoy the premium performance and never seen before features in your class 5 Softswitch software to run a business with a competitive advantage and better value proposition."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              The modular architecture, inbuilt multi tenant support, integrated
              VoIP billing, advanced call center features, and several other
              components make a class 5 Softswitch solution more competitive. With
              these components, VoIP service providers, retail providers, SIP
              servers, and other similar businesses can uplift their offerings
              with flawless services. They can even add PBX services to cater to
              residential, business, and enterprise users. It is a powerful
              communication tool that can meet ends of business communication and
              collaboration needs. Catering to business and residential clients
              with a single system could never be easier without this SIP
              Softswitch solution.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/class5-softwitch/image-02.webp"
          imageAlt="Class 5 Softswitch"
          className="[&_img]:rounded-2xl"
        >
          <SectionHeader
            title="Class 5 Softswitch Development Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              Our veteran team of VoIP developers has built the most scalable
              class 5 Softswitch solution for VoIP service providers and
              business users to meet business communication needs. Our
              innovative solution puts us in the list of top class 5 Softswitch
              companies that provide an end to end solution: from consultation
              to development, a retail VoIP Softswitch solution, customization,
              deployment, architecture design, ongoing support, and more.
            </p>
            <p>
              A web based dashboard panel with a comprehensive suite of SIP
              network components, extensive VoIP billing, integration support,
              and an intuitive user interface, makes it an all-inclusive and
              powerful class 5 Softswitch system. Catering to enterprise needs
              can be easier and more cost effective with this enterprise grade
              cloud PBX aka class 5 VoIP Softswitch system. A single system is
              capable to bridge the communication gap and meet the increasing
              business collaboration needs of a retail VoIP business, unified
              communication needs, requirements of carriers, and other alike
              users.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionFeatures
        data={CLASS_5_SOFTWITCH_FEATURES}
        title="Key Features"
        description="Our retail switch is built with well researched features to augment communication and lower costs to aid businesses to enjoy the true benefits of using a powerful VoIP communication system."
      />

      <Section tone="muted">
        <SectionHeader
          title="Class 5 Softswitch Solution Benefits Diverse Business Models"
          description="We have kept the needs and demands of all diverse types of businesses into consideration to serve them with the most dependable class 5 VoIP Softswitch solution."
        />
        <CardGrid columns={2}>
          {CLASS_5_SOFTWITCH_BUSINESS_MODELS.map((item, index) => (
            <FeatureCard
              key={index}
              icon={
                <Image src={item.icon} alt="" width={44} height={44} className="object-contain" />
              }
              iconClassName="h-14 w-14 p-1.5"
              title={item.title}
              description={item.desc}
            />
          ))}
        </CardGrid>
      </Section>

      <SolutionsBenifits
        tone="white"
        data={CLASS_5_SOFTWITCH_BENIFITS}
        title="Key Benefits"
        description="A class 5 Softswitch solution is built to meet business communication, end user, and service provider needs and serve all businesses with an array of advantages."
      />

      <FAQ
        tone="muted"
        data={CLASS_5_SOFTWITCH_FAQ}
        sub_title="Get instant answers to all the frequently asked questions related to a retail Softswitch solution."
      />
    </>
  );
}
