import {
  Blocks,
  Building2,
  Code2,
  CreditCard,
  Database,
  Eye,
  Gauge,
  Layers,
  LifeBuoy,
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

const opensips: ServicePageContent = {
  kind: "service",
  path: "/services/opensips-development-service",
  name: "OpenSIPS Development",
  eyebrow: "VoIP Development",
  seo: {
    title: "OpenSIPS Development Services",
    description:
      "OpenSIPS development for SIP routing, load balancing, SBC and Class 4 softswitch platforms for carriers and ITSPs. Talk to an OpenSIPS engineer today.",
  },
  hero: {
    title: "OpenSIPS Development Services for Carrier-Grade SIP Routing",
    subtitle:
      "We build OpenSIPS routing engines, load balancers and session border controllers for carriers, wholesale providers and ITSPs that need fast, controllable SIP traffic.",
    primaryCta: "Talk to an OpenSIPS Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Dynamic routing & LCR",
    "Load balancing with failover",
    "SBC & topology hiding",
    "Clustering & high availability",
  ],
  diagram: {
    center: { icon: ServerCog, label: "OpenSIPS" },
    nodes: [
      { icon: Route, label: "Carrier routes" },
      { icon: Split, label: "Load balancer" },
      { icon: Shield, label: "SBC & security" },
      { icon: Server, label: "Media servers" },
      { icon: CreditCard, label: "Billing & CDRs" },
      { icon: Database, label: "Routing DB" },
    ],
  },
  intro: {
    title: "What we build with OpenSIPS",
    paragraphs: [
      "OpenSIPS development is the work of turning this open-source SIP server into the routing brain of your network. We configure and script OpenSIPS for dynamic routing, load balancing, SBC duties and clustering.",
      "It suits carriers, wholesale providers and ITSPs that handle heavy SIP traffic. We connect it to your billing, rate tables and media servers. You also get a control panel or API to manage routes without editing config files. Changes go through staging first, so live traffic stays stable.",
    ],
  },
  techStack: ["OpenSIPS", "SIP", "SDP", "RTPengine", "FreeSWITCH", "WebRTC", "TLS", "Python", "MySQL", "PostgreSQL", "Redis"],
  services: {
    title: "OpenSIPS development services we offer",
    items: [
      { icon: Code2, title: "Custom OpenSIPS builds", text: "Script routing logic and add modules so OpenSIPS enforces your exact carrier and customer rules." },
      { icon: Route, title: "Dynamic routing & LCR", text: "Route each call by prefix, cost or quality using drouting, so you protect margins on every destination." },
      { icon: Split, title: "Load balancing", text: "Spread traffic across gateways and media servers, and reroute calls automatically when one fails." },
      { icon: Shield, title: "SBC development", text: "Hide your topology, normalize SIP headers and block abusive traffic before it reaches your core." },
      { icon: Gauge, title: "Clustering & HA", text: "Share state across OpenSIPS nodes so a server failure or upgrade does not interrupt calls." },
      { icon: LifeBuoy, title: "Consulting & support", text: "Review, debug and upgrade existing OpenSIPS deployments, with ongoing maintenance when you need it." },
    ],
  },
  useCases: {
    title: "Solutions we build on OpenSIPS",
    items: [
      { icon: Network, title: "Class 4 softswitch", text: "Wholesale switching with least-cost routing and carrier management.", href: "/class-4-softswitch-solution" },
      { icon: CreditCard, title: "VoIP billing", text: "Real-time rating and CDRs fed straight from the routing layer.", href: "/voip-billing-solution" },
      { icon: PhoneCall, title: "Class 5 softswitch", text: "Subscriber registration and retail calling for service providers.", href: "/class-5-softswitch-solution" },
      { icon: Building2, title: "Multi-tenant IP PBX", text: "A SIP front end that serves many tenants from shared servers.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Eye, title: "Live call monitoring", text: "Watch active calls, routes and quality as traffic flows.", href: "/live-call-monitoring-solution" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for OpenSIPS",
    items: [
      { icon: Layers, title: "Routing and billing", text: "We build the switch, rating and portals together, so routes and invoices always match." },
      { icon: ShieldCheck, title: "You own the code", text: "Scripts, modules and documentation are yours at handover, with no licence or lock-in." },
      { icon: Blocks, title: "Easy to operate", text: "We add admin panels and APIs, so your team can change routes without touching config files." },
      { icon: Video, title: "WebRTC ready", text: "OpenSIPS and RTPengine can bring browser callers onto the same network as your SIP trunks." },
    ],
  },
  faqs: [
    {
      question: "What is OpenSIPS used for?",
      answer:
        "OpenSIPS is an open-source SIP server used to route, balance and secure VoIP traffic. Providers use it as a SIP proxy, registrar, load balancer, session border controller or the routing core of a Class 4 softswitch. It handles signaling, while media servers such as FreeSWITCH or RTPengine handle audio.",
    },
    {
      question: "Can OpenSIPS be used as a session border controller?",
      answer:
        "Yes. OpenSIPS can act as an SBC when paired with RTPengine for media. We configure topology hiding, header normalization, NAT traversal, TLS and traffic limits. This protects your core network and lets you connect carriers and customers that use different SIP settings.",
    },
    {
      question: "How do you set up least-cost routing in OpenSIPS?",
      answer:
        "We use the drouting module with a database of prefixes, carriers and rules. Each call is matched to the cheapest or highest-quality route, with backups if a carrier fails. Your team manages rates and routes through an admin panel or API, and changes apply without a restart.",
    },
    {
      question: "How long does it take to build an OpenSIPS platform?",
      answer:
        "It depends on scope. A load balancer or routing change can be ready in a few weeks. A complete Class 4 platform with billing, portals and failover usually takes a few months. We share a written plan and timeline after reviewing your traffic and requirements on a free call.",
    },
    {
      question: "Can you upgrade our old OpenSIPS installation?",
      answer:
        "Yes. We review your current scripts and modules, then port them to a supported OpenSIPS release. Changes are tested in staging with real call scenarios before cutover. Where it helps, we also clean up routing logic so it is easier to maintain after the upgrade.",
    },
  ],
  related: [
    { name: "Kamailio Development", href: "/services/kamailio-development-service" },
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "VoIP Development", href: "/services/voip-development-service" },
    { name: "Class 4 Softswitch", href: "/class-4-softswitch-solution" },
  ],
  cta: {
    title: "Planning an OpenSIPS platform?",
    text: "Share your routes, carriers and traffic goals. An OpenSIPS engineer will review them and propose a design.",
  },
};

export default opensips;
