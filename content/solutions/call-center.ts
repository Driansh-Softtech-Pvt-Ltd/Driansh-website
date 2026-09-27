import {
  BarChart3,
  Building2,
  Contact,
  Ear,
  FileText,
  Headset,
  Layers,
  ListChecks,
  MessageSquare,
  MessagesSquare,
  MonitorPlay,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Radio,
  Server,
  ShieldBan,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const callCenter: SolutionPageContent = {
  kind: "solution",
  path: "/call-center-solution",
  name: "Call Center Solution",
  eyebrow: "Solutions",
  seo: {
    title: "Call Center Solution on FreeSWITCH",
    description:
      "Call center solution with ACD, predictive and progressive dialers, IVR, live monitoring and omnichannel chat for inbound and outbound teams. Book a demo.",
  },
  hero: {
    title: "Call Center Solution for Inbound and Outbound Teams",
    subtitle:
      "Run inbound queues, outbound campaigns and chat channels from one FreeSWITCH-based contact center platform, with single or multi-tenant setups and source code you own.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "View Features",
  },
  highlights: [
    "Inbound, outbound & blended",
    "Predictive & progressive dialers",
    "Single or multi-tenant",
    "Cloud or on-premise",
  ],
  diagram: {
    center: { icon: Headset, label: "Call Center Platform" },
    nodes: [
      { icon: PhoneIncoming, label: "Inbound queues" },
      { icon: PhoneOutgoing, label: "Outbound dialers" },
      { icon: Users, label: "Agents & supervisors" },
      { icon: MessagesSquare, label: "Chat & social" },
      { icon: Contact, label: "CRM" },
      { icon: BarChart3, label: "Live reports" },
    ],
  },
  overview: {
    title: "What is a call center solution?",
    paragraphs: [
      "A call center solution is software that routes customer calls to agents, dials outbound leads and records every interaction. Ours handles inbound, outbound and blended work in one system.",
      "Agents get calls, scripts, customer details and chat in a single screen. Supervisors watch queues live and step into calls when needed. Run it for one business, or host many call centers as tenants.",
    ],
    audiences: ["Customer support teams", "Sales & telemarketing", "BPO operators", "Hosted call center providers"],
  },
  features: {
    title: "Call center software features",
    items: [
      { icon: Workflow, title: "Smart call distribution", text: "Route calls by skill, round robin, fewest calls or sticky agent so customers reach the right person." },
      { icon: PhoneOutgoing, title: "Four dialer modes", text: "Switch between predictive, progressive, preview and manual dialing to match each campaign." },
      { icon: Layers, title: "IVR & time conditions", text: "Build menus and holiday or after-hours rules without touching code." },
      { icon: ListChecks, title: "Campaign & lead lists", text: "Upload leads, filter them and assign campaigns to agent groups in a few clicks." },
      { icon: ShieldBan, title: "DNC & blacklists", text: "Block numbers and honour do-not-call lists on every outbound campaign." },
      { icon: PhoneCall, title: "Answering machine detection", text: "Skip voicemail greetings so agents only talk to real people." },
      { icon: FileText, title: "Scripts & dispositions", text: "Guide agents with call scripts and capture a result code for every call." },
      { icon: Ear, title: "Listen, whisper, barge", text: "Coach agents live without the customer hearing, or join the call yourself." },
      { icon: MessageSquare, title: "Omnichannel inbox", text: "Handle SMS, WhatsApp, email and social messages alongside voice calls." },
      { icon: BarChart3, title: "Recordings & reports", text: "Archive call recordings and track agent, queue and campaign statistics." },
    ],
  },
  benefits: {
    title: "Why teams switch to it",
    items: [
      { icon: TrendingUp, title: "More live conversations", text: "Predictive dialing and answering machine detection keep agents talking instead of waiting." },
      { icon: PhoneIncoming, title: "Faster first-call fixes", text: "Skill-based routing and customer context help agents solve issues on the first call." },
      { icon: MonitorPlay, title: "Better coaching", text: "Live dashboards, whisper and recordings let supervisors train agents on real calls." },
      { icon: Building2, title: "New revenue stream", text: "Multi-tenant mode lets you rent call center seats to other businesses under your brand." },
    ],
  },
  howItWorks: {
    title: "One contact center platform, built on FreeSWITCH",
    text: "Calls and messages enter through your SIP trunks and channels. The platform routes them to queues or dialer campaigns, delivers them to agents in the browser, and logs recordings and results for reporting.",
    points: [
      "FreeSWITCH voice engine with browser-based agent panel",
      "Single-tenant or multi-tenant deployment on cloud or your servers",
      "CRM, PBX and billing integrations",
      "Custom features and full source code on request",
    ],
  },
  integrations: {
    title: "Extend your call center",
    items: [
      { icon: Headset, title: "Contact Center product", text: "See our ready-to-run contact center software.", href: "/our-products/contactcenter" },
      { icon: MonitorPlay, title: "Live call monitoring", text: "Real-time dashboards for supervisors and QA teams.", href: "/live-call-monitoring-solution" },
      { icon: Radio, title: "Voice broadcasting", text: "Send pre-recorded messages to large contact lists.", href: "/voice-broadcasting-solution" },
      { icon: Server, title: "VICIdial development", text: "Customise or migrate an existing VICIdial setup.", href: "/services/vicidial-development-service" },
    ],
  },
  faqs: [
    {
      question: "How much does call center software development cost?",
      answer:
        "The cost depends on seat count, dialer modes, channels and integrations. Starting from our existing platform is much cheaper than building from scratch, because you pay only for setup and the custom work you need. Share your requirements and we will send a fixed-scope estimate after a free demo.",
    },
    {
      question: "Can the call center run in the cloud?",
      answer:
        "Yes. You can host it in a cloud of your choice, on your own servers, or across both. Agents work from a web browser, so remote and home-based teams need only a headset and an internet connection. We handle installation and configuration for you.",
    },
    {
      question: "What is the difference between predictive and progressive dialing?",
      answer:
        "A predictive dialer calls several numbers per free agent and connects only answered calls, which suits large outbound campaigns. A progressive dialer calls one number when an agent becomes free, which is slower but avoids dropped calls. Our platform supports both, plus preview and manual modes.",
    },
    {
      question: "Can I resell call center seats to other businesses?",
      answer:
        "Yes. In multi-tenant mode each client gets its own agents, campaigns, numbers and reports, fully separated from other tenants. You manage everything from one admin panel and can apply your own branding, so you can sell hosted call center services to smaller teams.",
    },
    {
      question: "Does the call center software integrate with my CRM?",
      answer:
        "Yes. Agents can see CRM records when a call arrives, and call results can be written back automatically. We connect to common CRMs through their APIs and can build a custom connector for in-house systems. Tell us which CRM you use during the demo.",
    },
  ],
  related: [
    { name: "Live Call Monitoring", href: "/live-call-monitoring-solution" },
    { name: "Voice Broadcasting", href: "/voice-broadcasting-solution" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
    { name: "Unified Communications", href: "/unified-communications-solution" },
  ],
  cta: {
    title: "See the call center solution live",
    text: "Book a free demo and we'll show you routing, dialers and supervisor tools set up for your team.",
  },
};

export default callCenter;
