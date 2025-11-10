'use client';
import { Smartphone, ArrowRight, Check, Server, Boxes, Cpu, Lock } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { SERVICES_WEB_DEVELOPMENT_CARDS, SERVICES_WEB_DEVELOPMENT_CARDS1, SERVICES_WEB_DEVELOPMENT_FAQ, SERVICES_WEB_DEVELOPMENT_SERVICES, WHY_CHOOSE_WEB_DEVLOPMENT } from '@/constants/services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';
import ServicesCards from '@/components/Services-cards';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WebDevelopment() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/web-devlopment-service/web-service/Web-Development-Services.png"
          alt="Web Devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Transform Your Digital Presence with Expert
            Web Development
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Redefine your growth strategy with our intuitive, high quality, and high performance frontend and backend web development services.
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

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Select the Right Web Development Partner{' '}
              <span >
                for Rapid Growth
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Your website and web app will make the first interaction with your customers. Thus, it has to be nothing less than the best.
            </p>
          </div>

          <ServicesCards
            data={SERVICES_WEB_DEVELOPMENT_CARDS1} />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Web Development{' '}
              <span>
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Comprehensive web solutions from simple business websites to intricate web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_WEB_DEVELOPMENT_SERVICES.map((service, index) => (
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
        </div>
      </section>

      {/* Backend Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Backend Development{' '}
              <span>
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Building robust, secure, and high-performing server-side solutions that power your applications
            </p>
          </div>

          <ServicesCards
            data={SERVICES_WEB_DEVELOPMENT_CARDS} />

          <div className="bg-linear-to-r from-blue-600 to-purple-600 mt-15 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Why Our Backend Matters</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  We are one of the best backend development companies, with a team of handpicked and vetted backend developers that has expertise in developing layered or simplified backend for web apps and mobile apps.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Cherry-picked backend developers with proven expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Secure, scalable, and high-performance solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-200 " />
                    <span>Python and NodeJS expertise for modern backends</span>
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
        </div>
      </section>

      {/* Web Development Services Additional */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Web Development{' '}
              <span >
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Complete web development lifecycle management from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <Boxes className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Web Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored web development solutions that align with your unique business requirements and goals.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progressive Web Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Build fast, reliable PWAs that work seamlessly across all devices and platforms.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <Lock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Ongoing security updates, performance optimization, and technical support for your web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-sm font-medium">Mobile Solutions</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Interested in Mobile App Development Solution as Well?
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Complement your web solutions with our award-winning mobile app development services. We build native, hybrid, and cross-platform applications that redefine the future.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-blue-200 " />
                    <span className="text-lg">Native iOS & Android Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-blue-200 " />
                    <span className="text-lg">React Native & Flutter Expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-blue-200 " />
                    <span className="text-lg">Full Cycle Development & Maintenance</span>
                  </div>
                </div>

                <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg">
                  Explore Mobile Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                  <Smartphone className="w-64 h-64 text-white/90 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* why u choose us? */}
      <WhyChooseUs
        data={WHY_CHOOSE_WEB_DEVLOPMENT} />

      {/* FAQ */}
      <FAQ
        data={SERVICES_WEB_DEVELOPMENT_FAQ} />

      {/* Final CTA */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your{' '}
            <span >
              Web Development Project?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's build sustainable and high performing web solutions to empower your business growth
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