import {
  Briefcase,
  Code2,
  FlaskConical,
  Headset,
  Layers,
  LifeBuoy,
  Lock,
  MonitorSmartphone,
  Palette,
  PhoneCall,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Store,
  TabletSmartphone,
  Watch,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const ios: ServicePageContent = {
  kind: "service",
  path: "/services/ios-app-development",
  name: "iOS App Development",
  eyebrow: "Mobile App Development",
  seo: {
    title: "iOS App Development Services",
    description:
      "iOS app development in Swift for iPhone, iPad and Apple Watch, with CallKit VoIP apps and App Store release. Talk to an iOS engineer for a free call.",
  },
  hero: {
    title: "iOS app development services for iPhone, iPad and Watch",
    subtitle:
      "We build native iOS apps in Swift for businesses and product teams, including VoIP calling apps that ring like regular phone calls through CallKit.",
    primaryCta: "Talk to an iOS engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "Swift & SwiftUI",
    "CallKit & PushKit calling",
    "iPhone, iPad & Apple Watch",
    "App Store release & updates",
  ],
  diagram: {
    center: { icon: Smartphone, label: "iOS app" },
    nodes: [
      { icon: TabletSmartphone, label: "iPhone & iPad" },
      { icon: Watch, label: "Apple Watch" },
      { icon: PhoneCall, label: "CallKit & PushKit" },
      { icon: Server, label: "Backend & APIs" },
      { icon: Store, label: "App Store" },
    ],
  },
  intro: {
    title: "What we build with iOS",
    paragraphs: [
      "iOS app development is how we bring your product to iPhone, iPad and Apple Watch users. We write native apps in Swift and SwiftUI, and maintain Objective-C code when an older app depends on it.",
      "We follow Apple's design and privacy rules from the start, which keeps App Store review smooth. Our VoIP background also helps with CallKit, PushKit and background audio, the parts of iOS many teams find hardest.",
    ],
  },
  techStack: ["Swift", "SwiftUI", "UIKit", "Objective-C", "CallKit", "PushKit", "Core Data", "Firebase", "Linphone SDK", "WebRTC"],
  services: {
    title: "iOS app development services we offer",
    items: [
      { icon: Code2, title: "Custom iOS apps", text: "Build a native Swift app shaped around your features and users, ready for App Store review." },
      { icon: Palette, title: "iOS UI design", text: "Design screens that follow Apple's guidelines so your app feels familiar and passes review faster." },
      { icon: PhoneCall, title: "CallKit VoIP apps", text: "Show incoming SIP or WebRTC calls on the native call screen, even when the app is closed." },
      { icon: Watch, title: "Apple Watch & iPad", text: "Extend your iPhone app to iPad layouts and watchOS companions with notifications and quick actions." },
      { icon: RefreshCw, title: "Upgrades & migration", text: "Move Objective-C code to Swift, adopt SwiftUI, or support the latest iOS version without a rewrite." },
      { icon: LifeBuoy, title: "Maintenance & support", text: "Fix crashes, handle iOS updates and ship new features after launch so your app keeps working." },
    ],
  },
  useCases: {
    title: "iOS apps we build",
    items: [
      { icon: PhoneCall, title: "VoIP softphone apps", text: "Branded SIP dialers with CallKit, push wake-up and call history.", href: "/services/linphone-app-development" },
      { icon: MonitorSmartphone, title: "Video calling apps", text: "One-to-one and group video calls on iPhone and iPad using WebRTC.", href: "/services/webrtc-development-service" },
      { icon: Headset, title: "Support team apps", text: "Mobile access to customer conversations for agents on the move.", href: "/our-products/engageone" },
      { icon: Briefcase, title: "Business apps", text: "Secure staff and customer apps connected to your own backend and APIs.", href: "/services/back-end-development" },
      { icon: Layers, title: "Apps for Android too", text: "One React Native codebase when you need iPhone and Android together.", href: "/services/react-native-app-development" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for iOS",
    items: [
      { icon: PhoneCall, title: "Calling done right", text: "We know CallKit and PushKit rules, so VoIP calls ring reliably and pass App Store review." },
      { icon: Lock, title: "Privacy built in", text: "We plan permissions, data storage and privacy labels early, so review surprises are rare." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code, certificates and App Store Connect access stay with you, so you are never locked in." },
      { icon: FlaskConical, title: "Tested on real devices", text: "Each build is tested on physical iPhones and iPads across supported iOS versions." },
    ],
  },
  faqs: [
    {
      question: "How much does iOS app development cost?",
      answer:
        "The cost depends on screens, integrations, devices and backend work. An iPhone-only app with a few core features costs much less than an iPhone, iPad and Watch app with calling. We send a fixed-scope estimate after a free call, or you can hire a dedicated iOS team monthly.",
    },
    {
      question: "Swift or Objective-C: which should we use for iOS?",
      answer:
        "Use Swift for any new iOS app. It is Apple's main language, safer and faster to write, and works with SwiftUI. Objective-C is mainly for maintaining older apps. We can keep both running side by side and migrate Objective-C code to Swift gradually.",
    },
    {
      question: "How do VoIP calls work on iPhone when the app is closed?",
      answer:
        "Apple's PushKit sends a VoIP push that wakes your app, and CallKit shows the call on the native incoming-call screen. Apple requires every VoIP push to report a call, so the server and app must follow these rules. We build and test both sides for reliable ringing.",
    },
    {
      question: "Can you help get our app approved on the App Store?",
      answer:
        "Yes. We prepare the listing, screenshots and privacy labels, test against Apple's review guidelines, and publish under your own Apple developer account. If Apple rejects a build, we fix the reported issues and resubmit, and we handle review for later updates too.",
    },
    {
      question: "Do you build apps for iPad and Apple Watch?",
      answer:
        "Yes. We adapt iPhone apps to iPad with layouts that use the larger screen. We also build watchOS companion apps for notifications, quick replies and health or fitness data. We share code between them where possible to keep maintenance simple.",
    },
  ],
  related: [
    { name: "Android App Development", href: "/services/android-app-development" },
    { name: "React Native App Development", href: "/services/react-native-app-development" },
    { name: "Linphone App Development", href: "/services/linphone-app-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
  ],
  cta: {
    title: "Planning an iOS app?",
    text: "Tell us what your app needs to do. An iOS engineer will review it and suggest the right approach.",
  },
};

export default ios;
