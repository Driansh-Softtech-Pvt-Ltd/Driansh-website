"use client";

import Image from "next/image";

const slackHighlights = [
  {
    title: "Seamless syncing",
    description:
      "Take control of your conversations by managing them from your preferred Slack channel while seamlessly sending responses from your Driansh OmniConnect agent profile.",
    imageSrc: "/images/integration/slack/slack.png",
    imageAlt: "Driansh OmniConnect conversations inside Slack",
  },
  {
    title: "Create private notes from Slack",
    description:
      "Need to collaborate with teammates before replying? Pinch your message with /note in Slack and create a private note back in Driansh OmniConnect.",
    imageSrc: "/images/integration/slack/slack1.png",
    imageAlt: "Private notes created from Slack",
  },
  {
    title: "Two-click setup",
    description:
      "Connect and allow to enable the Driansh OmniConnect app in Slack. It’s faster than copying webhook URLs.",
    imageSrc: "/images/integration/slack/slack0.jpg",
    imageAlt: "Slack integration setup flow",
  },
];

export default function SlackIntegrationPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Slack x Driansh OmniConnect: for a super productive you.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Use Slack to answer your customer queries coming into Driansh OmniConnect.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {slackHighlights.map((highlight, index) => {
          const isEven = index % 2 === 1;
          const imageBlock = (
            <div className="h-[360px] sm:h-[420px] flex items-center justify-center">
              <div className="relative w-full max-w-4xl h-72 sm:h-80">
                <Image
                  src={highlight.imageSrc}
                  alt={highlight.imageAlt}
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          );

          const textBlock = (
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                {highlight.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          );

          return (
            <div
              key={highlight.title}
              className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center"
            >
              {isEven ? textBlock : imageBlock}
              {isEven ? imageBlock : textBlock}
            </div>
          );
        })}
      </section>
    </main>
  );
}
