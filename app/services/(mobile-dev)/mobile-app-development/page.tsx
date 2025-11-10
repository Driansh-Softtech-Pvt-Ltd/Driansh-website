'use client';

import Link from 'next/link';
import { CheckCircle} from 'lucide-react';
import FAQ from '@/components/FAQ';
import ServicesCards from '@/components/Services-cards';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SERVICES_MOBILE_FAQ, SERVICES_MOBILE_CARDS, WHY_CHOOSE_MOBILE } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-start min-h-[90vh] w-full overflow-hidden bg-[#1a004e]">
        {/* Background Image */}
        <Image
          rel="preload"
          src="/images/services/mobile-devlopment-service/mobile-devlopment/Mobile_App-_Development_.webp"
          alt="Mobile Devlopment"
          fill
          className="object-cover object-right opacity-80 "
          priority
        />

        {/* Text Section */}
        <div className="relative z-10 w-full md:w-[55%] p-6 sm:p-10 lg:p-20 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Mobile App Development </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-gray-200">
            Complement your web solutions or increase revenue or reach with award winning mobile apps. </p>
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

      {/* Mobile App Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile App: Stellar mobile app development services to elevate your business success
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We help individuals, enterprises, and businesses to scale up their products by transforming their ideas into intuitive mobile app designs. We have expertise in developing <span className="font-semibold">native, hybrid, and wearable apps</span> that redefine the future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mobile App Development Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mobile App Development Services</h2>
          </div>

          <ServicesCards
            title=""
            subtitle=""
            data={SERVICES_MOBILE_CARDS}
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Does your business need a Mobile App development partner?
              </h3>
              <p className="text-blue-100">
                Our Mobile App development company helps you build cost-effective, performant, and highly interactive apps.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Mobile and Web App Development Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Mobile and Web App Development Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Premium mobile and web development services leveraging the power of bleeding edge technologies to build sustainable and scalable mobile, websites and web applications. We can help you develop all types of solutions; ranging from marketing to a SaaS product.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Skilled team of mobile and web developers</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Tailored mobile and web app development services</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600 " />
                  <span className="text-lg">Client centric approach</span>
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
                src="/images/services/mobile-devlopment-service/mobile-devlopment/Custom-Mobile-and-Web-App-Development-Services.webp"
                alt="Custom Mobile and Web App Development Services"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Company */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Mobile App Development Company
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We, Driansh, are popular as one of the leading mobile app development companies that offer full cycle mobile app development, including, design, development, integration, and maintenance of the mobile app. Whether you have an idea for a utility app, enterprise app, transformative app, or a unique smartphone app, our team of expert mobile app developers can transform it into a real, practical working mobile app.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have ample experience in building a mobile app from scratch and maintaining an existing application with our dominant experience in the mobile application development industry for Apple and Android devices. Our artistically designed app layouts will engage your customers and its superlight speed will retain them for a longer time. We are experts in reinventing mobile app concepts to enhance user experience and business models.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Estimation CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-700 text-white p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Have an Amazing Mobile App Development Idea and Need Cost Estimation?
            </h3>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        data={WHY_CHOOSE_MOBILE}
        subtitle="Discover the benefits of partnering with our team"
      />

      {/* FAQ Section */}
      <FAQ data={SERVICES_MOBILE_FAQ} />
    </div>
  );
}
