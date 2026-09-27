import {
  BarChart3,
  Building2,
  CalendarClock,
  Disc,
  FileAudio,
  Gauge,
  Grid3x3,
  Headphones,
  ListChecks,
  Megaphone,
  Network,
  Receipt,
  RotateCcw,
  ServerCog,
  Store,
  Upload,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const voiceBroadcasting: SolutionPageContent = {
  kind: "solution",
  path: "/voice-broadcasting-solution",
  name: "Voice Broadcasting",
  eyebrow: "Solutions",
  seo: {
    title: "Voice Broadcasting Solution & Software",
    description:
      "Voice broadcasting solution that calls contact lists with recorded messages, IVR, DTMF surveys, answering machine detection and reports. Book a free demo.",
  },
  hero: {
    title: "Voice Broadcasting Solution for Mass Call Campaigns",
    subtitle:
      "We build voice broadcasting software that calls your contact lists with recorded messages, captures keypad responses and reports results, with multi-tenant support for providers.",
    primaryCta: "Book a Free Demo",
    secondaryCta: "View Features",
  },
  highlights: ["Scheduled call campaigns", "IVR & DTMF responses", "Answering machine detection", "Multi-tenant ready"],
  diagram: {
    center: { icon: Megaphone, label: "Broadcast Engine" },
    nodes: [
      { icon: Users, label: "Contact lists" },
      { icon: FileAudio, label: "Voice prompts" },
      { icon: Grid3x3, label: "IVR & DTMF" },
      { icon: RotateCcw, label: "AMD & retries" },
      { icon: Network, label: "SIP trunks" },
      { icon: BarChart3, label: "Campaign reports" },
    ],
  },
  overview: {
    title: "What is a voice broadcasting solution?",
    paragraphs: [
      "A voice broadcasting solution calls a list of phone numbers automatically and plays a recorded message to each person who answers. It can also ask listeners to press keys, turning a broadcast into a short survey.",
      "We build call broadcasting software you can run for your own business or sell as a multi-tenant service. Your staff set up a campaign once, and the system handles dialling, retries and reporting.",
    ],
    audiences: ["Marketing teams", "Healthcare & clinics", "Schools & colleges", "Political campaigns", "Nonprofits & fundraisers"],
  },
  features: {
    title: "Voice broadcasting software features",
    items: [
      { icon: CalendarClock, title: "Campaign scheduling", text: "Create a campaign from a contact list and a voice prompt, then send it now or schedule it." },
      { icon: Upload, title: "Contact import", text: "Upload or import contacts with names and numbers, so lists are ready to dial." },
      { icon: FileAudio, title: "Audio upload & playback", text: "Upload WAV or MP3 prompts, or record your own, and preview them before sending." },
      { icon: Workflow, title: "Interactive IVR", text: "Guide listeners through menus, so they can take a survey or choose the next step." },
      { icon: Grid3x3, title: "DTMF capture", text: "Record which keys each listener presses, so you can collect feedback and responses." },
      { icon: RotateCcw, title: "Answering machine detection", text: "Detect voicemail and answering machines, then retry the number to reach a person." },
      { icon: Gauge, title: "Concurrent call limits", text: "Set how many calls run in parallel to match your channels and hardware." },
      { icon: Disc, title: "Selective call recording", text: "Record whole campaigns or chosen calls, and keep only the files you need." },
      { icon: Building2, title: "Multi-tenant accounts", text: "Create separate tenants, so you can resell voice broadcasting to your own customers." },
      { icon: ListChecks, title: "Reports & logs", text: "Track reach, answers, key presses and failures for every campaign." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: Zap, title: "Reach more people, faster", text: "Deliver one message to a large audience in the time it would take staff to make a few calls." },
      { icon: Users, title: "Free up your team", text: "Dialling and playback are automated, so staff focus on the replies that need a human." },
      { icon: BarChart3, title: "Measure every campaign", text: "Answer rates, key presses and failures show what worked, so you can improve the next one." },
      { icon: Store, title: "A service you can sell", text: "Multi-tenant accounts let you run voice broadcasting as a business for your clients." },
    ],
  },
  howItWorks: {
    title: "How call broadcasting works",
    text: "Add your contacts, record or upload a voice message, and set the campaign's schedule and concurrent calls. The engine dials each number over your SIP trunks, detects answering machines, plays the message and captures key presses. Results appear in reports as calls complete.",
    points: [
      "Supports WAV and MP3 voice prompts",
      "Works with your SIP trunks and caller IDs",
      "Web-based panel for non-technical users",
      "Deploy on your own servers or in the cloud",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Headphones, title: "Call center solution", text: "Hand interested contacts to agents for follow-up calls.", href: "/call-center-solution" },
      { icon: ServerCog, title: "VICIdial development", text: "Custom outbound dialling and campaign logic.", href: "/services/vicidial-development-service" },
      { icon: Receipt, title: "VoIP billing", text: "Rate and bill broadcast minutes per tenant.", href: "/voip-billing-solution" },
      { icon: Workflow, title: "Asterisk development", text: "Custom IVR flows and dialling rules.", href: "/services/asterisk-development-service" },
    ],
  },
  faqs: [
    {
      question: "What is voice broadcasting used for?",
      answer:
        "Voice broadcasting sends the same recorded message to many people at once. Common uses are appointment reminders, emergency alerts, school announcements, promotions, political outreach, fundraising and customer surveys. With keypad responses, listeners can confirm, opt out or answer questions during the call.",
    },
    {
      question: "Is voice broadcasting legal?",
      answer:
        "Voice broadcasting is legal in many countries, but rules on consent, calling hours and opt-outs vary by region and purpose. Many regions restrict automated marketing calls without prior consent. We can build do-not-call lists, calling windows and opt-out options, but you should confirm the rules that apply to your campaigns.",
    },
    {
      question: "How many calls can a voice broadcasting system make at once?",
      answer:
        "It depends on your SIP trunk channels and server hardware, not a fixed software limit. You set the number of concurrent calls per campaign, so you can start small and increase it as capacity allows. We size the servers for the call volumes you expect to run.",
    },
    {
      question: "What is answering machine detection in voice broadcasting?",
      answer:
        "Answering machine detection (AMD) tells whether a call was answered by a person or a voicemail system. The system can then retry the number later to reach a person, which saves channel time and raises your live answer rate. Custom handling, such as leaving a message, can be added.",
    },
    {
      question: "Can I run voice broadcasting as a service for my clients?",
      answer:
        "Yes. Multi-tenant support lets you create a separate account for each client, with their own contacts, campaigns and reports. You can brand the platform as your own and pair it with VoIP billing to charge clients for the calls they send.",
    },
  ],
  related: [
    { name: "Call Center Solution", href: "/call-center-solution" },
    { name: "VoIP Billing", href: "/voip-billing-solution" },
    { name: "Unified Communications", href: "/unified-communications-solution" },
    { name: "VICIdial Development", href: "/services/vicidial-development-service" },
  ],
  cta: {
    title: "See voice broadcasting in action",
    text: "Book a free demo and we'll set up and send a sample campaign with IVR and reports.",
  },
};

export default voiceBroadcasting;
