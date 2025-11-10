import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ENTERPRISE_VOIP_FEATURES,
  ENTERPRISE_VOIP_WHY_CHOOSE_US,
  ENTERPRISE_VOIP_FAQ,
} from "@/constants/solutions";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { CheckCircle } from "lucide-react";

export default function EnterpriseVoipPage() {
  return (
    <>
      <section className="bg-[#030039] text-white py-16 md:py-28 px-6 md:px-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-full mx-auto">
          <div className="w-full md:w-[60%] space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-snug max-w-lg">
              Seamless Connectivity with an Enterprise VoIP Solution
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              Designed to scale effortlessly with your business needs. Enjoy
              crystal clear voice quality, robust security, and unparalleled
              reliability in the enterprise VoIP solution.
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
              src="/images/solutions/enterprise-voip/image-01.png"
              alt="Enterprise VoIP Solution"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-14">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:w-[40%] flex text-center  md:justify-center">
            <Image
              src="/images/solutions/enterprise-voip/image-02.png"
              alt="Enterprise VoIP Solution"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-[60%] text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              What is Enterprise VoIP?
            </h2>
            <p className="text-lg leading-relaxed">
              Enterprise VoIP solutions are state-of-the-art VoIP communication
              solutions that use digital channels to communicate via the
              Internet rather than using traditional telephone lines. It lets
              businesses access wide ranging, advanced communication features
              with superior call quality, reduced costs, and seamless
              scalability. VoIP enterprise solutions are perfect for businesses
              aiming for top tier communication. Moreover, it ensures reliable,
              high quality collaboration for teams everywhere.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 ">
        <SolutionsBenifits
          data={ENTERPRISE_VOIP_FEATURES}
          title="Features of the Best Enterprise VoIP Phone System"
          description="The best enterprise VoIP solution is tailored to enhance global operations with reliable, scalable, and advanced communication, collaboration, and monitoring features."
        />
      </section>
      <section className="py-12">
        <div className="mx-auto px-16 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src="/images/solutions/enterprise-voip/image-03.png"
              alt="Enterprise VoIP Solution"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="w-full lg:w-[60%] space-y-6">
            <h2 className="text-4xl font-bold">
              How Do Enterprise VoIP Solutions Differ from Standard Landlines?
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Enterprise telephony solutions operate over the internet rather
              than PSTN lines. Thus, they provide more flexibility and advanced
              features compared to traditional landlines. Unlike landlines, VoIP
              integrates seamlessly with other digital communication tools,
              enhancing productivity and collaboration. Additionally, an
              enterprise VoIP solution offers scalability and cost efficiency,
              making it ideal for businesses of all sizes.
            </p>
            <p className="text-lg leading-relaxed">
              In contrast, standard landlines rely on physical phone lines,
              limiting mobility and expansion capabilities. Landlines lack the
              integration options and advanced functionalities that enterprise
              telephony solutions provide, such as video conferencing and real
              time messaging. Furthermore, maintaining landline infrastructure
              can be more costly and less adaptable to modern business needs.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
              {[
                "Advanced Features: VoIP enterprise solutions include features like video conferencing, voicemail to email, call forwarding, real time messaging, and integration with CRM systems. These tools streamline communication and enhance team collaboration, which are not possible with traditional landlines.",
                "Scalability and Cost Efficiency: VoIP for enterprise solutions easily scale to accommodate business growth. They also reduce costs associated with physical infrastructure and long distance calls, offering a more economical solution compared to landlines.",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="text-[#1E4EC4] w-50 h-50" />
                  <span className="text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="mx-auto px-16 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[60%] space-y-8">
            <h2 className="text-4xl font-bold">
              The Benefits of Transitioning to Enterprise Telephony Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              Discover how VoIP enterprise solutions can transform your business
              communication.
            </p>
            <div className="flex flex-col items-start gap-5 mt-4">
              {[
                "Enjoy higher uptime and reliability ensuring continuous communication",
                "Advanced features to augment the communication experience",
                "Access the best enterprise VoIP phone system from anywhere",
                "Reduce costs with lower call rates and minimal infrastructure expenses",
              ].map((text, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="text-[#1E4EC4] w-8 h-8" />
                  <span className="text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src="/images/solutions/enterprise-voip/image-04.png"
              alt="Enterprise VoIP Solution"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto px-16 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/solutions/enterprise-voip/image-05.png"
              alt="Enterprise VoIP Solution"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold">
              Compatible Devices for Enterprise Hosted VoIP Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              Unlock the versatility of enterprise hosted VoIP communication solutions with a wide range of compatible devices. This flexibility ensures you can connect and communicate effectively from virtually any device, anywhere. 
            </p>
            <div className="flex flex-col gap-5">
              {[
                "Smartphones and tablets (via mobile apps)",
                "IP phones/ SIP phones",
                "Laptops/ Desktop computers (via Softphones or Software providing a Cloud PBX system/ Hosted PBX)",
              ].map((text, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="text-[#1E4EC4] w-8 h-8" />
                  <span className="text-lg">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:py-16 md:px-16 flex flex-col items-center text-center">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1D1A4E]">
            Why Partner with Us for Enterprise VoIP Solution?
          </h2>
          <p className="text-lg leading-relaxed">
            Experience unparalleled service and innovation with our enterprise
            telephony solutions and related services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {ENTERPRISE_VOIP_WHY_CHOOSE_US.map((card, index) => (
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
      <FAQ data={ENTERPRISE_VOIP_FAQ} />
    </>
  );
}
