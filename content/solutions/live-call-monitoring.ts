import {
  Activity,
  BarChart3,
  Ear,
  Eye,
  GraduationCap,
  Headset,
  Languages,
  Laptop,
  MessageSquareMore,
  MonitorPlay,
  Network,
  PhoneIncoming,
  ShieldAlert,
  Terminal,
  TrendingUp,
  UserCheck,
  Users,
  Cpu,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const liveCallMonitoring: SolutionPageContent = {
  kind: "solution",
  path: "/live-call-monitoring-solution",
  name: "Live Call Monitoring",
  eyebrow: "Solutions",
  seo: {
    title: "Live Call Monitoring Solution",
    description:
      "Live call monitoring solution for call centers and support teams: real-time dashboards, listen, whisper, barge-in, system health and reports. Book a demo.",
  },
  hero: {
    title: "Live Call Monitoring Solution for Supervisors and QA",
    subtitle:
      "See every ringing, active and conference call in real time. Listen in, coach agents quietly or take over, from a dashboard that fits your VoIP system.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "View Features",
  },
  highlights: [
    "Real-time call dashboard",
    "Listen, whisper & barge-in",
    "System & SIP health",
    "Works with existing VoIP",
  ],
  diagram: {
    center: { icon: MonitorPlay, label: "Live Monitoring" },
    nodes: [
      { icon: PhoneIncoming, label: "Active calls" },
      { icon: Headset, label: "Agents" },
      { icon: Eye, label: "Supervisors & QA" },
      { icon: Cpu, label: "System health" },
      { icon: BarChart3, label: "Reports" },
      { icon: Network, label: "VoIP platform" },
    ],
  },
  overview: {
    title: "What is a live call monitoring solution?",
    paragraphs: [
      "A live call monitoring solution shows supervisors what is happening on the phone system right now. They can watch calls, listen in and step in before a problem reaches the customer.",
      "Our system adds this layer to an IP PBX, call center, softswitch or voice logger, or runs on its own. QA teams get live statistics and recordings to train agents on real calls.",
    ],
    audiences: ["Call center supervisors", "QA & training teams", "Customer support managers", "VoIP operations teams"],
  },
  features: {
    title: "Live call monitoring features",
    items: [
      { icon: Activity, title: "Real-time dashboard", text: "See ringing, active and conference calls update live on one screen." },
      { icon: Ear, title: "Silent listening", text: "Listen to any ongoing call without the agent or customer hearing you." },
      { icon: MessageSquareMore, title: "Whisper coaching", text: "Speak to the agent only, so you can guide a tricky call in the moment." },
      { icon: Users, title: "Barge-in & takeover", text: "Join the call or take it over when a customer needs a senior voice." },
      { icon: Cpu, title: "System information", text: "Track CPU, memory, SIP registrations and hardware stats alongside calls." },
      { icon: Network, title: "Codec & trunk checks", text: "Confirm calls use the right codecs and trunks to catch quality issues early." },
      { icon: Terminal, title: "CLI command support", text: "Run switch commands from the panel so engineers can troubleshoot faster." },
      { icon: Laptop, title: "Remote access", text: "Monitor calls from any browser, whether supervisors are on site or at home." },
      { icon: Languages, title: "Multi-language panel", text: "Use the dashboard in your team's preferred language." },
      { icon: BarChart3, title: "Call reports", text: "Review call volumes, durations and agent activity over any period." },
    ],
  },
  benefits: {
    title: "What supervisors gain",
    items: [
      { icon: UserCheck, title: "Better call quality", text: "Spot problems as they happen and fix them before the customer hangs up unhappy." },
      { icon: GraduationCap, title: "Training on real calls", text: "Coach new agents with whisper and live examples instead of role-play alone." },
      { icon: TrendingUp, title: "Fewer lost deals", text: "Step into high-value sales calls when an agent needs help to close." },
      { icon: ShieldAlert, title: "Faster fraud response", text: "Spot suspicious calls on the live board and end them straight away." },
    ],
  },
  howItWorks: {
    title: "How real-time call monitoring works",
    text: "The monitoring layer connects to your VoIP platform's event and control interfaces. It streams call states to the dashboard and lets supervisors join any call in listen, whisper or barge mode with one click.",
    points: [
      "Connects to FreeSWITCH, Asterisk and similar platforms",
      "Runs alongside your existing system or as a standalone tool",
      "Browser-based dashboard with role-based access",
      "Custom widgets and integrations on request",
    ],
  },
  integrations: {
    title: "Add monitoring to",
    items: [
      { icon: Headset, title: "Call center solution", text: "Supervise inbound queues and outbound campaigns.", href: "/call-center-solution" },
      { icon: Network, title: "Multi-tenant IP PBX", text: "Monitor calls per tenant or branch.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Laptop, title: "FreeSWITCH development", text: "Custom ESL tools and call control.", href: "/services/freeswitch-development-service" },
      { icon: Terminal, title: "Asterisk development", text: "AMI-based monitoring for Asterisk systems.", href: "/services/asterisk-development-service" },
    ],
  },
  faqs: [
    {
      question: "How do supervisors monitor calls in real time?",
      answer:
        "Supervisors open the web dashboard and see every ringing, active and conference call as it happens. They click a call to listen silently, whisper to the agent or barge in. No extra hardware is needed, just a browser and a headset.",
    },
    {
      question: "Why should a call center use live call monitoring?",
      answer:
        "Recordings show problems after the fact, but live monitoring lets you fix them during the call. Supervisors can rescue unhappy customers, help agents close sales and coach new staff on real conversations. It also gives operations teams a live view of system health.",
    },
    {
      question: "How much does a live call monitoring system cost?",
      answer:
        "Cost depends on your VoIP platform, the features you need and any integrations. Adding monitoring to a system we support is usually a small project, while fully custom dashboards take longer. Share your setup and we will send a scoped estimate after a free demo.",
    },
    {
      question: "Can agents tell when a supervisor is listening?",
      answer:
        "In silent listen mode, neither the agent nor the customer hears the supervisor. You can also configure the system to notify agents when monitoring starts, if your policies or local rules require it. Whisper and barge modes are audible to the agent by design.",
    },
    {
      question: "Does live call monitoring work with my existing phone system?",
      answer:
        "It works with FreeSWITCH and Asterisk-based systems, including many IP PBX and call center platforms built on them. We check your setup during the demo and confirm what is needed. For other platforms, we can build a custom connector that reads call events and adds the same controls.",
    },
  ],
  related: [
    { name: "Call Center Solution", href: "/call-center-solution" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
    { name: "Enterprise VoIP Solutions", href: "/enterprise-voip-solutions" },
    { name: "Contact Center Product", href: "/our-products/contactcenter" },
  ],
  cta: {
    title: "Watch your calls live",
    text: "Book a free demo and we'll show you the monitoring dashboard connected to a working phone system.",
  },
};

export default liveCallMonitoring;
