import type { Metadata } from "next";

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
    description: "Explore Driansh Softtech products — OmniConnect omnichannel customer engagement and a full-featured Contact Center platform.",
  },
  "/our-products/contactcenter": {
    title: "Contact Center Software",
    description: "Driansh Contact Center: predictive dialing, IVR, call recording, live monitoring, campaigns and reporting in one platform.",
  },
  "/our-products/omniconnect": {
    title: "OmniConnect — Omnichannel Customer Engagement",
    description: "Driansh OmniConnect unifies live chat, email, WhatsApp, Facebook, Instagram, SMS and more into one shared inbox for your support team.",
  },
  "/our-products/omniconnect/omnichannel-inbox": {
    title: "Omnichannel Inbox — OmniConnect",
    description: "Manage conversations from every channel in a single shared inbox with assignment, labels and collaboration.",
  },
  "/our-products/omniconnect/website-live-chat": {
    title: "Website Live Chat — OmniConnect",
    description: "Add a customizable live chat widget to your website and talk to visitors in real time.",
  },
  "/our-products/omniconnect/chatbots": {
    title: "Chatbots — OmniConnect",
    description: "Automate customer conversations with chatbots that answer questions and hand off to agents seamlessly.",
  },
  "/our-products/omniconnect/automations": {
    title: "Automations — OmniConnect",
    description: "Create automation rules to assign, label and respond to conversations automatically.",
  },
  "/our-products/omniconnect/team-collaboration": {
    title: "Team Collaboration — OmniConnect",
    description: "Collaborate on customer conversations with private notes, mentions and team assignments.",
  },
  "/our-products/omniconnect/help-center": {
    title: "Help Center — OmniConnect",
    description: "Build a self-service help center and knowledge base so customers can find answers on their own.",
  },
  "/our-products/omniconnect/mobile-apps": {
    title: "Mobile Apps — OmniConnect",
    description: "Reply to customers on the go with the OmniConnect mobile apps for iOS and Android.",
  },
  "/our-products/omniconnect/pre-chat-forms": {
    title: "Pre-Chat Forms — OmniConnect",
    description: "Collect visitor details before a chat starts with configurable pre-chat forms.",
  },
  "/our-products/omniconnect/integrations": {
    title: "Integrations — OmniConnect",
    description: "Connect OmniConnect with WhatsApp, Facebook, Instagram, Telegram, LINE, SMS, email and Slack.",
  },
  "/our-products/omniconnect/integrations/email": {
    title: "Email Integration — OmniConnect",
    description: "Bring customer emails into the OmniConnect inbox and reply alongside every other channel.",
  },
  "/our-products/omniconnect/integrations/facebook": {
    title: "Facebook Messenger Integration — OmniConnect",
    description: "Connect your Facebook page and answer Messenger conversations from OmniConnect.",
  },
  "/our-products/omniconnect/integrations/instagram": {
    title: "Instagram Integration — OmniConnect",
    description: "Manage Instagram direct messages from the OmniConnect shared inbox.",
  },
  "/our-products/omniconnect/integrations/line": {
    title: "LINE Integration — OmniConnect",
    description: "Connect your LINE channel and handle LINE conversations in OmniConnect.",
  },
  "/our-products/omniconnect/integrations/slack": {
    title: "Slack Integration — OmniConnect",
    description: "Receive and reply to OmniConnect conversations directly from Slack.",
  },
  "/our-products/omniconnect/integrations/sms": {
    title: "SMS Integration — OmniConnect",
    description: "Send and receive SMS messages with customers from the OmniConnect inbox.",
  },
  "/our-products/omniconnect/integrations/telegram": {
    title: "Telegram Integration — OmniConnect",
    description: "Connect a Telegram bot and support customers on Telegram through OmniConnect.",
  },
  "/our-products/omniconnect/integrations/whatsapp": {
    title: "WhatsApp Integration — OmniConnect",
    description: "Support customers on WhatsApp Business from the OmniConnect shared inbox.",
  },
  "/our-products/omniconnect/analyse/agent-report": {
    title: "Agent Reports — OmniConnect",
    description: "Track agent performance with response times, resolution times and conversation volume.",
  },
  "/our-products/omniconnect/analyse/conversation-report": {
    title: "Conversation Reports — OmniConnect",
    description: "Analyse conversation trends, volumes and response metrics across all channels.",
  },
  "/our-products/omniconnect/analyse/csat-reports": {
    title: "CSAT Reports — OmniConnect",
    description: "Measure customer satisfaction with CSAT surveys and detailed reports.",
  },
  "/our-products/omniconnect/analyse/inbox-reports": {
    title: "Inbox Reports — OmniConnect",
    description: "Compare performance across inboxes and channels with inbox-level reports.",
  },
  "/our-products/omniconnect/analyse/label-reports": {
    title: "Label Reports — OmniConnect",
    description: "Understand conversation topics and trends with label-based reporting.",
  },
  "/our-products/omniconnect/analyse/live-view": {
    title: "Live View — OmniConnect",
    description: "See open conversations, agent status and workload in real time.",
  },
  "/our-products/omniconnect/analyse/team-reports": {
    title: "Team Reports — OmniConnect",
    description: "Measure team performance with response and resolution metrics per team.",
  },
  "/our-products/omniconnect/manage/audit-logs": {
    title: "Audit Logs — OmniConnect",
    description: "Keep track of account activity and changes with detailed audit logs.",
  },
  "/our-products/omniconnect/manage/business-hours": {
    title: "Business Hours — OmniConnect",
    description: "Set business hours and out-of-office messages for each inbox.",
  },
  "/our-products/omniconnect/manage/contact-notes": {
    title: "Contact Notes — OmniConnect",
    description: "Add notes to contacts so your team has full customer context.",
  },
  "/our-products/omniconnect/manage/contact-segments": {
    title: "Contact Segments — OmniConnect",
    description: "Group contacts into segments using filters for targeted support and campaigns.",
  },
  "/our-products/omniconnect/manage/labels": {
    title: "Labels — OmniConnect",
    description: "Organise conversations and contacts with custom labels.",
  },
  "/our-products/omniconnect/manage/private-notes": {
    title: "Private Notes — OmniConnect",
    description: "Discuss conversations internally with private notes and @mentions.",
  },
  "/our-products/omniconnect/manage/teams": {
    title: "Teams — OmniConnect",
    description: "Organise agents into teams and route conversations to the right people.",
  },
  "/our-products/omniconnect/productivity/agent-capacity": {
    title: "Agent Capacity — OmniConnect",
    description: "Control how many conversations each agent handles to balance workload.",
  },
  "/our-products/omniconnect/productivity/bulk-actions": {
    title: "Bulk Actions — OmniConnect",
    description: "Assign, label, resolve or snooze many conversations at once with bulk actions.",
  },
  "/our-products/omniconnect/productivity/canned-responses": {
    title: "Canned Responses — OmniConnect",
    description: "Reply faster with saved canned responses for common questions.",
  },
  "/our-products/omniconnect/productivity/command-bar": {
    title: "Command Bar — OmniConnect",
    description: "Navigate and take actions instantly with the OmniConnect command bar.",
  },
  "/our-products/omniconnect/productivity/keyboard-shortcuts": {
    title: "Keyboard Shortcuts — OmniConnect",
    description: "Work faster in OmniConnect with keyboard shortcuts for common actions.",
  },

  // Services
  "/services/voip-devlopment-service": {
    title: "VoIP Development Services",
    description: "Custom VoIP development — softswitches, IP PBX, SIP servers, WebRTC apps and billing systems built by experienced VoIP engineers.",
  },
  "/services/asterisk-devlopment-service": {
    title: "Asterisk Development Services",
    description: "Asterisk development and consulting: custom dialplans, AGI/AMI integrations, IVR, call center and PBX solutions.",
  },
  "/services/freeswitch-devlopment-service": {
    title: "FreeSWITCH Development Services",
    description: "FreeSWITCH development for scalable VoIP platforms — custom modules, ESL integrations, conferencing and call center solutions.",
  },
  "/services/kamailio-devlopment-service": {
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
  "/services/sip-js-devlopment-service": {
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
