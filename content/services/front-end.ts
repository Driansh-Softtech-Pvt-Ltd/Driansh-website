import {
  Accessibility,
  Blocks,
  Code2,
  Component,
  Gauge,
  Globe,
  Headphones,
  LayoutDashboard,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  PanelsTopLeft,
  Paintbrush,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Video,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const frontEnd: ServicePageContent = {
  kind: "service",
  path: "/services/front-end-development",
  name: "Front-End Development",
  eyebrow: "Web Development",
  seo: {
    title: "Front-End Development Services",
    description:
      "Front-end development services in React, Next.js, Angular, Vue: responsive UIs, SPAs and design systems. Talk to a front-end engineer about your project.",
  },
  hero: {
    title: "Front-End Development Services for Fast, Usable Interfaces",
    subtitle:
      "We turn designs into fast, accessible React, Next.js and Angular interfaces for web apps, dashboards and SaaS products, with reusable components your team can extend.",
    primaryCta: "Talk to a Front-End Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "React, Next.js, Angular & Vue",
    "Pixel-accurate from Figma",
    "Responsive & accessible",
    "Reusable design systems",
  ],
  diagram: {
    center: { icon: PanelsTopLeft, label: "Front End" },
    nodes: [
      { icon: Palette, label: "Figma designs" },
      { icon: Component, label: "Component library" },
      { icon: Server, label: "REST & GraphQL APIs" },
      { icon: MonitorSmartphone, label: "Every screen size" },
      { icon: Video, label: "WebRTC & real-time" },
    ],
  },
  intro: {
    title: "What our front-end developers deliver",
    paragraphs: [
      "Front-end development is the part of your product users actually touch, so we treat it as engineering, not decoration. We build interfaces in React, Next.js, Angular or Vue that load quickly, work on any device and connect cleanly to your APIs.",
      "We work from your Figma files or design with you, then ship typed, tested components. Teams hire us for new products, redesigns and front-end rebuilds of older apps. Every release is checked for speed, accessibility and support across modern browsers.",
    ],
  },
  techStack: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "SASS", "Redux", "GraphQL", "HTML5", "CSS3"],
  services: {
    title: "Front-end development services we offer",
    items: [
      { icon: Code2, title: "React & Next.js apps", text: "Build interfaces with server rendering and code splitting, so pages load fast and rank well in search." },
      { icon: Blocks, title: "Angular development", text: "Structure large enterprise front ends with Angular modules, typed services and strict conventions." },
      { icon: PanelsTopLeft, title: "Single-page applications", text: "Create app-like experiences where screens update instantly without full page reloads." },
      { icon: Component, title: "Design systems", text: "Build a shared component library, so every new screen looks consistent and ships faster." },
      { icon: Accessibility, title: "Responsive & accessible UI", text: "Make interfaces work on phones, tablets and screen readers, following WCAG guidelines." },
      { icon: RefreshCw, title: "Front-end modernization", text: "Move jQuery or legacy AngularJS code to modern frameworks in stages, without stopping feature work." },
    ],
  },
  useCases: {
    title: "Interfaces we build",
    items: [
      { icon: LayoutDashboard, title: "SaaS dashboards", text: "Data-heavy screens with charts, filters, tables and role-based views.", href: "/services/product-engineering-service" },
      { icon: Headphones, title: "Agent consoles", text: "Real-time contact center screens for agents and supervisors.", href: "/our-products/contactcenter" },
      { icon: MessagesSquare, title: "Omnichannel inboxes", text: "Unified chat and messaging interfaces for support teams.", href: "/our-products/omniconnect" },
      { icon: Video, title: "Browser calling apps", text: "Web phones and video call screens built on WebRTC.", href: "/services/webrtc-development-service" },
      { icon: Globe, title: "Full web applications", text: "Front ends paired with APIs and hosting as one project.", href: "/services/web-development" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for front-end development",
    items: [
      { icon: Gauge, title: "Performance first", text: "We check Core Web Vitals and bundle size on every release, not just at launch." },
      { icon: Paintbrush, title: "Faithful to design", text: "We match spacing, type and states from your designs, and flag gaps before building." },
      { icon: Server, title: "Back end in-house", text: "Our back-end engineers build or adjust the APIs, so the UI never waits on another vendor." },
      { icon: ShieldCheck, title: "You own the code", text: "Components, stories and docs are handed over, ready for your team to maintain." },
    ],
  },
  faqs: [
    {
      question: "How much does front-end development cost?",
      answer:
        "Cost depends on the number of screens, how interactive they are and whether a design already exists. Converting finished designs is faster than designing and building together. We give a fixed-scope quote after reviewing your designs or requirements, or you can hire front-end developers on a monthly basis.",
    },
    {
      question: "React or Angular: which should we use for our front end?",
      answer:
        "React, usually with Next.js, suits most products because of its large ecosystem and flexible structure. Angular suits large enterprise apps where many developers need strict conventions built in. We recommend one after looking at your team's skills, existing code and how the app will grow.",
    },
    {
      question: "Can you build the front end from our Figma designs?",
      answer:
        "Yes. We turn Figma files into responsive, reusable components that match your spacing, colors and typography. If states such as errors, empty screens or mobile layouts are missing, we flag them early. We can also design them in the same style.",
    },
    {
      question: "How do you make a front end load faster?",
      answer:
        "We start by measuring Core Web Vitals, then apply server rendering, code splitting, image optimization and caching where they help most. We also remove unused libraries. On existing apps we share a short report of the biggest slowdowns before changing anything.",
    },
    {
      question: "Do you make web interfaces accessible?",
      answer:
        "Yes. We use semantic HTML, keyboard navigation, visible focus states, proper labels and sufficient color contrast, following WCAG guidelines. We test with screen readers and automated checks. Accessibility work is easier when planned from the start, so we include it in estimates.",
    },
  ],
  related: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Back-End Development", href: "/services/back-end-development" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "React Native App Development", href: "/services/react-native-app-development" },
  ],
  cta: {
    title: "Need a front end built or rebuilt?",
    text: "Send us your designs or a link to your app. A front-end engineer will suggest the fastest path to launch.",
  },
};

export default frontEnd;
