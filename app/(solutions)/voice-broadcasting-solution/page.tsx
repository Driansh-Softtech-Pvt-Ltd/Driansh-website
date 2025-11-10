import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  VOICE_BROADCASTING_SOLUTION_FEATURES,
  VOICE_BROADCASTING_SOLUTION_USES,
  VOICE_BROADCASTING_SOLUTION_UTILITIES,
  VOICE_BROADCASTING_SOLUTION_FAQ,
} from "@/constants/solutions";
import FAQ from "@/components/FAQ";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import { Check } from "lucide-react";

export default function VoiceBroadcastringPage() {
  return (
    <>
      <section className="relative flex items-center justify-end h-auto min-h-[90vh] w-full overflow-hidden">
        <Image
          rel="preload"
          src="/images/solutions/voice-broadcasting/image-01.webp"
          alt="Voice Broadcasting Solution"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="relative z-10 w-full md:w-[60%] p-6 sm:p-10 lg:p-16 text-white text-left flex flex-col gap-5 items-start">
          <h2 className="text-6xl font-bold mb-4 leading-tight max-w-lg">
            Voice Broadcasting Solution
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            Instantly connect with your audience without taking a toll on your
            team’s productivity.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
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
          <h2 className="text-3xl text-[#1D1A4E] font-bold mb-6">
            Effectively Convey the Message to the Mass Audience and Increase
            your Reach Rate by up to 80% with a Powerful Call Broadcasting
            Solution.
          </h2>

          <p className="text-lg leading-relaxed">
            A feature rich voice broadcasting system will let you reach your
            customers, leads, voters, employees, and other audiences
            effortlessly and efficiently. You don’t need to be stressed out
            about occupying existing staff as the whole process of calling and
            playing a voice message over a call to the audience is automated.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex text-center  md:justify-center">
            <Image
              src="/images/solutions/voice-broadcasting/voice-broadcasting-img.png"
              alt="Voice Broadcasting Solution"
              width={550}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Voice Broadcasting Solution
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              In this time-compressed world, people don’t have time for long
              conversations, but they would be interested in listening to
              important notifications and messages.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The call broadcasting software lets you achieve exactly the same.
              At your fingertips, you can send your announcements, alerts,
              notifications, offers, and more to the targeted audience. Our
              feature rich voice broadcasting system not only lets you play the
              message, but also lets you engage the audience. You can configure
              a voice broadcast campaign to grab feedback from the customers.
            </p>
            <p className="text-lg leading-relaxed">
              The extensive reports and other insights let you gauge the success
              of your call broadcasting campaigns. An easy to use layout of the
              system and web based app access make it a treat to use for any
              tech-savvy or non-tech-savvy business. Make your communication
              faster and more engaging with this best voice broadcasting
              software.
            </p>
          </div>
        </div>
      </section>
      <SolutionsBenifits
        data={VOICE_BROADCASTING_SOLUTION_FEATURES}
        title="Features"
        description="Our extensive features help you run your call broadcasting campaigns
          with ease, speed, and accuracy and achieve the desired output."
      />
      <section className="bg-gray-100 py-16 px-6 md:px-12 flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#1D1A4E]">
            Simplified Use of a Powerful Call Broadcasting Solution
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
          <div className="flex flex-col gap-10 w-full lg:w-[40%]">
            {VOICE_BROADCASTING_SOLUTION_USES.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={75}
                  height={75}
                  className="object-contain opacity-60"
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[45%] flex justify-center">
            <Image
              src="/images/solutions/voice-broadcasting/call-broadcasting-solution-img.jpeg"
              alt="Voice Broadcasting Solution"
              width={800}
              height={600}
              className="object-cover w-full rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-14 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-[48%] flex justify-center">
            <Image
              src="/images/solutions/voice-broadcasting/image-04.webp"
              alt="Voice Broadcasting Solution"
              width={1000}
              height={800}
              className="object-contain w-full max-w-[600px] h-auto"
            />
          </div>

          <div className="w-full lg:w-[52%] text-left">
            <h2 className="text-4xl font-semibold text-[#1D1A4E] mb-4 max-w-lg">
              Major Utilities of a Voice Broadcasting Solution
            </h2>
            <p className="text-lg mb-8">
              A call broadcasting system is a general purpose solution and can
              be used in a variety of applications for different use cases.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
              {VOICE_BROADCASTING_SOLUTION_UTILITIES.map((utility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#1E4EC4] mt-1 shrink-0" />
                  <p className="text-lg font-bold leading-snug">{utility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQ data={VOICE_BROADCASTING_SOLUTION_FAQ} />
    </>
  );
}
