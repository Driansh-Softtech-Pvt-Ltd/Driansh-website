"use client";

import Image from "next/image";

const responseHighlights = [
  {
    title: "Easy and quick set up",
    description:
      "Save as many canned responses as you want. Enter the content once and reuse it whenever similar questions pop up, saving tons of typing time.",
    imageSrc: "/images/productivity/canned-responses/cancel.png",
    imageAlt: "Canned responses list",
  },
  {
    title: "Utilize canned responses directly in conversations",
    description:
      "In the text editor, type a `/` followed by the keyword for the canned response you need. Provide consistent and timely support without repetitive typing.",
    imageSrc: "/images/productivity/canned-responses/cancel-1.png",
    imageAlt: "Using canned response inside chat",
  },
  {
    title: "Canned responses library",
    description:
      "Leave the hassle of creating canned responses from scratch behind. Explore ready-made responses for common scenarios and focus on meaningful conversations.",
    imageSrc: "/images/productivity/canned-responses/canned-responses-library.jpg",
    imageAlt: "Library of canned responses",
  },
];

export default function CannedResponsesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Super quick responses to customer conversations. Super productive agents.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Canned responses cut down repetitive typing and save replies to simple, single-answer questions.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {responseHighlights.map((highlight, index) => {
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
