import {
  BarChart3,
  Calculator,
  Clock,
  CreditCard,
  FileText,
  Layers,
  Network,
  Package,
  PhoneCall,
  Plug,
  Receipt,
  Route,
  ShieldAlert,
  Store,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const voipBilling: SolutionPageContent = {
  kind: "solution",
  path: "/voip-billing-solution",
  name: "VoIP Billing",
  eyebrow: "Solutions",
  seo: {
    title: "VoIP Billing Software for Providers",
    description:
      "VoIP billing software with real-time rating, prepaid and postpaid accounts, invoicing, resellers, DIDs and payment gateways for VoIP providers. Book a demo.",
  },
  hero: {
    title: "VoIP billing software for telecom service providers",
    subtitle:
      "Rate every call in real time, invoice prepaid and postpaid customers, and manage resellers from one billing platform that plugs into your softswitch or PBX.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: [
    "Real-time call rating",
    "Prepaid & postpaid billing",
    "Reseller hierarchy",
    "Payment gateway support",
  ],
  diagram: {
    center: { icon: Receipt, label: "VoIP Billing" },
    nodes: [
      { icon: Network, label: "Softswitch & PBX" },
      { icon: Calculator, label: "Rating engine" },
      { icon: FileText, label: "Invoices" },
      { icon: CreditCard, label: "Payment gateways" },
      { icon: Store, label: "Resellers" },
      { icon: BarChart3, label: "Reports" },
    ],
  },
  overview: {
    title: "What is VoIP billing software?",
    paragraphs: [
      "VoIP billing software turns call records into charges. It rates each call against your tariffs, deducts prepaid credit or builds postpaid invoices, and collects payments.",
      "Our VoIP billing platform runs on FreeSWITCH and OpenSIPS and connects to softswitches, IP PBXs, fax servers and other VoIP systems. You get accurate bills and full control over rates and reseller margins.",
    ],
    audiences: ["ITSPs & VoIP carriers", "Hosted PBX providers", "Calling card operators", "UCaaS & SaaS platforms"],
  },
  features: {
    title: "VoIP billing features",
    items: [
      { icon: Users, title: "Account management", text: "Create prepaid or postpaid customers with credit limits, taxes and currencies." },
      { icon: Store, title: "Reseller levels", text: "Let resellers sell under their own rates while you track margins at each level." },
      { icon: Layers, title: "Tariff plans", text: "Build rate plans by prefix, destination and time of day for each customer group." },
      { icon: Route, title: "Routing strategies", text: "Pick carriers by cost, priority or quality, and bill each route correctly." },
      { icon: PhoneCall, title: "DID management", text: "Sell phone numbers with setup and monthly fees billed automatically." },
      { icon: Package, title: "Call bundles", text: "Offer minute packages and free-minute plans so you can package services your way." },
      { icon: FileText, title: "Automated invoicing", text: "Generate and email invoices on each billing cycle without manual work." },
      { icon: CreditCard, title: "Payment gateways", text: "Take card and online payments through gateways such as PayPal and Stripe." },
      { icon: ShieldAlert, title: "Fraud detection", text: "Flag unusual spend or destinations and cut calls before losses grow." },
      { icon: Plug, title: "Third-party integrations", text: "Connect CRMs, accounting tools and your own apps through APIs." },
    ],
  },
  benefits: {
    title: "What automated billing changes",
    items: [
      { icon: Target, title: "Accurate bills", text: "Automatic rating removes manual errors, so customers trust their invoices and dispute less." },
      { icon: Clock, title: "Faster payment", text: "Invoices go out on time every cycle, so cash reaches you sooner." },
      { icon: Wallet, title: "No unpaid calls", text: "Real-time balance checks stop prepaid calls when credit runs out." },
      { icon: BarChart3, title: "Clear margins", text: "Reports show revenue, cost and profit by customer, reseller and route." },
    ],
  },
  howItWorks: {
    title: "How the billing engine works",
    text: "Your switch asks the billing engine whether each call may start and how long it can run. When the call ends, the engine rates the record, updates the balance and adds it to the next invoice.",
    points: [
      "Works with FreeSWITCH, OpenSIPS and other VoIP platforms",
      "Deploy in the cloud or on your own servers",
      "Multi-currency and multi-tax support",
      "Custom billing rules and reports on request",
    ],
  },
  integrations: {
    title: "Bill any VoIP service",
    items: [
      { icon: Route, title: "Class 4 softswitch", text: "Rate wholesale carrier traffic in real time.", href: "/class-4-softswitch-solution" },
      { icon: Network, title: "Multi-tenant IP PBX", text: "Invoice hosted PBX tenants and resellers.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: CreditCard, title: "Calling card solution", text: "Prepaid cards, recharge and PIN billing.", href: "/calling-card-solution" },
      { icon: FileText, title: "Faxing solution", text: "Charge per page or per fax sent.", href: "/faxing-solution" },
    ],
  },
  faqs: [
    {
      question: "Which VoIP businesses need billing software?",
      answer:
        "Any business that charges for calls, numbers or VoIP services needs billing software. That includes wholesale carriers, retail VoIP and hosted PBX providers, calling card operators and SaaS platforms with voice features. The same system handles prepaid and postpaid customers.",
    },
    {
      question: "Can the VoIP billing system connect to my existing softswitch?",
      answer:
        "Usually, yes. It works natively with FreeSWITCH and OpenSIPS, and we can connect other switches and PBXs through their call records or APIs. We review your current setup first and confirm what integration work is needed before you commit. Call records keep flowing while we connect the two systems.",
    },
    {
      question: "Which payment gateways does the billing software support?",
      answer:
        "It supports common gateways such as PayPal and Stripe out of the box. We can add other gateways, including regional ones, on request. Customers can top up prepaid balances or pay invoices online, and payments post to their account automatically.",
    },
    {
      question: "How long does it take to build a custom VoIP billing solution?",
      answer:
        "Timelines depend on the features, integrations and billing rules you need. Starting from our existing platform is much faster than building from zero, since only your custom parts need development. We give you a timeline and milestones after scoping, and you see working builds at each stage.",
    },
    {
      question: "Does the billing software prevent toll fraud?",
      answer:
        "It helps. Real-time balance checks, credit limits and alerts for unusual spend or destinations stop many fraud cases before they become expensive. For wider protection, combine it with SIP security rules on your switch, which we can also configure. Together they limit both who can call and how much they can spend.",
    },
  ],
  related: [
    { name: "Class 4 Softswitch", href: "/class-4-softswitch-solution" },
    { name: "Class 5 Softswitch", href: "/class-5-softswitch-solution" },
    { name: "Calling Card Solution", href: "/calling-card-solution" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
  ],
  cta: {
    title: "See VoIP billing on your own traffic",
    text: "Book a free demo and we'll show you rating, invoicing and reseller accounts set up your way.",
  },
};

export default voipBilling;
