'use client';

import Link from 'next/link';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_OPENSIPS_CARDS, SERVICES_OPENSIPS_EXPERT_CARDS, WHY_CHOOSE_VOIP } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function OpenSIPsDevelopment() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/voip-devlopment-service/opensips-devlopment-service/4Opensips-01-scaled.webp"
          alt="OpenSIPS Development Services"
          fill
          className="object-cover object-right opacity-80 z-0"
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            OpenSIPS Development Services
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Build scalable, resilient SIP routing and proxy services with our expert
            OpenSIPS development and consulting services.
          </p>
          <div className="flex justify-center md:justify-start mt-8 mx-auto md:mx-0">
            <Link href="/contact-us">
              <Button
               className="bg-white text-black text-base md:text-lg rounded-md px-10 py-5 font-semibold hover:text-blue-600 hover:bg-blue-50 duration-300 hover:-translate-y-1">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Intro blurb right after hero */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            OpenSIPS: High performing SIP based telecommunication solution built with a multi-functionality SIP server
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl">
            OpenSIPS is a multipurpose SIP proxy server solution that can be used to build robust and reliable platforms for video, voice, instant messaging, and all other SIP elements. A team of experienced OpenSIPS developers at Driansh Softech has proficiency in using this SIP proxy server at its optimal capacity.
          </p>
        </div>
      </section>

      {/* Two-column company description */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/services/voip-devlopment-service/opensips-devlopment-service/OpenSIPS-Development.webp"
              alt="Custom OpenSIPS Development Company"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Custom OpenSIPS Development Company</h3>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                We have been mastering the art of building the best in the industry telecom solutions using the OpenSIPS platform. Our OpenSIPS development team holds rich experience in this platform, plus, RTP engine, SIP/ RTP/ SDP, WSS, DTLS, and more that can help you build the most powerful telephony applications.
              </p>
              <p>
                We can build the most powerful solutions that can handle thousands of concurrent calls per second (CPC). Our team of versatile OpenSIPS development experts can provide you with a whole range of services and support in this powerful VoIP development platform, which is more commonly popular as a SIP signaling server.
              </p>
              <p>
                From custom OpenSIPS solution development to bug fixing and customization, we have VoIP engineers to meet your requirements to build custom solutions using this famous VoIP technology.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our OpenSIPS Services */}
      <ServicesCards
        title="Our OpenSIPS Services"
        subtitle="Seamlessly manage telecommunication infrastructure with thousands of parallel calls or maintain the high availability of your system with our multitude of OpenSIPS services."
        data={SERVICES_OPENSIPS_CARDS}
      />
      {/* CTA Banner - Does your business need an OpenSIPS development partner? */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Does your business need a OpenSIPs development partner?
              </h2>
              <p className="text-sm md:text-base text-white/90 mb-8">
                Our OpenSIPs development company helps you build cost‑effective, performant, and highly interactive
                communication platforms and video streaming apps.
              </p>
              <Link href="/contact-us" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Expert Solutions in OpenSIPS */}
      <ServicesCards
        title="Our Expert Solutions in OpenSIPS"
        subtitle="Seamlessly manage telecommunication infrastructure with thousands of parallel calls or maintain the high availability of your system with our multitude of OpenSIPS services."
        data={SERVICES_OPENSIPS_EXPERT_CARDS}
      />

      {/* Detail: Class 4 SoftSwitch Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src="/images/services/voip-devlopment-service/opensips-devlopment-service/Class-4-SoftSwitch-Solutions-11-11.webp"
                alt="Class 4 SoftSwitch Solution"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Class 4 SoftSwitch Solution</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our custom OpenSIPS development services cover coding of a class 4 softswitch solution that
                efficiently manages wholesale VoIP traffic and optimizes other operations. We help you build a
                highly scalable, robust switch leveraging modern VoIP technologies to grow a sustainable
                wholesale VoIP business.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span>
                  <span className="text-gray-800">Flawless traffic management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span>
                  <span className="text-gray-800">Interconnected IP networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span>
                  <span className="text-gray-800">Comprehensive solution</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/contact-us" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <WhyChooseUs
        data={WHY_CHOOSE_VOIP}
        subtitle="Top reasons to choose us for VoIP development services or consultation that drive success to your business."
      />

      {/* CTA banner - Request a Quote */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Does your business need a OpenSIPs development partner?</h3>
            <Link href="/contact-us" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


