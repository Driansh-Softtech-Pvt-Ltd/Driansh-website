import {
  AppWindow,
  Blocks,
  Briefcase,
  Code2,
  FileCode,
  Headset,
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
  Smartphone,
  TabletSmartphone,
  Zap,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const reactNative: ServicePageContent = {
  kind: "service",
  path: "/services/react-native-app-development",
  name: "React Native App Development",
  eyebrow: "Mobile App Development",
  seo: {
    title: "React Native App Development Company",
    description:
      "React Native app development for iOS and Android: custom apps, MVPs, app migration and native modules. Talk to a React Native engineer for a free call.",
  },
  hero: {
    title: "React Native App Development Services for iOS and Android",
    subtitle:
      "We build React Native apps for iOS and Android from one JavaScript codebase, for teams that want native feel, shared web skills and faster releases.",
    primaryCta: "Talk to a React Native Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "TypeScript & React Native",
    "Legacy app migration",
    "Native modules in Swift & Kotlin",
    "Over-the-air updates",
  ],
  diagram: {
    center: { icon: Layers, label: "React Native" },
    nodes: [
      { icon: Smartphone, label: "Android app" },
      { icon: TabletSmartphone, label: "iOS app" },
      { icon: AppWindow, label: "React web app" },
      { icon: Plug, label: "Native modules" },
      { icon: Server, label: "Backend & APIs" },
    ],
  },
  intro: {
    title: "What we build with React Native",
    paragraphs: [
      "React Native app development lets you ship real native apps for iOS and Android from one TypeScript codebase. We use it for customer apps, MVPs and business tools, often sharing logic with an existing React website.",
      "When an app needs deeper device access, such as SIP calling or background tasks, we write native modules in Swift and Kotlin. You get one codebase for most features and native code only where it matters.",
    ],
  },
  techStack: ["React Native", "TypeScript", "Expo", "Redux", "React Query", "Firebase", "Swift", "Kotlin", "Node.js", "WebRTC"],
  services: {
    title: "React Native app development services we offer",
    items: [
      { icon: Code2, title: "Custom React Native apps", text: "Build a full-featured iOS and Android app from one codebase, shaped around your users." },
      { icon: Rocket, title: "MVP development", text: "Launch a focused first version on both stores so you can validate your idea quickly." },
      { icon: Palette, title: "Mobile UI/UX design", text: "Design screens that respect iOS and Android conventions while keeping your brand consistent." },
      { icon: RefreshCw, title: "Legacy app migration", text: "Move separate native apps or older React Native versions onto a current, maintainable codebase." },
      { icon: Plug, title: "Native modules & integrations", text: "Connect payments, maps, analytics and SDKs, and write Swift or Kotlin modules where needed." },
      { icon: LifeBuoy, title: "Maintenance & support", text: "Upgrade React Native versions, fix crashes and ship over-the-air updates after launch." },
    ],
  },
  useCases: {
    title: "React Native apps we build",
    items: [
      { icon: AppWindow, title: "Web + mobile products", text: "Mobile apps that share logic and APIs with your React web app.", href: "/services/front-end-development" },
      { icon: PhoneCall, title: "VoIP calling apps", text: "SIP calling in React Native through native Swift and Kotlin modules.", href: "/services/sip-js-development-service" },
      { icon: Headset, title: "Support & inbox apps", text: "Mobile access to omnichannel customer conversations for your team.", href: "/our-products/omniconnect" },
      { icon: MonitorSmartphone, title: "Video & chat apps", text: "Voice, video and messaging features built on WebRTC.", href: "/services/webrtc-development-service" },
      { icon: Briefcase, title: "Business apps", text: "Staff and customer apps connected to secure backends and APIs.", href: "/services/back-end-development" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for React Native",
    items: [
      { icon: Zap, title: "Native skills underneath", text: "Our Swift and Kotlin engineers write native modules when JavaScript alone is not enough." },
      { icon: FileCode, title: "Shared web expertise", text: "We also build React web apps, so code and patterns can be shared across platforms." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code, store accounts and documentation stay with you, so you are never locked in." },
      { icon: Blocks, title: "Typed, testable code", text: "TypeScript and automated tests keep the app safe to change as your product grows." },
    ],
  },
  faqs: [
    {
      question: "How much does React Native app development cost?",
      answer:
        "The cost depends on features, native integrations and backend work. One React Native codebase usually costs less than building and maintaining two native apps. We share a fixed-scope estimate after a free call, or you can hire a dedicated React Native team monthly.",
    },
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React builds user interfaces for websites in the browser. React Native uses the same component model and JavaScript to build real iOS and Android apps with native UI elements. Business logic and API code can often be shared between the two.",
    },
    {
      question: "Can you migrate our native apps to React Native?",
      answer:
        "Yes. We review your existing iOS and Android apps, plan which screens to move first, then migrate them step by step. Users keep a working app throughout. Complex native features can stay in Swift or Kotlin and be called from React Native.",
    },
    {
      question: "Can React Native apps get updates without the app stores?",
      answer:
        "Partly. JavaScript and asset changes can be shipped over the air using tools such as Expo Updates, so users get fixes without a store download. Changes to native code or permissions still need a normal App Store and Google Play release.",
    },
    {
      question: "Is React Native fast enough for calling or video apps?",
      answer:
        "Yes, when the heavy work runs natively. We handle SIP, WebRTC media and CallKit or Android call services in native modules, and build the screens in React Native. This keeps audio quality high while most of the app stays in one codebase.",
    },
  ],
  related: [
    { name: "Flutter App Development", href: "/services/flutter-app-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Front-End Development", href: "/services/front-end-development" },
    { name: "iOS App Development", href: "/services/ios-app-development" },
  ],
  cta: {
    title: "Planning a React Native app?",
    text: "Share your idea and current stack. A React Native engineer will review it and suggest the right approach.",
  },
};

export default reactNative;
