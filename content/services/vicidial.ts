import {
  BarChart3,
  Bot,
  Cable,
  Cloud,
  Code2,
  GraduationCap,
  Headphones,
  Layers,
  Network,
  Palette,
  PhoneCall,
  PhoneOutgoing,
  Radio,
  Server,
  ServerCog,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const vicidial: ServicePageContent = {
  kind: "service",
  path: "/services/vicidial-development-service",
  name: "VICIdial Development",
  eyebrow: "Open Source Development",
  seo: {
    title: "VICIdial Development Services",
    description:
      "VICIdial development for call centers: setup, clustering, CRM integration, custom themes and AI agent add-ons. Talk to a VICIdial engineer today.",
  },
  hero: {
    title: "VICIdial Development Services for Busy Call Centers",
    subtitle:
      "We install, customize and scale VICIdial for inbound and outbound call centers, adding CRM links, branded agent screens and AI features the stock system lacks.",
    primaryCta: "Talk to a VICIdial Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Installation & cluster setup",
    "CRM integration & single sign-on",
    "Custom themes & agent screens",
    "AI agent add-ons",
  ],
  diagram: {
    center: { icon: Headphones, label: "VICIdial" },
    nodes: [
      { icon: Server, label: "Asterisk servers" },
      { icon: PhoneOutgoing, label: "Predictive dialer" },
      { icon: Users, label: "Agent screens" },
      { icon: Cable, label: "CRM & APIs" },
      { icon: Bot, label: "AI agents" },
      { icon: BarChart3, label: "Reports" },
    ],
  },
  intro: {
    title: "What we do with VICIdial",
    paragraphs: [
      "VICIdial development helps you get more from the open-source call center suite without paying per-agent licences. We set up VICIdial on Asterisk, connect it to your CRM and build the features your campaigns need.",
      "We work with call centers, BPOs and sales teams running inbound, outbound or blended campaigns. Whether you are launching a new system or fixing a slow one, we handle servers, dialplans and the agent interface.",
    ],
  },
  techStack: ["VICIdial", "Asterisk", "MySQL / MariaDB", "Perl", "PHP", "SIP", "Linux", "REST APIs", "WebRTC", "Python"],
  services: {
    title: "VICIdial development services we offer",
    items: [
      { icon: ServerCog, title: "Installation & setup", text: "Install and configure VICIdial with carriers, campaigns and lists, so agents can start dialing quickly." },
      { icon: Network, title: "Cluster setup", text: "Split web, database and telephony across servers with failover, so large campaigns keep running." },
      { icon: Cable, title: "CRM integration", text: "Link VICIdial to your CRM with screen pops, call logging and single sign-on for agents." },
      { icon: Palette, title: "Custom themes", text: "Redesign the agent and admin screens with your branding, so the system is easier to learn." },
      { icon: Code2, title: "Custom features", text: "Build reports, dispositions, scripts and API hooks VICIdial doesn't ship with out of the box." },
      { icon: GraduationCap, title: "Training & tuning", text: "Train your admins and tune dialer settings, database and servers so performance holds as you grow." },
    ],
  },
  useCases: {
    title: "Call center setups we build with VICIdial",
    items: [
      { icon: Headphones, title: "Call center software", text: "Inbound queues, outbound campaigns and blended agents in one system.", href: "/call-center-solution" },
      { icon: Radio, title: "Voice broadcasting", text: "Automated outbound messages for reminders, alerts and surveys.", href: "/voice-broadcasting-solution" },
      { icon: PhoneCall, title: "Live call monitoring", text: "Listen, whisper and barge so supervisors can coach agents in real time.", href: "/live-call-monitoring-solution" },
      { icon: Users, title: "Contact center product", text: "An omnichannel contact center when you need more than voice.", href: "/our-products/contactcenter" },
    ],
  },
  whyUs: {
    title: "Why choose Driansh for VICIdial",
    items: [
      { icon: Layers, title: "Asterisk know-how", text: "We work on the Asterisk layer under VICIdial, so audio, trunk and dialer issues get fixed at the source." },
      { icon: Bot, title: "AI add-ons", text: "We add AI agents that answer routine calls and assist live agents, so your team handles more work." },
      { icon: ShieldCheck, title: "You own the code", text: "Themes, scripts and integrations are handed over with documentation when the work is done." },
      { icon: Cloud, title: "Cloud or on-premise", text: "We deploy VICIdial on your own servers or in the cloud, whichever suits your compliance needs." },
    ],
  },
  faqs: [
    {
      question: "How many agents can a VICIdial system support?",
      answer:
        "It depends on the server setup. A single server suits a small team, while larger call centers split web, database and Asterisk roles across several machines. Dial ratio, recording and call volume matter as much as agent count. We size the cluster from your expected load before we install.",
    },
    {
      question: "Can VICIdial integrate with Salesforce, HubSpot or Zoho?",
      answer:
        "Yes. VICIdial has agent and non-agent APIs that we use to connect it to Salesforce, HubSpot, Zoho, Vtiger or an in-house CRM. Typical features are screen pops, click-to-call, automatic call logging and single sign-on, so agents stay in one window.",
    },
    {
      question: "How much does VICIdial customization cost?",
      answer:
        "VICIdial itself is free, so you pay only for the work you need. A theme or one integration is a small fixed-price job, while clustering and several custom modules take longer. We scope everything in a free review and send a clear quote before starting.",
    },
    {
      question: "Why is my VICIdial dialer slow or dropping calls?",
      answer:
        "The usual causes are an overloaded database, too many channels per Asterisk server, carrier limits or poor network links. We check logs, server load and dialer settings, then fix the root cause, often by splitting roles across servers or tuning MySQL and dial ratios.",
    },
    {
      question: "Can you add AI voice agents to VICIdial?",
      answer:
        "Yes. We connect AI voice agents to VICIdial so they can answer routine questions, qualify leads and pass calls to a live agent with context. We can also add live suggestions for agents. The AI works alongside your existing campaigns rather than replacing them.",
    },
  ],
  related: [
    { name: "Asterisk Development", href: "/services/asterisk-development-service" },
    { name: "VoIP Development", href: "/services/voip-development-service" },
    { name: "FusionPBX Development", href: "/services/fusionpbx-development-service" },
    { name: "VoIP Testing", href: "/services/voip-testing" },
  ],
  cta: {
    title: "Need more out of VICIdial?",
    text: "Tell us about your campaigns and current setup. A VICIdial engineer will suggest what to fix or build first.",
  },
};

export default vicidial;
