'use client';

import Link from 'next/link';
import { CheckCircle, Quote, Code } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_IOS_FAQ, SERVICES_IOS_CARDS, WHY_CHOOSE_ANDROID, SERVICES_IOS_WHATOURCLIENTSAY } from '@/constants/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function iOSDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/mobile-devlopment-service/ios-devlopment-service/14iOS-App.jpg"
          alt="IOS devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            iOS App Development</h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            iOS app development is a process to build feature-rich and robust iOS applications for Apple devices. With our iOS app development services, you can capture the profitable market of iPhone, iPad, Apple Watch, Apple TV, and other Apple device users.
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

      {/* iOS App Development Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder - Left Side */}
            <div className="flex justify-center items-center">
              <img
                src="/images/services/mobile-devlopment-service/ios-devlopment-service/Deliver-An-Exceptional-Experience.webp"
                alt="iOS App Development"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Content - Right Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                iOS App Development: Deliver an exceptional experience to all generations with future forward iOS app development for apple devices
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Apple users set the expectation bars high and our professional <span className="text-blue-600 font-semibold">iOS app development services</span> are popular to match those expectations at their best. We have specialization in <span className="font-semibold">Apple app programming</span> for the Apple ecosystem consisting of <span className="font-semibold">iOS, tvOS, macOS, and WatchOS</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our iOS App Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our iOS App Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have experience in providing world class development, customization, support, and multiple other services in iOS.
            </p>
          </div>

          <ServicesCards
            title=""
            subtitle=""
            data={SERVICES_IOS_CARDS}
          />
        </div>
      </section>

      {/* CTA - Does your business need an iOS App development partner? */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Does your business need an iOS App development partner?
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

      {/* iOS App Development Company */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            iOS App Development Company
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We, one of the best iOS app development companies in India, cater to worldwide users with our divergent iOS app development services. We provide native app development services for all different Apple devices, from iPhones to iPads, Apple Watches, Apple TVs, and more to capture this profitable market.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our iOS application development company also has expertise in building web apps by harnessing the power of this renowned mobile app development platform. With our end to end and dynamic services, we have benefited enterprises and consultants to grow and flourish at a rapid rate in the most competitive iOS market.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack We Use */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack We Use</h2>
          </div>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Swift</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Objective-C</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Cross Platform Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cross Platform Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Reach a wider audience at low cost with our client centric cross platform mobile app development services available in Flutter and React Native. A single codebase can help you improve app engagement and revenue boost with excellent performance across mobile app platforms.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Rapid prototyping</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Native feature availability</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Consistent user experience</span>
                </li>
              </ul>
              <Link
                href="/contact-us"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src="/images/services/mobile-devlopment-service/ios-devlopment-service/Cross-Platform-Development-1.webp"
                alt="Cross Platform Development"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        data={WHY_CHOOSE_ANDROID}
        subtitle="Discover the Benefits of Partnering with Our Team"
      />

      {/* CTA - Does your business need an iOS App development partner? */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Does your business need an iOS App development partner?
              </h3>
              <p className="text-blue-100">
                Our iOS App development company helps you build cost-effective, performant, and highly interactive video streaming apps.
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

      {/* What Our Client Say */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What Our Client Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_IOS_WHATOURCLIENTSAY.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <Quote className="w-12 h-12 text-blue-200 absolute top-4 right-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic pr-8">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ data={SERVICES_IOS_FAQ} />
    </div>
  );
}
