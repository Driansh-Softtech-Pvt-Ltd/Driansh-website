import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  CLASS_5_SOFTWITCH_FEATURES,
  CLASS_5_SOFTWITCH_BUSINESS_MODELS,
  CLASS_5_SOFTWITCH_BENIFITS,
  CLASS_5_SOFTWITCH_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";

export default function Class5SoftwitchPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/class5-softwitch/image-01.webp"
          alt="Class 5 Softswitch"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Class 5 Softswitch
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Harness the power of a carrier grade retail Softswitch solution with
            extended features and functionalities to broaden your business and
            revenue generating streams
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
            Enjoy the premium performance and never seen before features in your
            class 5 Softswitch software to run a business with a competitive
            advantage and better value proposition.
          </h2>

          <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/class5-softwitch/image-02.webp"
              alt="Class 5 Softswitch"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Class 5 Softswitch Development Company
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our veteran team of VoIP developers has built the most scalable
              class 5 Softswitch solution for VoIP service providers and
              business users to meet business communication needs. Our
              innovative solution puts us in the list of top class 5 Softswitch
              companies that provide an end to end solution: from consultation
              to development, a retail VoIP Softswitch solution, customization,
              deployment, architecture design, ongoing support, and more.
            </p>
            <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <SolutionFeatures
        data={CLASS_5_SOFTWITCH_FEATURES}
        title="Key Features"
        description="Our retail switch is built with well researched features to augment communication and lower costs to aid businesses
        to enjoy the true benefits of using a powerful VoIP communication system."
      />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Class 5 Softswitch Solution Benefits Diverse Business Models
            </h2>
            <p className="mt-3 max-w-5xl mx-auto">
              We have kept the needs and demands of all diverse types of
              businesses into consideration to serve them with the most
              dependable class 5 VoIP Softswitch solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {CLASS_5_SOFTWITCH_BUSINESS_MODELS.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start gap-5"
              >
                <div className="shrink-0 flex justify-center sm:justify-start">
                  <div className="rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-15 h-15 object-contain"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SolutionsBenifits
        data={CLASS_5_SOFTWITCH_BENIFITS}
        title="Key Benefits"
        description="A class 5 Softswitch solution is built to meet business communication, end user, and service provider needs and serve all businesses with an array of advantages."
      />
      <section className="bg-gray-100">
        <FAQ
          data={CLASS_5_SOFTWITCH_FAQ}
          sub_title="Get instant answers to all the frequently asked questions related to a retail Softswitch solution."
        />
      </section>
    </>
  );
}
