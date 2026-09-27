import {
  ArrowRightLeft,
  Briefcase,
  Code,
  CreditCard,
  Hash,
  LifeBuoy,
  Network,
  PhoneForwarded,
  PiggyBank,
  Printer,
  Receipt,
  Route,
  Server,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Wallet,
  Building2,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const voipBusiness: SolutionPageContent = {
  kind: "solution",
  path: "/voip-business-solutions",
  name: "VoIP Business Solutions",
  eyebrow: "Solutions",
  seo: {
    title: "VoIP Business Solutions for SMBs",
    description:
      "VoIP business solutions for SMBs and enterprises: IP PBX, softswitches, SIP trunking, billing, number porting and STIR/SHAKEN. Book a free demo.",
  },
  hero: {
    title: "VoIP Business Solutions for SMBs and Enterprises",
    subtitle:
      "We build business VoIP systems from proven building blocks, including IP PBX, softswitches, SIP trunking and billing, and shape them around how your company calls.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "View Features",
  },
  highlights: ["IP PBX & softswitches", "SIP trunking & DIDs", "STIR/SHAKEN caller ID", "Custom features on request"],
  diagram: {
    center: { icon: Briefcase, label: "Business VoIP" },
    nodes: [
      { icon: Server, label: "IP PBX" },
      { icon: Network, label: "SIP trunks" },
      { icon: Hash, label: "DID numbers" },
      { icon: Receipt, label: "VoIP billing" },
      { icon: ShieldCheck, label: "STIR/SHAKEN" },
      { icon: PhoneForwarded, label: "Call forwarding" },
    ],
  },
  overview: {
    title: "What are VoIP business solutions?",
    paragraphs: [
      "VoIP business solutions are phone systems and telecom platforms that run a company's calls over the internet. They replace fixed phone lines with software, so features, users and numbers can change as the business does.",
      "We build them for small businesses, enterprises and the VoIP providers that serve them. You pick the building blocks you need, and we connect them into one platform with the features your teams use.",
    ],
    audiences: ["Small & mid-sized businesses", "Enterprises", "VoIP service providers", "ITSPs & carriers", "Resellers"],
  },
  features: {
    title: "Business VoIP solutions we build",
    items: [
      { icon: Route, title: "Class 4 softswitch", text: "Route high-volume wholesale traffic across carriers while keeping termination costs under control." },
      { icon: ServerCog, title: "Class 5 softswitch", text: "Offer retail calling features like voicemail, IVR and hosted PBX to end users." },
      { icon: Building2, title: "Multi-tenant IP PBX", text: "Host many client companies on one PBX, each with its own extensions and settings." },
      { icon: Receipt, title: "VoIP billing", text: "Rate calls and invoice customers in real time, so revenue is tracked accurately." },
      { icon: CreditCard, title: "Calling cards", text: "Sell prepaid and international calling plans to reach new customer groups." },
      { icon: Hash, title: "DID management", text: "Allocate virtual numbers across locations and control how each one routes calls." },
      { icon: Network, title: "SIP trunking", text: "Connect your PBX to outside networks and add call capacity without new phone lines." },
      { icon: ArrowRightLeft, title: "Number portability", text: "Move customer numbers between providers without interrupting their service." },
      { icon: ShieldCheck, title: "STIR/SHAKEN integration", text: "Sign and verify caller IDs to block spoofed calls and protect your numbers' reputation." },
      { icon: PhoneForwarded, title: "Call forwarding", text: "Redirect calls to mobiles or colleagues, so leads are not lost when someone is away." },
      { icon: Printer, title: "Fax over IP", text: "Send and receive faxes over IP, so you can retire fax machines and lines." },
      { icon: Wallet, title: "FreeSWITCH billing", text: "Rate FreeSWITCH call records in real time, with detailed usage reports." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: PiggyBank, title: "Pay for what you use", text: "Lower line rental and call costs, and add capacity only when you need it." },
      { icon: SlidersHorizontal, title: "Built around you", text: "Custom features and integrations match your call flows instead of forcing a standard setup." },
      { icon: TrendingUp, title: "Grows with you", text: "Add users, numbers and sites without replacing the platform as the company expands." },
      { icon: LifeBuoy, title: "Support after launch", text: "We keep maintaining and extending your system after go-live as your needs change." },
    ],
  },
  howItWorks: {
    title: "How we build your business VoIP system",
    text: "We start by mapping how your company makes and receives calls. Then we pick the right components, such as an IP PBX, SIP trunks and billing, and connect them into one system. After testing, we deploy it and hand over the source code.",
    points: [
      "Built on open-source engines such as FreeSWITCH and Asterisk",
      "Deploy on your own servers or in the cloud",
      "Source code handed over, so you own the platform",
      "Support and maintenance after launch",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Building2, title: "Enterprise VoIP", text: "A full phone system for large, multi-site teams.", href: "/enterprise-voip-solutions" },
      { icon: Server, title: "Multi-tenant IP PBX", text: "Host PBX services for many client companies.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: ServerCog, title: "Class 5 softswitch", text: "Retail calling features for end users.", href: "/class-5-softswitch-solution" },
      { icon: Receipt, title: "VoIP billing", text: "Real-time rating, invoicing and reseller accounts.", href: "/voip-billing-solution" },
      { icon: Code, title: "VoIP development", text: "Custom VoIP features built to your spec.", href: "/services/voip-development-service" },
    ],
  },
  faqs: [
    {
      question: "What is the difference between business VoIP and a traditional phone line?",
      answer:
        "Business VoIP carries calls over the internet using software, while a traditional line needs a physical connection for each number. That means VoIP can add users, route calls to any device and include features like voicemail to email or call recording without new hardware.",
    },
    {
      question: "Is VoIP a good choice for a small business?",
      answer:
        "Yes, for most small businesses. VoIP avoids paying for several phone lines, lets staff take calls on mobiles or laptops, and gives you features like auto attendants and call forwarding. You can start with a few users and add more as the business grows.",
    },
    {
      question: "Do I need a custom VoIP solution or an off-the-shelf one?",
      answer:
        "Off-the-shelf systems suit standard needs. A custom VoIP solution makes sense when you need specific call flows, integrations with your own software, or want to resell VoIP under your brand. We start from proven open-source components and build only the parts that are unique to you.",
    },
    {
      question: "What is STIR/SHAKEN and does my business need it?",
      answer:
        "STIR/SHAKEN is a framework that digitally signs caller IDs, so the receiving network can confirm a call is genuine. It helps stop spoofed robocalls. Providers that originate calls in the US and Canada are generally required to support it. We integrate it into your softswitch or PBX.",
    },
    {
      question: "Can I resell VoIP services to my own customers?",
      answer:
        "Yes. With a multi-tenant IP PBX, a Class 5 softswitch and VoIP billing, you can offer hosted phone systems under your own brand. Each customer gets their own account and features, while you manage rates, invoices and resellers from one admin panel.",
    },
  ],
  related: [
    { name: "Enterprise VoIP", href: "/enterprise-voip-solutions" },
    { name: "Class 5 Softswitch", href: "/class-5-softswitch-solution" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
    { name: "VoIP Billing", href: "/voip-billing-solution" },
  ],
  cta: {
    title: "Talk through your business VoIP needs",
    text: "Book a free demo and we'll show which components fit your company and how they work together.",
  },
};

export default voipBusiness;
