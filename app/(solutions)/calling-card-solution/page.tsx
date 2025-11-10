import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CALLING_CARD_FEATURES, CALLING_CARD_BENIFITS, CALLING_CARD_FAQ } from "@/constants/solutions";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";

export default function CallingCardPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/calling-card/image-01.jpg"
          alt="Calling Card Solution"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Calling Card Solution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Run a high profit making VoIP business with an evergreen solution to
            provide callback and PINless dialing services with a feature rich
            calling card solution.
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
            Expand your revenue generating streams by jumping into the
            ever-blossoming business of international calling with a power
            packed and feature rich VoIP calling card solution
          </h2>
          <p className="text-lg leading-relaxed">
            An increasing number of international travelers has also amplified
            the demand for reliable and cheap calling solutions. Convenience in
            communication along with mobility has become the prime apprehension
            of the users. Our calling card solution facilitates VoIP service
            providers to meet the increasing demand for quality and affordable
            communication tools. It does not need customers to install any
            software or app or force the recipient to have the same software to
            attend the call. The calling card software based communication
            empowers customers to make SIP to SIP and SIP to PRI calls
            seamlessly as they are using their own default phone app.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/calling-card/image-02.jpg"
              alt="Calling Card Solution"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Calling Card Solution Provider Company
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We have an adroit team that holds a vast understanding of the
              calling card business, whether it is a hosted calling card system
              or building an open source calling card software solution. We can
              fulfill all your business needs to run a growing and profit making
              calling card business. Our intuitive software design makes the
              management of DID numbers, vouchers, recharge, PIN authentication,
              etc. simplified. You will not need to invest in learning the
              technicalities of VoIP or calling card software and still you can
              manage a full fledged calling card business with our software.
            </p>
            <p className="text-lg leading-relaxed">
              As we recognize that the calling card business has a huge
              potential and it is ever flourishing, we have added support for
              multiple currencies and a multilingual platform. This lets you
              expand your business wings in all global territories. The
              integrated VoIP billing system for the VoIP calling card platform
              will automate the invoicing and billing, as well as, all major
              jobs related to payment processing to make your business processes
              stress free. Managing an international VoIP calling and callback
              service business could never be as easy as it is with our
              software.
            </p>
          </div>
        </div>
      </section>
      <SolutionFeatures 
        data={CALLING_CARD_FEATURES}
        title="Key Features"
        description="We have catered to small to large scaled calling card businesses with a prevailing calling card system
        and tailored features and integrations."        
      />
      <section className="bg-gray-100">
        <SolutionsBenifits
            data={CALLING_CARD_BENIFITS}
            title="Key Benefits"
            description="The best VoIP calling card software is designed to provide comprehensive features and meet the shifting demands of communication by tourists, corporate professionals, and students with excellent advantages." 
        />
      </section>
      <FAQ
        data={CALLING_CARD_FAQ}
        sub_title="All commonly asked questions in regard to the calling card systems are answered by our veteran team for you." 
      />
    </>
  );
}
