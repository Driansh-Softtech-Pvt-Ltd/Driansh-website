import {
  Bell,
  Blocks,
  Bug,
  Cable,
  Code2,
  Layers,
  Lightbulb,
  MessageSquare,
  Monitor,
  Network,
  Palette,
  PhoneCall,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const linphone: ServicePageContent = {
  kind: "service",
  path: "/services/linphone-app-development",
  name: "Linphone App Development",
  eyebrow: "Open Source Development",
  seo: {
    title: "Linphone App Development Services",
    description:
      "Linphone app development: white-label SIP softphones for Android, iOS and desktop, with PBX integration and push calling. Talk to a Linphone engineer.",
  },
  hero: {
    title: "Linphone App Development for Branded SIP Softphones",
    subtitle:
      "We turn the open-source Linphone SDK into your own softphone for Android, iOS and desktop, connected to your PBX or softswitch and published under your brand.",
    primaryCta: "Talk to a Linphone Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Android, iOS & desktop apps",
    "White-label branding",
    "Push notifications for calls",
    "PBX & softswitch integration",
  ],
  diagram: {
    center: { icon: Smartphone, label: "Linphone app" },
    nodes: [
      { icon: ServerCog, label: "Your PBX / softswitch" },
      { icon: PhoneCall, label: "Voice calls" },
      { icon: Video, label: "Video calls" },
      { icon: MessageSquare, label: "Chat & presence" },
      { icon: Bell, label: "Push notifications" },
    ],
  },
  intro: {
    title: "What we build with Linphone",
    paragraphs: [
      "Linphone app development gives you a working SIP softphone without writing a VoIP client from scratch. We start from the open-source Linphone SDK and apps, then add your branding, provisioning and the features your users need.",
      "We build for VoIP providers that want an app for their subscribers, and for companies that want a private calling app for staff. Our mobile and VoIP engineers work on the same project, so app and server settings match.",
    ],
  },
  techStack: ["Linphone SDK", "SIP", "Kotlin", "Swift", "C++", "PushKit & FCM", "SRTP / ZRTP", "Opus", "Asterisk", "FreeSWITCH"],
  services: {
    title: "Linphone app development services we offer",
    items: [
      { icon: Lightbulb, title: "Linphone consulting", text: "Review your goals and VoIP setup, then recommend the platforms, features and licence path that fit." },
      { icon: Palette, title: "White-label apps", text: "Replace Linphone branding with your name, logo and colours, so you can publish the app as your own." },
      { icon: Code2, title: "Custom features", text: "Add screens, call features or account flows Linphone lacks, so the app matches how your users work." },
      { icon: Cable, title: "PBX & softswitch integration", text: "Connect the app to your IP PBX, softswitch or billing APIs, with automatic account provisioning." },
      { icon: Bell, title: "Push notifications", text: "Wake the app for incoming calls and messages, so users stay reachable without draining battery." },
      { icon: Bug, title: "Troubleshooting & updates", text: "Fix audio, registration and NAT issues, and keep the app current with new OS and SDK releases." },
    ],
  },
  useCases: {
    title: "Where our Linphone apps are used",
    items: [
      { icon: Users, title: "Multi-tenant IP PBX", text: "A branded mobile extension for every user on your hosted PBX.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Network, title: "Class 5 softswitch", text: "A subscriber app for retail VoIP providers running their own switch.", href: "/class-5-softswitch-solution" },
      { icon: PhoneCall, title: "Calling card apps", text: "Mobile dialers with balance checks for prepaid calling services.", href: "/calling-card-solution" },
      { icon: MessageSquare, title: "Unified communications", text: "Voice, video and chat in one app alongside your UC platform.", href: "/unified-communications-solution" },
      { icon: Smartphone, title: "Mobile app development", text: "Full native app builds when you need more than a softphone.", href: "/services/mobile-app-development" },
    ],
  },
  whyUs: {
    title: "Why choose Driansh for Linphone",
    items: [
      { icon: Layers, title: "Mobile and VoIP skills", text: "One team handles the native app and the SIP server side, so problems don't bounce between vendors." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code, signing setup and documentation are handed over when the project is done." },
      { icon: Monitor, title: "Every platform", text: "We build for Android, iOS and desktop from the same SDK, so features stay consistent." },
      { icon: Blocks, title: "Built to update", text: "We keep your changes separate from SDK code, so new Linphone releases are easier to merge." },
    ],
  },
  faqs: [
    {
      question: "Can I publish a Linphone-based app under my own brand?",
      answer:
        "Yes, with the right licence. Linphone is dual-licensed: the open-source GPL licence lets you ship a branded app if you also publish your source code, while a commercial licence from Belledonne Communications lets you keep it closed. We help you choose the path that fits your business before we start.",
    },
    {
      question: "How long does it take to build a white-label Linphone app?",
      answer:
        "A branded app with your provisioning and push notifications is usually a matter of weeks per platform. Custom screens, chat features or deep billing integration add time. We give you a timeline and quote after a free call where we review your PBX and feature list.",
    },
    {
      question: "Does Linphone work with Asterisk and FreeSWITCH?",
      answer:
        "Yes. Linphone is a standard SIP client, so it registers to Asterisk, FreeSWITCH, FusionPBX, Kamailio and most hosted PBX platforms. We configure codecs, NAT handling and encryption on both the app and the server so calls connect reliably. We also test registration and audio across mobile networks and Wi-Fi before release.",
    },
    {
      question: "Why do mobile softphones miss incoming calls?",
      answer:
        "Usually because the operating system has put the app to sleep. The fix is push notifications: your server sends a push through Apple or Google, which wakes the app to take the call. We set up the push gateway and app logic so calls ring even when the app is closed.",
    },
    {
      question: "Can a Linphone app make encrypted calls?",
      answer:
        "Yes. Linphone supports TLS for signaling and SRTP or ZRTP for media, so calls and messages are encrypted in transit. We enable and test these settings against your server, and can add certificate pinning or custom login flows if your security team needs them.",
    },
  ],
  related: [
    { name: "SIP.js Development", href: "/services/sip-js-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "FusionPBX Development", href: "/services/fusionpbx-development-service" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
  ],
  cta: {
    title: "Want your own SIP softphone app?",
    text: "Tell us your platforms, PBX and must-have features. A Linphone engineer will reply with a plan and estimate.",
  },
};

export default linphone;
