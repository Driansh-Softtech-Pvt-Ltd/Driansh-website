import {
  Blocks,
  Building2,
  Cable,
  Cloud,
  Code2,
  Gauge,
  Headphones,
  Layers,
  LifeBuoy,
  MessagesSquare,
  Network,
  PhoneCall,
  Radio,
  ServerCog,
  ShieldCheck,
  Users,
  Video,
  Workflow,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const freeswitch: ServicePageContent = {
  kind: "service",
  path: "/services/freeswitch-development-service",
  name: "FreeSWITCH Development",
  eyebrow: "VoIP Development",
  seo: {
    title: "FreeSWITCH Development Services",
    description:
      "Custom FreeSWITCH development: modules, ESL and API integrations, softswitches, IP PBX and call centers. Talk to a FreeSWITCH engineer for a free consultation.",
  },
  hero: {
    title: "FreeSWITCH development services for scalable voice platforms",
    subtitle:
      "We design, build and scale FreeSWITCH platforms, from custom modules and ESL integrations to softswitches and call centers, for telecom providers and product teams.",
    primaryCta: "Talk to a FreeSWITCH engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "Custom modules & dialplans",
    "ESL, API & CRM integrations",
    "Multi-tenant & white-label ready",
    "Cloud or on-premise deployment",
  ],
  diagram: {
    center: { icon: ServerCog, label: "FreeSWITCH" },
    nodes: [
      { icon: PhoneCall, label: "SIP trunks & carriers" },
      { icon: Headphones, label: "Call center" },
      { icon: Video, label: "WebRTC & video" },
      { icon: Workflow, label: "IVR & dialplan" },
      { icon: Cable, label: "CRM & APIs" },
      { icon: Building2, label: "Multi-tenant PBX" },
    ],
  },
  intro: {
    title: "What we build with FreeSWITCH",
    paragraphs: [
      "FreeSWITCH development is how we turn an open-source telephony engine into a product your business can sell or run on. We write custom modules, dialplans and Lua or ESL applications, and connect FreeSWITCH to the billing, CRM and web systems you already use.",
      "Our team works with telecom operators, VoIP providers and software companies that need voice, video or conferencing features without building a switch from scratch.",
    ],
  },
  techStack: ["FreeSWITCH", "Kamailio", "OpenSIPS", "WebRTC", "SIP", "Lua", "ESL", "Node.js", "PostgreSQL", "Redis"],
  services: {
    title: "FreeSWITCH development services we offer",
    items: [
      { icon: Code2, title: "Custom module development", text: "Add features FreeSWITCH doesn't ship with, written as maintainable C or Lua modules." },
      { icon: Cable, title: "ESL & API integration", text: "Control calls from your app and sync events with CRMs, billing and ticketing systems." },
      { icon: Workflow, title: "IVR & dialplan design", text: "Build call flows, routing rules and self-service menus that match how your business works." },
      { icon: Building2, title: "Multi-tenant platforms", text: "Serve many customers from one FreeSWITCH cluster, each with isolated settings and branding." },
      { icon: Gauge, title: "Scaling & performance", text: "Tune, cluster and load-balance FreeSWITCH so call quality holds up as traffic grows." },
      { icon: LifeBuoy, title: "Support & upgrades", text: "Keep existing deployments patched, monitored and upgraded to current FreeSWITCH releases." },
    ],
  },
  useCases: {
    title: "Solutions we build on FreeSWITCH",
    items: [
      { icon: Network, title: "Class 5 softswitch", text: "Retail VoIP switching with hosted PBX features for service providers.", href: "/class-5-softswitch-solution" },
      { icon: Building2, title: "Multi-tenant IP PBX", text: "Hosted PBX you can resell to many business customers.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Headphones, title: "Call center software", text: "Inbound and outbound dialing, queues, recording and reports.", href: "/call-center-solution" },
      { icon: Users, title: "Audio & video conferencing", text: "Browser and phone conferencing with moderator controls.", href: "/audio-video-conferencing-solution" },
      { icon: Radio, title: "Voice broadcasting", text: "Automated voice campaigns, alerts and reminders at scale.", href: "/voice-broadcasting-solution" },
      { icon: MessagesSquare, title: "Unified communications", text: "Voice, video, chat and presence in one platform.", href: "/unified-communications-solution" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for FreeSWITCH",
    items: [
      { icon: Layers, title: "Full VoIP stack", text: "We also build with Kamailio, OpenSIPS and WebRTC, so one team covers signaling, media and apps." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code and documentation are handed over, so you are never locked in to us." },
      { icon: Blocks, title: "Built to extend", text: "Clean modules and APIs make it easy to add features later without rewrites." },
      { icon: Cloud, title: "Deploy anywhere", text: "We ship to your data center, AWS, Azure or any cloud you prefer." },
    ],
  },
  faqs: [
    {
      question: "What is FreeSWITCH used for?",
      answer:
        "FreeSWITCH is an open-source telephony platform used to build softswitches, IP PBX systems, call centers, conferencing and WebRTC apps. It handles call routing, media, codecs and recording, and can be extended with modules and scripts, which makes it a common base for custom VoIP products.",
    },
    {
      question: "How much does FreeSWITCH development cost?",
      answer:
        "Cost depends on scope: a small integration or custom module can take a few weeks, while a full softswitch or multi-tenant platform takes several months. We share a fixed-scope estimate after a free discovery call, and can also work on a monthly dedicated-team basis.",
    },
    {
      question: "Can you customize or fix our existing FreeSWITCH setup?",
      answer:
        "Yes. We audit existing FreeSWITCH deployments, fix call-quality and stability issues, upgrade to current releases and add new features. We can take over code written by another team as long as we have access to the servers and source.",
    },
    {
      question: "Do you integrate FreeSWITCH with CRMs and billing systems?",
      answer:
        "Yes. We use the Event Socket Library (ESL) and REST APIs to connect FreeSWITCH with CRMs, helpdesks, billing platforms and your own applications, so calls, recordings and call records flow into the tools your team already uses.",
    },
    {
      question: "FreeSWITCH or Asterisk: which should we choose?",
      answer:
        "FreeSWITCH usually suits high-concurrency, multi-tenant and media-heavy platforms, while Asterisk is often simpler for smaller PBX projects. We work with both and recommend one after looking at your expected traffic, features and existing systems.",
    },
    {
      question: "Who owns the code you write?",
      answer:
        "You do. When the project is complete we hand over the source code, configuration and documentation, and you are free to maintain it yourself or keep us on for support.",
    },
  ],
  related: [
    { name: "Kamailio Development", href: "/services/kamailio-development-service" },
    { name: "OpenSIPS Development", href: "/services/opensips-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "Asterisk Development", href: "/services/asterisk-development-service" },
  ],
  cta: {
    title: "Planning a FreeSWITCH project?",
    text: "Tell us what you want to build. A FreeSWITCH engineer will review it and suggest the right architecture.",
  },
};

export default freeswitch;
