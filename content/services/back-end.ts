import {
  Boxes,
  Cloud,
  Database,
  FileCode2,
  Gauge,
  Globe,
  Headphones,
  KeyRound,
  Layers,
  Lock,
  Network,
  Plug,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const backEnd: ServicePageContent = {
  kind: "service",
  path: "/services/back-end-development",
  name: "Back-End Development",
  eyebrow: "Web Development",
  seo: {
    title: "Back-End Development Services",
    description:
      "Back-end development services: APIs, databases, microservices and integrations in Node.js, Python and Go. Talk to a back-end engineer about your project.",
  },
  hero: {
    title: "Back-end development services for reliable APIs",
    subtitle:
      "We design and build APIs, databases and server logic in Node.js, Python and Go. Our back ends power web apps, mobile apps and growing platforms.",
    primaryCta: "Talk to a back-end engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "REST & GraphQL APIs",
    "Node.js, Python, PHP & Go",
    "Microservices & integrations",
    "Cloud or on-premise deployment",
  ],
  diagram: {
    center: { icon: ServerCog, label: "Back End" },
    nodes: [
      { icon: Globe, label: "Web front ends" },
      { icon: Smartphone, label: "Mobile apps" },
      { icon: Database, label: "SQL & NoSQL" },
      { icon: Plug, label: "Payments & CRMs" },
      { icon: KeyRound, label: "Auth & roles" },
      { icon: Cloud, label: "Cloud services" },
    ],
  },
  intro: {
    title: "What our back-end developers build",
    paragraphs: [
      "Back-end development is the server side of your product: the APIs, business rules, databases and integrations that every screen depends on. We build it in Node.js, Python, PHP or Go, with clear data models and automated tests.",
      "We build back ends for new web and mobile apps, split monoliths into services, and connect business systems such as ERPs, CRMs and telecom platforms. Every API ships with documentation, tests and monitoring, so your own team can extend it later with confidence.",
    ],
  },
  techStack: ["Node.js", "Python", "Go", "PHP", "Laravel", ".NET", "Java", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker"],
  services: {
    title: "Back-end development services we offer",
    items: [
      { icon: FileCode2, title: "API development", text: "Design documented REST and GraphQL APIs so web, mobile and partner apps share one source of truth." },
      { icon: Database, title: "Database design", text: "Model your data in PostgreSQL, MySQL or MongoDB so queries stay fast as records grow." },
      { icon: Boxes, title: "Microservices architecture", text: "Split large systems into services you can deploy and scale independently." },
      { icon: Plug, title: "Third-party integrations", text: "Connect payment gateways, CRMs, ERPs and messaging providers so data flows without manual work." },
      { icon: Smartphone, title: "Mobile app back ends", text: "Handle login, push notifications, sync and offline data for iOS and Android apps." },
      { icon: RefreshCw, title: "Refactoring & migration", text: "Move legacy code or on-premise systems to modern stacks and cloud hosting in safe steps." },
    ],
  },
  useCases: {
    title: "Back-end systems we deliver",
    items: [
      { icon: Globe, title: "Web app back ends", text: "APIs and data layers for portals, dashboards and SaaS products.", href: "/services/web-development" },
      { icon: Smartphone, title: "Mobile APIs", text: "Server logic, sync and notifications for mobile apps.", href: "/services/mobile-app-development" },
      { icon: Workflow, title: "Automated deployments", text: "CI/CD pipelines, containers and monitoring for your services.", href: "/services/devops-services" },
      { icon: Headphones, title: "Contact center platforms", text: "Queues, routing and reporting logic like our contact center product.", href: "/our-products/contactcenter" },
      { icon: Network, title: "VoIP platform APIs", text: "Billing, provisioning and CDR APIs around telecom switches.", href: "/services/voip-development-service" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for back-end development",
    items: [
      { icon: Lock, title: "Security built in", text: "We apply authentication, input validation, rate limits and encrypted secrets from the first sprint." },
      { icon: Gauge, title: "Tested under load", text: "We load-test critical endpoints before launch, so slow queries are fixed early." },
      { icon: Layers, title: "Telecom depth", text: "We also build VoIP systems, so we handle real-time, high-volume workloads well." },
      { icon: ShieldCheck, title: "You own the code", text: "Source, API docs and infrastructure scripts are handed over at the end of the project." },
    ],
  },
  faqs: [
    {
      question: "How much does back-end development cost?",
      answer:
        "It depends on the number of APIs, integrations and how much data you handle. A back end for an MVP takes a few weeks, while a multi-service platform takes months. We send a fixed-scope estimate after a free technical call, or you can hire back-end developers monthly.",
    },
    {
      question: "Node.js or Python: which is better for a back end?",
      answer:
        "Neither is better in every case. Node.js suits real-time apps and teams already using JavaScript on the front end. Python suits data processing, machine learning and automation-heavy systems. We choose based on your workload, existing code and the skills of the team that will maintain it.",
    },
    {
      question: "Should we use microservices or a monolith?",
      answer:
        "Most new products should start as a well-structured monolith, because it is faster to build and easier to run. Microservices make sense when separate parts need to scale or deploy independently. We often start modular and split services out later, only where it pays off.",
    },
    {
      question: "What is back-end refactoring and when do we need it?",
      answer:
        "Back-end refactoring means restructuring server code, databases or APIs without changing what users see. You need it when releases keep breaking things, pages are slow or new features take too long. We refactor in small, tested steps so the product keeps running throughout.",
    },
    {
      question: "How do you secure APIs and user data?",
      answer:
        "We use token-based authentication, role-based access, input validation, rate limiting and encrypted connections. Secrets live in a vault, not in code, and we log access to sensitive data. We also review dependencies for known vulnerabilities before each release, and can add audit logs where compliance requires them.",
    },
  ],
  related: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Front-End Development", href: "/services/front-end-development" },
    { name: "DevOps Services", href: "/services/devops-services" },
    { name: "Product Engineering", href: "/services/product-engineering-service" },
  ],
  cta: {
    title: "Need a back end that scales?",
    text: "Tell us about your app and data. A back-end engineer will propose an architecture and a realistic plan.",
  },
};

export default backEnd;
