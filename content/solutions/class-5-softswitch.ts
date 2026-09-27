import {
  ArrowLeftRight,
  BarChart3,
  Building2,
  Globe2,
  Headset,
  Home,
  Layers,
  Mic,
  Network,
  Package,
  PhoneCall,
  PhoneForwarded,
  Receipt,
  RefreshCcw,
  Router,
  ServerCog,
  ShieldCheck,
  Store,
  Users,
  Voicemail,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const class5: SolutionPageContent = {
  kind: "solution",
  path: "/class-5-softswitch-solution",
  name: "Class 5 Softswitch",
  eyebrow: "Solutions",
  seo: {
    title: "Class 5 Softswitch for Retail VoIP",
    description:
      "Class 5 softswitch for retail VoIP providers: hosted PBX features, IVR, voicemail, call bundles, billing and reseller tools for end users. Book a free demo.",
  },
  hero: {
    title: "Class 5 Softswitch for Retail VoIP Providers",
    subtitle:
      "Serve homes and businesses from one retail softswitch with calling features, hosted PBX, bundles and built-in billing, on a white-label platform you control.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "View Features",
  },
  highlights: [
    "End-user calling features",
    "Integrated retail billing",
    "Multi-tenant & resellers",
    "High availability",
  ],
  diagram: {
    center: { icon: Network, label: "Class 5 Switch" },
    nodes: [
      { icon: Home, label: "Residential users" },
      { icon: Building2, label: "Business PBX" },
      { icon: PhoneCall, label: "IVR & voicemail" },
      { icon: Receipt, label: "Retail billing" },
      { icon: Store, label: "Resellers" },
      { icon: Router, label: "SIP carriers" },
    ],
  },
  overview: {
    title: "What is a Class 5 softswitch?",
    paragraphs: [
      "A Class 5 softswitch connects end users to the phone network and gives them features like voicemail, call forwarding, IVR and conferencing. It is the switch behind retail VoIP and hosted PBX services.",
      "Our Class 5 softswitch combines those features with subscriber billing, provisioning and reseller management. You sell voice services to residential and business customers without stitching tools together.",
    ],
    audiences: ["Retail VoIP providers", "Internet service providers", "Hosted PBX providers", "Enterprises with branches"],
  },
  features: {
    title: "Class 5 softswitch features",
    items: [
      { icon: Voicemail, title: "Voicemail & follow-me", text: "Deliver voicemail to email and ring several devices in turn so users never miss calls." },
      { icon: PhoneForwarded, title: "Call control", text: "Give users transfer, hold, forwarding and callback from any SIP phone." },
      { icon: Layers, title: "IVR & conferencing", text: "Set up auto attendants and conference bridges for business customers." },
      { icon: Package, title: "Call bundles", text: "Sell minute packages and plans so you can price services your way." },
      { icon: Globe2, title: "E.164 normalisation", text: "Convert local dialing formats before routing, so every country's numbers work." },
      { icon: ServerCog, title: "Auto provisioning", text: "Configure IP phones automatically and cut on-site setup time." },
      { icon: ArrowLeftRight, title: "Codec transcoding", text: "Bridge devices and carriers that use different codecs without quality loss." },
      { icon: RefreshCcw, title: "Failover & load balancing", text: "Spread traffic across nodes and keep calls running when a server fails." },
      { icon: ShieldCheck, title: "SIP security", text: "Protect accounts with authentication, IP rules and limits against toll fraud." },
      { icon: BarChart3, title: "Monitoring & reports", text: "Watch system health live and export usage reports per customer." },
    ],
  },
  benefits: {
    title: "What a retail softswitch gives you",
    items: [
      { icon: Users, title: "One platform, many markets", text: "Serve residential lines, business PBX and call center customers from the same switch." },
      { icon: Receipt, title: "Billing built in", text: "Rate calls and charge subscribers without buying or integrating a separate billing system." },
      { icon: Store, title: "Scale with resellers", text: "Let partners sell your services under their brand while you control routing and rates." },
      { icon: Mic, title: "Self-service for users", text: "Customers manage their own numbers, voicemail and forwarding, so fewer tickets reach your team." },
    ],
  },
  howItWorks: {
    title: "How the retail VoIP switch fits your network",
    text: "Subscribers register their phones and softphones to the switch. It authenticates them, applies their features and routes calls to other users or out to your SIP carriers. Every call is rated and billed to the right account.",
    points: [
      "Built on open-source engines such as FreeSWITCH and Kamailio",
      "Deploy in the cloud or in your own data center",
      "Web portals for admins, resellers and end users",
      "Custom features and integrations on request",
    ],
  },
  integrations: {
    title: "Connects with",
    items: [
      { icon: Router, title: "Class 4 softswitch", text: "Handle wholesale carrier interconnects alongside retail.", href: "/class-4-softswitch-solution" },
      { icon: Building2, title: "Multi-tenant IP PBX", text: "Offer full hosted PBX to business customers.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Receipt, title: "VoIP billing", text: "Add advanced invoicing and payment workflows.", href: "/voip-billing-solution" },
      { icon: Headset, title: "Kamailio development", text: "Scale SIP registration and load balancing.", href: "/services/kamailio-development-service" },
    ],
  },
  faqs: [
    {
      question: "Who uses a Class 5 softswitch?",
      answer:
        "Class 5 softswitches are used by providers that sell voice services to end users. Typical buyers are retail VoIP companies, internet service providers, hosted PBX providers and enterprises running phones across many branches. If your customers are people and businesses rather than carriers, a Class 5 switch fits.",
    },
    {
      question: "Can I add hosted PBX services to a Class 5 softswitch?",
      answer:
        "Yes. The switch includes business features such as IVR, ring groups, conferencing and extensions, so you can sell hosted PBX alongside residential lines. For larger business customers, it can also connect to our multi-tenant IP PBX for a separate portal per company.",
    },
    {
      question: "How many subscribers can a Class 5 softswitch handle?",
      answer:
        "Capacity depends on your server resources, codec mix and calling patterns, not on a fixed licence limit. We size the setup for your current subscriber base. As you grow, we add nodes behind a load balancer instead of replacing the platform.",
    },
    {
      question: "Can you build custom features into the retail softswitch?",
      answer:
        "Yes. We regularly add custom call flows, portal changes, billing rules and third-party integrations. Describe the service you want to sell and we will scope the work, agree the cost and deliver it with the source code. Changes are tested on a staging system before they reach live subscribers.",
    },
    {
      question: "Does the Class 5 softswitch include billing?",
      answer:
        "Yes. It rates every call, applies bundles and plans, and charges prepaid or postpaid subscribers. Admins and resellers see balances and usage in their portals. If you already run a billing system, we can feed it call records instead, so you keep your current invoicing and accounting process.",
    },
  ],
  related: [
    { name: "Class 4 Softswitch", href: "/class-4-softswitch-solution" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
    { name: "VoIP Billing", href: "/voip-billing-solution" },
    { name: "VoIP Business Solutions", href: "/voip-business-solutions" },
  ],
  cta: {
    title: "See the Class 5 softswitch in action",
    text: "Book a free demo and we'll walk you through subscriber features, billing and reseller tools.",
  },
};

export default class5;
