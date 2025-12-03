"use client";

import Image from "next/image";

const shortcutHighlights = [
  {
    title: "Remember one shortcut to see all others",
    description:
      "Press CMD + / or Win + / to display the list of available keyboard shortcuts, or pick “Keyboard Shortcuts” from your profile menu. You only need to remember this one shortcut.",
    imageSrc: "/images/productivity/keyboard-shortcuts/keyboard-shortcuts-in-chatwoot.png",
    imageAlt: "Keyboard shortcuts menu",
  },
  {
    title: "Do regular actions, quickly",
    description:
      "There are things you do regularly within Driansh OmniConnect—reply, resolve, assign, mute, snooze, and more. We have a shortcut for each of these actions so you stay productive.",
    imageSrc: "/images/productivity/keyboard-shortcuts/chatwoot-keyboard-shortcuts-list.png",
    imageAlt: "Detailed keyboard shortcuts list",
  },
];

export default function KeyboardShortcutsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Master Driansh OmniConnect with Keyboard Shortcuts
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Work faster, better, and improve your productivity with shortcuts for every routine action.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {shortcutHighlights.map((highlight, index) => {
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
