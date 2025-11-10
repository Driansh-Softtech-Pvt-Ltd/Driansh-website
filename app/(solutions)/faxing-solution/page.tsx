import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FAXING_FEATURES, FAXING_FAQ } from "@/constants/solutions";
import FAQ from "@/components/FAQ";

export default function FaxingPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/faxing-solution/image-01.jpg"
          alt="Faxing Solution"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Faxing Solution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Streamline document and fax distribution processes and digitize the
            faxing journey with the best fax over internet protocol (FoIP)
            solution.
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
            Alleviate the errors and hassle related to traditional faxing and
            enhance the whole process to make it flawless, cost effective, and
            convenient with the fax server solution.
          </h2>
          <p className="text-lg leading-relaxed">
            Faxing and scanned document distribution is still the basic
            operation in many industry verticals. The best part is technology
            has paved its way to this segment to digitize the whole process.
            There is no need to deal with bulky, and sometimes, faulty fax
            machines and stationery. The FoIP solutions can make the whole
            process so seamless that even a newbie can enjoy the process. All
            the features of traditional faxing, plus, virtual faxing are made
            available at the mouse click by our best in the industry FoIP
            solution. Moreover, some features enhance the whole business faxing
            mechanism with never seen before features to make the whole process
            more effective and efficient.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/faxing-solution/image-02.png"
              alt="Faxing Solution"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              FoIP Solution Provider Company
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Leveraging the bleeding edge technology and smartness of VoIP to
              send faxes is not something new, but still, businesses are waiting
              for the right time to make this switch. The time and opportunity
              is here to be smarter with virtual fax over IP solutions. Our FoIP
              solution has already empowered various small to large scaled
              businesses with a feature rich FoIP solution and yours can be the
              next. Now, there is no need to stay in long queues to get access
              to the fax machine to send or receive a fax message. Simply sit at
              your desk or enjoy the comfort of your couch and send your fax.
              Also, get a receipt or failure notification to know the status of
              your fax to take the next vital step. All this is possible with
              the best FoIP software developed by our VoIP experts.
            </p>
            <p className="text-lg leading-relaxed">
              Our company is a top rated FoIP solution development company that
              builds scalable, secure, and robust fax server solutions. We build
              the most advanced and futuristic virtual fax server software.
              Furthermore, we can customize the features, configurations, and
              other components of this VoIP software to personalize the system
              to meet your custom business needs. With our simple to use fax
              server solution, faxing will be as easy and convenient as
              emailing. Moreover, it will help you reduce expenses over faxes to
              make better utilization of funds for business growth and
              development.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D1A4E]">
            Major Faxing Modes
          </h2>
          <p className="text-lg mt-5 max-w-5xl mx-auto">
            Virtual faxing is invented to let businesses take maximum advantage
            of digitization and faxing as a whole solution. Thus, our virtual
            faxing solution supports three different modes of eFaxing:
          </p>
        </div>
        <div className="mx-auto px-16 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[60%] space-y-8">
            <p className="text-lg leading-relaxed max-w-xl">
              Introduce e-faxing for your staff or customers with the Faxing
              Solution. The FoIP (Fax over Internet Protocol) solution lets you
              take benefit of a comprehensive eFaxing system, also known as Fax
              Server Solution. It supports three different modes of virtual
              faxing:
            </p>
            <div className="flex flex-col items-start gap-5 mt-4">
              {["Email to fax", "Fax to email", "Web to fax"].map(
                (text, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="text-[#1E4EC4] w-8 h-8" />
                    <span className="text-lg">{text}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src="/images/solutions/faxing-solution/image-03.png"
              alt="Faxing Solution"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D1A4E]">Key Features</h2>
          <p className="text-lg mt-5 max-w-5xl mx-auto">
            Leverage the power of your infrastructure and faxing with the
            futuristic features of our FoIP solution:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {FAXING_FEATURES.left.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-[#1E4EC4] w-5 h-5 shrink-0" />
                  <h3 className="text-xl font-semibold">{feature.label}</h3>
                </div>
                <ul className="ml-6 list-disc list-inside text-lg text-[#1E4EC4] space-y-2 marker:text-[#1E4EC4]">
                  {feature.points.map((point, i) => (
                    <li key={i} className="text-black">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {FAXING_FEATURES.right.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <CheckCircle className="text-[#1E4EC4] w-5 h-5 mt-1 shrink-0" />
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ 
        data={FAXING_FAQ}
        sub_title="All commonly asked questions in regard to FoIP solutions are answered by our experienced VoIP team for you."
      />
    </>
  );
}
