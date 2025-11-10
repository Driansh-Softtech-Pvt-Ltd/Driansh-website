'use client';

import Link from 'next/link';
import { Settings, Users, CheckCircle, ArrowRight, Phone, Database, Cloud } from 'lucide-react';
import ServicesCards from '@/components/Services-cards';
import { SERVICES_FREESWITCH_CARDS1, SERVICES_FREESWITCH_EXPERT_CARDS } from '@/constants/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function FreeSwitchDevelopment() {
  const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle ? (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      ) : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden">
        {/* Background image */}
        <Image
          rel="preload"
          src="/images/services/voip-devlopment-service/freeswitch-devlopment-service/FreeSWITCH_Developmen_tCompany.webp"
          alt="FreeSWITCH Development Services"
          fill
          className="object-cover object-right z-0"
          priority
        />
        {/* Text content */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FreeSWITCH Development Services
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Building scalable and robust telephony solutions to meet the unparalleled vision of
            next-generation businesses with our expert FreeSWITCH development and consulting
            services.
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


      {/* FreeSWITCH Development Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            FreeSWITCH Development Company
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              FreeSWITCH is a renowned telephony stack with modular architecture that provides building blocks for custom FreeSWITCH solution development projects. The role of FreeSWITCH development in bringing revolutionary transition in the VoIP communication and telecom switch based industry is phenomenal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              FreeSWITCH, at the forefront of telecom evolution, leads the transition from traditional telecom switches to a dynamic and digitized landscape. Expert FreeSWITCH solution development unfolds a transformative journey in telecommunication.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              FreeSWITCH provides a robust platform, protocols, features, codecs, encryption methods, modular architecture, interoperability, and numerous other driving factors that make FreeSWITCH development services seamless and powerful. This platform versatility ensures that FreeSWITCH solution development can cater to diverse business communication needs and provide impeccable and customized telephony solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have years of experience as a leading FreeSWITCH development company. We help enterprises with FreeSWITCH consulting services to take distinctive advantage of FreeSWITCH. Furthermore, we help providers to effortlessly integrate third party APIs and custom solution development to build a comprehensive solution that aligns with similar protocols. These FreeSWITCH based telephony solutions enhance the scalability and adaptability of the communication solutions to foster a cohesive and interconnected communication ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Major FreeSWITCH Development Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-10">
          <SectionHeader
            title="Major FreeSWITCH Development Services"
            subtitle="We have expertise in developing tailored software solutions that precisely match the unique requirements of your business and clients."
          />
          <ServicesCards
            data={SERVICES_FREESWITCH_CARDS1} />
        </div>
      </section>

      {/* Hire FreeSWITCH Developers Banner */}
      <section className="py-20 bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="relative container mx-auto px-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Looking to Hire Professional and Expert FreeSWITCH Developers
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            for Your Ongoing Projects?
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Hire FreeSWITCH Developers Now
          </Link>
        </div>
      </section>

      {/* Our Expert Solutions in FreeSWITCH */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-10">
          <SectionHeader title="Our Expert Solutions in FreeSWITCH" />
          <ServicesCards data={SERVICES_FREESWITCH_EXPERT_CARDS} />
        </div>
      </section>

      {/* Multi Tenant IP PBX Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image/Visual */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="relative">
                  {/* Professional Multi Tenant PBX Visual */}
                  <div className="w-full h-80 bg-linear-to-br from-gray-50 to-blue-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                    {/* Main PBX System Visual */}
                    <div className="relative z-10 text-center">
                      {/* Server Rack Representation */}
                      <div className="relative mb-6">
                        <div className="w-32 h-24 bg-gray-800 rounded-lg mx-auto relative">
                          <div className="absolute inset-2 bg-gray-700 rounded flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <Phone className="w-3 h-3 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <Database className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      {/* Network Connections */}
                      <div className="flex justify-center space-x-4 mb-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Cloud className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Settings className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>

                      <p className="text-gray-700 font-semibold text-sm">Multi Tenant IP PBX</p>
                      <p className="text-gray-500 text-xs mt-1">Enterprise Communication Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Multi Tenant IP PBX Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Enrich the communication ecosystem with a private telephony system specifically developed for your business. A multi tenant system will provide further capabilities to extend communication features and benefits to other offices and even to customers.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Leverage the potential of FreeSWITCH</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Augment communication features</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Enjoy excellent scalability</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Save money by reducing expenses</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why u choose us? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-14">
            Top reasons to choose us for VoIP development services or consultation
            that drive success to your business.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl p-8 border hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">
                Timely Delivery
              </h3>
              <p className="text-gray-600 mb-6">
                We follow the best practices and standardization to ensure
                on-time delivery of your custom VoIP development projects,
                which ensures reduced time to market.
              </p>
              <ul className="space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Excellent management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Skilled team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Best performance
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl p-8 border hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">
                End-To-End Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                We provide a full cycle service to ensure that all types of
                demands and needs related to VoIP solutions are fulfilled at
                our VoIP solution development company.
              </p>
              <ul className="space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Software development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Module development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Customization & integration
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-8 border hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">
                100% Client Satisfaction
              </h3>
              <p className="text-gray-600 mb-6">
                Skilled developers and empathetic business team ensure swift
                transitions throughout the project lifecycle to ensure you
                receive hassle-free experience and deliverables.
              </p>
              <ul className="space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Client first approach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Dedicated account manager
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} /> Open discussions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Need a FreeSWITCH development partner? */}
      <section className="py-12">
        <div className="container mx-auto px-10">
          <div className="rounded-2xl bg-linear-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Does your business need a FreeSWITCH development partner?
            </h3>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Our Case Studies (compact cards) */}
      <section className="py-12">
        <div className="container mx-auto px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Case 1 */}
            <div className="rounded-xl p-6 md:p-7 text-white bg-linear-to-br from-purple-800 to-indigo-900 shadow-md">
              <div className="text-sm opacity-90 mb-2 font-semibold">Conexo Technologies</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Leveraged Competitive Edge & Strengthened Communication With A Tailored UCC Platform
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold opacity-90">Location</div>
                  <div className="opacity-90">Italy (Europe)</div>
                </div>
                <div>
                  <div className="font-semibold opacity-90">Industry</div>
                  <div className="opacity-90">Technology, Telephony, Managed Services</div>
                </div>
              </div>
              <p className="opacity-90 mt-4 text-sm leading-relaxed">
                We delivered a completely tailor‑made UCC platform helping the client modernize collaboration and improve operational efficiency.
              </p>
              <div className="mt-5">
                <Link href="#" className="inline-block bg-white/90 text-indigo-800 font-medium px-4 py-2 rounded-md hover:bg-white transition">
                  Download Case Study
                </Link>
              </div>
            </div>

            {/* Case 2 */}
            <div className="rounded-xl p-6 md:p-7 text-white bg-linear-to-br from-fuchsia-800 to-purple-900 shadow-md">
              <div className="text-sm opacity-90 mb-2 font-semibold">BelSmart</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Custom Multi‑Tenant Call Center Software in FreeSWITCH with PBX Features for a Solution Provider
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold opacity-90">Location</div>
                  <div className="opacity-90">India (Asia)</div>
                </div>
                <div>
                  <div className="font-semibold opacity-90">Industry</div>
                  <div className="opacity-90">Communication, Software Provider</div>
                </div>
              </div>
              <p className="opacity-90 mt-4 text-sm leading-relaxed">
                The all‑inclusive platform centralized operations and enabled high‑quality call handling with advanced PBX features.
              </p>
              <div className="mt-5">
                <Link href="#" className="inline-block bg-white/90 text-purple-900 font-medium px-4 py-2 rounded-md hover:bg-white transition">
                  Download Case Study
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="#" className="inline-flex items-center gap-2 text-white bg-indigo-700 hover:bg-indigo-800 px-5 py-2.5 rounded-lg shadow transition">
              <span>See All Case Studies</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}