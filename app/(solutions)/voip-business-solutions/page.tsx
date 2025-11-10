import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  VOIP_BUSINESS_FEATURES,
  VOIP_BUSINESS_FAQ,
} from "@/constants/solutions/index";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";
import { CheckCircle } from "lucide-react";

export default function VoipBusinessPage() {
  return (
    <>
      <section className="bg-[#030039] text-white py-16 md:py-30 px-6 md:px-16 min-h-[80vh] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-full mx-auto">
          <div className="w-full md:w-[60%] space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-snug">
              VoIP Business Solutions
            </h1>
            <h2 className="text-xl font-bold leading-snug max-w-xl">
              Scalable Business VoIP Solutions for Growing SMBs and Large
              Enterprises
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              Experience consistent performance, flexible features, and
              unmatched support tailored to your needs built into our business
              VoIP solutions. Enjoy seamless communication that evolves with
              you.
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
              src="/images/solutions/voip-business/image-01.webp"
              alt="VoIP Business Solution"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-10">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[30%] flex text-center  md:justify-center">
            <Image
              src="/images/solutions/voip-business/image-02.png"
              alt="VoIP Business Solution"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-[70%] text-center md:text-left">
            <h2 className="text-5xl font-bold mb-6">
              Business VoIP Solutions for Empowering Enterprise Communication
            </h2>
            <p className="text-lg leading-relaxed">
              Our business VoIP solutions provide reliable, scalable, robust,
              and high quality communication tools that meet the needs of any
              sized growing businesses. Whether you run a small business or a
              large enterprise, our scalable VoIP phone Solution ensures smooth,
              uninterrupted voice and video calls. Moreover, our VoIP based
              communication Solution enhances productivity across your teams.
              With advanced features and seamless integration capabilities, we
              help businesses stay connected effortlessly. Experience the
              abundant benefits of a tailored VoIP solution for small businesses
              and enterprises that adapts to business needs and keeps
              communication efficient and effective.
            </p>
          </div>
        </div>
      </section>
      <SolutionsBenifits
        data={VOIP_BUSINESS_FEATURES}
        title="Drive Customer Engagement and Success with Our Business VoIP Solutions"
        description="Simplify communication with tailored communication tools that entice customers more effectively through high quality and professional communication and collaboration features."
      />
      <section className="bg-gray-100 py-12">
        <div className="mx-auto px-16 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[60%] space-y-6">
            <h2 className="text-4xl font-bold">
              Top-Tier VoIP Phone Services Developed Just for You
            </h2>
            <p className="text-lg leading-relaxed">
              We are renowned for developing top-tier VoIP phone services, which
              are customized for client’s businesses. Our seasoned VoIP experts
              build business VoIP solutions to match the unique communication
              needs of enterprises. As your business grows, our scalable
              enterprise VoIP solutions adapt easily. Certainly, you benefit
              from a solution that delivers reliability, efficiency, and
              flexibility. With this personalized approach, your business gains
              a competitive edge.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
              {[
                {
                  title: "Expert Guidance:",
                  desc: "Our solutions are developed by experienced VoIP professionals, ensuring optimal system performance and scalability. With ongoing support, we guarantee your communication tools evolve smoothly as your business grows.",
                },
                {
                  title: "Future-Proof Solutions:",
                  desc: "Our VoIP solutions scale effortlessly with your business and allow easy expansion and feature incorporation. Built for long-term reliability, they ensure seamless communication without the need for frequent upgrades.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-[#1E4EC4] w-8 h-8 shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src="/images/solutions/voip-business/image-03.png"
              alt="VoIP Business Solution"
              width={600}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <FAQ data={VOIP_BUSINESS_FAQ} />
    </>
  );
}
