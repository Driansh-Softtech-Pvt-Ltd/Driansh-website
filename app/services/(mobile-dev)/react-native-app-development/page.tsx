'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_REACT_NATIVE_CARDS, SERVICES_REACT_NATIVE_FAQ, WHY_CHOOSE_REACT_NATIVE } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ReactNativeDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/mobile-devlopment-service/reactNative-devlopment-service/15React-Native-App-development.jpg"
          alt="React Native Devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            React Native App Development</h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Extraordinary mobile apps with exceptional functionality developed by React Native app development experts
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

      {/* React Native App Development Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder - Left Side */}
            <div className="flex justify-center items-center">
              <img
                src="/images/services/mobile-devlopment-service/reactNative-devlopment-service/React-Native-App-Development-01.webp"
                alt="React Native App Development"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Content - Right Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                React Native App Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                React Native is the best <span className="font-semibold">cross platform app development framework</span> that helps you build spectacular apps to dominate your niche with exceptional features. <span className="text-blue-600 font-semibold">Cost efficiency</span> and <span className="text-blue-600 font-semibold">code reusability</span> are the USPs of this mobile app programming platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our React Native App Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our React Native App Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have experience in providing world class development, customization, support, and multiple other services in React Native.
            </p>
          </div>

          <ServicesCards
            title=""
            subtitle=""
            data={SERVICES_REACT_NATIVE_CARDS}
          />
        </div>
      </section>

      {/* CTA - Does your business need a React Native App development partner? */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Does your business need a React Native App development partner?
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

      {/* Native App Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
               src="/images/services/mobile-devlopment-service/android-devlopment-service/Cross Platform-img.png"
                alt="Native App Development"
                className="w-full max-w-md rounded-2xl h-auto"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Native App Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Build an engaging experience for your premium clients with native custom mobile application development services. Our iOS and Android app development services harness platform specific features to help you improve quality and performance at the same time.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Capture strategic opportunities</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Match your vision</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">On-time deliverables</span>
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* React Native App Development Company */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            React Native App Development Company
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our top React Native app development company has a team of experienced React Native app developers that knows this platform upside down. Our React Native app development services have benefited various companies and individuals across the globe with excellent mobile app programming.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our specialty in building a world class experience for your customers with professional React Native apps makes us the best React Native app development company for your project. Diversification of the team includes creative mobile layout designers, app developers, and a QA team that can help you build the best app within a short span and investment to boost your ROI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Does your business need a React Native App development partner? */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Does your business need a React Native App development partner?
              </h3>
              <p className="text-blue-100">
                Our React Native App development company helps you build cost-effective, performant, and highly interactive video streaming apps.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        data={WHY_CHOOSE_REACT_NATIVE}
        subtitle="Discover the Benefits of Partnering with Our Team"
      />

      {/* FAQ Section */}
      <FAQ data={SERVICES_REACT_NATIVE_FAQ} />
    </div>
  );
}
