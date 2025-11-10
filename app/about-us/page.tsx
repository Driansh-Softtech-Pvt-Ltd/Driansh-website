"use client";

import {
  ABOUT_PAGE_SECTIONS,
  ABOUT_PAGE_FEATURES,
  ABOUT_PAGE_TECH_ADVANTAGES,
} from "@/constants/index";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <>
      <section
        className="relative h-[70vh] w-full bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/about-us-img1.png')",
        
              backgroundPosition: "center center", 
        }}
      >
        <div className="relative z-10 text-center text-black px-4">
          <h1 className="text-xl md:text-5xl font-semibold mb-3">About Us</h1>
          <p className="text-md md:text-lg font-medium max-w-2xl mx-auto ">
            We are a passionate VoIP solutions startup focused on delivering
            innovative and scalable communication systems.
          </p>
        </div>
      </section>
      <section className="relative py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-180 h-180 rounded-full blur-3xl opacity-30"></div>
        <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative group w-full flex justify-center">
              <img
                src="/images/about_2.svg"
                alt="Our Startup Journey Illustration"
                className="w-[90%] md:w-[85%] max-w-lg transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/10 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500 mb-12">
              Our Journey
            </h2>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-5">
              Driansh Sofftech was founded in 2025 with a bold vision — to
              democratize enterprise-grade VoIP technology for businesses of all
              sizes. As a young startup, we identified the gap between complex,
              expensive telephony systems and the growing need for accessible,
              innovative communication solutions.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Our founding team brings together fresh perspectives and deep
              technical expertise in VoIP technologies. We’re passionate about
              FreeSWITCH, FusionPBX, Kamailio. We believe that startup agility
              combined with technical excellence can deliver superior results at
              competitive prices.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative py-12 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ABOUT_PAGE_SECTIONS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border border-gray-200 shadow-lg rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-[#1E4EC4]">
                  <CardContent className="p-8 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-16 h-16 mb-5 object-contain transition-all duration-700 group-hover:brightness-0 group-hover:invert"
                    />
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 transition-colors group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-[17px] leading-relaxed group-hover:text-gray-100 transition-colors">
                      {card.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Our Core Values
          </h2>
          <p className="text-md md:text-lg text-gray-500 mb-12">
            These values guide every decision we make and every solution we
            deliver.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
            {ABOUT_PAGE_FEATURES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="flex"
              >
                <Card
                  className="
                  flex flex-col justify-between items-center text-center p-8 w-full rounded-2xl
                  shadow-sm hover:shadow-xl hover:scale-[1.02]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:bg-white
                "
                >
                  <div>
                    <div
                      className="mb-4 flex items-center justify-center
                      transition-all duration-300
                      group-hover:scale-110 group-hover:bg-blue-50
                    "
                    >
                      {item.icon}
                    </div>
                    <CardContent className="p-0 flex flex-col grow">
                      <h3 className="text-lg font-extrabold text-gray-900 mb-3 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed grow">
                        {item.desc}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Why Choose Our VoIP Startup?
          </h2>
          <p className="text-md md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            We combine startup innovation with specialized VoIP expertise to
            deliver exceptional results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {ABOUT_PAGE_TECH_ADVANTAGES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="flex"
              >
                <Card
                  className="
                  flex flex-col justify-between items-center text-center p-8 w-full rounded-2xl
                  shadow-sm hover:shadow-xl hover:scale-[1.01]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:bg-white
                "
                >
                  <div>
                    <div className="mb-4 flex items-center justify-center transition-all duration-300">
                      {item.icon}
                    </div>
                    <CardContent className="p-0 flex flex-col grow">
                      <h3 className="text-lg font-extrabold text-gray-900 mb-3 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed grow">
                        {item.desc}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with
            innovative technology solutions.
          </p>

          <Link href="/contact-us">
            <Button
              size="lg"
              className="
              bg-blue-600 text-white font-semibold rounded-full px-8 py-6
              hover:bg-blue-700 hover:scale-105 transition-all duration-300
              flex items-center gap-2 mx-auto shadow-md hover:shadow-lg
            "
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
