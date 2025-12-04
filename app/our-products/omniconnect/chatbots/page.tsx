"use client";

import Image from "next/image";

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: Add a chatbot to your support squad */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Add a chatbot to your
            <br />
            support squad
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl">
            Scale up your customer service with chatbots. Provide quick,
            personalized, and efficient support and improve customer
            satisfaction and loyalty.
          </p>

          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            Request a demo
          </button>
        </div>
      </section>

      {/* Integrate with tools you love */}
      <section className="w-full bg-[#f7f9fc] py-12 mb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              Integrate with tools you love
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl">
              Driansh OmniConnect Integrates with your favourite tools to provide a seamless agent experience. Leverage the capabilities of trusted platforms to deliver exceptional customer experiences without any compromise.
            </p>
          </div>
          <div className="h-64 sm:h-72 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/chatbots/supported-platforms.png"
                alt="Supported chatbot platforms such as Rasa and Dialogflow"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agent-bot handoff section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div className="h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/chatbots/agent-bot-handoff.png"
              alt="Chat example showing transfer from bot to human agent"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Agent-bot handoff: a win–win
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Deliver the best of automation and human support. Let chatbots
            handle FAQs and repetitive workflows, then seamlessly pass the
            conversation to an agent when a customer needs deeper assistance.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            OmniConnect keeps the full context of the conversation so agents
            never have to ask customers to repeat themselves.
          </p>
        </div>
      </section>

      {/* More than words: rich message types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            More than words: rich message types
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Showcase your product offerings, collect customer feedback, or simply engage your audience, the rich message types have got you covered. Utilize cards, forms, carousels, and more to deliver personalized, visually appealing messages to your customers.
          </p>
        </div>
        <div className="h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/chatbots/message-types.png"
              alt="Examples of different rich message types"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

