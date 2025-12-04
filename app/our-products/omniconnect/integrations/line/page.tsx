"use client";

import Image from "next/image";

const lineHighlights = [
  {
    title: "Manage your Line inbox easily",
    description:
      "Never miss out on any leads. Manage all your customer queries coming from the Line app in Driansh OmniConnect.",
    imageSrc: "/images/integration/sms/massage.png",
    imageAlt: "Line conversation inside Driansh OmniConnect",
  },
  {
    title: "Quick and easy setup",
    description:
      "Enjoy the native Line app integration. Choose Line as the channel, connect your account, and start interacting with customers immediately.",
    imageSrc: "/images/integration/line/adding-line-to-chatwoot.png",
    imageAlt: "Line channel setup flow",
  },
];

export default function LineIntegrationPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Manage your Line customer interactions from Driansh OmniConnect
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Connect your Line account with Driansh OmniConnect and handle customer conversations without leaving the dashboard.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {lineHighlights.map((highlight, index) => {
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
