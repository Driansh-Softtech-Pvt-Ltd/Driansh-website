'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_FLUTTER_FAQ, SERVICES_FLUTTER_CARDS, WHY_CHOOSE_FLUTTER } from '@/constants/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function FlutterDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
              {/* Background Image */}
              <Image
                rel="preload"
                src="/images/services/mobile-devlopment-service/flutter-app-devlopment-service/16Flutter-App-development.jpg"
                alt="Flutter Devlopment"
                fill
                className="object-cover object-right opacity-80 "
                priority
              />
      
              {/* Text Section */}
              <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                 Flutter App Development</h1>
                <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
                 Build a platform independent digital experience with low investment and enjoy high returns with our Flutter app development services.
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

      {/* Flutter App Development Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder - Left Side */}
            <div className="flex justify-center items-center">
              <img
                src="/images/services/mobile-devlopment-service/flutter-app-devlopment-service/Flutter-App-Development-01.webp"
                alt="Flutter App Development"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Content - Right Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flutter App Development Services: Deliver a native app like experience and reduce time to market using excellent Flutter development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="text-blue-600 font-semibold">Flutter</span> is a revolutionary framework invented by <span className="font-semibold">Google</span> to build multi platform apps using a single code base. Flutter is a <span className="font-semibold">web and mobile app development SDK</span>, which can be used to build dynamic and feature rich mobile applications for mobile, desktop, and web users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Flutter App Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Flutter App Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have experience in providing world class development, customization, support, and multiple other services in Flutter.
            </p>
          </div>

          <ServicesCards
            title=""
            subtitle=""
            data={SERVICES_FLUTTER_CARDS}
          />
        </div>
      </section>

      {/* Flutter App Development Company */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Flutter App Development Company
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are one of the popular Flutter app development companies that build full of life apps for mobile, web, and desktop users by harnessing the potential of Flutter. Respond to the evolving business world at a rapid rate with our best in the industry Flutter mobile app development services and web app development services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our versatile team of Flutter developers is skilled in building web, desktop, and mobile apps to deliver a consistent experience across platforms with a single codebase. We ace the game of Flutter app development as we have a proven track record in providing end to end services to our clients to build apps that are a visual treat for their users and consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Native Mobile App Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Native Mobile App Development Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Deliver consistent experience to native users that prefer investing in native mobile apps with our native mobile app development services. Surpass client expectations with platform specific mobile apps developed to enjoy top listed app positions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Optimized interfaces</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Tailored solutions</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Consolidated security</span>
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discover More
              </Link>
            </div>
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
              src="/images/services/mobile-devlopment-service/android-devlopment-service/Cross-Platform-img.png"
                alt="Native Mobile App Development"
                className="w-full max-w-md h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Does your business need a Flutter App development partner?
              </h3>
              <p className="text-blue-100">
                Our Flutter App development company helps you build cost-effective, performant, and highly interactive apps.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs 
        data={WHY_CHOOSE_FLUTTER} 
        subtitle="Discover the Benefits of Partnering with Our Team" 
      />

      {/* FAQ Section */}
      <FAQ data={SERVICES_FLUTTER_FAQ} />
    </div>
  );
}

