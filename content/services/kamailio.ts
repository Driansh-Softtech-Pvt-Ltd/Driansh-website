import {
  Activity,
  Blocks,
  Building2,
  Code2,
  Database,
  Gauge,
  Globe,
  Layers,
  LifeBuoy,
  MessagesSquare,
  Network,
  PhoneCall,
  Route,
  Server,
  ServerCog,
  Shield,
  ShieldCheck,
  Split,
  Video,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const kamailio: ServicePageContent = {
  kind: "service",
  path: "/services/kamailio-development-service",
  name: "Kamailio Development",
  eyebrow: "VoIP Development",
  seo: {
    title: "Kamailio Development Services",
    description:
      "Kamailio development for SIP proxies, load balancers, registrars and edge security, built to scale with your traffic. Talk to a Kamailio engineer today.",
  },
  hero: {
    title: "Kamailio development services for high-capacity SIP networks",
    subtitle:
      "We build Kamailio SIP proxies, load balancers and registrars that route, secure and scale your voice traffic, for carriers, VoIP providers and platform teams.",
    primaryCta: "Talk to a Kamailio engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "SIP routing & load balancing",
    "Registrar & presence services",
    "DoS and fraud protection",
    "WebRTC & SIP over WebSocket",
  ],
  diagram: {
    center: { icon: ServerCog, label: "Kamailio" },
    nodes: [
      { icon: PhoneCall, label: "SIP phones & apps" },
      { icon: Route, label: "Carriers & trunks" },
      { icon: Server, label: "Media servers" },
      { icon: Shield, label: "Edge security" },
      { icon: Video, label: "WebRTC clients" },
      { icon: Database, label: "Routing DB" },
    ],
  },
  intro: {
    title: "What we build with Kamailio",
    paragraphs: [
      "Kamailio development is how we give your VoIP platform a fast, flexible SIP core. We write routing scripts and custom modules, and configure Kamailio as a proxy, registrar, load balancer or edge server. We work with carriers, VoIP providers and SaaS product teams alike.",
      "Kamailio handles signaling, not media. So we pair it with FreeSWITCH, Asterisk or RTPengine, and connect it to your databases and APIs. The result is a network that keeps up as users and call volumes grow.",
    ],
  },
  techStack: ["Kamailio", "SIP", "RTPengine", "FreeSWITCH", "Asterisk", "WebRTC", "Lua", "Python", "MySQL", "PostgreSQL", "Redis"],
  services: {
    title: "Kamailio development services we offer",
    items: [
      { icon: Code2, title: "Routing script development", text: "Write clear Kamailio routing logic for number lookups, least-cost routes and per-customer rules." },
      { icon: Split, title: "Load balancing & failover", text: "Spread calls across media servers with the dispatcher module, so a failed node never drops service." },
      { icon: Shield, title: "SIP edge security", text: "Block scanners, floods and toll fraud with rate limits, IP filtering and authentication at the edge." },
      { icon: Globe, title: "WebRTC gateway", text: "Let browsers register over WebSocket and bridge them to your SIP network through RTPengine." },
      { icon: Blocks, title: "Custom modules & APIs", text: "Extend Kamailio with new modules or HTTP and JSON-RPC calls to your own services." },
      { icon: LifeBuoy, title: "Tuning & support", text: "Profile, tune and monitor existing Kamailio clusters, and keep them on supported releases." },
    ],
  },
  useCases: {
    title: "Solutions we build with Kamailio",
    items: [
      { icon: Network, title: "Class 4 softswitch", text: "Wholesale routing between carriers with failover and rate-based routes.", href: "/class-4-softswitch-solution" },
      { icon: PhoneCall, title: "Class 5 softswitch", text: "Retail subscriber registration and calling at provider scale.", href: "/class-5-softswitch-solution" },
      { icon: Building2, title: "Multi-tenant IP PBX", text: "A SIP front end that directs each tenant to the right PBX node.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: MessagesSquare, title: "Unified communications", text: "Presence, messaging and calls on one SIP platform.", href: "/unified-communications-solution" },
      { icon: Video, title: "Audio & video conferencing", text: "Browser and SIP users joining the same conference rooms.", href: "/audio-video-conferencing-solution" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for Kamailio",
    items: [
      { icon: Layers, title: "Signaling plus media", text: "We build the media side too, so Kamailio and your FreeSWITCH or Asterisk servers work as one system." },
      { icon: Activity, title: "Tested under load", text: "We load-test routing and failover before launch, so you see how the platform behaves at peak." },
      { icon: ShieldCheck, title: "You own the code", text: "Routing scripts, modules and documentation are handed over, with no lock-in to our team." },
      { icon: Gauge, title: "Built to grow", text: "Stateless designs and shared databases let you add servers when traffic rises, without a redesign." },
    ],
  },
  faqs: [
    {
      question: "What is Kamailio used for?",
      answer:
        "Kamailio is an open-source SIP server used as a proxy, registrar, load balancer and edge router. It handles SIP signaling for large numbers of users, then passes media to servers like FreeSWITCH or Asterisk. Providers use it to route, secure and scale softswitches, hosted PBX and WebRTC platforms.",
    },
    {
      question: "Kamailio vs OpenSIPS: what is the difference?",
      answer:
        "Both are open-source SIP servers that grew from the same original project, so they share many ideas. Their module sets, scripting syntax and release cycles now differ. We pick one based on the modules your features need, your team's familiarity and how it fits the rest of your stack.",
    },
    {
      question: "Can Kamailio protect our VoIP platform from SIP attacks?",
      answer:
        "Yes. Kamailio can sit at the edge and filter traffic before it reaches your PBX or media servers. We set up rate limiting, IP blocking, authentication and fraud checks, so scanners and floods are dropped early. It works well alongside a firewall and a dedicated SBC if you have one.",
    },
    {
      question: "How much does Kamailio development cost?",
      answer:
        "Cost depends on the scope. A single routing change or security setup is a short job. A full SIP core with load balancing, WebRTC and custom modules takes longer. We share a fixed-scope estimate after a free technical call, or you can hire our engineers monthly.",
    },
    {
      question: "Can Kamailio work with WebRTC?",
      answer:
        "Yes. Kamailio supports SIP over WebSocket, so browser clients can register and make calls like any SIP phone. We pair it with RTPengine to convert WebRTC media for regular SIP endpoints. This lets web users, desk phones and mobile apps call each other on the same platform.",
    },
  ],
  related: [
    { name: "OpenSIPS Development", href: "/services/opensips-development-service" },
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "VoIP Testing", href: "/services/voip-testing" },
  ],
  cta: {
    title: "Scaling your SIP network?",
    text: "Tell us about your traffic and setup. A Kamailio engineer will review it and suggest an architecture.",
  },
};

export default kamailio;
