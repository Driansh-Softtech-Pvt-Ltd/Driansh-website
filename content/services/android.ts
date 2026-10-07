import {
  Bell,
  Blocks,
  Briefcase,
  Code2,
  FlaskConical,
  Layers,
  LifeBuoy,
  MonitorSmartphone,
  Palette,
  PhoneCall,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Store,
  Watch,
  WifiOff,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const android: ServicePageContent = {
  kind: "service",
  path: "/services/android-app-development",
  name: "Android App Development",
  eyebrow: "Mobile App Development",
  seo: {
    title: "Android App Development Services",
    description:
      "Android app development in Kotlin and Java: custom apps, SIP calling, wearables and Play Store release. Talk to an Android engineer for a free call.",
  },
  hero: {
    title: "Android app development services for phones and wearables",
    subtitle:
      "We build native Android apps in Kotlin for businesses and product teams, from customer apps to SIP calling apps that stay reliable in the background.",
    primaryCta: "Talk to an Android engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "Kotlin & Jetpack Compose",
    "SIP & VoIP calling apps",
    "Wear OS & tablet support",
    "Play Store release & updates",
  ],
  diagram: {
    center: { icon: Smartphone, label: "Android app" },
    nodes: [
      { icon: Palette, label: "Material design UI" },
      { icon: Server, label: "Backend & APIs" },
      { icon: PhoneCall, label: "SIP & VoIP calling" },
      { icon: Bell, label: "Firebase push" },
      { icon: Watch, label: "Wear OS" },
      { icon: Store, label: "Google Play" },
    ],
  },
  intro: {
    title: "What we build with Android",
    paragraphs: [
      "Android app development is how we put your product on the phones, tablets and wearables most of the world uses. We write native apps in Kotlin, with Java where older code requires it, and follow current Android architecture guidelines.",
      "We handle the details that trip teams up on Android: many screen sizes, battery limits, background work and fragmented OS versions. That makes us a good fit for apps with calling, location or offline needs.",
    ],
  },
  techStack: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Coroutines", "Room", "Firebase", "Retrofit", "Linphone SDK", "WebRTC"],
  services: {
    title: "Android app development services we offer",
    items: [
      { icon: Code2, title: "Custom Android apps", text: "Build a native Kotlin app around your features, users and brand, ready for the Play Store." },
      { icon: Palette, title: "Android UI design", text: "Design Material-based screens that feel natural to Android users and adapt to phones and tablets." },
      { icon: PhoneCall, title: "Calling & real-time features", text: "Add SIP calling, video and chat that keep working when the app is in the background." },
      { icon: Watch, title: "Wear OS apps", text: "Extend your app to smartwatches with glanceable screens, notifications and health or fitness data." },
      { icon: RefreshCw, title: "Upgrades & porting", text: "Move old Java apps to Kotlin, target new Android versions, or port an iOS app to Android." },
      { icon: LifeBuoy, title: "Maintenance & support", text: "Fix crashes, update dependencies and ship new features after launch so your ratings stay healthy." },
    ],
  },
  useCases: {
    title: "Android apps we build",
    items: [
      { icon: PhoneCall, title: "VoIP softphone apps", text: "Branded SIP dialers with push-based incoming calls and call history.", href: "/services/linphone-app-development" },
      { icon: Layers, title: "Apps for iOS too", text: "One Flutter codebase when you need Android and iPhone together.", href: "/services/flutter-app-development" },
      { icon: Briefcase, title: "Business & field apps", text: "Staff apps with offline forms, sync and secure login, backed by your APIs.", href: "/services/back-end-development" },
      { icon: MonitorSmartphone, title: "Video calling apps", text: "One-to-one and group video calls built on WebRTC.", href: "/services/webrtc-development-service" },
      { icon: FlaskConical, title: "Tested calling apps", text: "Call quality, network switching and load testing for calling apps.", href: "/services/voip-testing" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for Android",
    items: [
      { icon: PhoneCall, title: "Background calling know-how", text: "We build around Android's battery and background rules, so calls and alerts still arrive." },
      { icon: WifiOff, title: "Built for real networks", text: "We design for weak signals and offline use, so your app still works on the move." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code, signing keys and Play Console access stay with you, so you are never locked in." },
      { icon: Blocks, title: "Room to grow", text: "Clean architecture and modules make it easy to add features or an iOS version later." },
    ],
  },
  faqs: [
    {
      question: "How much does Android app development cost?",
      answer:
        "It depends on the number of screens, integrations and backend work. A focused app with a few core features costs much less than a calling app with a custom server. We share a fixed-scope estimate after a free call, or you can hire a dedicated Android team monthly.",
    },
    {
      question: "Kotlin or Java: which is better for a new Android app?",
      answer:
        "Kotlin is the better choice for new Android apps. Google recommends it, it needs less code and it reduces common crashes. We still use Java when maintaining older apps, and can migrate Java code to Kotlin step by step without a full rewrite.",
    },
    {
      question: "Can you build a VoIP calling app for Android?",
      answer:
        "Yes. We build SIP and WebRTC calling apps for Android with push-based incoming calls, Bluetooth and headset support, and call history. We handle Android's background and battery limits so calls ring reliably, and connect the app to your PBX or softswitch.",
    },
    {
      question: "Will you publish my app on the Google Play Store?",
      answer:
        "Yes. We prepare the store listing, privacy details and screenshots, then publish under your own Google Play developer account so the app stays yours. We also handle updates, policy changes and review feedback after launch if you keep us on for support.",
    },
    {
      question: "Can you take over and fix an existing Android app?",
      answer:
        "Yes. We start with a code and crash review, then fix the most serious stability and performance issues first. We can then update old libraries, target the latest Android version and add features. All we need is access to the source code.",
    },
  ],
  related: [
    { name: "iOS App Development", href: "/services/ios-app-development" },
    { name: "Flutter App Development", href: "/services/flutter-app-development" },
    { name: "Linphone App Development", href: "/services/linphone-app-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
  ],
  cta: {
    title: "Planning an Android app?",
    text: "Tell us what your app needs to do. An Android engineer will review it and suggest the right approach.",
  },
};

export default android;
