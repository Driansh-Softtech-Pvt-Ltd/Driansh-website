import Image from "next/image";
import {
  VOICE_BROADCASTING_SOLUTION_FEATURES,
  VOICE_BROADCASTING_SOLUTION_USES,
  VOICE_BROADCASTING_SOLUTION_UTILITIES,
  VOICE_BROADCASTING_SOLUTION_FAQ,
} from "@/constants/solutions";
import FAQ from "@/components/FAQ";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList } from "@/components/site";

export default function VoiceBroadcastingPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Voice Broadcasting Solution"
        description="Instantly connect with your audience without taking a toll on your team’s productivity."
        backgroundImage="/images/solutions/voice-broadcasting/image-01.webp"
      />

      <Section>
        <SectionHeader
          title="Effectively Convey the Message to the Mass Audience and Increase your Reach Rate by up to 80% with a Powerful Call Broadcasting Solution."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
              A feature rich voice broadcasting system will let you reach your
              customers, leads, voters, employees, and other audiences
              effortlessly and efficiently. You don’t need to be stressed out
              about occupying existing staff as the whole process of calling and
              playing a voice message over a call to the audience is automated.
            </p>
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/voice-broadcasting/voice-broadcasting-img.png"
          imageAlt="Voice Broadcasting Solution"
        >
          <SectionHeader title="Voice Broadcasting Solution" align="left" className="mb-6 md:mb-6" />
          <div className="text-lead space-y-4">
            <p>
              In this time-compressed world, people don’t have time for long
              conversations, but they would be interested in listening to
              important notifications and messages.
            </p>
            <p>
              The call broadcasting software lets you achieve exactly the same.
              At your fingertips, you can send your announcements, alerts,
              notifications, offers, and more to the targeted audience. Our
              feature rich voice broadcasting system not only lets you play the
              message, but also lets you engage the audience. You can configure
              a voice broadcast campaign to grab feedback from the customers.
            </p>
            <p>
              The extensive reports and other insights let you gauge the success
              of your call broadcasting campaigns. An easy to use layout of the
              system and web based app access make it a treat to use for any
              tech-savvy or non-tech-savvy business. Make your communication
              faster and more engaging with this best voice broadcasting
              software.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <SolutionsBenifits
        data={VOICE_BROADCASTING_SOLUTION_FEATURES}
        title="Features"
        description="Our extensive features help you run your call broadcasting campaigns with ease, speed, and accuracy and achieve the desired output."
        tone="white"
      />

      <Section tone="muted">
        <SectionHeader title="Simplified Use of a Powerful Call Broadcasting Solution" />
        <MediaSplit
          image="/images/solutions/voice-broadcasting/call-broadcasting-solution-img.jpeg"
          imageAlt="Voice Broadcasting Solution"
          reverse
          className="[&_img]:rounded-2xl"
        >
          <ol className="space-y-8">
            {VOICE_BROADCASTING_SOLUTION_USES.map((item, index) => (
              <li key={index} className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-soft p-2.5">
                  <Image src={item.icon} alt="" width={40} height={40} className="h-auto w-full object-contain" />
                </div>
                <div>
                  <h3 className="heading-3 text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </MediaSplit>
      </Section>

      <Section>
        <MediaSplit
          image="/images/solutions/voice-broadcasting/image-04.webp"
          imageAlt="Voice Broadcasting Solution"
        >
          <SectionHeader
            title="Major Utilities of a Voice Broadcasting Solution"
            description="A call broadcasting system is a general purpose solution and can be used in a variety of applications for different use cases."
            align="left"
            className="mb-8 md:mb-8"
          />
          <CheckList items={VOICE_BROADCASTING_SOLUTION_UTILITIES} columns={2} className="[&_li]:font-semibold" />
        </MediaSplit>
      </Section>

      <FAQ data={VOICE_BROADCASTING_SOLUTION_FAQ} tone="muted" />
    </>
  );
}
