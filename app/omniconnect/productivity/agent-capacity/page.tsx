"use client";

import Image from "next/image";

const capacityHighlights = [
  {
    title: "Easily set auto-assignment limits",
    description:
      "Set a number to limit the conversations that can be auto-assigned to a particular agent. Keep workloads realistic and predictable.",
    imageSrc: "/images/productivity/agent-capacity/agent-capacity-in-chatwoot.png",
    imageAlt: "Auto-assignment limits configuration",
  },
  {
    title: "Inbox-wise limits",
    description:
      "Define custom agent capacity limits for each inbox—website widget support, email support, Twitter support, and more—so every inbox stays balanced.",
    imageSrc: "/images/productivity/agent-capacity/inbox-wise-agent-capacity.png",
    imageAlt: "Inbox-wise agent capacity settings",
  },
];

export default function AgentCapacityPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Let Driansh OmniConnect manage your agents’ workload
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Set limits for auto-assigning conversations to your agents and keep every channel running smoothly.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {capacityHighlights.map((highlight, index) => {
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
