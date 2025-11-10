'use client'
import { Users, CheckCircle,ArrowRight } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { SERVICES_WEBRTC_BENEFITS, SERVICES_WEBRTC_CARDS, SERVICES_WEBRTC_FAQ, SERVICES_WEBRTC_TESTIMONIALS, WHY_CHOOSE_WEBRTC } from '@/constants/services';
import ServicesCards from '@/components/Services-cards';
import Link from 'next/link';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WebRTCDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden">
        {/* Background image */}
        <Image
          rel="preload"
          src="/images/services/voip-devlopment-service/webrtc-devlopment-service/Webrtc-01-scaled.webp"
          alt="WebRTC Development Services"
          fill
          className="object-cover object-right z-0"
          priority
        />
        {/* Text content */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ready-to-Use WebRTC VoIP Softphone
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Effortlessly deploy our WebRTC VoIP softphone for seamless real-time communication.
            Stay connected with secure, high-quality voice and video calls instantly.
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

      {/* What is WebRTC */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What is WebRTC</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              WebRTC (Web Real-Time Communication) is an open-source technology that allows real-time voice and video calls,
              messaging, screen sharing, and file transfers directly within web browsers and mobile apps. It removes the need
              for plugins, extensions, or third-party installations, providing instant and smooth communication experiences.
            </p>
            <p>
              WebRTC is supported by all major browsers, including Chrome, Firefox, Safari, and Edge. It provides an incredible
              foundation for building interactive, secure and high-performance communication applications. Establishing peer-to-peer
              connections it also helps enabling developers to build rich multimedia experiences without the hassle of integrating
              with external services.
            </p>
            <p>
              From one-on-one video chats to complex multi-user conferencing and integrated enterprise collaboration tools, WebRTC
              empowers developers and organizations to deliver low-latency, cross-device, and highly scalable real-time communication
              solutions—entirely within the browser environment.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How can WebRTC Benefit your Business?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES_WEBRTC_BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-500 flex- mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Does your business need a WebRTC development partner?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our WebRTC development company helps you build cost-effective, performant, and highly interactive video streaming apps.
          </p>

          <Link href="/contact-us"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features of WebRTC Development Software
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our WebRTC development company helps you build cost-effective,
              performant, andhighly interactive video streaming apps.
            </p>
          </div>
          <ServicesCards
            data={SERVICES_WEBRTC_CARDS}
          />
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                WebRTC Development Company
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We, Driansh Technologies, are one of the leading WebRTC development companies. Our in-house team of
                  WebRTC experts has built a whole gamut of communication and collaboration solutions using this VoIP
                  development technology.
                </p>
                <p>
                  With our expertise in using WebRTC to build ideal teleconferencing and broadcasting WebRTC solutions,
                  we have empowered the communication infrastructure of many businesses. We use the best software development
                  approach to leverage the full advantage of WebRTC to fulfill the communication and collaboration needs of
                  any business in a highly secured manner. We are one of the preferred WebRTC development and support companies.
                </p>
              </div>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Users className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unified communication solutions
                </h3>
                <p className="text-gray-600 mb-6">
                  Leverage the potential of all popular collaboration channels incorporated within your business
                  communication solution and empowered with the power of real time communication technology, WebRTC.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 " />
                    Increased agility
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 " />
                    Streamlined processes
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 " />
                    Better team building
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        data={WHY_CHOOSE_WEBRTC} />

      {/* CTA Section */}
      <section className="bg-linear-to-br from-indigo-900 via-blue-800 to-blue-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You Looking For Experts And Professional WebRTC Developers For Your Projects?
          </h2>

          <Link href="/contact-us"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What Our Client Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_WEBRTC_TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M10 20c0-5.5 4.5-10 10-10v5c-2.75 0-5 2.25-5 5h5v10H10V20zm15 0c0-5.5 4.5-10 10-10v5c-2.75 0-5 2.25-5 5h5v10H25V20z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        data={SERVICES_WEBRTC_FAQ} />

      {/* Final CTA */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Communication?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your WebRTC development needs and create a custom solution for your business
          </p>

          <Link href="/contact-us"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}