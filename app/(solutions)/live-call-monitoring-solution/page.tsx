import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  LIVE_CALL_MONITORING_FEATURES,
  LIVE_CALL_MONITORING_BENIFITS,
  LIVE_CALL_MONITORING_FAQ,
} from "@/constants/solutions";
import SolutionFeatures from "@/components/Solutions-Features";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import FAQ from "@/components/FAQ";

export default function LiveCallMonitoringPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/live-call-monitoring/image-01.jpg"
          alt="Live Call Monitoring"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Live Call Monitoring Solution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Amplify the productivity of your agents or ensure high quality of
            service and superior quality of calls with a real time call
            monitoring solution with value added features.
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
            Revolutionize the business model with improved productivity and
            eminence bestowed with a live call monitoring solution and added
            features.
          </h2>
          <p className="text-lg leading-relaxed">
            Customer experience has become the focal interest of all businesses.
            Several VoIP communication tools are invented to meet the growing
            and shifting customer demands. Still, it is necessary to measure
            whether customers are receiving the expected quality of service as
            per the set bar or not. Automation in reviewing processes and
            quality of service is already available still, it is necessary to
            get the best tool to sanction the power to supervisors to work
            productively and efficiently. The live call monitoring solution lets
            supervisors monitor conversations and intercept or take control
            whenever they find it required. This gives immense control over
            processes and how customers are treated to enhance customer
            engagement and loyalty models.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/live-call-monitoring/image-02.png"
              alt="Live Call Monitoring"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Live Call Monitoring Solution Provider Company
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We have more than just a real time call monitoring and call
              control solution. It can help in streamlining the quality
              assurance policies in call centers and similar industry verticals
              with extensive features. The supervisors and quality assurance
              team gets access to live dashboards that show real time statistics
              of ringing, ongoing, and conference calls in the business.
              Supervisors can also listen to ongoing calls without or with the
              acknowledgment of agents. In fact, the quality assurance manager
              can jump into the call and take control of the call to lead it in
              the right direction. Whether it is handling a multifaceted support
              request or a warm lead, there is always control in the hands of
              supervisors to lead a customer in a favorable situation.
            </p>
            <p className="text-lg leading-relaxed">
              It is also an amazing real time agent training tool that can
              enhance the productivity and performance of agents. Supervisors
              can also ensure the calls are getting terminated with the right
              codecs. This system can be integrated with any other VoIP or
              telephony solution such as IP PBX, call center software, VoIP
              Softswitch, voice logger solution, call accounting system, and
              other solutions. This live call monitoring software can also be
              used as an individual solution to monitor the calls of
              supervisors. We further provide customization and custom
              development of a live call monitoring system depending on the
              business needs.
            </p>
          </div>
        </div>
      </section>
      <SolutionFeatures
        data={LIVE_CALL_MONITORING_FEATURES}
        title="Key Features"
        description="Improve the performance right away with an extensive range of features available in a
        real time call monitoring and call control solution."
      />
      <section className="bg-gray-100">
        <SolutionsBenifits
          data={LIVE_CALL_MONITORING_BENIFITS}
          title="Key Benefits"
          description="From a small business to a large scaled customer care center can benefit from this powerful, technology driven real time call monitoring system."
        />
      </section>
      <FAQ
        data={LIVE_CALL_MONITORING_FAQ}
        sub_title="Get answers in real time to commonly asked questions related to a feature rich live call monitoring system."
      />
    </>
  );
}
