import Image from "next/image";
import {
  CLASS_4_SOFTWITCH_FEATURES,
  CLASS_4_SOFTWITCH_BUSINESSES,
  CLASS_4_SOFTWITCH_BENIFITS,
  CLASS_4_SOFTWITCH_FAQ,
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

export default function Class4SoftwitchPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Class 4 Softswitch"
        description="Elevate your wholesale VoIP business with the most robust, reliable, and secure class 4 Softswitch solution and enjoy ever growing business reach and revenue."
        backgroundImage="/images/solutions/class4-softwitch/image-01.jpg"
      />

      <Section>
        <SectionHeader
          title="Get the most powerful class 4 Softswitch solution to strengthen your wholesale VoIP business to stay focused on your business and stress free from technicalities."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              The VoIP traffic aggregators, wholesale VoIP providers, carriers,
              and similar businesses need a reliable solution to manage and
              administer signaling, call traffic, and other components associated
              with the wholesale VoIP business. The system handles a gargantuan
              number of calls per second, which need the right load balancing and
              failover system in place, too. A tailormade, feature rich, and
              scalable class 4 Softswitch solution can empower these businesses
              with automation and other outstanding functionalities. It helps
              businesses get their job done quickly and more efficiently.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/class4-softwitch/image-02.jpg"
          imageAlt="Class 4 Softswitch"
          className="[&_img]:rounded-2xl"
        >
          <SectionHeader
            title="Class 4 Softswitch Development Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              Being in the VoIP development industry has bestowed several skills
              and a detailed understanding of various technologies driven VoIP
              solutions that include class 4 Softswitch solution, too. We hold a
              strong understanding of technologies and build the most scalable
              and dependable class 4 Softswitch software. Our specialization in
              deploying the most prominent architecture of this wholesale VoIP
              Softswitch solution makes us stand apart as a class 4 Softswitch
              company.
            </p>
            <p>
              From error-free call routing of massive call volume to simplified
              call transcoding, high quality communication services, and
              excellent voice quality are the key advantages of using our class
              4 Softswitch software solution. Whether you are looking for a VoIP
              wholesale Softswitch to commence your business as a carrier or a
              voice aggregator or if you want to scale up your existing
              wholesale VoIP business with a more powerful and robust class 4
              Softswitch, we can help you in all aspects with our expertise as
              the top class 4 Softswitch company.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionFeatures
        data={CLASS_4_SOFTWITCH_FEATURES}
        title="Key Features"
        description="We have empowered several businesses with our quality driven and highly scalable wholesale VoIP Softswitch which is furnished with modern and competitive features."
      />

      <Section tone="muted">
        <SectionHeader
          title="Class 4 Softswitch Solution Empowers Major VoIP Businesses"
          description="We have vigilantly designed and developed the world class technology to benefit businesses with this VoIP Softswitch solution"
        />
        <CardGrid columns={2}>
          {CLASS_4_SOFTWITCH_BUSINESSES.map((item, index) => (
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
        data={CLASS_4_SOFTWITCH_BENIFITS}
        title="Key Benefits"
        description="A class 4 Softswitch system that is meticulously designed to handle huge call volumes and provide more than just wholesale call routing features bestows several advantages."
      />

      <FAQ
        tone="muted"
        data={CLASS_4_SOFTWITCH_FAQ}
        sub_title="Get instant answers to all the frequently asked questions related to a retail Softswitch solution."
      />
    </>
  );
}
