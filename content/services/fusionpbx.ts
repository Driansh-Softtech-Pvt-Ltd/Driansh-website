import {
  Blocks,
  Building2,
  Cable,
  Cloud,
  Code2,
  GraduationCap,
  Headphones,
  Layers,
  Network,
  Palette,
  PhoneCall,
  Receipt,
  Server,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const fusionpbx: ServicePageContent = {
  kind: "service",
  path: "/services/fusionpbx-development-service",
  name: "FusionPBX Development",
  eyebrow: "Open Source Development",
  seo: {
    title: "FusionPBX Development Services",
    description:
      "FusionPBX development for hosted PBX providers: setup, clustering, custom features, white-label themes and API integrations. Talk to a FusionPBX engineer.",
  },
  hero: {
    title: "FusionPBX Development Services for Hosted PBX Providers",
    subtitle:
      "We install, customize and scale FusionPBX for providers and businesses, adding the features, branding and integrations your multi-tenant phone system is missing.",
    primaryCta: "Talk to a FusionPBX Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Setup, clustering & upgrades",
    "Custom features & white-label UI",
    "CRM, billing & API integrations",
    "Cloud or on-premise deployment",
  ],
  diagram: {
    center: { icon: ServerCog, label: "FusionPBX" },
    nodes: [
      { icon: Server, label: "FreeSWITCH core" },
      { icon: Building2, label: "Tenants & domains" },
      { icon: PhoneCall, label: "SIP trunks" },
      { icon: Smartphone, label: "Desk & softphones" },
      { icon: Receipt, label: "Billing & CRM" },
    ],
  },
  intro: {
    title: "What we do with FusionPBX",
    paragraphs: [
      "FusionPBX development lets you run a branded, multi-tenant phone system on open-source software instead of paying per-seat licences. We set up FusionPBX on FreeSWITCH, build the features it lacks and tune it for the number of tenants you plan to serve.",
      "We work with hosted PBX providers, ITSPs and IT teams that already run FusionPBX, or want to launch on it. Because we also write FreeSWITCH code, fixes can go below the web interface when needed.",
    ],
  },
  techStack: ["FusionPBX", "FreeSWITCH", "PHP", "PostgreSQL", "Lua", "SIP", "WebRTC", "Linux", "Nginx", "Redis"],
  services: {
    title: "FusionPBX development services we offer",
    items: [
      { icon: ServerCog, title: "Installation & setup", text: "Install and configure FusionPBX for your call volume, tenants and carriers, so you start on a clean base." },
      { icon: Code2, title: "Custom feature development", text: "Build modules, apps and dialplan logic FusionPBX doesn't include, so you can offer what competitors can't." },
      { icon: Palette, title: "White-label themes", text: "Replace the default look with your logo, colours and portal layout, so customers see your brand." },
      { icon: Network, title: "Cluster & HA setup", text: "Run FusionPBX across several servers with shared storage and failover, so one outage doesn't stop calls." },
      { icon: Cable, title: "API & CRM integration", text: "Connect FusionPBX to CRMs, billing, payment gateways and your own apps through its APIs and database." },
      { icon: GraduationCap, title: "Training & support", text: "Train your admins, fix bugs and apply upgrades, so your team can run the platform with confidence." },
    ],
  },
  useCases: {
    title: "Platforms we build on FusionPBX",
    items: [
      { icon: Building2, title: "Multi-tenant IP PBX", text: "A hosted PBX you can resell to many business customers under your brand.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Network, title: "Class 5 softswitch", text: "Retail switching with extensions, voicemail and call features for service providers.", href: "/class-5-softswitch-solution" },
      { icon: Receipt, title: "VoIP billing", text: "Rating, invoicing and prepaid balances tied to each FusionPBX tenant.", href: "/voip-billing-solution" },
      { icon: Headphones, title: "Call center software", text: "Queues, agents, recording and reports built on top of your PBX.", href: "/call-center-solution" },
      { icon: Users, title: "Enterprise VoIP", text: "Private, multi-site phone systems for companies that host their own voice.", href: "/enterprise-voip-solutions" },
    ],
  },
  whyUs: {
    title: "Why choose Driansh for FusionPBX",
    items: [
      { icon: Layers, title: "FreeSWITCH depth", text: "We work below the FusionPBX interface too, so hard problems in media and routing get solved properly." },
      { icon: ShieldCheck, title: "You own the code", text: "Custom modules, themes and scripts are handed over with documentation, so you stay vendor-independent." },
      { icon: Blocks, title: "Upgrade-safe changes", text: "We keep custom work separate from core files, so future FusionPBX releases are easier to apply." },
      { icon: Cloud, title: "Deploy where you want", text: "We run FusionPBX on your own servers or in the cloud provider you already use." },
    ],
  },
  faqs: [
    {
      question: "Is FusionPBX free to use commercially?",
      answer:
        "Yes. FusionPBX is open source, so you can run it for your own company or sell hosted PBX services on it without licence fees. Your costs are servers, carriers and any custom development or support you need. Some add-on apps from the FusionPBX project are paid, so check before you plan around them.",
    },
    {
      question: "How much does FusionPBX customization cost?",
      answer:
        "It depends on the work. A theme change or a single integration is a small, fixed-price job, while a set of new modules or a clustered, multi-server rollout takes longer. We scope the work in a free call, then send a fixed quote or offer a monthly support plan.",
    },
    {
      question: "Can FusionPBX handle hundreds of tenants?",
      answer:
        "Yes, if it is set up for it. Capacity depends on concurrent calls, recording, transcoding and hardware, not on tenant count alone. We size servers, split database and media roles and add clustering and failover so the platform keeps pace as you add customers.",
    },
    {
      question: "Can you white label the FusionPBX portal?",
      answer:
        "Yes. We replace the logo, colours, login page and menu labels with your branding, and can rebuild pages your customers use most. The result looks like your own product, while the FusionPBX engine underneath stays upgradable. We can also brand the provisioning files and email templates your tenants receive.",
    },
    {
      question: "Can you migrate us from another PBX to FusionPBX?",
      answer:
        "Yes. We map your existing extensions, ring groups, IVRs, voicemail and trunks, move them into FusionPBX and test each tenant before cut-over. We can move tenants in batches, so customers keep making calls while the migration runs. Asterisk-based systems and FreePBX are common starting points.",
    },
  ],
  related: [
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "Asterisk Development", href: "/services/asterisk-development-service" },
    { name: "Linphone App Development", href: "/services/linphone-app-development" },
    { name: "VoIP Testing", href: "/services/voip-testing" },
  ],
  cta: {
    title: "Running or planning a FusionPBX platform?",
    text: "Tell us what you need to add, fix or scale. A FusionPBX engineer will review it and suggest next steps.",
  },
};

export default fusionpbx;
