import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  UNIFIED_COMMUNICATION_FEATURES,
  UNIFIED_COMMUNICATION_WHY_CHOOSE_US,
  UNIFIED_COMMUNICATION_FAQ,
} from "@/constants/solutions/index";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { CheckCircle } from "lucide-react";

export default function UnifiedCommunicationPage() {
  return (
    <>
      <section className="bg-[#030039] text-white py-16 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-full mx-auto">
          <div className="w-full md:w-[60%] space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-snug">
              Enterprise Unified Communications Solution
            </h1>
            <h2 className="text-xl font-bold">
              Connect. Communicate. Conquer.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl -mt-5">
              A powerful collaboration solution that brings transformative
              revolution across all communication touchpoints.
            </p>
            <div className="flex justify-center md:justify-start mt-8">
              <Link href="/contact-us">
                <Button className="bg-white text-black text-base md:text-lg rounded-sm px-12 py-8 transform transition-transform duration-300 hover:bg-white hover:-translate-y-1">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              rel="preload"
              src="/images/solutions/unified-communications/Main-Banner.webp"
              alt="Unified Communications Solution"
              width={550}
              height={350}
              className=" object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:py-16 md:px-20 flex flex-col items-center text-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Necessity of a Unified Communication Phone System (UCaaS)
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            With the growing trend of digitization and modernization, the number
            of communication tools is increasing; ranging from IP telephony to
            voice calling, video calling, instant messaging, desktop sharing,
            mobility, voicemail, and the list goes on. Enterprise unified
            communications features incorporated into the best unified
            communications solution introduce a streamlined, all-encompassing
            solution designed to harmonize these diverse channels into a single
            UCAAS phone system.
          </p>
          <p className="text-lg leading-relaxed">
            Embrace the future with our unified communications phone system –
            where simplicity meets sophistication in the quest for flawless
            communication.
          </p>
        </div>
      </section>
      <section className="bg-gray-100">
        <SolutionsBenifits
          data={UNIFIED_COMMUNICATION_FEATURES}
          title="White Label Unified Communications Solution Features"
          description="A white label UCaaS phone system offers a comprehensive suite of features designed to empower businesses with a seamless, reliable, scalable, and robust communication tool."
        />
      </section>
      <section className="py-12">
        <div className="mx-auto px-16 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[60%] space-y-6">
            <h2 className="text-4xl font-bold">
              Amplify Growth Rate with a Unified Communications Phone System
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              A unified communication system provides futuristic communication
              and collaboration tools to enterprises, which propel the business
              ahead in the digital era. Moreover, it ensures that you exceed the
              expectations of your clients. By unifying distinct communication
              channels and mediums into a single, intuitive interface, the best
              unified communications solution. The unified communications VoIP
              platform simplifies the process of connecting with new clients,
              plus, expanding your business globally using preferred unified
              communication channels to ensure seamless collaboration across
              teams and geographies.
            </p>
            <p className="text-lg leading-relaxed">
              Use the cutting edge UCaaS phone system to build a positive and
              collaborative ambiance for letting your team work more
              productively. On the other hand, seamless communication with
              clients will ensure better customer retention, higher
              productivity, reduced overheads, and several other business
              advantages.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
              {[
                "All information and communication is centrally controlled",
                "An integrated solution extends scalability and security",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="text-[#1E4EC4] w-8 h-8" />
                  <span className="text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src="/images/solutions/unified-communications/Unified-Communication-01.webp"
              alt="Unified Communications Solution"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:py-16 md:px-16 flex flex-col">
        <div className="mb-12 text-center flex items-center flex-col">
          <h2 className="text-4xl font-bold mb-6">
            Empowering Teams with Tailored Unified Communications Solutions
          </h2>
          <p className="text-lg leading-relaxed max-w-6xl">
            We build a comprehensive white label unified communications
            solutions that are tailored to meet unique communication needs of
            your teams. We assure a higher degree of flexibility and improved
            user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            "Custom development",
            "Remote access",
            "Integration with your business tools",
            "Easy to use",
            "Engaging and intuitive",
            "Cost effective",
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 justify-start">
              <CheckCircle className="text-[#1E4EC4] w-8 h-8" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-6 md:py-16 md:px-16 flex flex-col items-center text-center">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1D1A4E]">
            A comprehensive contact center solution with value added elements
          </h2>
          <p className="text-lg leading-relaxed">
            Our feature rich audio and video conferencing solutions are
            developed to eradicate all limitations caused due to geographical or
            time zone differences. It has several advantages to offer to
            businesses, enterprises, and peers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {UNIFIED_COMMUNICATION_WHY_CHOOSE_US.map((card, index) => (
            <div
              key={index}
              className="group bg-gray-100 text-left p-8 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#1E4EC4]"
            >
              <div className="flex flex-col items-start gap-2 mb-6">
                <h3 className="text-lg font-bold group-hover:text-white">
                  {card.title}
                </h3>
                <p className="group-hover:text-white text-lg">{card.desc}</p>
              </div>
              {card.features?.length > 0 && (
                <ul className="flex flex-col gap-2 -ml-3">
                  {card.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-lg list-disc ml-8 marker:text-[#1E4EC4] text-black group-hover:text-white group-hover:marker:text-white"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100">
        <FAQ data={UNIFIED_COMMUNICATION_FAQ} />
      </section>
    </>
  );
}
