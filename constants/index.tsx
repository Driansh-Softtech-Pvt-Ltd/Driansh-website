import { INDUSTRIES } from "@/content/engageone/industries";

const ENGAGEONE = "/our-products/engageone";

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = {
  title: string;
  href?: string;
  links: NavLink[];
  /** Number of link columns inside the group on desktop. */
  columns?: 1 | 2 | 3;
};
export type NavMenu = {
  label: string;
  /** Plain link when the menu has no groups. */
  href?: string;
  /** Highlighted cards shown in the left column of the mega menu. */
  featured?: NavLink[];
  groups?: NavGroup[];
};

const ENGAGEONE_OVERVIEW: NavLink = {
  label: "Driansh EngageOne",
  href: ENGAGEONE,
  description: "One inbox for chat, WhatsApp, social, email and voice, with an AI assistant.",
};

const CONTACT_CENTER: NavLink = {
  label: "Driansh Contact Center",
  href: "/our-products/contactcenter",
  description: "Our voice-first contact center platform for inbound and outbound teams.",
};

const INDUSTRIES_HUB: NavLink = {
  label: "All industries",
  href: `${ENGAGEONE}/industries`,
  description: "See how teams in every industry run customer conversations on EngageOne.",
};

const FEATURED_INDUSTRIES: NavLink[] = [
  { label: "Restaurants", href: `${ENGAGEONE}/industries/restaurants` },
  { label: "E-commerce", href: `${ENGAGEONE}/industries/ecommerce` },
  { label: "Contact centers", href: `${ENGAGEONE}/industries/contact-centers` },
];

const INDUSTRY_LINKS: NavLink[] = INDUSTRIES.map((industry) => ({
  label: industry.name,
  href: `${ENGAGEONE}/industries/${industry.slug}`,
}));

const VOIP_DEVELOPMENT_LINKS: NavLink[] = [
  { label: "FreeSWITCH development", href: "/services/freeswitch-development-service" },
  { label: "WebRTC development", href: "/services/webrtc-development-service" },
  { label: "Asterisk development", href: "/services/asterisk-development-service" },
  { label: "OpenSIPS development", href: "/services/opensips-development-service" },
  { label: "Kamailio development", href: "/services/kamailio-development-service" },
];

const ENGINEERING_LINKS: NavLink[] = [
  { label: "DevOps services", href: "/services/devops-services" },
  { label: "Web development", href: "/services/web-development" },
  { label: "Mobile app development", href: "/services/mobile-app-development" },
  { label: "VoIP testing & QA", href: "/services/voip-testing" },
  { label: "Product engineering", href: "/services/product-engineering-service" },
];

