"use client";

import Image from "next/image";

const whatsappHighlights = [
  {
    title: "Easily manage WhatsApp templates",
    description:
      "No more struggling to respond to customers after the 24-hour window. Choose an approved message template from the Driansh OmniConnect dashboard, fill in the relevant details, and send the response instantly.",
    imageSrc: "/images/integration/whatsapp/access-whatsapp-templates.png",
    imageAlt: "WhatsApp template management screen",
  },
  {
    title: "Say more with rich media types",
    description:
      "Go beyond plain text. Send videos, audio, images, documents, locations, and stickers so customers always get context-rich replies right inside WhatsApp.",
    imageSrc: "/images/integration/whatsapp/send-rich-content.jpg",
    imageAlt: "WhatsApp conversation showing rich media",
  },
];

export default function WhatsAppIntegrationPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Communicate with your customers on WhatsApp, hassle-free.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Join your customers on the world’s most-used messaging app with Driansh OmniConnect&apos;s official WhatsApp integration.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {whatsappHighlights.map((highlight, index) => {
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