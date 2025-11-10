"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Benifits {
  icon: string;
  title: string;
  desc: string;
}

interface SolutionsBenifitsProps {
  title: string;
  description?: string;
  data: Benifits[];
}

export default function SolutionsBenifits({
  title,
  description,
  data,
}: SolutionsBenifitsProps) {
  return (
    <section className="py-16 px-6 md:px-14 text-center flex flex-col items-center">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[#1D1A4E]">{title}</h2>
        <p className="text-lg max-w-4xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            whileHover={{
              y: -6,
              boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
            }}
            className="rounded-none border-none py-4 px-10 mx-auto flex flex-col justify-start items-center text-center"
          >
            <div className="p-3 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