const VOIP_SOLUTION_LINKS: NavLink[] = [
  { label: "Multi-tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
  { label: "Call center", href: "/call-center-solution" },
  { label: "Voice broadcasting", href: "/voice-broadcasting-solution" },
  { label: "Unified communications", href: "/unified-communications-solution" },
];

export const NAV_MENUS: NavMenu[] = [
  {
    label: "Product",
    featured: [ENGAGEONE_OVERVIEW, CONTACT_CENTER],
    groups: [
      {
        title: "Core",
        links: [
          { label: "Omnichannel inbox", href: `${ENGAGEONE}/omnichannel-inbox` },
          { label: "Website live chat", href: `${ENGAGEONE}/website-live-chat` },
          { label: "AI Assistant", href: `${ENGAGEONE}/ai-assistant` },
          { label: "Calling", href: `${ENGAGEONE}/calling` },
          { label: "Campaigns", href: `${ENGAGEONE}/campaigns` },
          { label: "Help center", href: `${ENGAGEONE}/help-center` },
          { label: "Chatbots", href: `${ENGAGEONE}/chatbots` },
          { label: "Automations", href: `${ENGAGEONE}/automations` },
          { label: "Mobile apps", href: `${ENGAGEONE}/mobile-apps` },
        ],
      },
      {
        title: "Channels",
        href: `${ENGAGEONE}/integrations`,
        links: [
          { label: "WhatsApp", href: `${ENGAGEONE}/integrations/whatsapp` },
          { label: "Instagram", href: `${ENGAGEONE}/integrations/instagram` },
          { label: "Facebook Messenger", href: `${ENGAGEONE}/integrations/facebook` },
          { label: "TikTok", href: `${ENGAGEONE}/integrations/tiktok` },
          { label: "Telegram", href: `${ENGAGEONE}/integrations/telegram` },
          { label: "LINE", href: `${ENGAGEONE}/integrations/line` },
          { label: "SMS", href: `${ENGAGEONE}/integrations/sms` },
          { label: "Email", href: `${ENGAGEONE}/integrations/email` },
          { label: "Twilio", href: `${ENGAGEONE}/integrations/twilio` },
          { label: "API channel", href: `${ENGAGEONE}/integrations/api-channel` },
          { label: "All integrations", href: `${ENGAGEONE}/integrations` },
        ],
      },
      {
        title: "Team & productivity",
        links: [
          { label: "Team collaboration", href: `${ENGAGEONE}/team-collaboration` },
          { label: "Canned responses", href: `${ENGAGEONE}/productivity/canned-responses` },
          { label: "Keyboard shortcuts", href: `${ENGAGEONE}/productivity/keyboard-shortcuts` },
          { label: "Command bar", href: `${ENGAGEONE}/productivity/command-bar` },
          { label: "Agent capacity", href: `${ENGAGEONE}/productivity/agent-capacity` },
          { label: "Bulk actions", href: `${ENGAGEONE}/productivity/bulk-actions` },
        ],
      },
      {
        title: "Manage",
        links: [
          { label: "Labels", href: `${ENGAGEONE}/manage/labels` },
          { label: "Teams", href: `${ENGAGEONE}/manage/teams` },
          { label: "Business hours", href: `${ENGAGEONE}/manage/business-hours` },
          { label: "Contact segments", href: `${ENGAGEONE}/manage/contact-segments` },
          { label: "Private notes", href: `${ENGAGEONE}/manage/private-notes` },
          { label: "Contact notes", href: `${ENGAGEONE}/manage/contact-notes` },
          { label: "Audit logs", href: `${ENGAGEONE}/manage/audit-logs` },
        ],
      },
      {
        title: "Reports",
        links: [
          { label: "Conversation reports", href: `${ENGAGEONE}/analyse/conversation-report` },
          { label: "Agent reports", href: `${ENGAGEONE}/analyse/agent-report` },
          { label: "Inbox reports", href: `${ENGAGEONE}/analyse/inbox-reports` },
          { label: "Team reports", href: `${ENGAGEONE}/analyse/team-reports` },
          { label: "Label reports", href: `${ENGAGEONE}/analyse/label-reports` },
          { label: "CSAT reports", href: `${ENGAGEONE}/analyse/csat-reports` },
          { label: "Live view", href: `${ENGAGEONE}/analyse/live-view` },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    featured: [INDUSTRIES_HUB],
    groups: [
      { title: "Featured", links: FEATURED_INDUSTRIES },
      { title: "More industries", links: INDUSTRY_LINKS, columns: 3 },
    ],
  },
  {
    label: "Developers",
    groups: [
      {
        title: "Build on EngageOne",
        columns: 3,
        links: [
          {
            label: "API channel",
            href: `${ENGAGEONE}/integrations/api-channel`,
            description: "Bring any custom channel into the inbox through the API.",
          },
          {
            label: "Webhooks & integrations",
            href: `${ENGAGEONE}/integrations`,
            description: "Connect EngageOne to your CRM, Slack and your own systems.",
          },
          {
            label: "Security",
            href: `${ENGAGEONE}/security`,
            description: "Roles, audit logs, SSO and self-hosting options.",
          },
        ],
      },
    ],
  },
  { label: "Pricing", href: `${ENGAGEONE}/pricing` },
  {
    label: "Services",
    featured: [
      {
        label: "All services",
        href: "/services",
        description: "VoIP, WebRTC, DevOps, web, mobile and QA engineering from the Driansh team.",
      },
      {
        label: "All VoIP solutions",
        href: "/solutions",
        description: "Ready-to-deploy telephony platforms, customised for your business.",
      },
    ],
    groups: [
      { title: "VoIP development", href: "/services/voip-development-service", links: VOIP_DEVELOPMENT_LINKS },
      { title: "Engineering", links: ENGINEERING_LINKS },
      { title: "VoIP solutions", href: "/solutions", links: VOIP_SOLUTION_LINKS },
    ],
  },
  {
    label: "Company",
    groups: [
      {
        title: "Driansh Softtech",
        columns: 2,
        links: [
          {
            label: "About us",
            href: "/about-us",
            description: "The engineering team behind EngageOne, based in GIFT City.",
          },
          {
            label: "Contact us",
            href: "/contact-us",
            description: "Talk to us about EngageOne, VoIP or a custom project.",
          },
        ],
      },
    ],
  },
];

export const NAV_CTA: NavLink = { label: "Request a demo", href: `${ENGAGEONE}/request-demo` };

export const OUR_PRODUCTS = [
  {
    id: "engageOne",
    logo: "/logo.png",
    // Rendered with <EngageOneInboxVisual /> (original illustration) instead of a screenshot.
    image: "",
    title: "Driansh EngageOne",
    description:
      "Driansh EngageOne brings every customer conversation into one shared inbox: WhatsApp, website chat, email, Messenger, Instagram, Telegram and SMS. An AI assistant answers common questions, and your team picks up the rest with full context.",
    points: [
      "One inbox for every messaging channel, plus WhatsApp and phone calling",
      "AI assistant, automations and campaigns to save your team time",
      "Help center, reports and customer ratings in the same product",
    ],
    reverse: false,
  },
  {
    id: "contactCenter",
    logo: "/images/logo.png",
    image: "/images/our-products-2.webp",
    title: "Driansh Contact Center",
    description:
      "Driansh Contact Center is our voice-first platform for inbound and outbound teams, with email, chat and social channels alongside. Dialers, IVR, queues, live monitoring, reports and CRM integrations help agents work faster and give supervisors a clear view of every campaign.",
    points: [
      "Unified communication across multiple digital channels",
      "Real-time analytics and performance dashboards",
      "Smart automation for faster response and resolution",
    ],
    reverse: true,
  },
];

export const FOOTER_TAGLINE =
  "Driansh EngageOne brings website chat, WhatsApp, social, email and voice into one shared inbox with an AI assistant. Built and supported by the Driansh Softtech engineering team.";

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "EngageOne overview", href: ENGAGEONE },
      { label: "Omnichannel inbox", href: `${ENGAGEONE}/omnichannel-inbox` },
      { label: "AI Assistant", href: `${ENGAGEONE}/ai-assistant` },
      { label: "Calling", href: `${ENGAGEONE}/calling` },
      { label: "Campaigns", href: `${ENGAGEONE}/campaigns` },
      { label: "Help center", href: `${ENGAGEONE}/help-center` },
      { label: "Integrations", href: `${ENGAGEONE}/integrations` },
      { label: "Security", href: `${ENGAGEONE}/security` },
      { label: "Pricing", href: `${ENGAGEONE}/pricing` },
      { label: "Request a demo", href: `${ENGAGEONE}/request-demo` },
    ],
  },
  {
    title: "Solutions",
    links: [
      ...FEATURED_INDUSTRIES,
      ...INDUSTRY_LINKS.slice(0, 6),
      { label: INDUSTRIES_HUB.label, href: INDUSTRIES_HUB.href },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "VoIP development", href: "/services/voip-development-service" },
      { label: "WebRTC development", href: "/services/webrtc-development-service" },
      ...ENGINEERING_LINKS.slice(0, 4),
      ...VOIP_SOLUTION_LINKS,
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Contact us", href: "/contact-us" },
      { label: CONTACT_CENTER.label, href: CONTACT_CENTER.href },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms-of-use" },
    ],
  },
];

