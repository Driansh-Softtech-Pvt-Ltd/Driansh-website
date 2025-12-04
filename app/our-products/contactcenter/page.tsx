"use client";

import Image from "next/image";
import { OUR_PRODUCTS } from "@/constants";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCenterPage() {
  const contactCenterProduct = OUR_PRODUCTS.find(
    (product) => product.id === "contactCenter"
  );

  if (!contactCenterProduct) return null;

  return (
    <main className="min-h-screen bg-white pt-16 pb-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row bg-white items-center justify-between gap-10 py-10 md:py-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-full sm:w-[95%] md:w-[90%]">
            <Image
              src={contactCenterProduct.image}
              alt={contactCenterProduct.title}
              width={700}
              height={450}
              className="rounded-none w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-5 text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start">
            <Image
              rel="preload"
              src={contactCenterProduct.logo}
              alt={contactCenterProduct.title}
              width={200}
              height={70}
              className="w-[150px] sm:w-[180px] md:w-[200px] h-auto -mb-20 -ml-4"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            {contactCenterProduct.title}
          </h1>

          <p className="text-black text-base sm:text-lg leading-relaxed">
            {contactCenterProduct.description}
          </p>

          <ul className="space-y-2 text-black text-base sm:text-lg">
            {contactCenterProduct.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start sm:items-center justify-start gap-2"
              >
                <ChevronRight className="w-5 h-5 min-w-5 text-pink-500 shrink-0 mt-[3px] sm:mt-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>
    </main>
  );
}

