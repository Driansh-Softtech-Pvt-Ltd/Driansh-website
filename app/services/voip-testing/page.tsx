import {Activity, CheckCircle,  ArrowRight } from 'lucide-react';
import { SERVICES_VOIP_TESTING_FAQ, SERVICES_VOIP_TESTING_PROTOCOLTEST, SERVICES_VOIP_TESTING_SERVICES_INDUSTRIES, SERVICES_VOIP_TESTING_SERVICES_PROCESSSTEPS, SERVICES_VOIP_TESTING_SERVICES_TRUSTPOINTS, SERVICES_VOIPTESTING_CARD, SERVICES_VOIPTESTING_CARD1, SERVICES_VOIPTESTING_CARD2 } from '@/constants/services';
import ServicesCards from '@/components/Services-cards';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function VoIPTestingPage() { 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
       <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
              {/* Background Image */}
              <Image
                rel="preload"
                src="/images/services/voip-devlopment-service/voip-devlopment/VoIP-Development-Services-Background-Image-1.webp"
                alt="VOIP TESTING"
                fill
                className="object-cover object-right opacity-80 z-0"
                priority
              />
      
              {/* Text Section */}
              <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                   VoIP Testing Services
                </h1>
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                    VoIP testing is the process of evaluating and validating the performance, reliability, and audio quality of a Voice over IP (VoIP) communication system. Through VoIP testing, you can detect and resolve issues such as jitter, delay, packet loss, and poor audio quality before they affect your customers.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                Our end-to-end VoIP testing solutions ensure every call is clear, consistent, and reliable, so you can deliver the best voip audio quality without delays or disruptions.
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

      {/* Why VoIP Testing Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why VoIP Testing Matters
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Unclear voice, dropped calls, or poor WebRTC connectivity aren't just technical glitches they hurt user experience, team productivity, and brand trust. In today's real-time communication world, quality is non-negotiable.
                </p>
                <p>
                  At Driansh, we go beyond basic voice tests. Our VoIP testing services proactively identify and eliminate performance bottlenecks across SIP and WebRTC environments ensuring your system is battle-ready.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Quality Assurance</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                <Activity className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Test
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We evaluate your entire VoIP infrastructure from signaling to media using real-world simulation and advanced diagnostics
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              VoIP & WebRTC Call Quality
            </h3>
         <ServicesCards 
         data={SERVICES_VOIPTESTING_CARD}/>
          </div>
        </div>
      </section>

      {/* Protocol-Level Testing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Protocol-Level SIP & WebRTC Testing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_VOIP_TESTING_PROTOCOLTEST.map((test, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold ">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {test.title}
                    </h3>
                    <p className="text-gray-600">
                      {test.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our VoIP Testing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our VoIP Testing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep domain expertise with automated tools and manual validation to deliver reliable, actionable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_VOIP_TESTING_SERVICES_PROCESSSTEPS.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-linear-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-blue-300 mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-blue-100">
                    {step.description}
                  </p>
                </div>
                {index <SERVICES_VOIP_TESTING_SERVICES_PROCESSSTEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs VoIP Testing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who Needs VoIP Quality Test & WebRTC Testing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are essential for any business where call quality, system reliability, and real-time communication directly impact customer experience and operations
            </p>
          </div>

         <ServicesCards
         data={SERVICES_VOIPTESTING_CARD2} />
        </div>
      </section>

      {/* Why Choose Driansh */}
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Driansh for VoIP Testing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driansh stands as a trusted partner in delivering reliable, scalable, and secure VoIP solutions. Our VoIP Testing services are backed by years of telecom expertise, robust infrastructure testing capabilities, and real-world experience across global deployments.
            </p>
          </div>

          <ServicesCards
          data={SERVICES_VOIPTESTING_CARD1} />

          <div className="bg-blue-900 text-white rounded-2xl p-12 mt-15">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Here's why industry leaders trust us
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES_VOIP_TESTING_SERVICES_TRUSTPOINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-300  mt-1" />
                  <p className="text-blue-100">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICES_VOIP_TESTING_SERVICES_INDUSTRIES.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our VoIP Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our VoIP Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment is to develop software that aligns with the specific requirements of our clients' business
            </p>
          </div>

          <ServicesCards 
          data={SERVICES_VOIPTESTING_CARD}/>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
      data={SERVICES_VOIP_TESTING_FAQ}/>


      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Ensure Crystal-Clear VoIP Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our VoIP testing services can help you deliver flawless voice communication experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}