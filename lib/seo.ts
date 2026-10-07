import type { Metadata } from "next";
import type { ServicePageContent, SolutionPageContent } from "@/content/types";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://driansh.com").replace(/\/$/, "");
export const SITE_NAME = "Driansh Softtech";
export const DEFAULT_DESCRIPTION =
  "Driansh Softtech builds VoIP, WebRTC, contact center and custom software solutions — FreeSWITCH, Asterisk, Kamailio, OpenSIPS, mobile and web development for businesses worldwide.";
export const DEFAULT_OG_IMAGE = "/og";

type PageSeo = { title: string; description: string };

/** Title + description for every public route. Also drives sitemap.xml. */
export const PAGES: Record<string, PageSeo> = {
  "/": {
    title: "VoIP & Custom Software Development Company",
    description: DEFAULT_DESCRIPTION,
  },
  "/about-us": {
    title: "About Us",
    description: "Learn about Driansh Softtech, a VoIP and software development company based in GIFT City, India, delivering scalable communication systems worldwide.",
  },
  "/contact-us": {
    title: "Contact Us",
    description: "Get in touch with Driansh Softtech for VoIP, contact center, WebRTC, mobile and web development projects. Share your requirements and we'll respond quickly.",
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "Read how Driansh Softtech collects, uses and protects your personal information.",
  },
  "/terms-of-use": {
    title: "Terms of Use",
    description: "The terms and conditions that govern your use of the Driansh Softtech website and services.",
  },

  "/services": {
    title: "VoIP, Mobile & Web Development Services",
    description: "Explore Driansh services: FreeSWITCH, Asterisk, Kamailio, OpenSIPS and WebRTC development, mobile and web apps, DevOps and VoIP testing.",
  },
  "/solutions": {
    title: "VoIP Solutions: Softswitch, PBX & Call Center",
    description: "VoIP solutions for providers and businesses: Class 4 and Class 5 softswitches, multi-tenant IP PBX, call center, billing and conferencing. Book a demo.",
  },

  // Solutions
  "/audio-video-conferencing-solution": {
    title: "Audio & Video Conferencing Solution",
    description: "Secure, scalable audio and video conferencing solutions with screen sharing, recording and WebRTC support for businesses of every size.",
  },
  "/call-center-solution": {
    title: "Call Center Solution",
    description: "Cloud call center software with inbound and outbound dialing, IVR, ACD, real-time analytics and CRM integration.",
  },
  "/calling-card-solution": {
    title: "Calling Card Solution",
    description: "Prepaid and postpaid calling card platform with PIN management, IVR, rate management and billing for telecom operators.",
  },
  "/class-4-softswitch-solution": {
    title: "Class 4 Softswitch Solution",
    description: "Carrier-grade Class 4 softswitch for wholesale VoIP traffic with LCR routing, high CPS, billing and fraud protection.",
  },
  "/class-5-softswitch-solution": {
    title: "Class 5 Softswitch Solution",
    description: "Class 5 softswitch for retail VoIP providers with hosted PBX, IVR, voicemail, call features and integrated billing.",
  },
  "/enterprise-voip-solutions": {
    title: "Enterprise VoIP Solutions",
    description: "Reliable enterprise VoIP phone systems with SIP trunking, unified communications, security and high availability.",
  },
  "/faxing-solution": {
    title: "Faxing Solution",
    description: "Cloud and on-premise fax solutions with T.38, fax-to-email and email-to-fax for secure document delivery.",
  },
  "/live-call-monitoring-solution": {
    title: "Live Call Monitoring Solution",
    description: "Monitor, whisper and barge into live calls with real-time dashboards to coach agents and improve call quality.",
  },
  "/multi-tenant-ip-pbx-solution": {
    title: "Multi-Tenant IP PBX Solution",
    description: "Multi-tenant hosted IP PBX platform for service providers with tenant management, IVR, call queues and billing.",
  },
  "/unified-communications-solution": {
    title: "Unified Communications Solution",
    description: "Unified communications combining voice, video, chat, presence and collaboration into one platform.",
  },
  "/voice-broadcasting-solution": {
    title: "Voice Broadcasting Solution",
    description: "Automated voice broadcasting for bulk voice messages, campaigns, alerts and reminders with detailed reporting.",
  },
  "/voip-billing-solution": {
    title: "VoIP Billing Solution",
    description: "Real-time VoIP billing and rating with prepaid/postpaid accounts, invoicing, reseller management and CDR analysis.",
  },
  "/voip-business-solutions": {
    title: "VoIP Business Solutions",
    description: "Cost-effective VoIP business phone solutions with IP PBX, SIP trunking, mobility and CRM integrations.",
  },

  // Products
  "/our-products": {
    title: "Our Products",
    description: "Explore Driansh Softtech products — EngageOne omnichannel customer engagement and a full-featured Contact Center platform.",
  },
  "/our-products/contactcenter": {
    title: "Contact Center Software",
    description: "Driansh Contact Center: predictive dialing, IVR, call recording, live monitoring, campaigns and reporting in one platform.",
  },
  "/our-products/engageone": {
    title: "EngageOne — Omnichannel Customer Engagement",
    description: "Driansh EngageOne brings chat, WhatsApp, email, social, SMS and calls into one inbox, with an AI Assistant, campaigns, help center and reports.",
  },
  "/our-products/engageone/omnichannel-inbox": {
    title: "Omnichannel Inbox — EngageOne",
    description: "Manage conversations from every channel in a single shared inbox with assignment, labels and collaboration.",
  },
  "/our-products/engageone/website-live-chat": {
    title: "Website Live Chat — EngageOne",
    description: "Add a customizable live chat widget to your website and talk to visitors in real time.",
  },
  "/our-products/engageone/chatbots": {
    title: "Chatbots — EngageOne",
    description: "Automate customer conversations with chatbots that answer questions and hand off to agents seamlessly.",
  },
  "/our-products/engageone/automations": {
    title: "Automations — EngageOne",
    description: "Create automation rules to assign, label and respond to conversations automatically.",
  },
  "/our-products/engageone/team-collaboration": {
    title: "Team Collaboration — EngageOne",
    description: "Collaborate on customer conversations with private notes, mentions and team assignments.",
  },
  "/our-products/engageone/help-center": {
    title: "Help Center — EngageOne",
    description: "Build a self-service help center and knowledge base so customers can find answers on their own.",
  },
  "/our-products/engageone/mobile-apps": {
    title: "Mobile Apps — EngageOne",
    description: "Reply to customers on the go with the EngageOne mobile apps for iOS and Android.",
  },
  "/our-products/engageone/pre-chat-forms": {
    title: "Pre-Chat Forms — EngageOne",
    description: "Collect visitor details before a chat starts with configurable pre-chat forms.",
  },
  "/our-products/engageone/integrations": {
    title: "Integrations — EngageOne",
    description: "Connect EngageOne with WhatsApp, Facebook, Instagram, Telegram, LINE, SMS, email and Slack.",
  },
  "/our-products/engageone/integrations/email": {
    title: "Email Integration — EngageOne",
    description: "Bring customer emails into the EngageOne inbox and reply alongside every other channel.",
  },
  "/our-products/engageone/integrations/facebook": {
    title: "Facebook Messenger Integration — EngageOne",
    description: "Connect your Facebook page and answer Messenger conversations from EngageOne.",
  },
  "/our-products/engageone/integrations/instagram": {
    title: "Instagram Integration — EngageOne",
    description: "Manage Instagram direct messages from the EngageOne shared inbox.",
  },
  "/our-products/engageone/integrations/line": {
    title: "LINE Integration — EngageOne",
    description: "Connect your LINE channel and handle LINE conversations in EngageOne.",
  },
  "/our-products/engageone/integrations/slack": {
    title: "Slack Integration — EngageOne",
    description: "Receive and reply to EngageOne conversations directly from Slack.",
  },
  "/our-products/engageone/integrations/sms": {
    title: "SMS Integration — EngageOne",
    description: "Send and receive SMS messages with customers from the EngageOne inbox.",
  },
  "/our-products/engageone/integrations/telegram": {
    title: "Telegram Integration — EngageOne",
    description: "Connect a Telegram bot and support customers on Telegram through EngageOne.",
  },
  "/our-products/engageone/integrations/whatsapp": {
    title: "WhatsApp Integration — EngageOne",
    description: "Support customers on WhatsApp Business from the EngageOne shared inbox.",
  },
  "/our-products/engageone/analyse/agent-report": {
    title: "Agent Reports — EngageOne",
    description: "Track agent performance with response times, resolution times and conversation volume.",
  },
  "/our-products/engageone/analyse/conversation-report": {
    title: "Conversation Reports — EngageOne",
    description: "Analyse conversation trends, volumes and response metrics across all channels.",
  },
  "/our-products/engageone/analyse/csat-reports": {
    title: "CSAT Reports — EngageOne",
    description: "Measure customer satisfaction with CSAT surveys and detailed reports.",
  },
  "/our-products/engageone/analyse/inbox-reports": {
    title: "Inbox Reports — EngageOne",
    description: "Compare performance across inboxes and channels with inbox-level reports.",
  },
  "/our-products/engageone/analyse/label-reports": {
    title: "Label Reports — EngageOne",
    description: "Understand conversation topics and trends with label-based reporting.",
  },
  "/our-products/engageone/analyse/live-view": {
    title: "Live View — EngageOne",
    description: "See open conversations, agent status and workload in real time.",
  },
  "/our-products/engageone/analyse/team-reports": {
    title: "Team Reports — EngageOne",
    description: "Measure team performance with response and resolution metrics per team.",
  },
  "/our-products/engageone/manage/audit-logs": {
    title: "Audit Logs — EngageOne",
    description: "Keep track of account activity and changes with detailed audit logs.",
  },
  "/our-products/engageone/manage/business-hours": {
    title: "Business Hours — EngageOne",
    description: "Set business hours and out-of-office messages for each inbox.",
  },
  "/our-products/engageone/manage/contact-notes": {
    title: "Contact Notes — EngageOne",
    description: "Add notes to contacts so your team has full customer context.",
  },
  "/our-products/engageone/manage/contact-segments": {
    title: "Contact Segments — EngageOne",
    description: "Group contacts into segments using filters for targeted support and campaigns.",
  },
  "/our-products/engageone/manage/labels": {
    title: "Labels — EngageOne",
    description: "Organise conversations and contacts with custom labels.",
  },
  "/our-products/engageone/manage/private-notes": {
    title: "Private Notes — EngageOne",
    description: "Discuss conversations internally with private notes and @mentions.",
  },
  "/our-products/engageone/manage/teams": {
    title: "Teams — EngageOne",
    description: "Organise agents into teams and route conversations to the right people.",
  },
  "/our-products/engageone/productivity/agent-capacity": {
    title: "Agent Capacity — EngageOne",
    description: "Control how many conversations each agent handles to balance workload.",
  },
  "/our-products/engageone/productivity/bulk-actions": {
    title: "Bulk Actions — EngageOne",
    description: "Assign, label, resolve or snooze many conversations at once with bulk actions.",
  },
  "/our-products/engageone/productivity/canned-responses": {
    title: "Canned Responses — EngageOne",
    description: "Reply faster with saved canned responses for common questions.",
  },
  "/our-products/engageone/productivity/command-bar": {
    title: "Command Bar — EngageOne",
    description: "Navigate and take actions instantly with the EngageOne command bar.",
  },
  "/our-products/engageone/productivity/keyboard-shortcuts": {
    title: "Keyboard Shortcuts — EngageOne",
    description: "Work faster in EngageOne with keyboard shortcuts for common actions.",
  },
  "/our-products/engageone/integrations/api-channel": {
    title: "API Channel — EngageOne",
    description: "Build your own channel: send messages in with the Client API, get signed webhooks for every update, and reply from the EngageOne inbox.",
  },
  "/our-products/engageone/integrations/tiktok": {
    title: "TikTok Integration — EngageOne",
    description: "Receive and reply to TikTok direct messages from your business account in the EngageOne shared inbox, next to every other channel.",
  },
  "/our-products/engageone/integrations/twilio": {
    title: "Twilio Integration — EngageOne",
    description: "Use your Twilio numbers in EngageOne: handle Twilio SMS, WhatsApp through Twilio and voice calls from one shared inbox.",
  },
  "/our-products/engageone/ai-assistant": {
    title: "AI Assistant — EngageOne",
    description: "The EngageOne AI Assistant answers customers 24/7 from your FAQs and documents, then hands the chat to your team when a person is needed.",
  },
  "/our-products/engageone/calling": {
    title: "WhatsApp & Phone Calling — EngageOne",
    description: "Answer WhatsApp and phone calls in the browser from the EngageOne inbox. Every call is logged, with recordings and transcripts for review.",
  },
  "/our-products/engageone/campaigns": {
    title: "Campaigns & WhatsApp Templates — EngageOne",
    description: "Create WhatsApp templates, send personalised WhatsApp and SMS campaigns by label, and greet website visitors with live chat campaigns.",
  },
  "/our-products/engageone/security": {
    title: "Security & Control — EngageOne",
    description: "Run EngageOne in the Driansh cloud or on your own servers. Custom roles, audit logs, two-factor sign-in, SAML SSO and signed webhooks.",
  },
  "/our-products/engageone/pricing": {
    title: "Plans & Pricing — EngageOne",
    description: "EngageOne Cloud, Self-hosted and Enterprise plans. Pricing depends on your agents, channels and deployment. Contact Driansh for a quote.",
  },
  "/our-products/engageone/request-demo": {
    title: "Request a Demo — EngageOne",
    description: "Book a live EngageOne demo with Driansh. See the inbox, AI Assistant, calling and campaigns working for your own use case.",
  },
  "/our-products/engageone/industries": {
    title: "EngageOne Industries",
    description: "See how restaurants, online stores and contact centers use Driansh EngageOne for orders, support, calls and campaigns in one inbox.",
  },
  "/our-products/engageone/industries/restaurants": {
    title: "EngageOne for Restaurants",
    description: "A chat bot for menus, food orders, table bookings, payment links and GST invoices, with a kitchen dashboard that updates customers.",
  },
  "/our-products/engageone/industries/ecommerce": {
    title: "EngageOne for E-commerce",
    description: "Handle order questions in one inbox, see Shopify orders beside the chat, send WhatsApp offers and answer FAQs with the AI Assistant.",
  },
  "/our-products/engageone/industries/contact-centers": {
    title: "EngageOne for Contact Centers",
    description: "Omnichannel queues, auto-assignment, SLAs, phone and WhatsApp calling, macros, reports and CSAT in one contact center platform.",
  },

  // Services
  "/services/voip-development-service": {
    title: "VoIP Development Services",
    description: "Custom VoIP development — softswitches, IP PBX, SIP servers, WebRTC apps and billing systems built by experienced VoIP engineers.",
  },
  "/services/asterisk-development-service": {
    title: "Asterisk Development Services",
    description: "Asterisk development and consulting: custom dialplans, AGI/AMI integrations, IVR, call center and PBX solutions.",
  },
  "/services/freeswitch-development-service": {
    title: "FreeSWITCH Development Services",
    description: "FreeSWITCH development for scalable VoIP platforms — custom modules, ESL integrations, conferencing and call center solutions.",
  },
  "/services/kamailio-development-service": {
    title: "Kamailio Development Services",
    description: "Kamailio SIP server development: load balancing, routing, security and high-availability SIP infrastructure.",
  },
  "/services/opensips-development-service": {
    title: "OpenSIPS Development Services",
    description: "OpenSIPS development for SIP proxies, load balancers, routing engines and carrier-grade VoIP platforms.",
  },
  "/services/webrtc-development-service": {
    title: "WebRTC Development Services",
    description: "WebRTC development for browser-based voice, video, screen sharing and real-time communication apps.",
  },
  "/services/fusionpbx-development-service": {
    title: "FusionPBX Development Services",
    description: "FusionPBX customization, multi-tenant PBX setup, integrations and support on top of FreeSWITCH.",
  },
  "/services/linphone-app-development": {
    title: "Linphone App Development",
    description: "Custom Linphone-based SIP softphone development for Android, iOS and desktop.",
  },
  "/services/sip-js-development-service": {
    title: "SIP.js Development Services",
    description: "SIP.js development for WebRTC softphones and browser calling integrated with your SIP infrastructure.",
  },
  "/services/vicidial-development-service": {
    title: "VICIdial Development Services",
    description: "VICIdial customization, installation, integrations and support for outbound and inbound call centers.",
  },
  "/services/signalwire": {
    title: "SignalWire Development Services",
    description: "Build voice, video and messaging applications on SignalWire with experienced developers.",
  },
  "/services/mobile-app-development": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile app development for iOS and Android, from idea to App Store launch.",
  },
  "/services/android-app-development": {
    title: "Android App Development",
    description: "Custom Android app development with Kotlin and Java — performant, secure and scalable apps.",
  },
  "/services/ios-app-development": {
    title: "iOS App Development",
    description: "Custom iOS app development with Swift and SwiftUI for iPhone and iPad.",
  },
  "/services/flutter-app-development": {
    title: "Flutter App Development",
    description: "Cross-platform Flutter app development for iOS, Android and web from a single codebase.",
  },
  "/services/react-native-app-development": {
    title: "React Native App Development",
    description: "React Native app development for fast, native-feeling cross-platform mobile apps.",
  },
  "/services/web-development": {
    title: "Web Development Services",
    description: "Custom web development — responsive websites, web apps, portals and SaaS platforms.",
  },
  "/services/front-end-development": {
    title: "Front-End Development Services",
    description: "Front-end development with React, Next.js and modern frameworks for fast, accessible user interfaces.",
  },
  "/services/back-end-development": {
    title: "Back-End Development Services",
    description: "Back-end development with Node.js, APIs, databases and cloud architecture built to scale.",
  },
  "/services/devops-services": {
    title: "DevOps Services",
    description: "DevOps services including CI/CD, cloud infrastructure, containers, monitoring and automation.",
  },
  "/services/product-engineering-service": {
    title: "Product Engineering Services",
    description: "End-to-end product engineering from discovery and design to development, testing and launch.",
  },
  "/services/voip-testing": {
    title: "VoIP Testing Services",
    description: "VoIP testing services — SIP load testing, call quality, interoperability and security testing.",
  },
};

