'use client';

import {Server, Check, ArrowRight} from 'lucide-react';
import ServicesCards from '@/components/Services-cards';
import { SERVICES_BACK_END_DEVELOPMENT_FAQ, SERVICES_BACK_END_PROCCESSTEP, SERVICES_BACK_END_SERVICES, SERVICES_BACK_END_TECHNOLOGIS, SERVICES_BACKEND_CARDS, WHY_CHOOSE_BACKEND } from '@/constants/services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function BackendDevelopmentPage() {
 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/web-devlopment-service/backend-devlopment-service/backend.jpg"
          alt="Backend Devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Leading Backend Development Services
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            We develop high performing, secure, and scalable backend applications using Python, NodeJS, and cutting-edge technologies to deliver seamless functionality and optimal performance.
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

      {/* What is Back End Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What is Back End Development?
            </h2>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 space-y-4">
              <p>
                It is the practice of developing server side applications to deliver high performing, secure, and swift functionalities that elevate overall customer satisfaction and other benefits.
              </p>
              <p>
                Backend development using Python, NodeJS, and other cutting edge technologies create a bridge between frontend and backend to streamline interaction between the database and other applications for delivering optimal performance and managing operations seamlessly.
              </p>
              <p className="font-semibold text-blue-600">
                Our back end development company specializes in unfolding the potential of server side applications to bring out the best value of your backend solutions and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Development Services to Amplify Growth */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Backend Development Services to Amplify Growth and Scalability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              As a leading backend web development company, we focus on developing high value backend solutions and applications. Our experienced and vetted developers ensure seamless server side operations and efficient data processing with reliable connection between frontend and backend for swift operations.
            </p>
          </div>

          <ServicesCards
            data={SERVICES_BACKEND_CARDS} />

          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 m-10 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">We offer a range of services covering back end development for:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {["Web application", "ERP/CRM", "Custom solution", "Mobile", "IoT", "And more"].map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Check className="w-5 h-5 text-blue-200 " />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backend Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Backend Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Our streamlined process ensures efficient delivery of robust backend solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_BACK_END_PROCCESSTEP.map((step, index) => (
              <div
                key={index}
                className="group p-8 bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack of Technologies */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stack of Technologies Used for Back End Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              We ensure seamless performance with reliable backend development using bleeding-edge technologies and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES_BACK_END_TECHNOLOGIS.map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 text-center"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.05}s backwards` }}
              >
                <div className="text-5xl mb-4">{tech.logo}</div>
                <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              We use NodeJS, Laravel, PHP, .Net, Java, Go, Solidity, Rust, Ruby on Rails, and Python for backend development
            </p>
          </div>
        </div>
      </section>

      {/* Level Up Efficiency with Robust Backend Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Level Up Efficiency with Robust Backend Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4">
              Our cherry-picked backend developers are highly proficient in building enduring and high performance server side solutions. Our company is renowned for offering all-inclusive back end development offerings for mobile, desktop, web, AI, AR/VR, and IoT solutions.
            </p>
          </div>

          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Building Sustainable Backend Infrastructure</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  We ensure resilient, robust, secure, and highly accessible back-end solutions that align with your business goals and market trends. Choose the optimal cooperation model for a smooth and convenient association.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Cherry Picked Tech Stack</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Reinforced Cybersecurity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>High Availability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Exceptional Scalability</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                  <Server className="w-48 h-48 text-white/90 relative z-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_BACK_END_SERVICES.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <WhyChooseUs
        data={WHY_CHOOSE_BACKEND} />

      {/* FAQ */}
      <FAQ
        data={SERVICES_BACK_END_DEVELOPMENT_FAQ} />

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Backend Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's build sustainable and high performing backend solutions to empower your business growth
          </p>
          <Link
            href={'/contact-us'}>
            <button className="group px-10 py-5 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto">
              Get Started Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}