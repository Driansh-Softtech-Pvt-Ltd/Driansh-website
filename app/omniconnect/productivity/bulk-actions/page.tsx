"use client";

import Image from "next/image";

const bulkHighlights = [
  {
    title: "Update multiple or all conversations at once",
    description:
      "Hover over your conversation cards to select some or select them all. Instantly assign labels, assign agents, or reopen/resolve/snooze conversations from one panel.",
    imageSrc: "/images/productivity/bulk-actions/bulk-actions.png",
    imageAlt: "Bulk action panel showing mass updates",
  },
  {
    title: "Smart actions",
    description:
      "Bulk actions stay aware of the conversations you select and suggest actions accordingly. Already resolved conversations will show reopen or snooze actions instead of resolve.",
    imageSrc: "/images/productivity/bulk-actions/smart-bulk-actions.png",
    imageAlt: "Smart suggestions for bulk actions",
  },
];

export default function BulkActionsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Perform key actions on multiple conversations at once
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Enhance your productivity by bulk updating your conversations right from the Driansh OmniConnect dashboard.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {bulkHighlights.map((highlight, index) => {
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