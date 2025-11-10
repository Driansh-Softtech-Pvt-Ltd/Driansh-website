'use client';

import Link from 'next/link';
import { Code, CheckCircle } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_ANDROID_FAQ, SERVICES_ANDROID_CARDS, WHY_CHOOSE_ANDROID } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AndroidDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/mobile-devlopment-service/android-devlopment-service/13Andorid-App-development.webp"
          alt="Andriod devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Android App Development</h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            More than 2.5 billion users use the Android platform and the figure keeps on increasing due to the cost efficiency of Android devices. This makes Android app development the first choice of many businesses that desire native app development within their budget. Android also has several supported features, plug-ins, and more to help Android developers enhance app programming.
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

      {/* Android App Development Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Android Robot Image - Left Side */}
            <div className="flex justify-center items-center">
              <img
                src="/images/services/mobile-devlopment-service/android-devlopment-service/Android-Development-01.webp"
                alt="Android App Development"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Content - Right Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Android App Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                More than <span className="text-blue-600 font-semibold">2.5 billion users</span> use the <span className="text-blue-600 font-semibold">Android platform</span> and the figure keeps on increasing due to the <span className="font-semibold">cost efficiency of Android devices</span>. This makes <span className="font-semibold">Android app development</span> the first choice of many businesses that desire native app development within their budget. Android also has several supported features, plug-ins, and more to help Android developers enhance app programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Android App Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Android App Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have experience in providing world class development, customization, support, and multiple other services in Android.
            </p>
          </div>

          <ServicesCards
            title=""
            subtitle=""
            data={SERVICES_ANDROID_CARDS}
          />
        </div>
      </section>

      {/* CTA - Does your business need an Android App development partner? */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Does your business need an Android App development partner?
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


      {/* Technology Stack We Use */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack We Use</h2>
          </div>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-20 h-20 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Java</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Kotlin</h3>
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
                src="/images/services/mobile-devlopment-service/android-devlopment-service/CrossPlatform-img.png"
                alt="Cross Platform Development"
                className="w-full max-w-md rounded-2xl h-auto"
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

      {/* CTA - Does your business need an Android App development partner? */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Does your business need an Android App development partner?
              </h3>
              <p className="text-blue-100">
                Our Android App development company helps you build cost-effective, performant, and highly interactive video streaming apps.
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




      {/* FAQ Section */}
      <FAQ data={SERVICES_ANDROID_FAQ} />
    </div>
  );
}
