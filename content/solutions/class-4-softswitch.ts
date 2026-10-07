import {
  Activity,
  ArrowLeftRight,
  BadgeDollarSign,
  BarChart3,
  Globe2,
  Layers,
  Network,
  PhoneForwarded,
  Receipt,
  RefreshCcw,
  Route,
  Scale,
  ServerCog,
  ShieldCheck,
  Signal,
  TowerControl,
  Wallet,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const class4: SolutionPageContent = {
  kind: "solution",
  path: "/class-4-softswitch-solution",
  name: "Class 4 Softswitch",
  eyebrow: "Solutions",
  seo: {
    title: "Class 4 Softswitch for Wholesale VoIP",
    description:
      "Class 4 softswitch for carriers and wholesale VoIP providers: least-cost routing, real-time rating, fraud controls and high availability. Book a free demo.",
  },
  hero: {
    title: "Class 4 softswitch for wholesale VoIP carriers",
    subtitle:
      "Route high volumes of wholesale traffic between carriers with least-cost routing, real-time rating and failover, on a platform you can brand and run as your own.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: [
    "Least-cost & quality routing",
    "Real-time rating & billing",
    "High availability & load balancing",
    "White-label ready",
  ],
  diagram: {
    center: { icon: Network, label: "Class 4 Switch" },
    nodes: [
      { icon: TowerControl, label: "Upstream carriers" },
      { icon: PhoneForwarded, label: "Downstream clients" },
      { icon: Route, label: "LCR routing" },
      { icon: Receipt, label: "Rating & billing" },
      { icon: ShieldCheck, label: "Fraud controls" },
      { icon: BarChart3, label: "Reports & CDRs" },
    ],
  },
  overview: {
    title: "What is a Class 4 softswitch?",
    paragraphs: [
      "A Class 4 softswitch connects VoIP carriers and routes wholesale call traffic between them, rather than serving end users directly. It decides which carrier carries each call, rates it in real time and keeps a record for billing.",
      "Our Class 4 softswitch gives you that routing and rating in one platform, with the security and failover a carrier-grade business needs, and can be customised to your routing rules.",
    ],
    audiences: ["Wholesale VoIP carriers", "Traffic aggregators", "SIP trunk providers", "DID providers", "GSM termination"],
  },
  features: {
    title: "Class 4 softswitch features",
    items: [
      { icon: Route, title: "Inbound & outbound routes", text: "Build routing by prefix, carrier, cost and quality, with automatic failover." },
      { icon: Signal, title: "High CPS handling", text: "Process large bursts of calls per second without dropping traffic." },
      { icon: Layers, title: "Concurrent call control", text: "Set per-account and per-carrier limits on simultaneous calls." },
      { icon: Globe2, title: "E.164 normalisation", text: "Clean up number formats from every carrier before routing." },
      { icon: ArrowLeftRight, title: "Codec transcoding", text: "Connect carriers that use different codecs without call-quality issues." },
      { icon: Scale, title: "Load balancing", text: "Spread traffic across servers so no single node becomes a bottleneck." },
      { icon: RefreshCcw, title: "High availability", text: "Run redundant nodes so calls keep flowing during failures or upgrades." },
      { icon: ShieldCheck, title: "Security & fraud controls", text: "Block suspicious traffic with IP authentication, limits and alerts." },
      { icon: Activity, title: "Live monitoring", text: "Watch active calls, ASR, ACD and carrier health in real time." },
      { icon: BarChart3, title: "Reports & CDRs", text: "Export detailed call records and margin reports per carrier and client." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: BadgeDollarSign, title: "Lower termination costs", text: "Least-cost routing sends each call over the cheapest carrier that meets your quality rules." },
      { icon: Wallet, title: "No negative balances", text: "Real-time rating stops calls when a prepaid customer runs out of credit." },
      { icon: Signal, title: "Better call quality", text: "Quality-based routing and transcoding keep calls clear across mixed carrier networks." },
      { icon: ServerCog, title: "Room to grow", text: "Add servers and carriers as traffic grows, without rebuilding the platform." },
    ],
  },
  howItWorks: {
    title: "Carrier-grade routing on open-source foundations",
    text: "The switch sits between your upstream carriers and downstream clients. Each call is authenticated, normalised, matched to the best route and rated in real time, and the call record goes straight to billing.",
    points: [
      "Built on proven open-source VoIP engines such as FreeSWITCH and OpenSIPS",
      "Deploy on your own servers or in the cloud",
      "Connects to VoIP billing or your existing billing system",
      "Custom routing rules and add-ons on request",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Receipt, title: "VoIP billing", text: "Automate rating, invoicing and reseller accounts.", href: "/voip-billing-solution" },
      { icon: Network, title: "Class 5 softswitch", text: "Add retail services and hosted PBX for end users.", href: "/class-5-softswitch-solution" },
      { icon: ServerCog, title: "OpenSIPS development", text: "Custom SIP routing and load balancing.", href: "/services/opensips-development-service" },
    ],
  },
  faqs: [
    {
      question: "What is the difference between a Class 4 and Class 5 softswitch?",
      answer:
        "A Class 4 softswitch routes wholesale traffic between carriers, while a Class 5 softswitch serves end users with features like voicemail, IVR and hosted PBX. Many providers run both: Class 4 for carrier interconnects and Class 5 for retail customers.",
    },
    {
      question: "Can I use my own billing system with the Class 4 softswitch?",
      answer:
        "Yes. The switch produces standard call records that can feed your existing billing platform. If you don't have one, we can connect it to our VoIP billing solution for real-time rating, invoicing and reseller management.",
    },
    {
      question: "What technology is the softswitch built on?",
      answer:
        "It is built on open-source VoIP engines such as FreeSWITCH and OpenSIPS, which are widely used in carrier networks. That gives you proven call handling without licence fees for the core switching software.",
    },
    {
      question: "Can you customise routing rules and features?",
      answer:
        "Yes. We can add custom routing logic, carrier-specific rules, reports and integrations. Tell us how you route and rate traffic today and we will scope the changes before development starts.",
    },
    {
      question: "How is the softswitch deployed?",
      answer:
        "We can deploy it on your own servers or in a cloud of your choice, and set up redundant nodes for high availability. Our team handles installation, configuration and handover to your operations team.",
    },
  ],
  related: [
    { name: "Class 5 Softswitch", href: "/class-5-softswitch-solution" },
    { name: "VoIP Billing", href: "/voip-billing-solution" },
    { name: "Calling Card Solution", href: "/calling-card-solution" },
    { name: "OpenSIPS Development", href: "/services/opensips-development-service" },
  ],
  cta: {
    title: "See the Class 4 softswitch in action",
    text: "Book a free demo and we'll walk you through routing, rating and reports for your traffic.",
  },
};

export default class4;
