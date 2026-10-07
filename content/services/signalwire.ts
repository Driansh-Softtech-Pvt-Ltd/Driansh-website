import {
  ArrowRightLeft,
  Blocks,
  Cable,
  Code2,
  Headphones,
  Layers,
  Lightbulb,
  MessageSquare,
  MessagesSquare,
  PhoneCall,
  Printer,
  Radio,
  ShieldCheck,
  Users,
  Video,
  Workflow,
  Zap,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const signalwire: ServicePageContent = {
  kind: "service",
  path: "/services/signalwire",
  name: "SignalWire Development",
  eyebrow: "VoIP Platforms",
  seo: {
    title: "SignalWire API Integration Services",
    description:
      "SignalWire API integration for voice, video, messaging and fax apps, plus Twilio migration and call flows. Talk to a SignalWire engineer today.",
  },
  hero: {
    title: "SignalWire API integration for voice and video apps",
    subtitle:
      "We build voice, video and messaging features on SignalWire APIs and SDKs, and connect them to your existing VoIP platform, CRM or web app.",
    primaryCta: "Talk to a SignalWire engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "Voice, video, SMS & fax APIs",
    "Twilio-to-SignalWire migration",
    "Custom call flows & IVR",
    "Integration with existing VoIP",
  ],
  diagram: {
    center: { icon: Zap, label: "SignalWire APIs" },
    nodes: [
      { icon: PhoneCall, label: "Voice & IVR" },
      { icon: Video, label: "Video rooms" },
      { icon: MessageSquare, label: "SMS & chat" },
      { icon: Printer, label: "Fax" },
      { icon: Cable, label: "Your app & CRM" },
    ],
  },
  intro: {
    title: "What we build with SignalWire",
    paragraphs: [
      "SignalWire API integration lets you add calling, video, messaging and fax to your product without running your own carrier network. We pick the right SignalWire APIs, write the application logic and connect it to the systems you already use.",
      "SignalWire comes from the team behind FreeSWITCH, and we build with both. That helps when a project mixes cloud APIs with self-hosted switching, or when you are moving off another CPaaS.",
    ],
  },
  techStack: ["SignalWire", "SWML", "cXML / LaML", "REST APIs", "WebSockets", "Realtime SDK", "FreeSWITCH", "WebRTC", "Node.js", "Python"],
  services: {
    title: "SignalWire development services we offer",
    items: [
      { icon: Lightbulb, title: "SignalWire consulting", text: "Review your use case and map it to the right APIs, pricing model and architecture before you build." },
      { icon: Cable, title: "API integration", text: "Add SignalWire voice, video, SMS or fax to your app, so users can communicate without leaving it." },
      { icon: Workflow, title: "Call flows & IVR", text: "Build routing, IVR menus and call queues with SWML or cXML, so calls reach the right place." },
      { icon: ArrowRightLeft, title: "Twilio migration", text: "Move numbers, webhooks and call logic from Twilio to SignalWire with minimal code changes." },
      { icon: Video, title: "Video & WebRTC apps", text: "Build browser and mobile video rooms with SignalWire SDKs for meetings, support or telehealth." },
      { icon: Blocks, title: "Third-party integration", text: "Sync calls, messages and recordings with CRMs, helpdesks and billing tools your team already uses." },
    ],
  },
  useCases: {
    title: "Products we build on SignalWire",
    items: [
      { icon: Headphones, title: "Call center software", text: "Cloud call centers with queues, recording and agent dashboards.", href: "/call-center-solution" },
      { icon: Users, title: "Audio & video conferencing", text: "Browser meetings with screen share and moderator controls.", href: "/audio-video-conferencing-solution" },
      { icon: MessagesSquare, title: "Unified communications", text: "Voice, video and messaging combined in one product.", href: "/unified-communications-solution" },
      { icon: Printer, title: "Online faxing", text: "Send and receive faxes from email, web or API.", href: "/faxing-solution" },
      { icon: Radio, title: "Voice broadcasting", text: "Automated voice and SMS campaigns, alerts and reminders.", href: "/voice-broadcasting-solution" },
    ],
  },
  whyUs: {
    title: "Why choose Driansh for SignalWire",
    items: [
      { icon: Layers, title: "FreeSWITCH background", text: "We know the engine SignalWire grew from, so we can mix cloud APIs with self-hosted switching when it helps." },
      { icon: Code2, title: "Clear, tested code", text: "We write documented, tested integrations your own developers can maintain after launch." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code and configuration are handed over, and your SignalWire account stays in your name." },
    ],
  },
  faqs: [
    {
      question: "What is the difference between SignalWire and Twilio?",
      answer:
        "Both are cloud communications platforms with APIs for voice, messaging and video. SignalWire was founded by the creators of FreeSWITCH and offers a Twilio-compatible markup and REST API, plus its own SWML language and realtime SDKs. Pricing and features differ, so we compare both against your use case.",
    },
    {
      question: "How hard is it to migrate from Twilio to SignalWire?",
      answer:
        "For most apps it is straightforward. SignalWire's compatibility API accepts TwiML-style markup, so much of your call logic moves with small changes to endpoints and credentials. Numbers are ported separately. We audit your code, flag unsupported features and run test calls before switching traffic.",
    },
    {
      question: "Can SignalWire connect to our existing PBX or softswitch?",
      answer:
        "Yes. SignalWire supports SIP, so it can send and receive calls with Asterisk, FreeSWITCH, FusionPBX or a hosted PBX. We set up the SIP endpoints, routing and security so cloud features like IVR or video work alongside your current system.",
    },
    {
      question: "What can you build with the SignalWire API?",
      answer:
        "You can build IVRs, call centers, click-to-call buttons, SMS notifications, video meetings, fax services and AI voice agents. The APIs handle numbers, media and carriers, so your team focuses on the app logic. We help you choose which products fit your plan.",
    },
    {
      question: "How long does a SignalWire integration take?",
      answer:
        "A single feature, such as SMS alerts or click-to-call, can be ready in a few weeks. A full product with video, call queues and CRM sync takes longer. We confirm scope and timeline in a free consultation, then deliver in short sprints with working demos.",
    },
  ],
  related: [
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "SIP.js Development", href: "/services/sip-js-development-service" },
    { name: "VoIP Development", href: "/services/voip-development-service" },
  ],
  cta: {
    title: "Building on SignalWire?",
    text: "Share your use case and current stack. A SignalWire engineer will suggest the right APIs and an integration plan.",
  },
};

export default signalwire;
