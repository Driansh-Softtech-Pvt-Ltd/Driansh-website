import {
  AppWindow,
  Bell,
  Briefcase,
  Code2,
  FlaskConical,
  Headset,
  Layers,
  LifeBuoy,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  PhoneCall,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  TabletSmartphone,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const mobileApp: ServicePageContent = {
  kind: "service",
  path: "/services/mobile-app-development",
  name: "Mobile App Development",
  eyebrow: "Mobile App Development",
  seo: {
    title: "Mobile App Development Services",
    description:
      "Mobile app development for iOS and Android: native, Flutter and React Native apps with backends and VoIP calling. Talk to our mobile team for a free call.",
  },
  hero: {
    title: "Mobile App Development Services for iOS and Android",
    subtitle:
      "We design and build native and cross-platform mobile apps, including VoIP calling apps, for startups and businesses, with the backend and APIs to run them.",
    primaryCta: "Talk to Our Mobile Team",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Native & cross-platform apps",
    "Backend & API development",
    "VoIP & real-time calling",
    "Store release & maintenance",
  ],
  diagram: {
    center: { icon: Smartphone, label: "Mobile app" },
    nodes: [
      { icon: TabletSmartphone, label: "iOS & Android" },
      { icon: Server, label: "Backend & APIs" },
      { icon: PhoneCall, label: "VoIP & WebRTC" },
      { icon: Bell, label: "Push notifications" },
      { icon: Store, label: "App Store & Play" },
    ],
  },
  intro: {
    title: "What our mobile app development covers",
    paragraphs: [
      "Mobile app development at Driansh covers the whole product: UX design, the iOS and Android apps, and the backend they talk to. We build native apps in Swift and Kotlin, or one shared codebase in Flutter or React Native.",
      "Because our roots are in VoIP, we are comfortable with the hard parts of mobile, such as real-time calling, background services and push. You get one team from first wireframe to store release and ongoing updates.",
    ],
  },
  techStack: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "Node.js", "REST & GraphQL", "WebRTC", "SIP"],
  services: {
    title: "Mobile app development services we offer",
    items: [
      { icon: TabletSmartphone, title: "Native iOS & Android", text: "Build separate Swift and Kotlin apps when you need full device access and platform-specific performance." },
      { icon: Layers, title: "Cross-platform apps", text: "Ship to iOS and Android from one Flutter or React Native codebase so you can launch faster." },
      { icon: Palette, title: "UI/UX design", text: "Turn your idea into wireframes and tested screen flows before any code is written." },
      { icon: Server, title: "Backend & APIs", text: "Build the servers, databases and APIs your app needs for accounts, data sync and payments." },
      { icon: MonitorSmartphone, title: "Website to app", text: "Turn an existing website or web platform into a mobile app that shares its data and logins." },
      { icon: LifeBuoy, title: "Release & maintenance", text: "Handle store submission, OS updates, crash fixes and new features after launch." },
    ],
  },
  useCases: {
    title: "Types of mobile apps we build",
    description: "Pick the approach that fits your product, or ask us to recommend one.",
    items: [
      { icon: PhoneCall, title: "VoIP softphone apps", text: "SIP calling apps with push-based incoming calls, built on Linphone or custom stacks.", href: "/services/linphone-app-development" },
      { icon: MessagesSquare, title: "Video & chat apps", text: "In-app voice, video and messaging powered by WebRTC.", href: "/services/webrtc-development-service" },
      { icon: Headset, title: "Customer support apps", text: "Mobile access to omnichannel conversations for support and sales teams.", href: "/our-products/engageone" },
      { icon: Briefcase, title: "Business & field apps", text: "Internal tools for staff, with offline data and secure logins.", href: "/services/back-end-development" },
      { icon: ShoppingCart, title: "Customer-facing apps", text: "Booking, ordering and loyalty apps shipped to both stores from one codebase.", href: "/services/flutter-app-development" },
      { icon: AppWindow, title: "Companion web apps", text: "Web dashboards and admin panels that sit alongside your mobile app.", href: "/services/web-development" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for mobile apps",
    items: [
      { icon: Code2, title: "Native and cross-platform", text: "We work in Swift, Kotlin, Flutter and React Native, so the advice on approach is honest." },
      { icon: PhoneCall, title: "Real-time calling experience", text: "Our VoIP background means calling, video and push features are part of our everyday work." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code, store accounts and documentation stay yours, so you are never locked in." },
      { icon: FlaskConical, title: "Tested on real devices", text: "We test on physical phones and OS versions before each release, not just simulators." },
    ],
  },
  faqs: [
    {
      question: "How much does it cost to build a mobile app?",
      answer:
        "The cost depends on features, platforms and backend work. A focused MVP on one codebase costs far less than two native apps with a custom backend. After a free discovery call we send a fixed-scope estimate, or you can hire a dedicated team on a monthly basis.",
    },
    {
      question: "Should I build a native or cross-platform app?",
      answer:
        "Choose cross-platform (Flutter or React Native) if you want one codebase and a faster launch on both stores. Choose native Swift and Kotlin if your app depends on heavy device features, background calling or top performance. We recommend one after reviewing your features and budget.",
    },
    {
      question: "How long does mobile app development take?",
      answer:
        "A simple MVP usually takes two to four months, including design, development, testing and store release. Apps with custom backends, payments or real-time calling take longer. We split the work into short milestones so you can review working builds throughout the project.",
    },
    {
      question: "Can you turn my website into a mobile app?",
      answer:
        "Yes. We build a mobile app that uses your existing website data, accounts and APIs. Customers get the same information in a faster, app-native experience. If your site has no API yet, we can build one as part of the project.",
    },
    {
      question: "Do I need wireframes before we start?",
      answer:
        "No. If you already have wireframes or designs, we will work from them. If not, our designers turn your idea into user flows and screen designs during discovery. You review and approve every screen before development begins, so there are no surprises later.",
    },
    {
      question: "Will you publish the app to the App Store and Google Play?",
      answer:
        "Yes. We prepare store listings, handle the review process and publish under your own developer accounts, so the apps and their reviews belong to you. If you prefer, we can hand over signed builds and let your team submit them instead.",
    },
  ],
  related: [
    { name: "Flutter App Development", href: "/services/flutter-app-development" },
    { name: "React Native App Development", href: "/services/react-native-app-development" },
    { name: "Linphone App Development", href: "/services/linphone-app-development" },
    { name: "Back-End Development", href: "/services/back-end-development" },
  ],
  cta: {
    title: "Planning a mobile app?",
    text: "Share your idea and target users. We will suggest the right platform, scope and first release.",
  },
};

export default mobileApp;
