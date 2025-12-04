"use client";

import Image from "next/image";

const emailHighlights = [
  {
    title: "Manage your emails easily",
    description:
      "Stay in touch with your customers, manage all your business emails and customer queries through Driansh OmniConnect’s email integration.",
    imageSrc: "/images/integration/sms/massage.png",
    imageAlt: "Driansh OmniConnect email conversation",
  },
  {
    title: "Forward to email",
    description:
      "Don’t lose sight of your email customer inquiries and support tickets. Select email as a channel, connect your account, and start forwarding emails into Driansh OmniConnect.",
    imageSrc: "/images/integration/email/email.png",
    imageAlt: "Forward to email configuration screenshot",
  },
  {
    title: "Send emails from Driansh OmniConnect",
    description:
      "You don’t need to leave your Driansh OmniConnect dashboard to respond. A quick IMAP setup lets you reply to emails straight from Driansh OmniConnect.",
    imageSrc: "/images/integration/email/imap-email-settings-in-chatwoot.png",
    imageAlt: "IMAP email settings in Driansh OmniConnect",
  },
  {
    title: "Native emailing options",
    description:
      "Need to CC/BCC folks? Attach files? Add your signature? Driansh OmniConnect’s native email composer supports everything you need.",
    imageSrc: "/images/integration/email/rich-emails-in-chatwoot.png",
    imageAlt: "Rich email composer options",
  },
];

export default function EmailIntegrationPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Manage your email customer interactions from Driansh OmniConnect
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Connect your email with Driansh OmniConnect to manage threads without leaving the dashboard.
        </p>

      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {emailHighlights.map((highlight, index) => {
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
