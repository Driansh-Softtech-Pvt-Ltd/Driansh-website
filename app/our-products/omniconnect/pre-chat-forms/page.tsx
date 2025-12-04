"use client";

import Image from "next/image";

export default function PreChatFormsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          User context on your fingertips, faster resolutions
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Collect Info about a contact/conversation before entering into a conversation with them, with pre-chat forms.
        </p>
      </section>

      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/pre-chat-form/pre-chat.png"
                alt="Team collaborating in a shared inbox"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Easy and quick set-up
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Enable your pre-chat form, enable the fields you want to show in the form, add helpful text and you are ready to publish!
            </p>
          </div>
        </div>
      </section>

      {/* Map fields with your custom attributes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Map fields with your custom attributes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Don't be limited by names and email IDs. Collect as much information as you need to through the pre-chat form. Simply, map the fields of your pre-chat form with the custom attributes you create on your Driansh OmniConnect account.
            </p>
          </div>

          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/pre-chat-form/mapping-in-prechat-forms.png"
                alt="Mapping custom attributes to pre-chat form fields"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
