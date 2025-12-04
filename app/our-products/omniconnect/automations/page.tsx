"use client";

import Image from "next/image";

export default function AutomationsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Top banner */}
      <section className="bg-[#F7FAFC] py-12 mb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Work smarter with Automations
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Save time by automating your repetitive tasks streamlining your workflows.
          </p>
        </div>
      </section>
      {/* Hero: Easy to create automations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div className="h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/automation/adding-automation-rules-in-chatwoot.png"
              alt="UI for adding automation rules"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Easy to create
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Create your custom automation flow with a set of simple rules. Select a trigger from the drop-down menu, define one or multiple qualifying conditions, and set the desired actions - within minutes.
          </p>
        </div>
      </section>

      {/* Triggering events */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Choose from 3 types of Triggering Events
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Choose to trigger an Automation flow from these types of Events: "Conversation created", "Conversation updated", and "Message created".
          </p>
        </div>
        <div className="h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/automation/chatwoot-automation-events.png"
              alt="Automation triggering events dropdown"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Smart conditions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div className="h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/automation/automation-conditions.png"
              alt="Table of automation conditions"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Select from smart conditions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Conditions are criteria to be checked before an action is executed. Driansh OmniConnect suggests conditions to be set based on your triggering event, and gives you the option to add multiple conditions.
          </p>
        </div>
      </section>

      {/* Bots as personal assistants */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            The bots are like your personal assistant
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Leave all the grunt work to your bots. Select from a wide range of options to automate tasks related to your conversations, or engage your team.
          </p>
        </div>
        <div className="h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/automation/automations-actions-options-in-chatwoot.png"
              alt="Automation actions options"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

