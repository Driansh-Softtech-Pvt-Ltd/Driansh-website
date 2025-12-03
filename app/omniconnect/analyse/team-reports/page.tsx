"use client";

import Image from "next/image";

const teamHighlights = [
  {
    title: "Easy-to-understand data presentation",
    description:
      "Driansh OmniConnect calculates and updates your metrics in the background. See how busy a particular team has been, or what the resolution times look like over time, with a bar graph.",
    imageSrc: "/images/analyse/team-report/team.png",
    imageAlt: "Team performance chart",
  },
  {
    title: "Filters to see only what you want to see",
    description:
      "Set custom date ranges, group your graph by day/week/month, and enable Business Hours to view and download custom team reports. Pinpoint teams that need extra resources instantly.",
    imageSrc: "/images/analyse/team-report/team-overview.png",
    imageAlt: "Team report filters",
  },
];

export default function TeamReportsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Track how each of your teams is performing, with auto-updating reports
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Get insight into your teams—see which ones get the most conversations, what the resolution times look like, and more.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {teamHighlights.map((highlight, index) => {
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
