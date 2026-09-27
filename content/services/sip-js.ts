import {
  Blocks,
  Cable,
  Code2,
  Globe,
  Headphones,
  Layers,
  LifeBuoy,
  MessagesSquare,
  PhoneCall,
  PhoneForwarded,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const sipJs: ServicePageContent = {
  kind: "service",
  path: "/services/sip-js-development-service",
  name: "SIP.js Development",
  eyebrow: "Open Source Development",
  seo: {
    title: "SIP.js Development Services",
    description:
      "SIP.js development for browser softphones, click-to-call, video calls and agent panels that connect to your SIP server. Talk to a SIP.js engineer today.",
  },
  hero: {
    title: "SIP.js Development Services for Browser Calling Apps",
    subtitle:
      "We build SIP.js web phones, click-to-call widgets and video features that register to your SIP server, so your users call straight from the browser.",
    primaryCta: "Talk to a SIP.js Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Browser softphones & widgets",
    "Asterisk & FreeSWITCH ready",
    "React, Vue & Angular front ends",
    "Hire a dedicated SIP.js developer",
  ],
  diagram: {
    center: { icon: Code2, label: "SIP.js" },
    nodes: [
      { icon: Globe, label: "Web app UI" },
      { icon: ServerCog, label: "SIP server" },
      { icon: PhoneCall, label: "PSTN & trunks" },
      { icon: Video, label: "Video calls" },
      { icon: MessagesSquare, label: "SIP messaging" },
      { icon: Headphones, label: "Agent desktop" },
    ],
  },
  intro: {
    title: "What we build with SIP.js",
    paragraphs: [
      "SIP.js development brings SIP calling into any web app using a JavaScript library built on WebRTC. We build web softphones, click-to-call buttons, video calls and agent panels that register to your existing SIP server.",
      "On the server side, we set up Asterisk, FreeSWITCH or Kamailio for WebSocket and WebRTC media. You can hire one SIP.js developer or a small team, full time or per project. Either way, we test calls across Chrome, Firefox, Safari and Edge before your launch date.",
    ],
  },
  techStack: ["SIP.js", "WebRTC", "JavaScript", "TypeScript", "React", "Vue", "Angular", "Asterisk", "FreeSWITCH", "Kamailio", "Node.js"],
  services: {
    title: "SIP.js development services we offer",
    items: [
      { icon: PhoneCall, title: "Web softphone development", text: "Build a branded browser phone with dialpad, transfer, hold and call history for your users." },
      { icon: PhoneForwarded, title: "Click-to-call widgets", text: "Add a call button to your site or app so visitors reach your team without dialing." },
      { icon: Cable, title: "SIP.js integration", text: "Embed calling into your CRM, helpdesk or SaaS product and link calls to customer records." },
      { icon: ServerCog, title: "SIP server setup", text: "Configure WebSocket, TLS and media on Asterisk, FreeSWITCH or Kamailio so SIP.js clients connect reliably." },
      { icon: Wrench, title: "Upgrades & debugging", text: "Move older apps to current SIP.js versions and fix one-way audio, registration or NAT issues." },
      { icon: LifeBuoy, title: "SIP.js consulting", text: "Get advice on architecture, codecs and browser support before you commit to a build." },
    ],
  },
  useCases: {
    title: "Solutions we build with SIP.js",
    items: [
      { icon: Users, title: "Audio & video conferencing", text: "Browser meeting rooms that also accept SIP and phone callers.", href: "/audio-video-conferencing-solution" },
      { icon: Headphones, title: "Call center agent panels", text: "Web softphones built into the agent desktop.", href: "/call-center-solution" },
      { icon: MessagesSquare, title: "Unified communications", text: "Calls, chat and presence inside one web workspace.", href: "/unified-communications-solution" },
      { icon: Smartphone, title: "Multi-tenant IP PBX", text: "Browser phones for every tenant on your hosted PBX.", href: "/multi-tenant-ip-pbx-solution" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for SIP.js",
    items: [
      { icon: Layers, title: "Client and server", text: "We build the SIP.js front end and the SIP server behind it, so calls work end to end." },
      { icon: Blocks, title: "Any front-end stack", text: "We work in React, Vue, Angular or plain JavaScript, matching the code your team already uses." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code and documentation are handed over, so your team can maintain the app freely." },
    ],
  },
  faqs: [
    {
      question: "What is SIP.js?",
      answer:
        "SIP.js is an open-source JavaScript library for making SIP calls from a web browser. It uses WebRTC for audio and video, and SIP over WebSocket for signaling. That lets a web page act as a SIP phone on servers such as Asterisk, FreeSWITCH or Kamailio.",
    },
    {
      question: "Can I hire a dedicated SIP.js developer?",
      answer:
        "Yes. You can hire a SIP.js developer full time, part time or for a fixed project. They join your team's tools and schedule, and can work on the browser client, the SIP server setup or both. We can also add more engineers if the scope grows.",
    },
    {
      question: "Does SIP.js work with Asterisk and FreeSWITCH?",
      answer:
        "Yes. Both support SIP over WebSocket and WebRTC media, which SIP.js needs. The server must be configured for secure WebSockets, TLS certificates and DTLS-SRTP. We handle that setup and test registration, calls and transfers across browsers before your users go live.",
    },
    {
      question: "SIP.js or JsSIP: which library should I use?",
      answer:
        "Both are open-source JavaScript SIP libraries that work with WebRTC. SIP.js has a more structured, TypeScript-based API, while JsSIP is smaller and simpler. We choose based on the features you need, your front-end framework and the SIP server you run, and we can work with either.",
    },
    {
      question: "Why do SIP.js calls have one-way or no audio?",
      answer:
        "One-way audio is usually a NAT or ICE problem. The browser and server cannot agree on a media path, often because STUN or TURN is missing or the firewall blocks media ports. We check ICE candidates, TURN setup and server media settings to find and fix the cause.",
    },
  ],
  related: [
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "Asterisk Development", href: "/services/asterisk-development-service" },
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "Linphone App Development", href: "/services/linphone-app-development" },
  ],
  cta: {
    title: "Adding calling to your web app?",
    text: "Tell us about your app and SIP server. A SIP.js engineer will review it and suggest how to build it.",
  },
};

export default sipJs;
