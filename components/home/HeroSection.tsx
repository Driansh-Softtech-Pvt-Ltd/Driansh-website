"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse items-center justify-between gap-10 px-6 py-32 lg:flex-row lg:px-20 xl:px-32 bg-[#030039] text-white overflow-hidden">
      <div className="flex flex-col items-start text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Scalable, Secure,
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">
            AI-Powered Custom VoIP
          </span>
          <br />
          Software Development
        </h1>

        <p className="mt-6 text-lg max-w-xl">
          Tap into the future of Real-Time Communication via custom VoIP
          software, Web & Mobile solutions enhanced by our DevOps and QA
          Services.
        </p>

        <Link
          href="/contact-us"
          className="mt-8 inline-block rounded-full bg-linear-to-r from-purple-600 to-blue-500 px-8 py-3 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Let’s Talk More!
        </Link>
      </div>

      <div className="relative lg:w-1/2 flex justify-center">
        <motion.div
          animate={{
            x: [0, 12, 8, -10, -12, -8, 10, 12, 0],
            y: [0, -8, 12, 10, 0, -10, -12, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src="/images/Home_Card.svg"
            alt="VoIP Solutions illustration"
            width={520}
            height={520}
            className="w-full max-w-lg select-none pointer-events-none"
            priority
          />
          {/* Clickable overlays */}
          {/* <div className="absolute inset-0">
            <Link
              href="#voip"
              className="absolute top-[28%] left-[35%] w-[25%] h-[25%] hover:scale-205 transition-transform duration-300"
              aria-label="VoIP"
            />
            <Link
              href="#devops"
              className="absolute bottom-[25%] left-[10%] w-[25%] h-[25%] hover:scale-105 transition-transform duration-300"
              aria-label="DevOps"
            />
            <Link
              href="#qa"
              className="absolute bottom-[15%] right-[25%] w-[25%] h-[25%] hover:scale-105 transition-transform duration-300"
              aria-label="QA"
            />
            <Link
              href="#web"
              className="absolute bottom-[25%] right-[5%] w-[25%] h-[25%] hover:scale-105 transition-transform duration-300"
              aria-label="Web & Mobile"
            />
            <Link
              href="#consultancy"
              className="absolute top-[15%] right-[5%] w-[25%] h-[25%] hover:scale-105 transition-transform duration-300"
              aria-label="Consultancy"
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
