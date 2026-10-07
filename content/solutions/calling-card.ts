import {
  BarChart3,
  CreditCard,
  Globe2,
  KeyRound,
  Languages,
  Mic,
  PhoneCall,
  PhoneForwarded,
  Receipt,
  Route,
  Smartphone,
  Store,
  Ticket,
  UserCheck,
  Volume2,
  Wallet,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const callingCard: SolutionPageContent = {
  kind: "solution",
  path: "/calling-card-solution",
  name: "Calling Card Solution",
  eyebrow: "Solutions",
  seo: {
    title: "Calling Card Solution & Software",
    description:
      "Calling card solution for VoIP providers: PIN and PINless cards, callback, access numbers, recharge and prepaid billing for global calling. Book a demo.",
  },
  hero: {
    title: "Calling card solution for international VoIP providers",
    subtitle:
      "Sell prepaid international calling with PIN, PINless and callback access. Your customers dial from any phone, and billing, recharge and reporting run automatically.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: [
    "PIN & PINless cards",
    "Callback service",
    "Built-in prepaid billing",
    "Multi-language & currency",
  ],
  diagram: {
    center: { icon: CreditCard, label: "Calling Card Platform" },
    nodes: [
      { icon: PhoneCall, label: "Access numbers" },
      { icon: KeyRound, label: "PIN & caller ID" },
      { icon: Route, label: "Carrier routing" },
      { icon: Wallet, label: "Prepaid balance" },
      { icon: Store, label: "Resellers" },
      { icon: BarChart3, label: "Call reports" },
    ],
  },
  overview: {
    title: "What is a calling card solution?",
    paragraphs: [
      "A calling card solution lets callers dial a local access number, enter a PIN and reach international destinations at VoIP rates. No app or special phone is needed on either end.",
      "We build the platform that runs this business: card generation, authentication, voice prompts, routing and prepaid billing. You manage cards, rates and resellers from a web panel.",
    ],
    audiences: ["VoIP service providers", "Prepaid card distributors", "Telecom resellers", "Diaspora calling brands"],
  },
  features: {
    title: "Calling card software features",
    items: [
      { icon: Ticket, title: "Bulk card generation", text: "Create batches of cards with set values, expiry dates and rate plans in one step." },
      { icon: KeyRound, title: "PIN & PINless access", text: "Let callers enter a PIN or skip it when their caller ID is registered." },
      { icon: PhoneForwarded, title: "Callback dialing", text: "Call customers back so they avoid expensive roaming or outbound charges." },
      { icon: PhoneCall, title: "Access number setup", text: "Map local DIDs in each country to your calling card service." },
      { icon: Volume2, title: "Custom voice prompts", text: "Record greetings and balance announcements, and switch playback messages on or off." },
      { icon: Languages, title: "Multi-language IVR", text: "Play prompts in the caller's language and bill in their currency." },
      { icon: CreditCard, title: "Online recharge", text: "Accept top-ups through the payment gateways you already use." },
      { icon: Mic, title: "Call recording", text: "Record calls where required for quality checks or disputes." },
      { icon: BarChart3, title: "Call detail reports", text: "Track usage, balance and margin per card, reseller and destination." },
    ],
  },
  benefits: {
    title: "What it does for your business",
    items: [
      { icon: Globe2, title: "Cheaper calls to sell", text: "SIP routing lowers your termination cost, so you can offer competitive international rates." },
      { icon: Smartphone, title: "Nothing to install", text: "Customers call from any mobile or landline, which widens your market beyond app users." },
      { icon: Receipt, title: "Billing on autopilot", text: "Prepaid balances, recharge and invoicing run automatically, so you avoid unpaid calls." },
      { icon: UserCheck, title: "Grow through resellers", text: "Give distributors their own accounts and rates so they sell cards for you." },
    ],
  },
  howItWorks: {
    title: "From access number to connected call",
    text: "A caller dials your access number. The platform checks the PIN or caller ID, reads the balance and plays the prompts. It then routes the call over your chosen carrier and deducts the cost in real time.",
    points: [
      "Runs on open-source VoIP engines such as FreeSWITCH",
      "Hosted in the cloud or on your own servers",
      "White-label web portal for you and your resellers",
      "Custom features added on request",
    ],
  },
  integrations: {
    title: "Build on your calling card platform",
    items: [
      { icon: Receipt, title: "VoIP billing", text: "Advanced rating, invoicing and payment handling.", href: "/voip-billing-solution" },
      { icon: Route, title: "Class 4 softswitch", text: "Wholesale routing to your termination carriers.", href: "/class-4-softswitch-solution" },
      { icon: Smartphone, title: "Mobile app development", text: "Add a dialer app for recharge and balance checks.", href: "/services/mobile-app-development" },
    ],
  },
  faqs: [
    {
      question: "How does a PINless calling card work?",
      answer:
        "With PINless dialing, the platform recognises the caller's registered phone number and skips the PIN prompt. The caller dials the access number, then the destination, and the call connects straight away. It is faster for repeat customers and still bills against the same prepaid account.",
    },
    {
      question: "How do I start a calling card business?",
      answer:
        "You need a calling card platform, access numbers in your target countries, termination carriers and a way to sell cards. We provide and set up the platform, configure access numbers and routes, and help you set up rates. You then focus on sales and distribution.",
    },
    {
      question: "Which call types does the calling card platform support?",
      answer:
        "Callers can use a mobile phone, landline, IP phone or softphone to reach any phone number. The platform supports PIN, PINless and callback access, so you can offer several products on the same system and price each one differently. Every call is billed against the same prepaid balance.",
    },
    {
      question: "Can resellers sell my calling cards?",
      answer:
        "Yes. You can create reseller accounts with their own rate plans, card batches and credit limits. Resellers log in to a branded portal to manage their customers and see their sales, while you keep full control of routing and margins.",
    },
    {
      question: "Does the calling card system support multiple currencies?",
      answer:
        "Yes. You can set a currency per customer or reseller, and voice prompts can announce balances in the caller's language. That makes it easier to sell cards in several countries from a single platform without running separate systems. Rates can also differ per country or reseller.",
    },
  ],
  related: [
    { name: "VoIP Billing", href: "/voip-billing-solution" },
    { name: "Class 4 Softswitch", href: "/class-4-softswitch-solution" },
    { name: "Class 5 Softswitch", href: "/class-5-softswitch-solution" },
  ],
  cta: {
    title: "Launch your calling card service",
    text: "Book a free demo to see card creation, PINless dialing and prepaid billing working end to end.",
  },
};

export default callingCard;
