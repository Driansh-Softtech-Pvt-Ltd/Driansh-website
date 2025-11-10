'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HOME_PAGE_WHY_CHOOSE_US } from '@/constants';

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-20 lg:px-20 xl:px-32 bg-gradient-to-b from-purple-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {HOME_PAGE_WHY_CHOOSE_US.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center text-center hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500"
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300">
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className="object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
