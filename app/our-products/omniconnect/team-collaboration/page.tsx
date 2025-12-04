"use client";

import Image from "next/image";

export default function TeamCollaborationPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: A shared inbox for your team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            A shared inbox for
            <br />
            your team
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl">
            Talk to your customers and your team from one place. Communicate
            internally and resolve customer queries efficiently with Driansh
            OmniConnect.
          </p>
        </div>

        {/* Right: team collaboration illustration */}
        <div className="w-full md:w-1/2">
          <div className="relative h-64 sm:h-72 lg:h-80">
            <Image
              src="/images/team_collaboration/one-inbox-for-all.png"
              alt="Team collaborating in a shared inbox"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Shared inbox section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            A shared inbox for your team
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Talk to your customers and your team from one place. Communicate
            internally and resolve customer queries efficiently by assigning
            conversations, mentioning teammates, and tracking status.
          </p>
        </div>
        <div className="h-64 sm:h-72 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/team_collaboration/multiple-inboxes.png"
              alt="Multiple shared inboxes managed in one account"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Private Notes section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 md:grid-cols-2 items-start">
        <div className="h-64 sm:h-72 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/team_collaboration/private-notes.png"
              alt="Using private notes inside a conversation"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Private Notes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Use private notes to communicate with your team. Use @mentions to
            share information and communicate efficiently within the team without
            exposing internal messages to customers.
          </p>
        </div>
      </section>

      {/* Canned Responses section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Canned Responses
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Access the saved replies easily using slash commands in your reply
            box. Provide faster responses to frequently asked questions while
            keeping your messaging consistent.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative h-80 sm:h-96 lg:h-[520px] w-full flex items-center justify-center">
            <Image
              src="/images/team_collaboration/canned-responses.png"
              alt="Agent using canned responses in a conversation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

