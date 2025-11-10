'use client';

import Link from 'next/link';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_SIPJS_CARDS, WHY_CHOOSE_SIPJS_THREE } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function SIPJsDevelopment() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/open-source-service/sipjs-devlopment-service/SIP-JS-01-scaled-1.webp"
          alt="SIP.JS Development Services"
          fill
          className="object-cover object-right opacity-80 z-0"
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hire SIP.js Developer
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Build Feature Packed Real Time Communication Apps with the Power of WebRTC and SIP
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

      {/* Two-Column Intro (Image Left, Copy Right) */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/services/open-source-service/sipjs-devlopment-service/SIP-JS.webp"
              alt="SIP.js Development"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pool of Talented SIP.js Developers Available to Work on Your Communication Projects</h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Building a SIP based communication solution, which also offers real time communication using browser technology with WebRTC was quite a complicated and tedious job for developers. However, with SIP.js libraries, it has become easier to implement both SIP and WebRTC within a single app using JavaScript libraries. You can develop flexible and scalable real time communication solutions to run your business or enhance your business communication by leveraging the power of WebRTC and SIP.
              </p>
              <p>
                We have a team of experienced SIP and WebRTC developers that have familiarity and specialization in working with the SIP.js library. We have flexible engagement models to offer. Depending on the project needs, businesses can hire a SIP.Js developer or a team of SIP.js developers for full time, part time, or as per the project's demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SIP.Js Services (3 cards) */}
      <ServicesCards
        title="Our SIP.Js Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_SIPJS_CARDS}
      />

      {/* CTA banner: Need a SIP.js development partner? */}
      <section className="py-16 bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Does your business need a SIP.js development partner?</h2>
            <p className="text-sm md:text-base text-white/90 mb-6">
              Our SIP.js development company helps you build cost‑effective, performant, and highly interactive video streaming apps.
            </p>
            <Link href="/contact-us" className="inline-block bg-white text-indigo-800 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Audio & Video Conferencing Solution - two column */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/services/open-source-service/sipjs-devlopment-service/Audio-Video-Conferencing-Solution-02.webp"
              alt="Audio & Video Conferencing Solution"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Copy right */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Audio & Video Conferencing Solution</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our experienced developers will integrate the power of SIP into a web app to build the most reliable and robust audio and video conferencing solution. We specialize in using hybrid technologies to build scalable conferencing solutions; ranging from SIP js WebRTC to SIP js Asterisk, SIP js FreeSWITCH, and SIP js React Native. Let our team guide you through the process to build the most comprehensive audio and video conferencing software.
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li className="flex items-start gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span><span>Excellent quality of calls</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span><span>Supports unlimited participants</span></li>
              <li className="flex items-start gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</span><span>Actionable insights and updates</span></li>
            </ul>
            <div className="mt-7">
              <Link href="/contact-us" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIP.Js Development Services - text block */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">SIP.Js Development Services</h3>
          <p className="text-gray-700 leading-relaxed">
            We are one of the leading telephony solution development companies. Our experienced SIP.js developers hold versatile experience working with different SIP technologies, JavaScript frameworks, and other technology platforms. The complete bundle of technical expertise is available to harness the full potential of SIP.js libraries and add them to your VoIP projects.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our SIP.js development services cover all your requirements to build a robust and real time communication platform that seamlessly handles SIP calls. We can help you develop a communication app consisting of voice calling, video calling, instant messaging, file sharing, screen sharing, and multiple other real time communication features. You don’t need to worry about adding a SIP server or adding and maintaining a long code in your telephony platform. Our SIP.js development services offer robust and reliable communication solution development using this popular JavaScript library.
          </p>
        </div>
      </section>

      {/* Why Choose Us - three cards with shared design */}
      <WhyChooseUs
        data={WHY_CHOOSE_SIPJS_THREE}
        subtitle="Discover the Benefits of Partnering with Our Team"
      />

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Does your business need a SIP.js development partner?</h3>
            <Link href="/contact-us" className="inline-block bg-white text-indigo-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition shadow-md">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


