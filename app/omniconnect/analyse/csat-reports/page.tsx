"use client";

import Image from "next/image";

const csatHighlights = [
  {
    title: "Let your customers express with emoji",
    description:
      "Driansh OmniConnect's CSAT software integrates with every chosen inbox. When a customer is done chatting with you, they’ll be automatically asked to provide feedback on a simple emoji scale, so you always know what makes them frown or smile.",
    imageSrc: "/images/analyse/csat-report/emoji-csat-rating.jpg",
    imageAlt: "Emoji based CSAT rating card",
  },
  {
    title: "View and download your CSAT reports",
    description:
      "Learn how your customers feel about your service and brand. Dive into CSAT ratings, individual feedback, response rates, and agent performance filtered by specific periods.",
    imageSrc: "/images/analyse/csat-report/csat-report-on-your-chatwoot-dashboard.png",
    imageAlt: "CSAT reports dashboard",
  },
];

export default function CSATReportsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Send and track Customer Satisfaction surveys on autopilot
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Put your customers first with Driansh OmniConnect&apos;s support suite and CSAT integration. Collect feedback and improve your service for transformative customer satisfaction.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {csatHighlights.map((highlight, index) => {
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
