'use client'

import {BarChart3, CheckCircle } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { SERVICES_ASTERISK_FAQ, SERVICES_ASTERISK_CARDS, WHY_CHOOSE_ASTERISK, SERVICES_ASTERISK_SERVICES } from '@/constants/services';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AsteriskDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden">
        {/* Background image */}
        <Image
          rel="preload"
          src="/images/services/voip-devlopment-service/asterisk-devlopment-service/Asterisk-min.webp"
          alt="Asterisk Development Services"
          fill
          className="object-cover object-right z-0"
          priority
        />
        {/* Text content */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Asterisk Development Service
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Asterisk has set the stepping stone for developing VoIP based communication tools
            with its powerful IP PBX Solution. It can be used to build a variety of communication
            and collaboration solutions to meet day to day needs of businesses and end users. Our
            focused Asterisk services can benefit you and leverage the power of this pioneer VoIP development technology.
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


      {/* Company Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Asterisk Development Company</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              We are one of the renowned Asterisk development companies that expertise in building custom and open source VoIP solutions. Our experienced Asterisk developers hold a detailed understanding of each feature of this open source VoIP development platform and how to turn scattered features into a full fledged communication solution.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We follow an agile approach to building the best telephony solution with our meticulous Asterisk development services.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Does your business need a Asterisk development partner?</h3>
            <p className="text-xl text-blue-100">
              Our Asterisk development company helps you build cost-effective, performant, and highly interactive video streaming apps.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Asterisk Services</h2>
            <p className="text-lg text-gray-600">
              We have experience in providing world class development, customization, support, and multiple other services in Asterisk.
            </p>
          </div>
          <ServicesCards data={SERVICES_ASTERISK_CARDS} />
        </div>
      </section>

      {/* Expert Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Solutions in Asterisk</h2>
            <p className="text-lg text-gray-600">
              We have experience in providing world class development, customization, support, and multiple other services in Asterisk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_ASTERISK_SERVICES.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>

          {/* Calling Card Solution Feature Card */}
          <div className="mt-12 bg-linear-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Calling Card Solution</h3>
                <ul className="space-y-4">
                  {[
                    "Voucher management",
                    "Real time actions",
                    "Reseller network support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <CheckCircle className="w-6 h-6 mr-3 text-blue-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <BarChart3 className="w-48 h-48 text-blue-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        data={WHY_CHOOSE_ASTERISK} />


      {/* FAQ Section */}
      <FAQ data={SERVICES_ASTERISK_FAQ} />
    </div>
  );
}