"use client";

import Image from "next/image";
import Link from "next/link";
import { HOME_PAGE_SERVICES } from "@/constants";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="px-6 py-20 lg:px-20 xl:px-32 bg-white">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold text-center mb-5">
          Our Offerings
        </h2>
        <p className="text-lg  mx-auto  mb-10 max-w-lg text-gray-800">
          Driansh Softtech offers market-leading expertise and real-time communications
          solutions to empower your businesses.
        </p>
      </div>
      <div className="flex flex-col gap-24">
        {HOME_PAGE_SERVICES.map((service, i) => {
          const isEven = i % 2 !== 0;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col items-center gap-10 md:gap-16 md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={500}
                  className="object-contain"
                />
              </div>

              <div className="md:w-1/2">
                <h3 className="text-5xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-800 mb-6">{service.desc}</p>
                <Link
                  href={service.href}
                  className="inline-block bg-[#1328C9] text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                >
                  Explore More
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
