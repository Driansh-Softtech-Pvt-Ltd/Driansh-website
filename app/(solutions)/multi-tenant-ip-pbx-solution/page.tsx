import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  MT_IP_PBX_SOLUTION_FEATURES,
  MT_IP_PBX_SOLUTION_BENIFITS,
  MT_IP_PBX_SOLUTION_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";

export default function MTIpPbxPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/multi-tenant/image-01.webp"
          alt="Multi Tenant IP PBX"
          fill
          className="object-cover object-center -z-10"
          priority
        />

        <div className="relative z-10 w-full md:w-[60%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight">
            Multi Tenant IP PBX Solution
          </h2>
          <h2 className="font-bold mb-4 leading-tight">
            Future-Ready, AI-Driven VoIP and PBX Solutions for Smart
            Communication
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Deploy a ready-to-use contact center solution with features like
            Auto Dialer, Predictive Dialer, WhatsApp Chat, IVR, call routing,
            real-time analytics, and CRM integration.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <Link href="/contact-us">
              <Button className="bg-white text-black text-base md:text-lg rounded-sm px-12 py-8 transform transition-transform duration-300 hover:bg-white hover:-translate-y-1">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:py-16 md:px-20 flex flex-col items-center text-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Generate added revenue or keep a close control over communication
            resource utilization by different business branches with our feature
            packed multi tenant IP PBX solution.
          </h2>

          <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/multi-tenant/multi-tenante-img.jpeg"
              alt="Multi Tenant IP PBX"
              width={550}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Multi Tenant IP PBX Solution Provider Company
            </h2>
            <p className="text-lgleading-relaxed mb-4">
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
            <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <SolutionFeatures
        data={MT_IP_PBX_SOLUTION_FEATURES}
        title="Key Features Of Multi Tenant IP PBX"
        description="A fully responsive and scalable multi tenant IP PBX system is
          furnished with a whole gamut of standard and futuristic features to
          meet universal and unique business communication needs."
      />
      <section className="bg-gray-100">
      <SolutionsBenifits 
        data={MT_IP_PBX_SOLUTION_BENIFITS}
        title="Key Benefits of IP PBX"
        description="Make your business stand out by gaining competitive advantages that
          are bestowed by this painstakingly designed hosted PBX system."
      />
      </section>
      <FAQ
        data={MT_IP_PBX_SOLUTION_FAQ}
        sub_title="Each commonly asked question associated with a multi tenant IP PBX solution is answered for you to have a quick push to your decision of acquiring this best communication tool."
      />
    </>
  );
}
