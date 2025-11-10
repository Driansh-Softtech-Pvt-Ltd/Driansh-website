"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  AUDIO_VIDEO_CONFERENCING_FEATURES,
  AUDIO_VIDEO_CONFERENCING_BENIFITS,
  AUDIO_VIDEO_CONFERENCING_RB_FEATURES,
  AUDIO_VIDEO_CONFERENCING_FAQ,
} from "@/constants/solutions/index";
import FAQ from "@/components/FAQ";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AudioVideoConferencingPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/audio-video-conferencing/image-01.webp"
          alt="Audio-Video-Conference"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[60%] p-6 sm:p-10 lg:p-16 lg:pl-50 text-white text-center md:text-left flex flex-col gap-5 items-start">
          <h2 className="text-5xl font-bold mb-4 leading-tight max-w-md">
            Audio & Video Conferencing Solution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Reduce travel expenses, increase productivity, and add the
            convenience of working remotely for your team and partners with a
            feature rich audio and video conferencing solution.
          </p>
          <div className="flex justify-center md:justify-start mt-8 mx-auto md:mx-0">
            <Link href="/contact-us">
              <Button className="bg-white text-black text-base md:text-lg rounded-sm px-12 py-8 transform transition-transform duration-300 hover:bg-white hover:-translate-y-1">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 md:py-16 md:px-20 flex flex-col items-center text-center">
        <div>
          <h2 className="text-4xl text-[#1D1A4E] font-bold mb-6">
            Comprehensive conferencing platform enables teleconferencing and
            video conferencing to let you leverage the advantages of digitized
            collaboration and a green environment altogether.
          </h2>

          <p className="text-lg leading-relaxed">
            Businesses have crossed restrictions of borders. Businesses not only
            have international customers, but they also have cross border
            employees. In addition to that, several businesses have adopted the
            reseller model to boost their growth rate. It becomes impossible to
            bring everyone under one roof, but it is possible to have seamless
            and reliable communication with a conferencing solution. Our audio,
            video, and web conferencing solution helps you maximize the power of
            collaboration. Crystal clear voice quality and high definition video
            make these conferencing solutions perfect for any organization. This
            audio and video conferencing solution offers value added advantages
            and helps you maximize returns and resource utilization. You can
            also contribute to a green environment by reducing your carbon
            footprint.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/audio-video-conferencing/image-02.webp"
              alt="Audio-Video-Conference"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Audio and Video Conferencing Solution Provider Company
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Business conferencing has been one of the vital communication
              needs of enterprises for ages, which is fulfilled by the top
              conferencing solutions. With multiple other dynamics, the need and
              demand for remote teleconferencing and video conferencing have
              spiked. We, being one of the best audio and video conferencing
              solution provider companies, have been offering the top
              conferencing solutions with customized features. Using our audio
              and video conferencing software two or more professionals can
              connect with their peers to have remote discussions to keep
              business going on.
            </p>
            <p className="text-lg leading-relaxed">
              An audio conferencing solution lets peers connect to a conference
              with or without the internet. This gives the flexibility of
              joining a call and participating in business discussions even when
              access to the internet or system is limited or restricted. The
              video conferencing solution provides an experience like a physical
              meeting and it is perfect to have face to face conversations,
              which are necessary for several business events. To demonstrate a
              product, to give training to clients, to have a boardroom meeting,
              and for other similar use cases, it is necessary to use a video
              conferencing solution. Our audio and video conferencing solutions
              cover all business use cases and needs. We also provide
              customization and custom development to meet personalized business
              needs with our experience as the top conferencing solution
              company.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 text-center flex flex-col items-center">
        <div className="mb-5">
          <h2 className="text-3xl font-bold mb-4 text-[#1D1A4E]">
            Key Features
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            Our audio and video conferencing platform is empowered with superior
            quality remote communication features to encourage flawless
            collaboration
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          {AUDIO_VIDEO_CONFERENCING_FEATURES.map((section, index) => (
            <div
              key={index}
              className={`w-full py-12 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-[#1D1A4E] mb-8 text-left">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.features.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                      <Card
                        className={`${
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        } shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm`}
                      >
                        <CardContent className="flex items-center justify-center h-25 gap-4 text-center py-6">
                          <motion.div
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-3"
                          >
                            <div className="p-2 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF]">
                              <Image
                                src={item.icon}
                                alt={item.feature}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                            <h3 className="text-lg font-semibold text-[#1D1A4E]">
                              {item.feature}
                            </h3>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100">
        <SolutionsBenifits
          data={AUDIO_VIDEO_CONFERENCING_BENIFITS}
          title="Key Benefits"
          description="Our feature rich audio and video conferencing solutions are
            developed to eradicate all limitations caused due to geographical or
            time zone differences. It has several advantages to offer to
            businesses, enterprises, and peers."
        />
      </section>
      <section className="py-16 px-6 md:px-14 text-center flex flex-col items-center">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1D1A4E]">
            Roll Based Features
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            For each user role of the conferencing software, we have unique and
            standard features to offer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {AUDIO_VIDEO_CONFERENCING_RB_FEATURES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              whileHover={{
                y: -6,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
              }}
              className="rounded-none border-none py-4 px-8 mx-auto flex flex-col justify-start items-center text-center"
            >
              <div className="p-2 rounded-full bg-linear-to-tr from-[#FF73A1] via-[#6C63FF] to-[#00C3FF] shadow-sm mb-4">
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
      <section className="bg-gray-100">
        <FAQ
          data={AUDIO_VIDEO_CONFERENCING_FAQ}
          sub_title="All usually asked questions are answered by our conferencing software development experts to help you find the right answers."
        />
      </section>
    </>
  );
}
