"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebsiteLiveChatPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="w-full md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-3">
            OPEN-SOURCE LIVE CHAT
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Simple live chat
            <br />
            software for businesses
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl">
            Improve your customer experience using a live chat on your website.
            Engage visitors the moment they land on your site and convert
            conversations into lasting relationships.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
              Request a demo
            </Link>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              Try live chat
            </button>
          </div>
        </div>

        {/* Right: live chat widget mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-80">
            <Image
              src="/images/website-live-chat/chat-interface.png"
              alt="Website live chat interface"
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 80vw, 420px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature bullets section */}
      <section className="bg-[#F4F7FF] py-16 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 items-center">
          {/* Left column: widget preview */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[360px] h-96">
              <Image
                src="/images/website-live-chat/chat.png"
                alt="Live chat conversation screenshot"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 80vw, 360px"
              />
            </div>
          </div>

          {/* Right column: benefits list */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              A live chat that fits your brand
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5">
              Driansh OmniConnect live chat widgets can be customized based on your
              brand, language, and customer journey. Configure everything from
              greeting messages to behavior on different pages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <ul className="space-y-2 list-none">
                <li>Multilingual support with configurable widget text.</li>
                <li>Continue conversations over email when visitors go offline.</li>
                <li>Support emojis, file uploads, and rich message content.</li>
              </ul>
              <ul className="space-y-2 list-none">
                <li>Customize widget colors, position, and branding.</li>
                <li>Typing indicators to improve the user experience.</li>
                <li>Distraction-free popup window for focused messaging.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-brand inboxes / account section */}
      <section className="bg-[#F7FAFD] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-2">
              MULTI-BRAND INBOXES
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Manage all your brands in one account
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl">
              Create more than one inbox for your brand and define different access levels for support teams.
              Route chats from multiple websites or products into a single OmniConnect workspace while
              keeping visibility, permissions, and reporting separate.
            </p>
          </div>

          {/* Multi inbox illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-64 sm:h-72">
              <Image
                src="/images/website-live-chat/multiple-inbox.png"
                alt="Multiple inboxes for different brands"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

