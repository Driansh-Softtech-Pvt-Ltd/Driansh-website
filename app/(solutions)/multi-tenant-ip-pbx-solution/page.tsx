import {
  MT_IP_PBX_SOLUTION_FEATURES,
  MT_IP_PBX_SOLUTION_BENIFITS,
  MT_IP_PBX_SOLUTION_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, MediaSplit } from "@/components/site";

export default function MTIpPbxPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Multi Tenant IP PBX Solution"
        description={
          <>
            <p className="font-semibold text-white">
              Future-Ready, AI-Driven VoIP and PBX Solutions for Smart
              Communication
            </p>
            <p className="mt-3">
              Deploy a ready-to-use contact center solution with features like
              Auto Dialer, Predictive Dialer, WhatsApp Chat, IVR, call routing,
              real-time analytics, and CRM integration.
            </p>
          </>
        }
        backgroundImage="/images/solutions/multi-tenant/image-01.webp"
        primaryCta={{ label: "Get in Touch", href: "/contact-us" }}
      />

      <Section>
        <SectionHeader
          title="Generate added revenue or keep a close control over communication resource utilization by different business branches with our feature packed multi tenant IP PBX solution."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              Eradicate the hassle and cost associated with clunky and expensive
              conventional telecommunication or PBX systems by adopting the best
              and technology driven IP PBX solution. Augment business
              communication benefits your customers that seek uninterruptible and
              advanced communication and collaboration mechanisms at low
              investment and low maintenance demands. Additionally, handle the
              growing communication needs of your dispersed business branches
              within a city, nation, or even at the world level. Complete control
              of the processes would be under your command to lead your business
              on the most profitable path with cautious use of telephony resources
              and a well defined business model.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/multi-tenant/multi-tenante-img.jpeg"
          imageAlt="Multi Tenant IP PBX"
          className="[&_img]:rounded-2xl"
        >
          <SectionHeader
            title="Multi Tenant IP PBX Solution Provider Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
              A multi tenant IP PBX signifies the concept of having multiple IP
              PBX solutions with a single software instance, which makes the
              management of the software so easy. The instinctive GUI based
              panel to manage tenants and other elements such as DID numbers,
              extensions, rate plans, etc. is tremendously easy for the admin.
              The web based panels make access to software and administration of
              business mobile and flexible. Now, with a few taps or clicks from
              anywhere, you can control your business communication tools and
              PBX service provider business.
            </p>
            <p>
              Run a business as a hosted PBX solution provider, business phone
              service provider, or simply administer the resourceful use of
              telephony infrastructure in your widespread business with this
              robust and secure communication tool. The role based management
              reduces the burden of managing different business aspects. The
              reseller module, integrated VoIP billing software, built-in
              security features, cloud support, and other fascinating components
              make our multi tenant IP PBX software stand out in the market with
              ever increasing choices.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionFeatures
        data={MT_IP_PBX_SOLUTION_FEATURES}
        title="Key Features Of Multi Tenant IP PBX"
        description="A fully responsive and scalable multi tenant IP PBX system is furnished with a whole gamut of standard and futuristic features to meet universal and unique business communication needs."
      />

      <SolutionsBenifits
        data={MT_IP_PBX_SOLUTION_BENIFITS}
        title="Key Benefits of IP PBX"
        description="Make your business stand out by gaining competitive advantages that are bestowed by this painstakingly designed hosted PBX system."
      />

      <FAQ
        data={MT_IP_PBX_SOLUTION_FAQ}
        sub_title="Each commonly asked question associated with a multi tenant IP PBX solution is answered for you to have a quick push to your decision of acquiring this best communication tool."
      />
    </>
  );
}