/** Build per-page metadata (title, description, canonical, Open Graph). */
export function pageMetadata(path: string): Metadata {
  const page = PAGES[path];
  if (!page) throw new Error(`No SEO entry for route "${path}" in lib/seo.ts`);

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

type TemplateContent = ServicePageContent | SolutionPageContent;

const HUB = {
  service: { name: "Services", href: "/services" },
  solution: { name: "Solutions", href: "/solutions" },
} as const;

export function breadcrumbsFor(c: TemplateContent) {
  return [{ name: "Home", href: "/" }, HUB[c.kind], { name: c.name, href: c.path }];
}

/** Metadata for a template page, built from its content file. */
export function contentMetadata(c: TemplateContent): Metadata {
  const { title, description } = c.seo;
  return {
    title,
    description,
    alternates: { canonical: c.path },
    openGraph: { type: "website", siteName: SITE_NAME, url: c.path, title, description, images: [DEFAULT_OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE] },
  };
}

/** Service + FAQPage + BreadcrumbList structured data for a template page. */
export function contentJsonLd(c: TemplateContent) {
  const url = `${SITE_URL}${c.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.hero.title,
      serviceType: c.name,
      description: c.seo.description,
      url,
      areaServed: "Worldwide",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Driansh Softtech Pvt. Ltd.", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbsFor(c).map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.href === "/" ? "" : b.href}`,
      })),
    },
  ];
}
