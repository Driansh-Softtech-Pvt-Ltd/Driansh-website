"use client";

import { motion } from "framer-motion";
import { CtaLink } from "@/components/site";
import EngageOneInboxVisual from "@/components/visuals/EngageOneInboxVisual";
import { DEMO_HREF, ENGAGEONE_BASE } from "./links";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-32 pb-20 text-white lg:pt-44 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-blue-600/20 blur-3xl"
      />
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="eyebrow mb-4 text-violet-300">Customer engagement for growing businesses and enterprises</p>
          <h1 className="heading-1">
            Connect with every customer, <span className="text-gradient">at enterprise scale</span>
          </h1>

          <p className="text-lead mx-auto mt-6 max-w-xl text-slate-300 lg:mx-0">
            Driansh EngageOne unites website chat, WhatsApp, social, email, SMS and voice in one secure workspace. AI
            answers routine questions around the clock, and your teams resolve the rest with the full customer story in
            front of them.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <CtaLink href={DEMO_HREF}>Request a demo</CtaLink>
            <CtaLink href={ENGAGEONE_BASE} variant="outline-light" arrow={false}>
              Explore EngageOne
            </CtaLink>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Role-based access · Audit logs · Single sign-on · Driansh cloud or your own servers
          </p>
        </div>

        <div className="relative flex justify-center">
          <motion.div
            className="w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <EngageOneInboxVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
