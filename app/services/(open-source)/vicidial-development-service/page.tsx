"use client";

import Link from "next/link";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_VICI_CARDS, SERVICES_VICIDIAL_AI, WHY_CHOOSE_VICI } from "@/constants/services";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function VICIdialDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}     

      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
              {/* Background Image */}
              <Image
                rel="preload"
                src="/images/services/open-source-service/vicidial-devlopment-service/Vicidial-scaled.webp"
                alt="VICIdial Development Services"
                fill
                className="object-cover object-right opacity-80 z-0"
                priority
              />
      
              {/* Text Section */}
              <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                       VICIdial Development Services
                </h1>
      
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                    Add missing features or enhance current performance by leveraging our expertise in this open source call center software.
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

      {/* About VICIdial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/services/open-source-service/vicidial-devlopment-service/vicidial1.webp"
              alt="VICIdial: A popular open source call center solution"
              className="w-full max-w-md h-auto"
            />
          </div>
          {/* Right - Text content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              VICIdial: A popular open source call center solution to run diversified business campaigns
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The increasing demand for call center solutions at cheaper rates can be met by VICIdial, call center software. It has several amazing features to support inbound and outbound campaigns. With VICIdial CRM integration, you can streamline customer data management and enhance your team's productivity. This highly scalable platform is ideal for growing businesses, allowing you to run customer care, sales, survey, and other types of campaigns while maintaining smooth workflow and improved customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CRM Integration CTA Section */}
      <section className="py-16 bg-linear-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Does your business need a Custom VICIdial CRM Integration?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-1">
                Our VICIdial development company helps you build cost-effective, high-performing, and scalable call center solutions with seamless VICIdial CRM Integration, tailored to your business needs.
              </p>
            </div>
            <div>
              <Link
                href="/contact-us"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all block"
              >
                Integrate VICIdial CRM Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our VICIdial Development Services Card Section */}
      <ServicesCards
        title="Our VICIdial Development Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_VICI_CARDS}
      />

      {/* --- Call Center Solution Section --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/services/open-source-service/vicidial-devlopment-service/Call-Center-Solution-04.webp"
              alt="Call Center Solution"
              className="w-full max-w-md h-auto"
            />
          </div>
          {/* Content right */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Call Center Solution</h2>
            <p className="text-gray-700 mb-5">We have demonstrated our proficiency in developing custom call center software solutions that can perfectly align with your business needs and client expectations. We can provide you with the most personalized solution or development services to furnish you with an ideal contact center solution.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600">✓</span> <span className="font-medium">Tailored software</span></li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600">✓</span> <span className="font-medium">Custom development</span></li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-100 inline-flex items-center justify-center text-blue-600">✓</span> <span className="font-medium">Customization and enhancements</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- VICIdial Development Company Section --- */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">VICIdial Development Company</h2>
          <p className="mb-3 text-gray-700"><b>We are popular as a VoIP open source development company</b> due to our expertise in building, scaling up, and maintaining the best open source VoIP solutions. We have a team of VICIdial experts that specializes in this open source call center software. We provide the development of custom features, add-ons, etc. to add missing functionalities to this contact center solution.</p>
          <p className="text-gray-700">As a leading VICIdial Development Company, Our VICIdial skin development and VICIdial theme customization services are popular due to the transformation of this software with better and enhanced UI and UX elements. We also provide various other VICIdial services to benefit its users.</p>
        </div>
      </section>

      {/* --- VICIdial Custom Theme CTA Banner --- */}
      <section className="py-16 bg-linear-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-3/4">
              <p className="text-white text-lg mb-5 md:mb-0">
                Enhance your call center’s interface with our VICIdial custom theme. Tailored to your brand, it offers a visually appealing and intuitive design, optimizing the user experience for agents. Customize colors, logos, and layouts to create a branded and engaging environment that boosts productivity and customer satisfaction.
              </p>
            </div>
            <div>
              <Link href="/contact-us" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-center transition block">
                Request Live Demo for Custom Theme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <WhyChooseUs 
        data={WHY_CHOOSE_VICI} 
        subtitle="Discover the Benefits of Partnering with Our Team" 
      />

      {/* --- AI Agent Section --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12">
          {/* Left - text & features */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Supercharge Your VICIdial With AI-Powered Agents</h2>
            <p className="text-gray-700 mb-6">Take your VICIdial system to the next level with our AI Agent integration! Designed to enhance productivity, reduce manual workloads, and offer intelligent automation, our VICIdial AI Agent empowers call centers to:</p>
            <ul className="space-y-3 mb-7">
              {SERVICES_VICIDIAL_AI.map(({icon: Icon, text}, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className=" w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-700" />
                  </span>
                  <span className="font-medium text-gray-800 text-[15px]">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 mb-5">Built by the VICIdial experts at Driansh, our AI solution seamlessly integrates with your existing VICIdial setup.</p>
            <Link href="#" className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition shadow">Explore VICIdial AI Agent</Link>
          </div>
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/services/open-source-service/vicidial-devlopment-service/Supercharge-Your-VICIdial-with-AI-Powered-Agents.webp"
              alt="VICIdial AI Agent"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
