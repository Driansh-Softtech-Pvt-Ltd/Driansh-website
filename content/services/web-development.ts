import {
  Blocks,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe,
  Headphones,
  LayoutDashboard,
  LifeBuoy,
  MessagesSquare,
  MonitorSmartphone,
  PanelsTopLeft,
  Plug,
  Server,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const webDevelopment: ServicePageContent = {
  kind: "service",
  path: "/services/web-development",
  name: "Web Development",
  eyebrow: "Web Development",
  seo: {
    title: "Web Development Services",
    description:
      "Custom web development services: web apps, portals, dashboards and SaaS in React, Next.js and Node.js. Talk to a web engineer for a free consultation.",
  },
  hero: {
    title: "Web development services for custom web apps",
    subtitle:
      "We build web applications, customer portals and SaaS products end to end, from interface to API to deployment, for startups and growing businesses.",
    primaryCta: "Talk to a web engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "Front end, back end & full stack",
    "Portals, dashboards & SaaS",
    "API & third-party integrations",
    "Cloud or on-premise deployment",
  ],
  diagram: {
    center: { icon: Globe, label: "Web App" },
    nodes: [
      { icon: PanelsTopLeft, label: "React & Next.js UI" },
      { icon: Server, label: "Node.js & Python APIs" },
      { icon: Database, label: "Databases" },
      { icon: Plug, label: "Third-party APIs" },
      { icon: Cloud, label: "Cloud hosting" },
      { icon: Smartphone, label: "Mobile clients" },
    ],
  },
  intro: {
    title: "What our web development team builds",
    paragraphs: [
      "Our web development services cover the full stack. That means the interface your users see, the APIs and databases behind it, and the hosting that keeps it running. We build new web products from scratch and extend web apps you already have.",
      "We work with startups shipping a first version, businesses replacing spreadsheets with internal tools, and telecom companies that need customer portals for their voice platforms. One team plans, designs, builds, tests and supports the whole application for you.",
    ],
  },
  techStack: ["React", "Next.js", "Angular", "TypeScript", "Node.js", "Python", "Laravel", "PHP", "PostgreSQL", "MySQL", "MongoDB", "WordPress"],
  services: {
    title: "Web development services we offer",
    items: [
      { icon: Boxes, title: "Custom web applications", text: "Build web apps around your workflows so your team stops working around off-the-shelf software." },
      { icon: PanelsTopLeft, title: "Front-end development", text: "Create fast, responsive interfaces in React, Next.js or Angular that work on every screen size." },
      { icon: Server, title: "Back-end & API development", text: "Design APIs, business logic and databases that keep your data consistent as usage grows." },
      { icon: Code2, title: "Full-stack product builds", text: "Take a product from wireframe to launch with one team owning the interface, server and database." },
      { icon: MonitorSmartphone, title: "Progressive web apps", text: "Ship installable web apps with offline support, so users get an app feel without an app store." },
      { icon: LifeBuoy, title: "Maintenance & upgrades", text: "Keep your site patched, monitored and on current framework versions after it goes live." },
    ],
  },
  useCases: {
    title: "Web projects we deliver",
    items: [
      { icon: LayoutDashboard, title: "Admin panels & dashboards", text: "Internal tools with role-based access, reports and data built for your process.", href: "/services/front-end-development" },
      { icon: Plug, title: "APIs & integrations", text: "REST and GraphQL APIs that connect your web app to payments, CRMs and partners.", href: "/services/back-end-development" },
      { icon: Blocks, title: "SaaS products", text: "Multi-tenant web products with sign-up, billing and account management.", href: "/services/product-engineering-service" },
      { icon: Headphones, title: "Contact center dashboards", text: "Agent and supervisor web interfaces like our own contact center product.", href: "/our-products/contactcenter" },
      { icon: MessagesSquare, title: "Customer messaging portals", text: "Web inboxes that bring chat, email and social messages into one place.", href: "/our-products/engageone" },
      { icon: Smartphone, title: "Companion mobile apps", text: "Mobile apps that share the same back end and accounts as your web app.", href: "/services/mobile-app-development" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for web development",
    items: [
      { icon: Users, title: "One full-stack team", text: "Front-end, back-end and DevOps engineers work together, so you have one point of contact." },
      { icon: ShieldCheck, title: "You own the code", text: "We hand over source code, credentials and documentation, so you can switch vendors anytime." },
      { icon: Gauge, title: "Built for speed", text: "We measure load times and fix slow queries before launch, not after users complain." },
      { icon: Cloud, title: "Deploy where you want", text: "We ship to AWS, Azure, Google Cloud or your own servers, with CI/CD set up." },
    ],
  },
  faqs: [
    {
      question: "How much does custom web application development cost?",
      answer:
        "It depends on the number of screens, user roles and integrations. A focused internal tool or MVP usually takes weeks, while a full SaaS platform takes several months. After a free discovery call we send a fixed-scope estimate, or you can hire a dedicated team on a monthly basis.",
    },
    {
      question: "What is the difference between a website and a web application?",
      answer:
        "A website mainly presents information, while a web application lets users log in, enter data and complete tasks. Portals, dashboards, booking systems and SaaS products are web applications. They need a back end, a database and access control, which is where most of the engineering work goes.",
    },
    {
      question: "Which framework is right for my web app?",
      answer:
        "For most new web apps we recommend React or Next.js on the front end and Node.js or Python on the back end. Angular suits large teams that want strict structure, and Laravel or WordPress suits content-heavy sites. We choose after reviewing your features, team skills and hosting plans.",
    },
    {
      question: "Can I update the website myself after launch?",
      answer:
        "Yes. For content pages we can add a CMS so your team edits text and images without code. For application features, we hand over documented source code, so your developers or ours can make changes. We also offer ongoing support if you prefer we handle updates.",
    },
    {
      question: "Can you take over and improve an existing web app?",
      answer:
        "Yes. We start with a code and performance review, then fix critical bugs, upgrade outdated libraries and add features in small releases. We need access to the repository, hosting and any existing documentation, and we can work alongside your in-house developers.",
    },
  ],
  related: [
    { name: "Front-End Development", href: "/services/front-end-development" },
    { name: "Back-End Development", href: "/services/back-end-development" },
    { name: "DevOps Services", href: "/services/devops-services" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
  ],
  cta: {
    title: "Planning a web application?",
    text: "Share your idea or current system. A web engineer will review it and suggest the right stack and scope.",
  },
};

export default webDevelopment;
