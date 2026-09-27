import Image from "next/image";
import {
  AUDIO_VIDEO_CONFERENCING_FEATURES,
  AUDIO_VIDEO_CONFERENCING_BENIFITS,
  AUDIO_VIDEO_CONFERENCING_RB_FEATURES,
  AUDIO_VIDEO_CONFERENCING_FAQ,
} from "@/constants/solutions/index";
import FAQ from "@/components/FAQ";
import SolutionsBenifits from "@/components/Solutions-Benifits";
import {
  PageHero,
  Section,
  SectionHeader,
  MediaSplit,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function AudioVideoConferencingPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Audio & Video Conferencing Solution"
        description="Reduce travel expenses, increase productivity, and add the convenience of working remotely for your team and partners with a feature rich audio and video conferencing solution."
        backgroundImage="/images/solutions/audio-video-conferencing/image-01.webp"
      />

      <Section>
        <SectionHeader
          title="Comprehensive conferencing platform enables teleconferencing and video conferencing to let you leverage the advantages of digitized collaboration and a green environment altogether."
          className="max-w-4xl [&_h2]:text-2xl sm:[&_h2]:text-3xl"
          description={
            <p>
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
          }
        />
      </Section>

      <Section tone="muted">
        <MediaSplit
          image="/images/solutions/audio-video-conferencing/image-02.webp"
          imageAlt="Audio-Video-Conference"
        >
          <SectionHeader
            title="Audio and Video Conferencing Solution Provider Company"
            align="left"
            className="mb-6 md:mb-6"
          />
          <div className="text-lead space-y-4">
            <p>
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
            <p>
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
        </MediaSplit>
      </Section>

      <Section>
        <SectionHeader
          title="Key Features"
          description="Our audio and video conferencing platform is empowered with superior quality remote communication features to encourage flawless collaboration"
        />
        <div className="space-y-12">
          {AUDIO_VIDEO_CONFERENCING_FEATURES.map((group, index) => (
            <div key={index}>
              <h3 className="heading-3 mb-6 text-ink">{group.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                  >
                    <div className="shrink-0 rounded-xl bg-brand-soft p-2.5">
                      <Image
                        src={item.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-semibold text-ink">{item.feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <SolutionsBenifits
        data={AUDIO_VIDEO_CONFERENCING_BENIFITS}
        title="Key Benefits"
        description="Our feature rich audio and video conferencing solutions are developed to eradicate all limitations caused due to geographical or time zone differences. It has several advantages to offer to businesses, enterprises, and peers."
      />

      <Section>
        <SectionHeader
          title="Role Based Features"
          description="For each user role of the conferencing software, we have unique and standard features to offer."
        />
        <CardGrid columns={4}>
          {AUDIO_VIDEO_CONFERENCING_RB_FEATURES.map((item, index) => (
            <FeatureCard
              key={index}
              icon={
                <Image src={item.icon} alt="" width={28} height={28} className="object-contain" />
              }
              iconClassName="p-2.5"
              title={item.title}
              description={item.desc}
            />
          ))}
        </CardGrid>
      </Section>

      <FAQ
        tone="muted"
        data={AUDIO_VIDEO_CONFERENCING_FAQ}
        sub_title="All usually asked questions are answered by our conferencing software development experts to help you find the right answers."
      />
    </>
  );
}
