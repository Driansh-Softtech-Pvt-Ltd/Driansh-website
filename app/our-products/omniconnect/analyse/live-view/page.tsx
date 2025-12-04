"use client";

import Image from "next/image";

const liveViewInsights = [
  {
    title: "See how many conversations are currently open",
    description:
      "On your Reports Overview page, you can see the exact number of conversations that are currently open, unattended, and unassigned. It’s really that simple.",
    imageSrc: "/images/analyse/live-view/live-view-of-open-conversations.png",
    imageAlt: "Snapshot of open conversations count",
  },
  {
    title: "See how many Agents are currently online",
    description:
      "You can see the exact number of Agents added to your Driansh OmniConnect account who are currently online, busy, and offline. This helps you judge your organization’s requests-routing capacity at the moment.",
    imageSrc: "/images/analyse/live-view/live-view-of-agents.png",
    imageAlt: "Agent status card showing availability",
  },
  {
    title: "See who is attending how many conversations currently",
    description:
      "You can see exactly which agent has how many number of open or unattended conversations at the moment. By default, you’ll see your busiest agents on the top of the list.",
    imageSrc:
      "/images/analyse/live-view/live-view-of-conversations-being-attended-by-agents.png",
    imageAlt: "Current conversations being handled by agents",
  },
];

export default function LiveViewPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          View the status of your conversations and agents in real-time
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          See the live view of your available agents, open conversations, and more
          — on one screen.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {liveViewInsights.map((insight, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={insight.title}
              className={`flex flex-col gap-8 items-center lg:items-stretch ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative h-52">
                    <Image
                      src={insight.imageSrc}
                      alt={insight.imageAlt}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                  {insight.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
