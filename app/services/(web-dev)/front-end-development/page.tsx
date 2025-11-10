'use client';
import { Code, Smartphone, Monitor, Zap, Globe, Palette, ArrowRight, Check} from 'lucide-react';
import FAQ from '@/components/FAQ';
import { SERVICES_FRONT_END_DEVELOPMENT_CARDS, SERVICES_FRONT_END_DEVELOPMENT_FAQ, SERVICES_FRONT_END_SERVICES, SERVICES_FRONT_END_TECHNOLOGIS, WHY_CHOOSE_FRONTEND } from '@/constants/services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesCards from '@/components/Services-cards';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function FrontEndDevelopmentPage() {
 return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/web-devlopment-service/frontend-devlopment-service/FreeSwitch-01-scaled.jpg"
          alt="Fronted Devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
         Leading Frontend Development Services
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            We craft sleek, compelling, and operational front-ends that deliver seamless user experiences with React, Angular, and cutting-edge technologies.
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

      {/* Best Front End Development Company Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Best Front End Development Company{' '}
              <span >
                That Creates Digital Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Proficiency, transparency, and professionalism are in our DNA. Our innovative approach and all-inclusive front-end development solutions make us the top front-end development company.
            </p>
          </div>

          <ServicesCards
            data={SERVICES_FRONT_END_DEVELOPMENT_CARDS} />
        </div>
      </section>

      {/* Wide Ranging Front End App Development Services */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Wide Ranging Front End{' '}
              <span className="">
                App Development Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Access the top 10% of tech talent with rich expertise and innovative mindset to offer a diverse range of front-end web application development services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_FRONT_END_SERVICES.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300"
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

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center ">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">React Development</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our advanced front-end web development with React leverages modular code structure, server-side rendering capabilities, extensibility, adaptability, and user-friendliness of ReactJS to craft compelling and top-performing interfaces.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center ">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Angular Development</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our experienced Angular front-end development team harnesses the potential of Angular with a focus on scalability, performance, and intuitive user elements to ensure our front-ends exceed industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack of Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stack of Technologies Used for{' '}
              <span className="">
                Front-End Web Development
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              We ensure a seamless experience with our reliable advanced front-end web development using bleeding-edge technologies and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICES_FRONT_END_TECHNOLOGIS.map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 text-center"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.05}s backwards` }}
              >
                <div className="text-5xl mb-4">{tech.logo}</div>
                <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You Think Design, We Craft Front Ends */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              You Think Design,{' '}
              <span>
                We Craft Front Ends
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Through our tailored front-end web application development services, we build engaging user interfaces for the web, fast single-page applications, eye-catching websites, intuitive mobile apps, and all other types of front-ends.
            </p>
          </div>

          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Building Engaging User Interfaces</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  We have proficiency in designing and developing personalized, goal-oriented, visionary, and stunning front-ends. Our practices focus on building and nurturing relations with all sorts of users: surfing visitors, first-time users, returning users, and even bouncing users.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Personalized and goal-oriented solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Visionary and stunning design implementations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Building relations with all types of users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Uniting functionality with visual appeal</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                  <Palette className="w-48 h-48 text-white/90 relative z-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <Monitor className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Applications</h3>
              <p className="text-gray-600 leading-relaxed">
                Responsive and performant web applications built with modern frameworks
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Interfaces</h3>
              <p className="text-gray-600 leading-relaxed">
                Native-like mobile experiences that engage users across all devices
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progressive Web Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Offline capabilities with lightning-fast loading and seamless performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why u choose us? */}
      <WhyChooseUs
        data={WHY_CHOOSE_FRONTEND} />

      {/* FAQ */}
      <FAQ
        data={SERVICES_FRONT_END_DEVELOPMENT_FAQ} />

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your{' '}
            <span className="">
              Front-End Project?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's build sustainable and high performing front-end solutions to empower your business growth
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