import {
  AppWindow,
  Blocks,
  Briefcase,
  Code2,
  Layers,
  LifeBuoy,
  MonitorSmartphone,
  Palette,
  PhoneCall,
  Plug,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  TabletSmartphone,
  Zap,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const flutter: ServicePageContent = {
  kind: "service",
  path: "/services/flutter-app-development",
  name: "Flutter App Development",
  eyebrow: "Mobile App Development",
  seo: {
    title: "Flutter App Development Services",
    description:
      "Flutter app development for iOS, Android and web from one Dart codebase: MVPs, custom apps and API integration. Talk to a Flutter engineer for a free call.",
  },
  hero: {
    title: "Flutter App Development Services for Faster Launches",
    subtitle:
      "We build Flutter apps for iOS, Android and the web from one codebase, for startups and businesses that want to launch sooner and maintain less.",
    primaryCta: "Talk to a Flutter Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "One codebase for iOS & Android",
    "MVPs & custom apps",
    "Native plugins when needed",
    "Cloud or self-hosted backends",
  ],
  diagram: {
    center: { icon: Layers, label: "Flutter" },
    nodes: [
      { icon: Smartphone, label: "Android app" },
      { icon: TabletSmartphone, label: "iOS app" },
      { icon: AppWindow, label: "Web app" },
      { icon: Plug, label: "Native plugins" },
      { icon: Server, label: "Backend & APIs" },
    ],
  },
  intro: {
    title: "What we build with Flutter",
    paragraphs: [
      "Flutter app development lets you ship one app to iOS, Android and the web from a single Dart codebase. We use it to build MVPs, customer apps and internal tools that look and feel consistent on every device.",
      "When a feature needs deeper device access, such as calling or Bluetooth, we write native plugins in Swift or Kotlin. You keep the speed of one codebase without giving up native capabilities.",
    ],
  },
  techStack: ["Flutter", "Dart", "Riverpod", "Bloc", "Firebase", "REST & GraphQL", "Kotlin", "Swift", "Node.js", "WebRTC"],
  services: {
    title: "Flutter app development services we offer",
    items: [
      { icon: Code2, title: "Custom Flutter apps", text: "Build a full-featured app for iOS and Android from one codebase, designed around your users." },
      { icon: Rocket, title: "MVP development", text: "Launch a focused first version quickly so you can test your idea with real users." },
      { icon: Palette, title: "Flutter UI/UX design", text: "Design custom screens and animations that stay consistent across phones, tablets and the web." },
      { icon: Plug, title: "API & plugin integration", text: "Connect payments, maps, analytics and your own APIs, and write native plugins where Flutter falls short." },
      { icon: RefreshCw, title: "Upgrades & migration", text: "Upgrade older Flutter apps to current releases, or rebuild separate native apps as one Flutter app." },
      { icon: LifeBuoy, title: "Maintenance & support", text: "Keep your app updated for new OS versions, fix issues and add features after launch." },
    ],
  },
  useCases: {
    title: "Flutter apps we build",
    items: [
      { icon: Rocket, title: "Startup MVPs", text: "A first release on both stores, with the backend to support it.", href: "/services/product-engineering-service" },
      { icon: ShoppingCart, title: "Customer apps", text: "Booking, ordering and loyalty apps with payments and push notifications.", href: "/services/back-end-development" },
      { icon: PhoneCall, title: "VoIP calling apps", text: "Cross-platform SIP apps with native calling plugins underneath.", href: "/services/linphone-app-development" },
      { icon: MonitorSmartphone, title: "Video & chat apps", text: "In-app voice, video and messaging built with WebRTC.", href: "/services/webrtc-development-service" },
      { icon: Briefcase, title: "Business & field apps", text: "Internal tools with offline data and sync for teams on the move.", href: "/services/mobile-app-development" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for Flutter",
    items: [
      { icon: Zap, title: "Native skills underneath", text: "Our Swift and Kotlin engineers write plugins when Flutter alone cannot reach a device feature." },
      { icon: Server, title: "App and backend together", text: "We build the APIs and servers too, so one team owns the whole product." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code, store accounts and documentation stay with you, so you are never locked in." },
      { icon: Blocks, title: "Clean, testable code", text: "Clear state management and automated tests keep the app easy to extend as it grows." },
    ],
  },
  faqs: [
    {
      question: "How much does a Flutter app cost?",
      answer:
        "The cost depends on features, design complexity and backend work. Because one codebase covers iOS and Android, a Flutter app usually costs less than two separate native apps. We share a fixed-scope estimate after a free call, or you can hire a dedicated Flutter team monthly.",
    },
    {
      question: "Is Flutter good for startups?",
      answer:
        "Yes, Flutter suits most startups. You launch on iOS and Android at the same time, pay for one codebase and change the product quickly after user feedback. If your app depends on heavy device features, we may recommend native code for those parts only.",
    },
    {
      question: "Can a Flutter app match native performance?",
      answer:
        "For most apps, yes. Flutter compiles to native machine code and draws its own interface, so scrolling and animations are smooth. Features like background calling or Bluetooth need native plugins, which we write in Swift or Kotlin and call from Flutter.",
    },
    {
      question: "Flutter or React Native: which should we pick?",
      answer:
        "Both work well for cross-platform apps. Flutter gives very consistent custom UI and strong performance. React Native suits teams already using JavaScript or React on the web. We build with both and recommend one based on your team, design and existing code.",
    },
    {
      question: "Can Flutter be used to build web and desktop apps too?",
      answer:
        "Yes. Flutter can target the web, Windows, macOS and Linux as well as mobile. It works best for app-like dashboards and tools rather than content-heavy websites. We help you decide which platforms to share code across and which need a separate web build.",
    },
  ],
  related: [
    { name: "React Native App Development", href: "/services/react-native-app-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Android App Development", href: "/services/android-app-development" },
    { name: "iOS App Development", href: "/services/ios-app-development" },
  ],
  cta: {
    title: "Planning a Flutter app?",
    text: "Share your idea and target platforms. A Flutter engineer will review it and suggest a first release.",
  },
};

export default flutter;
