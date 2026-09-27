import {
  Blocks,
  Building2,
  Cable,
  CreditCard,
  Globe,
  Headphones,
  Layers,
  LifeBuoy,
  MessagesSquare,
  Network,
  PhoneCall,
  Radio,
  Route,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Video,
  Workflow,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const voipDevelopment: ServicePageContent = {
  kind: "service",
  path: "/services/voip-development-service",
  name: "VoIP Development",
  eyebrow: "VoIP Development",
  seo: {
    title: "VoIP Software Development Company",
    description:
      "VoIP software development company building softswitches, IP PBX, call centers and WebRTC apps. Talk to our VoIP team for a free consultation.",
  },
  hero: {
    title: "VoIP Software Development Company for Custom Telecom Products",
    subtitle:
      "We build custom VoIP platforms for telecom providers and businesses. Softswitches, hosted PBX, call centers and WebRTC apps, on open-source stacks you fully own.",
    primaryCta: "Talk to Our VoIP Team",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "FreeSWITCH, Asterisk & Kamailio",
    "Web, desktop & mobile softphones",
    "Billing, CRM & API integrations",
    "Cloud or on-premise deployment",
  ],
  diagram: {
    center: { icon: ServerCog, label: "VoIP platform" },
    nodes: [
      { icon: Route, label: "SIP routing & SBC" },
      { icon: Headphones, label: "Call center" },
      { icon: Video, label: "WebRTC apps" },
      { icon: CreditCard, label: "Billing & rating" },
      { icon: Smartphone, label: "Mobile softphones" },
      { icon: Building2, label: "Hosted PBX" },
    ],
  },
  intro: {
    title: "Custom VoIP development, end to end",
    paragraphs: [
      "As a VoIP software development company, we design and build the voice systems your business sells or depends on. That covers SIP signaling, media servers, billing, admin portals and the apps your users call from. We work with telecom operators, VoIP providers and software companies adding voice to their products.",
      "You get one team for the whole stack. We pick the right open-source engine for your traffic and features, build what is missing, and stay on for support after launch.",
    ],
  },
  techStack: [
    "FreeSWITCH",
    "Asterisk",
    "Kamailio",
    "OpenSIPS",
    "WebRTC",
    "SIP.js",
    "RTPengine",
    "Node.js",
    "React",
    "MySQL",
    "PostgreSQL",
  ],
  services: {
    title: "VoIP development services we offer",
    items: [
      { icon: Blocks, title: "Custom VoIP software", text: "Build a voice product around your business model instead of bending an off-the-shelf system to fit." },
      { icon: Network, title: "SIP server engineering", text: "Set up Kamailio or OpenSIPS for routing, load balancing and security so your core scales with traffic." },
      { icon: Workflow, title: "Media & call logic", text: "Program IVRs, queues, recording and conferencing on FreeSWITCH or Asterisk to match your call flows." },
      { icon: Smartphone, title: "Softphones & web phones", text: "Give users browser, desktop and mobile calling apps that register to your own SIP platform." },
      { icon: Cable, title: "Billing & integrations", text: "Connect switching to rating, invoicing, CRMs and helpdesks so call data reaches every system you use." },
      { icon: LifeBuoy, title: "VoIP consulting & support", text: "Get help with architecture, stack choice, audits and ongoing maintenance for new or existing platforms." },
    ],
  },
  useCases: {
    title: "VoIP solutions we build",
    items: [
      { icon: Network, title: "Class 4 softswitch", text: "Wholesale routing, least-cost routing and carrier management.", href: "/class-4-softswitch-solution" },
      { icon: PhoneCall, title: "Class 5 softswitch", text: "Retail calling with hosted PBX features for service providers.", href: "/class-5-softswitch-solution" },
      { icon: Building2, title: "Multi-tenant IP PBX", text: "Hosted PBX you can brand and resell to business customers.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Headphones, title: "Call center solution", text: "Inbound and outbound dialing, queues, recording and reporting.", href: "/call-center-solution" },
      { icon: CreditCard, title: "VoIP billing", text: "Rating, invoicing and prepaid or postpaid account management.", href: "/voip-billing-solution" },
      { icon: MessagesSquare, title: "Unified communications", text: "Voice, video, chat and presence in a single platform.", href: "/unified-communications-solution" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for VoIP development",
    items: [
      { icon: Layers, title: "Every layer covered", text: "Signaling, media, billing, portals and apps come from one team, so nothing falls between vendors." },
      { icon: ShieldCheck, title: "You own the code", text: "We hand over source code and documentation, so you can run or extend the platform without us." },
      { icon: Globe, title: "Open-source first", text: "We build on proven open-source engines, which keeps licence costs down and avoids vendor lock-in." },
      { icon: Radio, title: "Support after launch", text: "We monitor, patch and extend your platform as your traffic and feature list grow." },
    ],
  },
  faqs: [
    {
      question: "How much does custom VoIP software development cost?",
      answer:
        "The cost depends on what you need built. A softphone or integration is a small project, while a full softswitch with billing and portals is a larger build. After a free call we send a written scope and estimate, and we can also work as a monthly dedicated team.",
    },
    {
      question: "Should I build a custom VoIP platform or white-label one?",
      answer:
        "White-labeling is faster to launch when an existing product already fits your needs. A custom build makes sense when you need your own features, pricing logic or integrations, or want to own the code. We help you compare both against your budget, timeline and roadmap before you commit.",
    },
    {
      question: "Which open-source VoIP stack should I use?",
      answer:
        "Most platforms combine a SIP proxy with a media server. Kamailio or OpenSIPS handles routing and scale, while FreeSWITCH or Asterisk handles calls, IVR and conferencing. We recommend a stack after reviewing your expected traffic, features, team skills and the systems it must connect to.",
    },
    {
      question: "Can you build a softswitch with a built-in WebRTC web phone?",
      answer:
        "Yes. We can build a softswitch plus a browser phone that registers over WebSocket. Users then call from Chrome, Firefox or Safari without installing anything. The same accounts can also work on desktop and mobile SIP softphones, and all calls follow your routing and billing rules.",
    },
    {
      question: "Do you offer VoIP solutions as well as custom development?",
      answer:
        "Yes. Alongside project work, we build solutions such as softswitches, multi-tenant IP PBX, call center and billing systems that we tailor to your brand and requirements. You can start from one of these and add custom features, instead of building everything from scratch.",
    },
    {
      question: "Can you host our VoIP platform in the cloud?",
      answer:
        "Yes. We deploy to the cloud provider you prefer or to your own data center, and set up monitoring, backups and scaling. Cloud hosting lets you add capacity as traffic grows and serve users in several regions, while on-premise suits teams with strict data or network rules.",
    },
  ],
  related: [
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "Kamailio Development", href: "/services/kamailio-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "VoIP Testing", href: "/services/voip-testing" },
  ],
  cta: {
    title: "Planning a VoIP product?",
    text: "Share your idea or current setup. Our VoIP team will review it and suggest a stack and plan.",
  },
};

export default voipDevelopment;
