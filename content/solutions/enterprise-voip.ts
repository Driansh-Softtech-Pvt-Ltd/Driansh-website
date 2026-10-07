import {
  ArrowRightLeft,
  BarChart3,
  Building2,
  Disc,
  Laptop,
  Layers,
  Mail,
  MessageSquare,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PiggyBank,
  Printer,
  Route,
  Server,
  ServerCog,
  Smartphone,
  TrendingUp,
  Video,
  Voicemail,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const enterpriseVoip: SolutionPageContent = {
  kind: "solution",
  path: "/enterprise-voip-solutions",
  name: "Enterprise VoIP",
  eyebrow: "Solutions",
  seo: {
    title: "Enterprise VoIP Solution for Large Teams",
    description:
      "Enterprise VoIP solution with call routing, video meetings, messaging, recording and fax, on your servers or cloud and on every device. Book a free demo.",
  },
  hero: {
    title: "Enterprise VoIP solution for growing organisations",
    subtitle:
      "We build enterprise VoIP phone systems that bring calling, meetings, messaging and fax onto one platform, deployed on your servers or cloud and shaped to how you work.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: [
    "Calls, meetings & messaging",
    "Desk phones, softphones & mobile",
    "Number porting",
    "Cloud or on-premise",
  ],
  diagram: {
    center: { icon: Building2, label: "Enterprise VoIP" },
    nodes: [
      { icon: Phone, label: "IP desk phones" },
      { icon: Laptop, label: "Softphones" },
      { icon: Smartphone, label: "Mobile apps" },
      { icon: Route, label: "Call routing" },
      { icon: Disc, label: "Call recording" },
      { icon: BarChart3, label: "Reports" },
    ],
  },
  overview: {
    title: "What is an enterprise VoIP solution?",
    paragraphs: [
      "An enterprise VoIP solution runs a company's phone calls over the internet instead of traditional phone lines. It adds features landlines cannot offer, such as video meetings, voicemail to email, messaging and CRM integration.",
      "We build enterprise VoIP systems that connect offices, remote staff and mobile users on one platform. You can add users, sites and features as the business grows, without new phone lines or hardware.",
    ],
    audiences: ["Multi-site enterprises", "Remote & hybrid teams", "Customer service teams", "IT & telecom departments"],
  },
  features: {
    title: "Enterprise VoIP phone system features",
    items: [
      { icon: PhoneForwarded, title: "Call routing & forwarding", text: "Send each call to the right extension, team or mobile, so you miss fewer customer calls." },
      { icon: PhoneCall, title: "Voice calling", text: "Make internal and external calls from desk phones, softphones or mobile apps on one system." },
      { icon: Video, title: "Audio & video meetings", text: "Start voice or video meetings with staff and clients without a separate conferencing tool." },
      { icon: MessageSquare, title: "Team messaging", text: "Send messages, files and images, so teams share updates without leaving the platform." },
      { icon: Voicemail, title: "Voicemail to email", text: "Receive voicemails as email attachments, so you can listen and reply from anywhere." },
      { icon: Disc, title: "Call recording", text: "Record calls for training, quality checks and compliance, and review them any time." },
      { icon: BarChart3, title: "Reports & insights", text: "Track call volumes, missed calls and team performance, so you can plan staffing." },
      { icon: Printer, title: "Fax over IP", text: "Send and receive faxes from email or the web without a fax machine or line." },
      { icon: Smartphone, title: "Any-device access", text: "Connect IP phones, laptops, tablets and smartphones to the same extension." },
      { icon: ArrowRightLeft, title: "Number porting", text: "Move your existing business numbers to the new system without changing what customers dial." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: PiggyBank, title: "Lower call costs", text: "Cut spending on phone lines, long-distance charges and on-site telephone hardware." },
      { icon: Laptop, title: "Work from anywhere", text: "Staff take business calls on any device, whether they are in the office, at home or travelling." },
      { icon: TrendingUp, title: "Scale without rewiring", text: "Add or remove users and sites from an admin panel instead of installing new lines." },
      { icon: Layers, title: "One system to manage", text: "Calls, meetings, messaging and fax sit on one platform with one set of users and reports." },
    ],
  },
  howItWorks: {
    title: "How enterprise VoIP replaces your landlines",
    text: "Phones and apps register with a central VoIP server over your network or the internet. The server routes each call to extensions, teams or SIP trunks for outside calls. Because it runs in software, adding a user or site is a configuration change, not a wiring job.",
    points: [
      "Works with SIP desk phones, softphones and mobile apps",
      "SIP trunks and number porting for outside calls",
      "Deploy on your own servers or in the cloud",
      "Custom features and CRM integrations on request",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Server, title: "Multi-tenant IP PBX", text: "Run separate PBX tenants for departments or client companies.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Layers, title: "Unified communications", text: "Add presence, chat and a unified inbox for every user.", href: "/unified-communications-solution" },
      { icon: Video, title: "Audio & video conferencing", text: "Host larger meetings with screen sharing and recording.", href: "/audio-video-conferencing-solution" },
      { icon: ServerCog, title: "Asterisk development", text: "Custom dial plans, IVRs and PBX integrations.", href: "/services/asterisk-development-service" },
      { icon: Mail, title: "Faxing solution", text: "Email and web faxing for every department.", href: "/faxing-solution" },
    ],
  },
  faqs: [
    {
      question: "How much does an enterprise VoIP phone system cost?",
      answer:
        "The cost depends on the number of users and sites, the features you need and whether you host it yourself or in the cloud. We scope your requirements during a free consultation and give you a clear quote before work starts, so there are no surprise charges later.",
    },
    {
      question: "Can I keep my business phone numbers when moving to VoIP?",
      answer:
        "Yes. Existing numbers can be ported from your current provider to the new system, so customers keep dialling the same numbers. We plan the port alongside setup so calls keep reaching you during the switch, and we test routing before the old service is closed.",
    },
    {
      question: "How many users can an enterprise VoIP system support?",
      answer:
        "There is no fixed user limit in the software. Capacity depends on your servers, bandwidth and call volumes, so we size the platform for your current headcount and leave room to grow. When you need more, you add users from the admin panel or add servers.",
    },
    {
      question: "How long does it take to set up enterprise VoIP?",
      answer:
        "A small setup can be ready within days, while a multi-site rollout with custom integrations takes longer. The timeline depends on the number of sites, phones to configure, numbers to port and features to build. We agree a rollout plan with you before work begins.",
    },
    {
      question: "Which devices work with an enterprise VoIP phone system?",
      answer:
        "Most SIP desk phones, desktop softphones and mobile apps on Android and iOS can connect. One user can sign in on several devices with the same extension. If you already own IP phones, we check their compatibility and reuse them where possible to keep costs down.",
    },
  ],
  related: [
    { name: "Unified Communications", href: "/unified-communications-solution" },
    { name: "Multi-Tenant IP PBX", href: "/multi-tenant-ip-pbx-solution" },
    { name: "VoIP Business Solutions", href: "/voip-business-solutions" },
    { name: "Audio & Video Conferencing", href: "/audio-video-conferencing-solution" },
  ],
  cta: {
    title: "See enterprise VoIP in action",
    text: "Book a free demo and we'll show calling, meetings and call routing set up for your team.",
  },
};

export default enterpriseVoip;
