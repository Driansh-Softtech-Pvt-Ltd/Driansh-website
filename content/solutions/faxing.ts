import {
  BadgeDollarSign,
  CheckCircle2,
  ClipboardList,
  FileText,
  Globe,
  Hash,
  Inbox,
  Layers,
  Mail,
  Network,
  Plug,
  Printer,
  Receipt,
  Server,
  ServerCog,
  ShieldAlert,
  Users,
  Laptop,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const faxing: SolutionPageContent = {
  kind: "solution",
  path: "/faxing-solution",
  name: "Faxing Solution",
  eyebrow: "Solutions",
  seo: {
    title: "Faxing Solution for Fax over IP (FoIP)",
    description:
      "Faxing solution for fax over IP: send and receive faxes by email or web, with T.38 support, fax rating and DID routing for providers. Book a free demo.",
  },
  hero: {
    title: "Faxing solution for online fax over IP",
    subtitle:
      "We build fax over IP (FoIP) platforms that let your users send and receive faxes from email or a web portal, with rating and reseller accounts for providers.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: ["Email to fax & fax to email", "Web to fax portal", "T.38 support", "Fax rating & reports"],
  diagram: {
    center: { icon: Printer, label: "FoIP Server" },
    nodes: [
      { icon: Mail, label: "Email to fax" },
      { icon: Inbox, label: "Fax to email" },
      { icon: Globe, label: "Web to fax" },
      { icon: Hash, label: "DID numbers" },
      { icon: Network, label: "T.38 gateways" },
      { icon: Receipt, label: "Fax rating" },
    ],
  },
  overview: {
    title: "What is a fax over IP solution?",
    paragraphs: [
      "A faxing solution built on fax over IP sends and receives faxes across IP networks instead of analogue phone lines. Users fax from email or a browser, and incoming faxes arrive in their inbox as files.",
      "We build FoIP platforms for businesses that still rely on fax and for providers who sell fax as a service. It accepts common document formats, rates each fax like a call and connects to your billing.",
    ],
    audiences: ["VoIP & telecom providers", "Healthcare & legal offices", "Finance & insurance", "Government & logistics"],
  },
  features: {
    title: "Fax over IP solution features",
    items: [
      { icon: Mail, title: "Email to fax", text: "Send a fax by emailing a document, with the sender checked against allowed email addresses." },
      { icon: Inbox, title: "Fax to email", text: "Route faxes received on a DID number straight to a chosen email address." },
      { icon: Globe, title: "Web to fax", text: "Upload a document in the web portal, edit the fax header and send it in a few clicks." },
      { icon: Network, title: "T.38 protocol", text: "Carry faxes over IP networks using the standard T.38 fax relay protocol." },
      { icon: FileText, title: "Multiple file formats", text: "Send PDF, DOC, DOCX, JPEG and TIFF files without converting them first." },
      { icon: Receipt, title: "Fax rating", text: "Rate each fax by destination, just like a call, so you can bill customers accurately." },
      { icon: ShieldAlert, title: "Live rate checks", text: "Show senders an error straight away when a destination prefix is not allowed." },
      { icon: Users, title: "Reseller accounts", text: "Let admins and resellers create and manage fax accounts for their own customers." },
      { icon: CheckCircle2, title: "Delivery status", text: "Get a success or failure notice for every fax, so you know when to resend." },
      { icon: ClipboardList, title: "Fax summary reports", text: "Review sent and received faxes by account, date and status for billing and audits." },
      { icon: Plug, title: "Third-party integration", text: "Connect billing, CRM or document systems through APIs, so faxes fit your existing workflow." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: Printer, title: "No fax machines", text: "Stop paying for fax hardware, paper, toner and dedicated analogue lines." },
      { icon: Laptop, title: "Fax from anywhere", text: "Staff send and receive faxes from the office, a laptop or home using email or a browser." },
      { icon: ClipboardList, title: "Clear audit trail", text: "Every fax has a status, a timestamp and a report entry, so nothing gets lost." },
      { icon: BadgeDollarSign, title: "New provider revenue", text: "Sell fax as a rated, billable service alongside voice to your existing customers." },
    ],
  },
  howItWorks: {
    title: "How online faxing works",
    text: "When a user emails or uploads a document, the FoIP server converts it to fax format and sends it over T.38 to the destination. Faxes arriving on a DID are converted to a document and emailed to the user. Each fax is rated and logged.",
    points: [
      "Supports PDF, DOC, DOCX, JPEG and TIFF",
      "Works with your DID numbers and SIP trunks",
      "Connects to third-party billing through APIs",
      "White-label, in the cloud or on-premise",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Receipt, title: "VoIP billing", text: "Rate, invoice and top up fax accounts automatically.", href: "/voip-billing-solution" },
      { icon: Layers, title: "Unified communications", text: "Offer fax alongside calling, chat and meetings.", href: "/unified-communications-solution" },
      { icon: ServerCog, title: "FreeSWITCH development", text: "Custom T.38 handling and fax routing logic.", href: "/services/freeswitch-development-service" },
      { icon: Server, title: "Class 5 softswitch", text: "Bundle fax with retail voice services.", href: "/class-5-softswitch-solution" },
    ],
  },
  faqs: [
    {
      question: "What is fax over IP and how does it work?",
      answer:
        "Fax over IP (FoIP) sends fax documents over IP networks instead of analogue phone lines. The document is converted to fax data, carried using a protocol such as T.38 and delivered to a fax machine or another FoIP user. Incoming faxes can arrive as email attachments.",
    },
    {
      question: "Is online faxing secure enough for confidential documents?",
      answer:
        "Yes, when it is set up correctly. Sending is limited to approved email addresses and user accounts, and we can add encrypted connections and extra access controls for sensitive files. Because faxes are stored digitally, you also control who can see them and how long they are kept.",
    },
    {
      question: "Can I send a fax from my email?",
      answer:
        "Yes. With email to fax, you attach a document to an email and send it to an address that includes the recipient's fax number. The system checks your email address, converts the file and sends the fax. You then receive a delivery confirmation or a failure notice.",
    },
    {
      question: "Can the faxing solution connect to my billing system?",
      answer:
        "Yes. Faxes are rated like calls, and the platform offers APIs for third-party billing, CRM and document systems. If you do not have a billing system yet, you can pair it with our VoIP billing solution for prepaid balances, invoicing and reseller accounts.",
    },
    {
      question: "Do you offer a white-label fax over IP solution?",
      answer:
        "Yes. The FoIP platform can run under your brand, so you can sell fax services to your own customers. Source code access is available if you want your team to maintain it, and we can add custom features or integrations before handover.",
    },
  ],
  related: [
    { name: "VoIP Billing", href: "/voip-billing-solution" },
    { name: "Unified Communications", href: "/unified-communications-solution" },
    { name: "Enterprise VoIP", href: "/enterprise-voip-solutions" },
    { name: "VoIP Business Solutions", href: "/voip-business-solutions" },
  ],
  cta: {
    title: "See online faxing in action",
    text: "Book a free demo and we'll send a fax from email and the web portal while you watch.",
  },
};

export default faxing;
