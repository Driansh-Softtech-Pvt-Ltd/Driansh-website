import {
  VOIP_BILLING_FEATURES,
  VOIP_BILLING_BENIFITS,
  VOIP_BILLING_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { PageHero, Section, SectionHeader, MediaSplit } from "@/components/site";

export default function VoipBillingPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Readymade VoIP Billing Software Based on FreeSWITCH"
        description="Eliminate tedium from invoicing and billing processes from your VoIP business to efficiently manage billing, payment processing, and reporting."
        backgroundImage="/images/solutions/voip-billing/image-01.jpg"
      />

      <Section>
        <SectionHeader
          title="Consolidate, streamline, and simplify the complex process of billing customers with a reliable and feature rich VoIP billing platform that is empowered with smart features."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              VoIP solutions have been transforming the lives of end users and
              businesses with enhanced features, increased reliability, and
              reduced expenses. The addition of cloud driven digital workflow with
              UCaaS platforms has completely changed the landscape of IP
              telecommunication and VoIP businesses. Moreover, SaaS and PaaS
              businesses often stay in need of reliable tools to support their
              massive VoIP service users. A powerful and smart VoIP billing and
              invoicing system rescues these businesses and many other companies
              by automating billing, invoicing, reporting, and payment processing.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit image="/images/solutions/voip-billing/image-02.png" imageAlt="VoIP Billing Solution">
          <SectionHeader title="VoIP Billing Software" align="left" className="mb-6 md:mb-6" />
          <div className="text-lead space-y-4">
            <p>
              We are renowned as one of the leading VoIP billing software
              provider companies as we provide the most powerful and feature
              rich smart VoIP billing and invoicing platforms. Our VoIP billing
              systems are developed on top of robust technologies FreeSWITCH,
              OpenSIPs, etc. The selection of the right VoIP development
              technologies makes this solution a favorite of all scaled and
              sized VoIP businesses. This VoIP billing system can be integrated
              with any Softswitch, IP PBX solution, fax server system, or any
              other VoIP software to let you leverage the advantage of automated
              billing and invoicing.
            </p>
            <p>
              It is an extremely easy to use and reliable system, which includes
              features for all types of VoIP businesses. Whether you are a small
              VoIP business owner or running a multi faceted SaaS business, this
              software will help you leverage the advantage of the most accurate
              and efficient VoIP billing process. You can access an extensive
              range of reports to keep complete control over your business and
              processes. You can also enjoy the flexibility of implementing
              different rate plans, configuring added taxes or fees based on
              your business, and other value added benefits to optimize your
              billing processes thoroughly.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionFeatures
        data={VOIP_BILLING_FEATURES}
        title="Key Features"
        description="With years of industry experience, we have developed cherry picked features in our VoIP billing system that fits all VoIP business models."
      />

      <SolutionsBenifits
        data={VOIP_BILLING_BENIFITS}
        title="Key Benefits"
        description="Enjoy an extensive range of benefits with our smart VoIP billing system that is built for futuristic businesses like yours."
      />

      <FAQ
        data={VOIP_BILLING_FAQ}
        sub_title="Using a readymade VoIP billing and invoicing system or building a custom one, all your queries are answered here by experts."
      />
    </>
  );
}
