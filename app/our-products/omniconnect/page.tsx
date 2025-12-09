"use client";

import Link from "next/link";
import {
  Zap,
  MessageCircle,
  Layers,
  MessageCircleMore,
  Bot,
  Rocket,
  Smartphone,
  Plug,
  BookOpenText,
  Inbox,
  Tag,
  Users2,
  FileText,
  Lock,
  ListFilter,
  Clock3,
  FileSearch,
  Activity,
  UserCheck,
  Smile,
} from "lucide-react";

const productCards = [
  {
    title: "Website Live Chat",
    description: "Simple and elegant live chat for your website.",
    href: "/our-products/omniconnect/website-live-chat",
  },
  {
    title: "Omnichannel inbox",
    description: "Connect any channel and engage your customers from one place.",
    href: "/our-products/omniconnect/omnichannel-inbox",
  },
  {
    title: "Team collaboration",
    description: "Collaborate and manage conversations using a shared inbox.",
    href: "/our-products/omniconnect/team-collaboration",
  },
  {
    title: "Chatbots",
    description:
      "Easily integrate with chatbot platforms like Rasa or Dialogflow to reduce the workload of your agents.",
    href: "/our-products/omniconnect/chatbots",
  },
  {
    title: "Automations",
    description:
      "Avoid repetitive tasks by automating your workflows and run your business on auto-pilot.",
    href: "/our-products/omniconnect/automations",
  },
  {
    title: "Mobile apps",
    description:
      "Don't miss out on the new customers, download our mobile apps and talk to your customers easily.",
    href: "/our-products/omniconnect/mobile-apps",
  },

  {
    title: "Pre-Chat Form",
    description: "Add a customisable chat form before a user initiates a chat.",
    href: "/our-products/omniconnect/pre-chat-forms",
  },
  {
    title: "Help Center",
    description: "Build knowledge base for happier agents and customers.",
    href: "/our-products/omniconnect/help-center",
  },
];

const manageCards = [
  {
    title: "Labels",
    description: "Add labels to your chats and keep them well-organized.",
    href: "/our-products/omniconnect/manage/labels",
  },
  {
    title: "Teams",
    description: "Create internal teams for efficient collaboration.",
    href: "/our-products/omniconnect/manage/teams",
  },
  {
    title: "Contact Notes",
    description: "Add notes to contacts.",
    href: "/our-products/omniconnect/manage/contact-notes",
  },
  {
    title: "Private Notes",
    description: "Privately discuss customer queries with your teammates.",
    href: "/our-products/omniconnect/manage/private-notes",
  },
  {
    title: "Contact Segments",
    description: "Filter and group your contacts into segments.",
    href: "/our-products/omniconnect/manage/contact-segments",
  },
  {
    title: "Business Hours",
    description: "Let customers know you’re not available to answer their questions.",
    href: "/our-products/omniconnect/manage/business-hours",
  },
  {
    title: "Audit Logs",
    description: "Track and trace account activities with ease.",
    href: "/our-products/omniconnect/manage/audit-logs",
  },
];

const analyseCards = [
  {
    title: "Live view",
    description: "Get realtimes insights about your support operations.",
    href: "/our-products/omniconnect/analyse/live-view",
  },
  {
    title: "Conversation Report",
    description: "Get details insights on your conversations.",
    href: "/our-products/omniconnect/analyse/conversation-report",
  },
  {
    title: "Agent Report",
    description: "Track your agents’ performance, with auto-updating reports.",
    href: "/our-products/omniconnect/analyse/agent-report",
  },
  {
    title: "Label Reports",
    description:
      "See which labels get the most conversations, and how long it takes to resolve them.",
    href: "/our-products/omniconnect/analyse/label-reports",
  },
  {
    title: "CSAT Reports",
    description: "Get reports on how customers respond to your chat.",
    href: "/our-products/omniconnect/analyse/csat-reports",
  },
  {
    title: "Inbox Reports",
    description: "Get insights into your inboxes.",
    href: "/our-products/omniconnect/analyse/inbox-reports",
  },
  {
    title: "Team Reports",
    description: "Analyse how each of your teams is performing.",
    href: "/our-products/omniconnect/analyse/team-reports",
  },
];

