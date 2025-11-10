import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  VOIP_BILLING_FEATURES,
  VOIP_BILLING_BENIFITS,
  VOIP_BILLING_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";

export default function VoipBillingPage() {
  return (
    <>
      <section className="relative flex items-center justify-end py-16 h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/voip-billing/image-01.jpg"
          alt="VoIP Billing Solution"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Readymade VoIP Billing Software Based on FreeSWITCH
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Eliminate tedium from invoicing and billing processes from your VoIP
            business to efficiently manage billing, payment processing, and
            reporting.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <Link href="/contact-us">
              <Button className="bg-white text-black text-base md:text-lg rounded-sm px-12 py-8 transform transition-transform duration-300 hover:bg-white hover:-translate-y-1">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:py-16 md:px-20 flex flex-col items-center text-center">
        <div>
          <h2 className="text-4xl text-[#1D1A4E] font-bold mb-6">
            Consolidate, streamline, and simplify the complex process of billing
            customers with a reliable and feature rich VoIP billing platform
            that is empowered with smart features.
          </h2>

          <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/voip-billing/image-02.png"
              alt="VoIP Billing Solution"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">VoIP Billing Software</h2>
            <p className="text-lg leading-relaxed mb-4">
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
            <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <SolutionFeatures
        data={VOIP_BILLING_FEATURES}
        title="Key Features"
        description="With years of industry experience, we have developed cherry picked features in our
        VoIP billing system that fits all VoIP business models."
      />
      <section className="bg-gray-100">
        <SolutionsBenifits
          data={VOIP_BILLING_BENIFITS}
          title="Key Benefits"
          description="Enjoy an extensive range of benefits with our smart VoIP billing system that is built for futuristic businesses like yours."
        />
      </section>
      <FAQ
        data={VOIP_BILLING_FAQ}
        sub_title="Using a readymade VoIP billing and invoicing system or building a custom one, all your queries are answered here by experts."
      />
    </>
  );
}
