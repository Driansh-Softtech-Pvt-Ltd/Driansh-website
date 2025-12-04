"use client";

import Image from "next/image";

const commandBarHighlights = [
  {
    title: "Quick Access",
    description:
      "You don’t need to waste a single second trying to navigate through your dashboard. Simply hit Cmd + K or Ctrl + K, type a keyword, and get going.",
    imageSrc: "/images/productivity/command-bar/quick-access.png",
    imageAlt: "Command bar quick access",
  },
  {
    title: "Swift Navigation",
    description:
      "The command bar lets you quickly navigate to pages such as Settings, Reports, Notifications, or anything else. Type the page name, press Enter, and jump there instantly.",
    imageSrc: "/images/productivity/command-bar/swift-navigation.png",
    imageAlt: "Swift navigation options",
  },
  {
    title: "Conversation Actions",
    description:
      "Stay aware of where you are in the dashboard and act without lifting your hands from the keyboard. Assign, resolve, snooze, or label conversations directly from the command bar.",
    imageSrc: "/images/productivity/command-bar/conversation-actions.png",
    imageAlt: "Conversation actions via command bar",
  },
];

export default function CommandBarPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          ⌘ + K your way into productivity
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          The command bar opens up with a simple shortcut, lets you jump to any page or action, and suggests smart actions based on where you are in your dashboard.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {commandBarHighlights.map((highlight, index) => {
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
