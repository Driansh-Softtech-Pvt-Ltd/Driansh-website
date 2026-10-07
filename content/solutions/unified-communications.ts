import {
  BarChart3,
  CalendarDays,
  FolderOpen,
  Headphones,
  Inbox,
  Layers,
  MessageSquare,
  MessagesSquare,
  Network,
  Phone,
  PhoneForwarded,
  PiggyBank,
  Printer,
  ScreenShare,
  ShieldCheck,
  Smartphone,
  Store,
  UserCheck,
  Video,
  Voicemail,
  Zap,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const unifiedCommunications: SolutionPageContent = {
  kind: "solution",
  path: "/unified-communications-solution",
  name: "Unified Communications",
  eyebrow: "Solutions",
  seo: {
    title: "Unified Communications Solution (UCaaS)",
    description:
      "White-label unified communications solution joining calling, video, chat, presence and voicemail in one app for providers and teams. Book a free demo.",
  },
  hero: {
    title: "Unified Communications Solution for Connected Teams",
    subtitle:
      "We build white-label UCaaS platforms that put calling, video meetings, chat, presence and voicemail into one app, connected to your email, calendar and business tools.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "View Features",
  },
  highlights: ["Voice, video & chat in one app", "Presence & unified inbox", "Email & calendar sync", "White-label ready"],
  diagram: {
    center: { icon: Layers, label: "UC Platform" },
    nodes: [
      { icon: Phone, label: "Voice calls" },
      { icon: Video, label: "Video meetings" },
      { icon: MessageSquare, label: "Team chat" },
      { icon: UserCheck, label: "Presence" },
      { icon: Voicemail, label: "Voicemail" },
      { icon: CalendarDays, label: "Email & calendar" },
    ],
  },
  overview: {
    title: "What is a unified communications solution?",
    paragraphs: [
      "A unified communications solution brings calling, video meetings, messaging, voicemail and file sharing into one app. Instead of switching between tools, your team sees every conversation and who is available in one place.",
      "We build white-label UC platforms for providers who sell UCaaS and for companies that want their own. Each one is shaped around your users and connected to the tools they already use.",
    ],
    audiences: ["UCaaS providers", "Enterprises", "Managed service providers", "Remote & hybrid teams", "Contact centres"],
  },
  features: {
    title: "Unified communications features",
    items: [
      { icon: Phone, title: "Voice calling", text: "Make one-to-one calls to colleagues and clients from desktop, browser or mobile." },
      { icon: Video, title: "Video conferencing", text: "Move a chat or call into a video meeting when you need to talk face to face." },
      { icon: MessagesSquare, title: "Instant messaging", text: "Chat one-to-one or in groups, so quick questions do not need a call." },
      { icon: UserCheck, title: "Presence status", text: "Show who is available, busy, on a call or in a meeting, including custom statuses." },
      { icon: PhoneForwarded, title: "Call routing & forwarding", text: "Route calls to the right extension or forward them, so opportunities are not missed." },
      { icon: FolderOpen, title: "File sharing", text: "Share documents and images inside conversations, so everyone works from the same file." },
      { icon: ScreenShare, title: "Screen sharing", text: "Share your screen during calls to give demos, walkthroughs and presentations." },
      { icon: Inbox, title: "Unified inbox", text: "See voicemails, missed calls and messages from every channel in one visual inbox." },
      { icon: CalendarDays, title: "Email & calendar sync", text: "Connect Google or system calendars and email, so meetings and messages stay in step." },
      { icon: Smartphone, title: "Mobile softphone", text: "Use the same number and features on your phone through a mobile softphone app." },
      { icon: BarChart3, title: "Analytics & reports", text: "Review activity across calls, meetings and chat, so you can improve how teams work." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: PiggyBank, title: "Fewer tools to pay for", text: "Replace separate phone, chat and meeting subscriptions with one platform your team signs into once." },
      { icon: Zap, title: "Faster responses", text: "Presence and chat show who can help right now, so customers and colleagues wait less." },
      { icon: ShieldCheck, title: "Central control", text: "Users, permissions and data are managed in one place, which makes security and scaling simpler." },
      { icon: Store, title: "Your own UCaaS brand", text: "Sell unified communications under your name with a white-label platform you control." },
    ],
  },
  howItWorks: {
    title: "One UCaaS platform behind every channel",
    text: "Each user signs in once on desktop, browser or mobile. Calls, meetings, chat and voicemail run through a shared communications backend, and presence updates across all devices. Integrations sync contacts, calendars and email, so every user sees one timeline.",
    points: [
      "Web, desktop and mobile apps on one backend",
      "Integrations with CRM, ERP, email and calendars",
      "Built with stacks such as React, Node.js and Python",
      "Deploy on your own servers or in the cloud",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Video, title: "Audio & video conferencing", text: "Add larger meetings with recording and moderator controls.", href: "/audio-video-conferencing-solution" },
      { icon: Headphones, title: "Contact center", text: "Bring customer calls and agents into the same platform.", href: "/our-products/contactcenter" },
      { icon: MessagesSquare, title: "EngageOne", text: "Handle customer chat channels in one shared inbox.", href: "/our-products/engageone" },
      { icon: Network, title: "WebRTC development", text: "Browser calling and video built for your UC app.", href: "/services/webrtc-development-service" },
      { icon: Printer, title: "Faxing solution", text: "Add email and web faxing for every user.", href: "/faxing-solution" },
    ],
  },
  faqs: [
    {
      question: "What is the difference between UC and UCaaS?",
      answer:
        "Unified communications (UC) is the set of tools, such as calling, meetings and chat, joined in one system. UCaaS is the same thing delivered as a cloud service, usually on a subscription. We can build either: a platform you host for yourself, or one you sell as a service.",
    },
    {
      question: "Can a unified communications platform integrate with our CRM?",
      answer:
        "Yes. We connect UC platforms to CRM, ERP, helpdesk and productivity tools through their APIs. Common examples are click-to-call from a CRM record, logging calls automatically and syncing contacts. Tell us which systems you use, and we will scope the integration before development starts.",
    },
    {
      question: "How much does it cost to build a UCaaS platform?",
      answer:
        "Cost depends on the channels you need, the number of apps (web, desktop, mobile), the integrations and whether you start from an existing base. A focused first version costs far less than building every channel at once. We scope your needs in a free consultation and share a quote before work starts.",
    },
    {
      question: "Which technologies are used to build unified communications software?",
      answer:
        "It depends on your features and scale. Front ends are often built with React, services with Node.js or Python, and calling with SIP and WebRTC on engines such as FreeSWITCH. We choose the stack with you, based on your team's skills and the platform you want to run.",
    },
    {
      question: "Can unified communications work for a call center?",
      answer:
        "Yes. A UC platform gives agents voice, chat and email in one screen. Presence helps them find an available expert, and each customer has a shared history. For heavy inbound or outbound calling, we can pair it with our contact center product for queue and agent management.",
    },
  ],
  related: [
    { name: "Audio & Video Conferencing", href: "/audio-video-conferencing-solution" },
    { name: "Enterprise VoIP", href: "/enterprise-voip-solutions" },
    { name: "VoIP Business Solutions", href: "/voip-business-solutions" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
  ],
  cta: {
    title: "See unified communications in action",
    text: "Book a free demo and we'll walk you through calling, chat, presence and meetings in one app.",
  },
};

export default unifiedCommunications;
