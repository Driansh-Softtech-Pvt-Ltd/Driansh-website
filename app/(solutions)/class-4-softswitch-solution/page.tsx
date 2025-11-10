import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  CLASS_4_SOFTWITCH_FEATURES,
  CLASS_4_SOFTWITCH_BUSINESSES,
  CLASS_4_SOFTWITCH_BENIFITS,
  CLASS_4_SOFTWITCH_FAQ,
} from "@/constants/solutions/index";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";

export default function Class4SoftwitchPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/class4-softwitch/image-01.jpg"
          alt="Class 4 Softswitch"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Class 4 Softswitch
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Elevate your wholesale VoIP business with the most robust, reliable,
            and secure class 4 Softswitch solution and enjoy ever growing
            business reach and revenue.
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
            Get the most powerful class 4 Softswitch solution to strengthen your
            wholesale VoIP business to stay focused on your business and stress
            free from technicalities.
          </h2>

          <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/class4-softwitch/image-02.jpg"
              alt="Class 4 Softswitch"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Class 4 Softswitch Development Company
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Being in the VoIP development industry has bestowed several skills
              and a detailed understanding of various technologies driven VoIP
              solutions that include class 4 Softswitch solution, too. We hold a
              strong understanding of technologies and build the most scalable
              and dependable class 4 Softswitch software. Our specialization in
              deploying the most prominent architecture of this wholesale VoIP
              Softswitch solution makes us stand apart as a class 4 Softswitch
              company.
            </p>
            <p className="text-lg leading-relaxed">
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
        </div>
      </section>
      <SolutionFeatures
        data={CLASS_4_SOFTWITCH_FEATURES}
        title="Key Features"
        description="We have empowered several businesses with our quality driven and highly scalable wholesale VoIP Softswitch
        which is furnished with modern and competitive features."
      />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Class 4 Softswitch Solution Empowers Major VoIP Businesses
            </h2>
            <p className="mt-3 max-w-5xl mx-auto">
              We have vigilantly designed and developed the world class
              technology to benefit businesses with this VoIP Softswitch
              solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {CLASS_4_SOFTWITCH_BUSINESSES.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start gap-5"
              >
                <div className="p-4 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-15 h-auto object-contain"
                  />
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
        data={CLASS_4_SOFTWITCH_BENIFITS}
        title="Key Benefits"
        description="A class 4 Softswitch system that is meticulously designed to handle huge call volumes and provide more than just wholesale call routing features bestows several advantages."
      />
      <section className="bg-gray-100">
        <FAQ
          data={CLASS_4_SOFTWITCH_FAQ}
          sub_title="Get instant answers to all the frequently asked questions related to a retail Softswitch solution."
        />
      </section>
    </>
  );
}
