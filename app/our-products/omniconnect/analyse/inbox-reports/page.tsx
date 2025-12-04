"use client";

import Image from "next/image";

const inboxHighlights = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect calculates and updates your metrics in the background. See how busy a particular inbox has been, or what the resolution times look like, over a period of time, with a bar graph.",
    imageSrc: "/images/analyse/inbox-report/inbox-overview0.png",
    imageAlt: "Inbox overview report",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day/week/month, and enable Business Hours to view and download custom inbox reports tailored to the way you operate.",
    imageSrc: "/images/analyse/inbox-report/inbox-overview 1.png",
    imageAlt: "Inbox report filters",
  },
];

export default function InboxReportsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Get insights into your inboxes, with auto-updating reports
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          See which of your inboxes get the most activity, and what the resolution times look like.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {inboxHighlights.map((highlight, index) => {
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