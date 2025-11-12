'use client'
import { ArrowRight, Server, Award, Globe, HeadphonesIcon, Lightbulb, Rocket} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES_VOIP_CARDS, SERVICES_VOIP_FAQ, WHY_CHOOSE_VOIP } from '@/constants/services';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Button } from '@/components/ui/button';

export default function VoIPServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/voip-devlopment-service/voip-devlopment/VoIP-Development-Services-Background-Image-1.webp"
          alt="VOIP Development Services"
          fill
          className="object-cover object-right opacity-80 z-0"
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Custom VoIP
            Development
            Services
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Unlock the full potential of tailored communication with our Custom VoIP Development Services.
            <br />
            With decades of experience, we deliver scalable, secure, and feature-rich VoIP solutions aligned with your unique business needs.
            <br />
            Leverage our deep expertise in building robust telephony products using cutting-edge VoIP technologies and frameworks, built to power your growth.

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

      {/* information  */}
      <section className="py-15 px-15 bg-gray-100">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Custom VoIP Development: Build a future-proof communication platform</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              VoIP technologies have gifted some really powerful and robust VoIP business solutions that empower different types
              of enterprises and end users to communicate seamlessly and that also at competitive rates. Our expert VoIP software
              development company has strengthened the communication ecosystem for the best VoIP service provider in the USA and all
              over the globe besides several other small, medium, and large scale enterprises. Our tailored VoIP solutions and on-demand
              VoIP development services bridge the communication gap along with adding future-proof technology at competitive rates for global businesses across industries.
            </p>
            <p>
              Our proficiency in harnessing the true potential of open source VoIP solutions and platforms for the benefit of
              our clients is our masterstroke. Moreover, we persistently invest in innovation and growth to upgrade
              technology and our VoIP application development services that regard us as the top VoIP solution development company.
            </p>
          </div>
        </div>
      </section>

      {/* information  */}
      <section className="py-15 px-20 bg-gray-150">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Proficient VoIP Development Services</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className='text-center'>
              Our VoIP development company aims to align our expertise with your requirements to build the most sought-after solutions.
              We provide technology specific VoIP application development services, also you can hire our expert VoIP developers that
              can meet your preference, budget, and vision of building next generation telephony platforms. Our expertise lies in all
              major open source technologies available for custom VoIP development.
            </p>
          </div>
        </div>
      </section>

      {/* services freeswitch, WebRTC , Asterisk ,OpenSIPS , Kamailio  Devlopment */}

      {/* freeswitch devlopment */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-8 bg-gray-100">

        {/* Left Section - Text */}
        <div className="max-w-2xl">

          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            FreeSWITCH Development
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            FreeSWITCH is a highly scalable and resilient platform ideal for building VoIP business solutions capable of
            managing video calls, voice calls, data exchange, and other forms of communication within a unified system.
            It is designed to handle high volumes of traffic, making it a top choice for modern VoIP service providers.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Our expert FreeSWITCH development services are crafted to help you build robust and scalable VoIP platforms.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                We deliver reliable communication solutions that leverage the advanced capabilities and flexibility of FreeSWITCH.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="relative max-w-md w-full flex justify-center">
          <div className="absolute -z-10 top-10 left-0 right-0 mx-auto w-80 h-60 bg-orange-500 rounded-3xl"></div>
          <div className="absolute top-4 left-6 w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="absolute top-4 right-6 w-3 h-3 bg-orange-300 rounded-full"></div>
          <Image
            src="/images/services/voip-devlopment-service/freeswitch-devlopment-service/image.png"
            alt="Asterisk Developer"
            width={400}
            height={400}
            className="rounded-2xl relative z-10"
          />
        </div>
      </section>

      {/* Asterisk Development Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-8 bg-gray-150">
        {/* Left Section - Image */}
        <div className="relative max-w-md w-full flex justify-center">
          <Image
            src="/images/services/voip-devlopment-service/asterisk-devlopment-service/Asterisk-img.jpeg"
            alt="Asterisk Developer"
            width={400}
            height={400}
            className="rounded-2xl relative "
          />
        </div>

        {/* Right Section - Text */}
        <div className="max-w-2xl">

          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Asterisk Development
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Asterisk is a powerful open-source framework for building SIP-based telephony
            systems. Known for its flexibility and maturity, it supports the development of
            scalable and feature-rich VoIP communication solutions for businesses and telecom
            service providers across the globe.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Our Asterisk development services are designed to help you create or enhance
                modern VoIP systems with optimal performance.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                We assist businesses in upgrading their Asterisk platforms with advanced
                features, better stability, and improved communication efficiency.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* OpenSIPS  Development */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-8 bg-gray-100">

        {/* Left Section - Text */}
        <div className="max-w-2xl">

          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            OpenSIPS Development
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            OpenSIPS is a robust and flexible SIP server technology capable of powering a wide range of VoIP tools
            like SIP proxies, redirect servers, gateways, and load balancers. Its versatility makes it a reliable
            solution for building real-time communication systems tailored to various business needs.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Our OpenSIPS development experts help you build secure, scalable, and
                customizable SIP-based communication platforms.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                We offer full-cycle development services to implement reliable OpenSIPS
                solutions that align with your technical and business goals.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="relative max-w-md w-full flex justify-center">
          <div className="absolute -z-10 top-10 left-0 right-0 mx-auto w-80 h-60 bg-orange-500 rounded-3xl"></div>
          <div className="absolute top-4 left-6 w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="absolute top-4 right-6 w-3 h-3 bg-orange-300 rounded-full"></div>
          <Image
            src="/images/services/voip-devlopment-service/opensips-devlopment-service/openSIP-img.png"
            alt="openSIPs Developer"
            width={400}
            height={400}
            className="rounded-2xl relative z-10"
          />
        </div>
      </section>

      {/* Kamailio Development */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-8 bg-gray-150">
        {/* Left Section - Image */}
        <div className="relative max-w-md w-full flex justify-center">
          <div className="absolute -z-10 top-10 left-0 right-0 mx-auto w-80 h-60 bg-orange-500 rounded-3xl"></div>
          <div className="absolute top-4 left-6 w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="absolute top-4 right-6 w-3 h-3 bg-orange-300 rounded-full"></div>
          <Image
            src="/images/services/voip-devlopment-service/kamailio-devlopment-service/kamailio-img.png"
            alt="kamailio Developer"
            width={400}
            height={400}
            className="rounded-2xl relative z-10"
          />
        </div>

        {/* Right Section - Text */}
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Kamailio Development
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kamailio is a high-performance SIP server known for its ability to operate across
            diverse environments from embedded systems to enterprise-scale
            platforms. It enables the development of scalable VoIP applications for global communication service providers.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Our Kamailio development services help you build flexible, high-capacity SIP infrastructures customized for your business needs.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                We specialize in delivering secure, optimized VoIP systems using Kamailio's advanced routing, load balancing, and signaling capabilities.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* WebRTC devlopment */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-8 bg-gray-100">

        {/* Left Section - Text */}
        <div className="max-w-2xl">

          <h2 className="text-3xl lg:text-4xl font-bold text-balck mb-6">
            WebRTC Development
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            WebRTC is an open-source technology that enables real-time communication directly through web
            browsers and mobile apps without the need for plugins. It’s widely used to build secure, scalable,
            and interactive applications like video conferencing, live chat, and online collaboration tools.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>

                Our WebRTC development services help you create browser-based voice, video, and data sharing applications with low latency and high quality.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                We specialize in building customized WebRTC solutions for telehealth, edtech, remote support, and enterprise-grade collaboration platforms.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="relative max-w-md w-full flex justify-center">
          <Image
            src="/images/services/voip-devlopment-service/webrtc-devlopment-service/webRTC-img.jpeg"
            alt="webrtc Developer"
            width={400}
            height={400}
            className="rounded-2xl relative z-10"
          />
        </div>
      </section>

      {/* Trusted VoIP Development Services< */}
      <section className="py-15 px-8 bg-gray-150">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Trusted VoIP Development Services</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className='text-center'>
              Our VoIP software development company is renowned for its expert services that assist providers
              and businesses to build comprehensive telephony platforms. Moreover,we have experience in building
              multipurpose and exclusive software applications popular in the VoIP telephony industry.
            </p>
          </div>
        </div>
      </section>

      {/* CARDS SERVICES */}
      <ServicesCards
        data={SERVICES_VOIP_CARDS} />


      {/* info */}
      <section className="py-15 px-15 bg-gray-100">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">VoIP Consultation Services</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              The VoIP industry is gigantic and crowded with numerous jargons that can leave you extremely confused.
              Additionally, resources shared by different VoIP software development companies, independent developers,
              communities, and other sources provide a multitude of choices while thinking about building an app. Therefore,
              you may find enormous options for the development of VoIP business solutions, hosting them, and managing other
              relevant technicalities. To ensure you get through this process seamlessly and put the best foot forward, you
              need to have complete know-how of this industry, different technologies,upcoming trends, existing roadblocks, and several other driving factors.  Fret not.
            </p>
            <p>
              We are a leading VoIP solution development company with a team of immensely experienced and gifted developers,
              designers, and technical experts. We provide VoIP consulting services to help you through different stages of app
              development in this industry to hit the bull’s eye of performance, scalability, and reliability. From scope development
              to roadmap design, technology selection, effective role delegation, marketing approach definition, high performance
              architecture design, and multiple other segments are covered in our VoIP consultation services to ensure
              you get the much needed expert advice from a single space. We will help you define success with our proficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Side Image */}
          <div className="flex justify-center relative">
            <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] 
          rounded-full absolute bg-linear-to-r opacity-60" />

            <Image
              src="/images/services/voip-devlopment-service/voip-devlopment/VoIP-04.webp"
              alt="Expertise"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>

          {/* Right Side Text + Cards */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-10 leading-tight">
              Our Expertise = Your Business Success
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Card 1 */}
              <div className="group bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200 
              hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                <HeadphonesIcon className="w-10 h-10 text-blue-600 mb-3 
              transition-colors duration-300 " />
                <p className="text-gray-700 font-medium">
                  Round the clock availability<br />
                  of highly experienced resources
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200
              hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                <Rocket className="w-10 h-10 text-blue-600 mb-3
              transition-colors duration-300" />
                <p className="text-gray-700 font-medium">
                  Attitude to help you maximize<br />
                  resource utilization & valuation
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200
              hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                <Globe className="w-10 h-10 text-blue-600 mb-3
              transition-colors duration-300" />
                <p className="text-gray-700 font-medium">
                  Demonstrated expertise in<br />
                  out-of-the-box VoIP solutions
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200
              hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                <Lightbulb className="w-10 h-10 text-blue-600 mb-3
              transition-colors duration-300" />
                <p className="text-gray-700 font-medium">
                  Strategic thinking &<br />
                  innovative approach
                </p>
              </div>

              {/* Card 5 */}
              <div className="group bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200
              hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                <Award className="w-10 h-10 text-blue-600 mb-3
              transition-colors duration-300" />
                <p className="text-gray-700 font-medium">
                  Product development & marketing<br />
                  experience to help you prosper
                </p>
              </div>

              {/* Card 6 */}
              <div className="group bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200
              hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                <Server className="w-10 h-10 text-blue-600 mb-3
              transition-colors duration-300" />
                <p className="text-gray-700 font-medium">
                  Proficiency in system migration<br />
                  for seamless digital transformation
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* why u choose us? */}
      <WhyChooseUs
        data={WHY_CHOOSE_VOIP} />

      {/*  */}
      <FAQ
        data={SERVICES_VOIP_FAQ}
      />

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your VoIP Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your VoIP requirements and create a customized solution
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Contact Our VoIP Experts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}