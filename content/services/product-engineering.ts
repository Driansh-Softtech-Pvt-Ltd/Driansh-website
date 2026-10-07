import {
  Bug,
  Cloud,
  Code2,
  Globe,
  Headphones,
  Lightbulb,
  MessagesSquare,
  Network,
  Palette,
  Rocket,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  TestTube,
  Users,
  Workflow,
  LifeBuoy,
  Boxes,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const productEngineering: ServicePageContent = {
  kind: "service",
  path: "/services/product-engineering-service",
  name: "Product Engineering",
  eyebrow: "Product Engineering",
  seo: {
    title: "Product Engineering Services",
    description:
      "Product engineering services from idea to launch: MVPs, UI/UX, web and mobile apps, QA and DevOps for SaaS and VoIP products. Talk to our product team.",
  },
  hero: {
    title: "Product Engineering Services from Idea to Launch",
    subtitle:
      "We take software products from concept to MVP to scale for startups and growing companies. Design, development, testing and DevOps sit in one team.",
    primaryCta: "Talk to Our Product Team",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Discovery, MVP & scale-up",
    "UI/UX, web & mobile",
    "QA & DevOps included",
    "Source code handed over",
  ],
  diagram: {
    center: { icon: Rocket, label: "Your Product" },
    nodes: [
      { icon: Lightbulb, label: "Discovery & MVP" },
      { icon: Palette, label: "UI/UX design" },
      { icon: Code2, label: "Web & mobile apps" },
      { icon: TestTube, label: "QA & testing" },
      { icon: Cloud, label: "DevOps & cloud" },
      { icon: LifeBuoy, label: "Support & growth" },
    ],
  },
  intro: {
    title: "What product engineering means at Driansh",
    paragraphs: [
      "Product engineering services cover the whole life of a software product: validating the idea, designing it, building it, testing it, launching it and improving it. We provide one cross-functional team for all of it, so decisions do not get lost between vendors.",
      "We work with founders building a first MVP, companies turning an internal tool into a product, and teams launching communication and VoIP software. After launch, we keep improving the product based on real usage data and feedback from your users.",
    ],
  },
  techStack: ["React", "Next.js", "Node.js", "Python", "Flutter", "React Native", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Figma", "WebRTC"],
  services: {
    title: "Product engineering services we offer",
    items: [
      { icon: Lightbulb, title: "Discovery & MVP planning", text: "Validate the idea, define the smallest useful feature set and plan releases before spending on code." },
      { icon: Palette, title: "UI/UX design", text: "Design wireframes, prototypes and final screens, then test them with users before development starts." },
      { icon: Code2, title: "Web & mobile development", text: "Build your product for browser, iOS and Android with shared APIs and one codebase where it fits." },
      { icon: Bug, title: "QA & test automation", text: "Combine manual and automated tests, so each release is checked for bugs, speed and security." },
      { icon: Workflow, title: "DevOps & cloud setup", text: "Set up CI/CD, cloud hosting and monitoring, so you can release often and scale on demand." },
      { icon: RefreshCw, title: "Product modernization", text: "Rework legacy architecture and dated interfaces, so an existing product can keep growing." },
    ],
  },
  useCases: {
    title: "Products we engineer",
    items: [
      { icon: Globe, title: "SaaS web platforms", text: "Multi-tenant web products with accounts, billing and admin panels.", href: "/services/web-development" },
      { icon: Smartphone, title: "Mobile products", text: "Consumer and business apps for iOS and Android.", href: "/services/mobile-app-development" },
      { icon: Headphones, title: "Contact center software", text: "Our own contact center product shows the kind of platform we build.", href: "/our-products/contactcenter" },
      { icon: MessagesSquare, title: "Omnichannel messaging", text: "Unified inboxes for chat, email and social support.", href: "/our-products/engageone" },
      { icon: Network, title: "VoIP & UCaaS products", text: "Softswitches, hosted PBX and calling apps built for resale.", href: "/services/voip-development-service" },
      { icon: TestTube, title: "Product quality programs", text: "Functional, load and interoperability testing for voice products.", href: "/services/voip-testing" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for product engineering",
    items: [
      { icon: Users, title: "One cross-functional team", text: "Designers, developers, testers and DevOps engineers work in one team with one plan." },
      { icon: Boxes, title: "Built to evolve", text: "We keep the architecture simple at MVP stage, and structured so it can grow later." },
      { icon: Network, title: "Communications expertise", text: "We also build VoIP, WebRTC and messaging software, so calling and chat features stay in-house." },
      { icon: ShieldCheck, title: "You own the product", text: "Code, designs, infrastructure and documentation are yours, with no licensing strings." },
    ],
  },
  faqs: [
    {
      question: "What is product engineering?",
      answer:
        "Product engineering is the end-to-end work of turning an idea into a software product and keeping it healthy. It includes research, UX design, development, testing, deployment and ongoing improvement. Unlike one-off projects, the focus is on a product that ships, gathers feedback and keeps evolving.",
    },
    {
      question: "How much does it cost to build an MVP?",
      answer:
        "An MVP's cost depends on the number of core features, platforms (web, iOS, Android) and integrations. Most MVPs we scope take a few months with a small team. After a free discovery session we send a fixed-scope estimate and a release plan, or propose a monthly dedicated team.",
    },
    {
      question: "How is product engineering different from outsourced software development?",
      answer:
        "Outsourced development usually delivers a specified set of features. Product engineering also takes responsibility for what to build and why: validating ideas, prioritizing features, measuring usage and planning the next release. You get a long-term team that thinks about the product, not only the tickets.",
    },
    {
      question: "Can you join a product that is already in development?",
      answer:
        "Yes. We start with a short review of the codebase, architecture, backlog and release process, then agree on priorities. We can take over the product fully, add capacity to your in-house team, or handle specific areas such as mobile, QA or DevOps.",
    },
    {
      question: "Which engagement models do you offer for product development?",
      answer:
        "We offer fixed-scope projects for well-defined MVPs and phases, and dedicated monthly teams for ongoing products. Many clients start with a fixed discovery and MVP phase, then move to a dedicated team after launch. We can adjust team size as priorities change.",
    },
  ],
  related: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "DevOps Services", href: "/services/devops-services" },
    { name: "VoIP Development", href: "/services/voip-development-service" },
  ],
  cta: {
    title: "Have a product idea to build?",
    text: "Tell us about your product and users. Our product team will suggest an MVP scope and a realistic plan.",
  },
};

export default productEngineering;
