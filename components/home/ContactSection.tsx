"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: "/images/mail-icon.svg",
      title: "EMAIL",
      value: "support@driansh.com",
    },
    {
      icon: "/images/phone-icon.svg",
      title: "CALL",
      value: "+91 70287 64776 ",
    },
  ];

  return (
    <section className="bg-[#0B32E7] text-white relative overflow-hidden">
      <div className="mx-auto px-6 py-20 lg:px-20 xl:px-28 flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-5xl font-bold mb-4">Let’s Get in Touch</h2>
          <p className="text-lg mb-12">
            Successfully helped enterprises all across the globe to scale.
          </p>

          <div className="flex flex-wrap gap-28">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-white/40 rounded-md">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">
                    {item.title}
                  </p>
                  <p className="">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white text-gray-800 rounded-3xl p-10 relative z-10 -mt-10"
        >
          <h3 className="text-2xl font-semibold mb-1 flex items-center gap-2">
            Hey There! <span className="text-3xl">😊</span>
          </h3>
          <p className="text-gray-600 mb-8 text-lg">We’d love to help you.</p>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
