"use client";

const integrations = [
  {
    name: "HubSpot",
    logo: "/images/integrations/hubspot.png",
    description:
      "Seamlessly sync customer conversations, contacts, and deals with HubSpot. Track engagement metrics and customer journey across both platforms. Automate lead qualification in real-time.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "CRM",
    logo: "/images/integrations/zoho-crm.png",
    description:
      "Unify customer communication and CRM data in one powerful workspace. Automate lead creation and contact updates from chat conversations. Sync customer activities, and support tickets.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Attio",
    logo: "/images/integrations/attio.png",
    description:
      "Transform conversations into actionable relationship Intelligence. Automatically capture and organize customer Interactions in Attio. Leverage AI-powered Insights to strengthen customer relationships.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Leadsquared",
    logo: "/images/integrations/leadsquared.png",
    description:
      "Convert chat conversations into qualified leads automatically. Track lead engagement and activities across multiple touchpoints. Optimize sales workflows with integrated lead scoring and routing.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Shopify",
    logo: "/images/integrations/shopify.png",
    description:
      "Access customer order history and product details during live chat. Track shopping cart activity and provide personalized support. Automate order status updates and shipping notifications.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "WooCommerce",
    logo: "/images/integrations/woocommerce.png",
    description:
      "View customer purchase history and cart details in real-time. Provide instant support for order-related queries and product Information. Automate responses for common e-commerce scenarios and FAQs.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Dialogflow",
    logo: "/images/integrations/dialogflow.png",
    description:
      "Create Intelligent chatbots powered by Google's NLP technology. Handle common queries automatically with AI-driven conversations. Seamlessly transition between bot and human agents when needed.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Slack",
    logo: "/images/integrations/slack.png",
    description:
      "Handle customer conversations directly within your Slack channels. Receive instant notifications for new messages and priority cases. Collaborate with team members without leaving Slack.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Google Translate",
    logo: "/images/integrations/googletranslate.png",
    description:
      "Automatically translate customer messages in real-time. Support customers in 100+ languages without language barriers. Maintain conversation context across multiple languages.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Dyte",
    logo: "/images/integrations/dyte.png",
    description:
      "Launch video and voice calls directly from chat conversations. Share screens and collaborate in real-time with customers. Provide high-quality, secure video support sessions.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "Linear",
    logo: "/images/integrations/linear.png",
    description:
      "Convert customer feedback into actionable Linear Issues. Track feature requests and bug reports with automated Issue creation. Streamline development workflows with bidirectional updates.",
    tags: ["Cloud", "Self Hosted", "Available"],
  },
  {
    name: "GitHub",
    logo: "/images/integrations/github.png",
    description:
      "Create and link GitHub Issues directly from chat conversations. Track development progress and share updates with customers. Automate issue management and pull request notifications.",
    tags: ["Cloud", "Self Hosted", "June 2025"],
  },
  {
    name: "Calendly",
    logo: "/images/integrations/calendly.png",
    description:
      "Schedule customer meetings without leaving the chat Interface. Share available time slots and confirm appointments instantly. Automate meeting reminders and follow-up notifications.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Cal.com",
    logo: "/images/integrations/calcom.png",
    description:
      "Integrate open-source scheduling directly into conversations. Manage availability and bookings with complete customization. Automate scheduling workflows with webhook support.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
  {
    name: "Stripe",
    logo: "/images/integrations/stripe.png",
    description:
      "Access customer payment history and subscription details instantly. Resolve billing queries with real-time payment Information. Process refunds and manage subscriptions directly from chat.",
    tags: ["Cloud", "Self Hosted", "Q3 2025"],
  },
];

const getTagColor = (tag: string) => {
  if (tag === "Available") {
    return "bg-green-50 text-green-700 border-green-200";
  }
  return "bg-cyan-50 text-cyan-700 border-cyan-200";
};

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Integrations
        </h1>
        <p className="text-lg text-gray-500">
          Driansh OmniConnect connects with your favourite apps
        </p>
      </section>

      {/* Integrations Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Logo */}
              <div className="mb-4">
                <div style={{ width: '80px', height: '80px' }}>
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                {integration.description}
              </p>

              {/* Availability Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {integration.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}