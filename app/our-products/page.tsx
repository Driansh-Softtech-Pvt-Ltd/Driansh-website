"use client";

import Image from "next/image";
import { OUR_PRODUCTS } from "@/constants";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurProductsPage() {
  const contactCenterProduct = OUR_PRODUCTS.find(
    (product) => product.id === "contactCenter"
  );

  if (!contactCenterProduct) return null;

  function ProductSection({
    product,
  }: {
    product: (typeof OUR_PRODUCTS)[0];
  }) {
    return (
      <motion.section
        id={product.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row bg-white items-center justify-between gap-10 py-10 md:py-16 px-4 sm:px-8 md:px-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-[90%] sm:w-[80%] md:w-[70%]">
            <Image
              src={product.image}
              alt={product.title}
              width={550}
              height={350}
              className="rounded-none w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-5 text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start">
            <Image
              rel="preload"
              src={product.logo}
              alt={product.title}
              width={200}
              height={70}
              className="w-[150px] sm:w-[180px] md:w-[200px] h-auto -mb-20 -ml-4"
            />
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            {product.title}
          </h2>

          <p className="text-black text-base sm:text-lg leading-relaxed">
            {product.description}
          </p>

          <ul className="space-y-2 text-black text-base sm:text-lg">
            {product.points.map((point, idx) => (
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
    );
  }

  return (
    <section className="w-full">
      <ProductSection product={contactCenterProduct} />
    </section>
  );
}
