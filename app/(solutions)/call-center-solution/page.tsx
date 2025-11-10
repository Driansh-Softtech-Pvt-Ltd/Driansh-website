"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  CALL_CENTER_SOLUTION,
  CALL_CENTER_SOLUTION_FEATURES,
  CALL_CENTER_SOLUTION_CARDS,
  CALL_CENTER_SOLUTION_TENANTS,
  CALL_CENTER_SOLUTION_FAQ,
} from "@/constants/solutions/index";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

export default function CallCenterPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/call-center/image-01.webp"
          alt="Contact Center Solution"
          fill
          className="object-cover object-center -z-10"
          priority
        />

        <div className="relative z-10 w-full md:w-[60%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-4 leading-tight">
            Readymade FreeSWITCH Driven Contact Center Solution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Deploy a ready-to-use contact center solution with features like
            Auto Dialer, Predictive Dialer, WhatsApp Chat, IVR, call routing,
            real-time analytics, and CRM integration.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <Link href="/contact-us">
              <Button className="bg-white text-black text-base md:text-lg rounded-sm px-12 py-8 transform transition-transform duration-300 hover:bg-white hover:-translate-y-1">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:py-16 md:px-16 flex flex-col items-center text-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1D1A4E]">
            Single platform to proficiently manage the complete buyer’s cycle,
            streamline operations and optimize the workforce to double the
            success and growth rate
          </h2>

          <p className="text-lg leading-relaxed">
            With the shifting focus to client centric operations, the
            essentiality of a feature packed call center solution has been
            increasing. The elevating competition also enforces businesses to
            focus on increased customer retention and constant new onboarding of
            clients. Our technology driven and feature packed contact center
            software contributes to the growth of businesses by optimizing
            operations with automation, artificial intelligence, and other
            trending tools encompassed in a single platform. It gives the
            required details and features to the agents to clutch the
            conversation with context driven information and lead the call to a
            favorable conclusion.
          </p>
        </div>
      </section>
      <section className="py-8 px-6 sm:px-10 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            src="/images/solutions/call-center/call-center-img.png"
            alt="Contact Center Solution"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="w-full text-center md:text-left md:w-[60%] md:pr-12 lg:pr-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ">
            Call Center Solution Provider Company
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            We have been working in the call center industry for decades and
            have invested in scrupulous research of the industry, business
            goals, customer demands, trending technologies, and more. We build
            the most powerful contact center software by taking advantage of our
            conscientious research and experience. It streamlines and optimizes
            business processes. It supports the tenant model and has omnichannel
            customer support capabilities to cater to customers across all touch
            points. We have designed the most intuitive user experience and user
            interface of this call center software to elevate the experience of
            agents. We acknowledge the importance of agent experience to augment
            performance and productivity at the core.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Our team of call center software developers has proficiency in
            customizing the existing features. Using this potential of our
            experts, we have empowered several businesses and enterprises with a
            tailored call center solution. We are entitled as the top call
            center solution provider company for our innovative approach and
            dexterity in unleashing the power of technology. We have built the
            most comprehensive contact center software that is empowered with
            integrated solutions. It provides access to features of call center
            billing, CRM, PBX, etc. within the software to empower agents to
            have guided calls with more control. The admin and supervisors can
            empower agents with their experience in real time with our live
            monitoring features and insightful reports.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Diversified Varieties of Call Center Solutions
            </h2>
            <p className="mt-3 max-w-5xl mx-auto">
              To meet the goal-oriented business needs of call centers, we have
              developed theme-based call center solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CALL_CENTER_SOLUTION.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-start gap-5"
              >
                <div className="shrink-0 flex justify-center sm:justify-start">
                  <div className="p-2 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-14 text-center flex flex-col items-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Exceptional Features for Outstanding Businesses
          </h2>
          <p className="text-lg">
            Our contact center solutions are built with standard and futuristic
            features that redefine the business success rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {CALL_CENTER_SOLUTION_FEATURES.map((item) => (
            <div
              key={item.id}
              className={`p-8 text-left ${
                item.id % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="p-2 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>

              {item.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.features.flat().map((feature, i) => (
                    <li
                      key={i}
                      className="text-lg list-disc ml-10 marker:text-blue-500 text-black"
                    >
                      {feature}
                    </li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6 md:py-16 md:px-16 flex flex-col items-center text-center">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1D1A4E]">
            A comprehensive contact center solution with value added elements
          </h2>
          <p className="text-lg leading-relaxed">
            Our feature rich audio and video conferencing solutions are
            developed to eradicate all limitations caused due to geographical or
            time zone differences. It has several advantages to offer to
            businesses, enterprises, and peers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {CALL_CENTER_SOLUTION_CARDS.map((card, index) => (
            <div
              key={index}
              className="group bg-white text-left p-8 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#1E4EC4]"
            >
              <div className="flex flex-col items-start gap-2 mb-6">
                <div className="w-14 h-14 flex items-center justify-center mb-2 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm transition-all duration-300 group-hover:bg-white">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                  />
                </div>

                <h3 className="text-lg font-bold group-hover:text-white">
                  {card.title}
                </h3>
                <p className="group-hover:text-white text-lg">
                  {card.description}
                </p>
              </div>

              {card.features?.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {card.features.map((feature, index) => (
                    <li
                      key={index}
                      className="font-medium list-disc ml-8 marker:text-[#1E4EC4] text-black group-hover:text-white group-hover:marker:text-white"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 md:px-14 text-center flex flex-col items-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            An Ideal Contact Center Solution with Tenant Support
          </h2>
          <p className="text-lg">
            Rule your own niche or empower small call centers to generate
            revenue with tenant based call center software.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-7xl gap-16">
          {CALL_CENTER_SOLUTION_TENANTS.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 text-left ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:basis-[55%] max-w-2xl flex flex-col justify-center text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg leading-relaxed">{item.desc}</p>
              </div>
              <div className="md:basis-[45%] flex justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14 text-center flex flex-col items-center">
        <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">
          <div className="md:basis-[55%] text-left">
            <h2 className="text-lg sm:text-xl font-bold ml-8 md:ml-5">
              Top Reasons to Choose
            </h2>
            <h1 className="text-3xl leading-relaxed font-bold">
              Call Center Solution
            </h1>
          </div>

          <div className="md:basis-[45%] flex justify-center">
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 4,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="inline-block"
            >
              <Image
                src="/images/solutions/call-center/image-05.webp"
                alt="Call Center Solution"
                width={500}
                height={400}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <FAQ
        data={CALL_CENTER_SOLUTION_FAQ}
        sub_title="All commonly asked questions related to the call center solution are answered by our adroit team for you."
      />
    </>
  );
}