const productivityCards = [
  {
    title: "Keyboard Shortcuts",
    description: "Master Driansh OmniConnect with keyboard shortcuts.",
    href: "/our-products/omniconnect/productivity/keyboard-shortcuts",
  },
  {
    title: "Command Bar",
    description: "Use the command bar to perform actions.",
    href: "/our-products/omniconnect/productivity/command-bar",
  },
  {
    title: "Bulk Actions",
    description: "Update multiple conversations at once.",
    href: "/our-products/omniconnect/productivity/bulk-actions",
  },
  {
    title: "Canned Responses",
    description: "Save frequently sent messages as templates.",
    href: "/our-products/omniconnect/productivity/canned-responses",
  },
  {
    title: "Agent Capacity",
    description: "Set limits to auto-assigning conversations to your agents.",
    href: "/our-products/omniconnect/productivity/agent-capacity",
  },
];

const integrationCards = [
  {
    title: "WhatsApp",
    description: "Manage your WhatsApp business interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/whatsapp",
  },
  {
    title: "Facebook",
    description: "Stay connected with your customers on Facebook.",
    href: "/our-products/omniconnect/integrations/facebook",
  },
  {
    title: "Instagram",
    description: "Stay connected with your customers on Instagram.",
    href: "/our-products/omniconnect/integrations/instagram",
  },
  {
    title: "Telegram",
    description: "Manage your Telegram customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/telegram",
  },
  {
    title: "Line",
    description: "Manage your Line customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/line",
  },
  {
    title: "SMS",
    description: "Manage your SMS customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/sms",
  },
  {
    title: "Email",
    description: "Manage your email customer interactions from OmniConnect.",
    href: "/our-products/omniconnect/integrations/email",
  },
  {
    title: "Slack",
    description: "Answer your customer queries from Slack.",
    href: "/our-products/omniconnect/integrations/slack",
  },
];

export default function OmniConnectFeaturesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Product cards section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Driansh OmniConnect Features
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {productCards.map((card) => {
            let Icon = MessageCircleMore;

            if (card.title === "Website Live Chat") Icon = MessageCircleMore;
            else if (card.title === "Omnichannel inbox") Icon = Inbox;
            else if (card.title === "Team collaboration") Icon = Layers;
            else if (card.title === "Chatbots") Icon = Bot;
            else if (card.title === "Automations") Icon = Rocket;
            else if (card.title === "Mobile apps") Icon = Smartphone;
            else if (card.title === "Integrations") Icon = Plug;
            else if (card.title === "Pre-Chat Form") Icon = MessageCircle;
            else if (card.title === "Help Center") Icon = BookOpenText;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group block rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-150"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  {card.description}
                </p>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Manage section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Manage
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {manageCards.map((card) => {
            let Icon = FileText;

            if (card.title === "Labels") Icon = Tag;
            else if (card.title === "Teams") Icon = Users2;
            else if (card.title === "Contact Notes") Icon = FileText;
            else if (card.title === "Private Notes") Icon = Lock;
            else if (card.title === "Contact Segments") Icon = ListFilter;
            else if (card.title === "Business Hours") Icon = Clock3;
            else if (card.title === "Audit Logs") Icon = FileSearch;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group block rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-150"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  {card.description}
                </p>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Analyse section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Analyse
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {analyseCards.map((card) => {
            let Icon = Activity;

            if (card.title === "Live view") Icon = Activity;
            else if (card.title === "Conversation Report") Icon = MessageCircle;
            else if (card.title === "Agent Report") Icon = UserCheck;
            else if (card.title === "Label Reports") Icon = Tag;
            else if (card.title === "CSAT Reports") Icon = Smile;
            else if (card.title === "Inbox Reports") Icon = Inbox;
            else if (card.title === "Team Reports") Icon = Users2;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group block rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-150"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  {card.description}
                </p>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Productivity section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Productivity
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {productivityCards.map((card) => {
            let Icon = Activity;

            if (card.title === "Keyboard Shortcuts") Icon = Zap;
            else if (card.title === "Command Bar") Icon = Activity;
            else if (card.title === "Bulk Actions") Icon = FileSearch;
            else if (card.title === "Canned Responses") Icon = MessageCircle;
            else if (card.title === "Agent Capacity") Icon = Users2;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group block rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-150"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  {card.description}
                </p>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Integrations section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Integrations
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {integrationCards.map((card) => {
            let Icon = Plug;

            if (card.title === "WhatsApp") Icon = Smartphone;
            else if (card.title === "Facebook") Icon = MessageCircle;
            else if (card.title === "Instagram") Icon = MessageCircle;
            else if (card.title === "Telegram") Icon = Smartphone;
            else if (card.title === "Line") Icon = Layers;
            else if (card.title === "SMS") Icon = Smartphone;
            else if (card.title === "Email") Icon = Inbox;
            else if (card.title === "Slack") Icon = MessageCircleMore;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group block rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm hover:border-blue-500 hover:shadow-md transition-all duration-150"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  {card.description}
                </p>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </section>

    </main>
  );
}


