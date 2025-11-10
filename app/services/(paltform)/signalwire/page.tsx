import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_SIGNALWIRE_FAQ, WHY_CHOOSE_SIGNALWIRE } from "@/constants/services";
import Image from "next/image";
import Link from "next/link";

export default function SignalWirePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/platform-services/signalwire-devlopment-service/Singalwire-01-scaled.webp"
          alt="Signalwire Development Services"
          fill
          className="object-cover object-right opacity-80 z-0"
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            SignalWire API Integration
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Enjoy the sophistication of IP telephony blended with WebRTC features and amalgamated with a conventional telecom system with our SignalWire API integration services.
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


      {/* SignalWire API Consulting Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i0.wp.com/Driansh.com/wp-content/uploads/2025/09/SignalWire-API-Consulting-Services-01.jpg?fit=550%2C338&ssl=1"
                alt="SignalWire API Consulting Services"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SignalWire API Consulting Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                SignalWire has developed several APIs for voice, video, and messaging, which can be part of any VoIP software development project to achieve some predefined functionalities. We have been working with FreeSWITCH technology along with SignalWire APIs for several years. It bestows an in-depth understanding of various SignalWire APIs to our developers and consultants. Our SignalWire API integration company can help you with our lifecycle services, from strategy building to the selection of the right APIs, successful integration, and product branding with our industry expertise and services as part of our SignalWire API consulting services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SignalWire Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SignalWire Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment is to develop software that aligns with the specific requirements of our clients' business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SignalWire API Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create an omnichannel experience for your users or simply add a missing functionality in an existing telephony solution with our SignalWire API integration services.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SignalWire API Consultation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our SignalWire API consulting services cover all aspects of SIP telephony product development and deployment with the right APIs of SignalWire.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Third-party Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We assist in building unified communication solutions and reduce time to market with SignalWire and third party API integration services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SignalWire API Integration Company */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            SignalWire API Integration Company
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              SignalWire is a product platform that provides voice, video, and SMS APIs to build next generation communication solutions. The SignalWire APIs are available across major clouds, which makes it more adept to cater to customers without any long delays or latencies. There are multiple APIs available with REST and WebSockets to help VoIP developers use them as per their skills to provide a seamless communication experience to users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We, being one of the top SignalWire API integration companies, have been working with SignalWire APIs closely. We have developed multiple custom products for our clients using these APIs. The unified communication solutions developed with these APIs provide exceptional outcomes. We provide a range of services to our clients with our expertise in SignalWire API, from strategy building to API selection, integration, product development, and more.
            </p>
          </div>
        </div>
      </section>

      {/* why u choose us? */}
      <WhyChooseUs
        data={WHY_CHOOSE_SIGNALWIRE} />


      {/* FAQ */}
      <FAQ
        data={SERVICES_SIGNALWIRE_FAQ} />

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Communication Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our SignalWire expertise can transform your business communication
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>

  );
}