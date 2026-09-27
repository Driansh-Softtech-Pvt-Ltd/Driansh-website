"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CtaLink } from "@/components/site";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-32 pb-20 text-white lg:pt-44 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-3xl"
      />
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="heading-1">
            Scalable, Secure,
            <br />
            <span className="text-gradient">AI-Powered Custom VoIP</span>
            <br />
            Software Development
          </h1>

          <p className="text-lead mx-auto mt-6 max-w-xl text-slate-300 lg:mx-0">
            Tap into the future of Real-Time Communication via custom VoIP
            software, Web &amp; Mobile solutions enhanced by our DevOps and QA
            Services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <CtaLink href="/contact-us">Let’s Talk More!</CtaLink>
            <CtaLink href="/services/voip-devlopment-service" variant="outline-light" arrow={false}>
              Explore Services
            </CtaLink>
          </div>
        </div>

        <div className="relative flex justify-center">
          <motion.div
            animate={{
              x: [0, 12, 8, -10, -12, -8, 10, 12, 0],
              y: [0, -8, 12, 10, 0, -10, -12, 8, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/Home_Card.svg"
              alt="VoIP Solutions illustration"
              width={520}
              height={520}
              className="pointer-events-none h-auto w-full max-w-sm select-none sm:max-w-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
