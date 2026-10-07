import {
  BadgeDollarSign,
  BarChart3,
  Building2,
  Clock,
  Layers,
  LayoutDashboard,
  ListOrdered,
  Mic,
  PhoneCall,
  PhoneForwarded,
  Receipt,
  Server,
  ServerCog,
  Settings2,
  ShieldCheck,
  Store,
  Users,
  Voicemail,
  Wifi,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const multiTenantPbx: SolutionPageContent = {
  kind: "solution",
  path: "/multi-tenant-ip-pbx-solution",
  name: "Multi-Tenant IP PBX",
  eyebrow: "Solutions",
  seo: {
    title: "Multi-Tenant IP PBX & Hosted PBX Software",
    description:
      "Multi-tenant IP PBX for hosted PBX providers and multi-branch companies: separate tenants, IVR, queues, recording, resellers and billing. Book a free demo.",
  },
  hero: {
    title: "Multi-tenant IP PBX for hosted PBX providers",
    subtitle:
      "Host phone systems for many companies or branches on one platform. Each tenant gets its own extensions, numbers and portal, while you manage everything centrally.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: [
    "Isolated tenants on one server",
    "Reseller & billing modules",
    "Browser or IP phone calling",
    "Cloud, on-premise or shared",
  ],
  diagram: {
    center: { icon: Server, label: "Multi-Tenant PBX" },
    nodes: [
      { icon: Building2, label: "Tenant companies" },
      { icon: Users, label: "Extensions & users" },
      { icon: PhoneCall, label: "DIDs & trunks" },
      { icon: Store, label: "Resellers" },
      { icon: Receipt, label: "Billing" },
      { icon: LayoutDashboard, label: "Admin dashboard" },
    ],
  },
  overview: {
    title: "What is a multi-tenant IP PBX?",
    paragraphs: [
      "A multi-tenant IP PBX runs many separate business phone systems on one software installation. Each tenant has its own extensions, numbers, call rules and users, and cannot see the others.",
      "You get one place to create tenants, assign DIDs, set rate plans and track usage. That makes it practical to sell hosted PBX services, or to run phones for every branch of your company.",
    ],
    audiences: ["Hosted PBX providers", "Business phone service providers", "Multi-branch enterprises", "Managed service providers"],
  },
  features: {
    title: "Multi-tenant IP PBX features",
    items: [
      { icon: Layers, title: "IVR & ring groups", text: "Build auto attendants and ring groups per tenant so calls reach the right team." },
      { icon: ListOrdered, title: "Call queues", text: "Hold callers in queues with music on hold until an agent is free." },
      { icon: Clock, title: "Time conditions", text: "Route calls differently after hours, on weekends and on holidays." },
      { icon: Voicemail, title: "Voicemail & follow-me", text: "Send voicemail to email and ring mobiles when desk phones go unanswered." },
      { icon: PhoneForwarded, title: "Transfer, park & pickup", text: "Give staff the call handling they expect from an office phone system." },
      { icon: Mic, title: "Call recording", text: "Record calls per tenant or extension for training and compliance." },
      { icon: Users, title: "Conferencing & intercom", text: "Host conference rooms and page colleagues with intercom dialing." },
      { icon: Settings2, title: "Auto provisioning & BLF", text: "Set up IP phones automatically and show colleague status on busy lamp keys." },
      { icon: PhoneCall, title: "Inbound & outbound routes", text: "Assign trunks and DIDs per tenant with separate routing rules." },
      { icon: LayoutDashboard, title: "Role-based portals", text: "Give admins, resellers and tenant managers their own dashboards and permissions." },
    ],
  },
  benefits: {
    title: "Why run a multi-tenant PBX",
    items: [
      { icon: BadgeDollarSign, title: "Lower cost per tenant", text: "Many customers share one installation, so you spend less on servers and maintenance." },
      { icon: ServerCog, title: "Quick tenant setup", text: "Create a company, assign numbers and set call flows from the admin panel, with no new hardware." },
      { icon: Wifi, title: "Work from anywhere", text: "Users call from a browser, softphone or IP phone, so remote staff stay reachable." },
      { icon: BarChart3, title: "Full visibility", text: "Track usage, costs and call quality across every tenant or branch from one dashboard." },
    ],
  },
  howItWorks: {
    title: "One hosted PBX platform, many tenants",
    text: "All tenants share the same PBX engine, but their data, numbers and settings are kept separate. Calls arrive on your trunks, are matched to the right tenant by DID, and follow that tenant's own call flow.",
    points: [
      "Built on open-source engines such as FreeSWITCH and FusionPBX",
      "Deploy in the cloud, on-premise or on shared servers",
      "Reseller module and integrated VoIP billing",
      "Third-party API integrations and custom features on request",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Receipt, title: "VoIP billing", text: "Invoice tenants and resellers automatically.", href: "/voip-billing-solution" },
      { icon: Users, title: "Unified communications", text: "Add chat, video and presence for tenant users.", href: "/unified-communications-solution" },
      { icon: ShieldCheck, title: "FusionPBX development", text: "Customise the multi-tenant PBX layer.", href: "/services/fusionpbx-development-service" },
    ],
  },
  faqs: [
    {
      question: "How many tenants can one IP PBX server host?",
      answer:
        "It depends on extensions per tenant, concurrent calls, recording use and server size. A small server can host many light tenants, while call-heavy tenants need more resources. We size the server from your expected usage and can add nodes later as you sign more customers.",
    },
    {
      question: "Can employees use the hosted PBX while working remotely?",
      answer:
        "Yes. The PBX is web-based, so staff can call from a browser, a laptop or mobile softphone, or an IP phone at home. No office hardware is required. Their extension, voicemail and call rules follow them wherever they log in.",
    },
    {
      question: "Is tenant data kept separate in a multi-tenant PBX?",
      answer:
        "Yes. Each tenant has its own extensions, numbers, recordings, call logs and settings. Tenant managers only see their own company in the portal. As the provider, you manage all tenants from a central admin panel with role-based permissions. Resellers see only the tenants they own.",
    },
    {
      question: "Can I white-label the hosted PBX platform?",
      answer:
        "Yes. You can apply your own logo, colours and domain to the portals, and resellers can do the same for their customers. That lets you sell the service as your own business phone product without mentioning the underlying software. Branding is set per portal, so each reseller can look different.",
    },
    {
      question: "Do you integrate third-party apps with the IP PBX?",
      answer:
        "Yes. We can connect the PBX to CRMs, helpdesks, billing systems and single sign-on through their APIs. We can also expose APIs from the PBX so your own apps can create tenants, users or numbers automatically. That removes manual steps when you onboard new customers.",
    },
  ],
  related: [
    { name: "Class 5 Softswitch", href: "/class-5-softswitch-solution" },
    { name: "Enterprise VoIP Solutions", href: "/enterprise-voip-solutions" },
    { name: "Call Center Solution", href: "/call-center-solution" },
    { name: "FusionPBX Development", href: "/services/fusionpbx-development-service" },
  ],
  cta: {
    title: "Start your hosted PBX business",
    text: "Book a free demo and we'll show you tenant setup, call flows and billing on a live system.",
  },
};

export default multiTenantPbx;
