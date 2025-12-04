"use client";

import Image from "next/image";

export default function OmnichannelInboxPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: Delight your customers wherever they are */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-20">
        <div className="w-full md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-3">
            OMNICHANNEL SUPPORT
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Delight your customers
            <br />
            wherever they are
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl">
            Connect any conversation channel and engage your customers from one
            place. Driansh OmniConnect brings all of your customer touchpoints
            into a single, unified experience.
          </p>

          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            Create a free account
          </button>
        </div>

        {/* Right: avatar / conversation graphic */}
        <div className="w-full md:w-1/2">
          <div className="relative h-64 sm:h-72 lg:h-80">
            <Image
              src="/images/omnichannel/omni-hero.png"
              alt="Customers chatting with your business across channels"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Channel icons strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Connect with your customers through more than one channel.
        </p>
        <div className="mx-auto max-w-4xl">
          <div className="relative w-full h-16 sm:h-20 lg:h-24">
            <Image
              src="/images/omnichannel/channel-icons.png"
              alt="Omnichannel icons like Facebook, Instagram, WhatsApp and more"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Facebook & Instagram DM section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div className="h-64 sm:h-72 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/omnichannel/messenger-voice.png"
              alt="Sample live chat and voice messages"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Manage your Facebook page &amp; Instagram DM
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Connect your Facebook page &amp; Instagram DM with OmniConnect and see
            all the conversations from Messenger in one place.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Receive and reply to DMs in a single shared inbox.</li>
            <li>Manage your inbox with simple rules without providing page access.</li>
            <li>Label conversations and mute spam conversations.</li>
          </ul>
        </div>
      </section>

      {/* WhatsApp Business Accounts section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            WhatsApp Business Accounts
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Create a business account for WhatsApp, connect it with OmniConnect
            and start engaging your customers instantly.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Send and receive messages from multiple WhatsApp numbers.</li>
            <li>Centralize all WhatsApp conversations alongside other channels.</li>
            <li>Provide rich support with quick replies and media attachments.</li>
          </ul>
        </div>
        <div className="h-64 sm:h-72 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/omnichannel/whatsapp-chat.png"
              alt="Sample WhatsApp business conversation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Build custom channels using API */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div className="h-56 sm:h-64 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/omnichannel/api-diagram.webp"
              alt="API and webhooks integration diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Build custom channels using API
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Use API channels to create custom sources. OmniConnect provides
            flexibility to integrate with any third-party system so you can bring
            every conversation into one inbox.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Send messages using the OmniConnect API.</li>
            <li>Receive webhooks when customers reply to your messages.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

