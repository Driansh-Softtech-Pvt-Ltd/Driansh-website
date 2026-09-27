import {
  Activity,
  Boxes,
  Cloud,
  CloudCog,
  Container,
  GitBranch,
  Globe,
  Headphones,
  LifeBuoy,
  Lock,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  TestTube,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const devops: ServicePageContent = {
  kind: "service",
  path: "/services/devops-services",
  name: "DevOps Services",
  eyebrow: "DevOps",
  seo: {
    title: "DevOps Services & CI/CD Consulting",
    description:
      "DevOps services: CI/CD pipelines, Docker and Kubernetes, infrastructure as code, monitoring and cloud migration. Talk to a DevOps engineer today.",
  },
  hero: {
    title: "DevOps Services for Faster, Safer Releases",
    subtitle:
      "We set up CI/CD pipelines, containers, infrastructure as code and monitoring, so your team ships more often with fewer failed deployments and less manual work.",
    primaryCta: "Talk to a DevOps Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "CI/CD pipeline setup",
    "Docker & Kubernetes",
    "Infrastructure as code",
    "Monitoring & alerting",
  ],
  diagram: {
    center: { icon: Workflow, label: "DevOps Pipeline" },
    nodes: [
      { icon: GitBranch, label: "Git & code review" },
      { icon: TestTube, label: "Automated tests" },
      { icon: Container, label: "Docker & Kubernetes" },
      { icon: CloudCog, label: "Terraform & cloud" },
      { icon: Activity, label: "Monitoring & alerts" },
    ],
  },
  intro: {
    title: "What our DevOps engineers do",
    paragraphs: [
      "Our DevOps services automate the path from a code commit to a running release. We build CI/CD pipelines, containerize applications, define infrastructure as code and add monitoring, so deployments become routine instead of risky.",
      "We help product teams without a dedicated ops engineer, companies moving to the cloud, and VoIP providers who need uptime for voice and signaling servers. We document everything we set up, so your developers can run, change and extend it themselves without waiting on us.",
    ],
  },
  techStack: ["Docker", "Kubernetes", "Terraform", "Ansible", "GitHub Actions", "GitLab CI", "Jenkins", "AWS", "Azure", "Google Cloud", "Prometheus", "Grafana"],
  services: {
    title: "DevOps services we offer",
    items: [
      { icon: Wrench, title: "DevOps consulting", text: "Review your release process and infrastructure, then get a prioritized plan to fix the biggest bottlenecks." },
      { icon: GitBranch, title: "CI/CD pipelines", text: "Build, test and deploy every change automatically, with one-click rollback when something goes wrong." },
      { icon: Container, title: "Containers & Kubernetes", text: "Package apps in Docker and run them on Kubernetes so environments match from laptop to production." },
      { icon: CloudCog, title: "Infrastructure as code", text: "Define servers and networks in Terraform or Ansible so environments are repeatable and reviewable." },
      { icon: Cloud, title: "Cloud migration", text: "Move applications from on-premise servers to AWS, Azure or Google Cloud with planned cutovers." },
      { icon: Activity, title: "Monitoring & managed ops", text: "Track health, logs and costs, get alerts before users notice, and keep systems patched." },
    ],
  },
  useCases: {
    title: "What we automate and run",
    items: [
      { icon: Globe, title: "Web app release pipelines", text: "Preview builds, automated tests and zero-downtime deploys for web apps.", href: "/services/web-development" },
      { icon: Boxes, title: "API & microservice platforms", text: "Containerized back-end services with scaling and health checks.", href: "/services/back-end-development" },
      { icon: Rocket, title: "SaaS product infrastructure", text: "Staging, production and tenant environments defined as code.", href: "/services/product-engineering-service" },
      { icon: Network, title: "VoIP server deployments", text: "Automated setup and monitoring for SIP and media servers.", href: "/services/voip-development-service" },
      { icon: TestTube, title: "Automated VoIP testing", text: "Call-flow and load tests running inside your pipeline.", href: "/services/voip-testing" },
      { icon: Headphones, title: "Contact center hosting", text: "Deploy and scale contact center software on your own cloud.", href: "/our-products/contactcenter" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for DevOps",
    items: [
      { icon: Users, title: "Developers who do ops", text: "Our DevOps engineers work beside our developers, so pipelines fit how the code is built." },
      { icon: Lock, title: "Security in the pipeline", text: "We add secret management, dependency scanning and least-privilege access by default." },
      { icon: ShieldCheck, title: "No lock-in", text: "Everything is in code in your repositories, documented, so your team can run it without us." },
      { icon: LifeBuoy, title: "Ongoing support", text: "Keep us on after setup for monitoring, upgrades and incident help, or hand over fully." },
    ],
  },
  faqs: [
    {
      question: "What does a DevOps engineer do for a software team?",
      answer:
        "A DevOps engineer automates how code is built, tested, deployed and monitored. That includes CI/CD pipelines, cloud infrastructure, containers, logging and alerts. The result is that developers release more often with less manual effort, and problems in production are found and fixed faster.",
    },
    {
      question: "How much do DevOps services cost?",
      answer:
        "Cost depends on how many applications and environments you run and how much is already automated. A single CI/CD pipeline setup is a short project, while a full cloud migration takes longer. We offer fixed-scope projects after a free assessment, or monthly managed DevOps support.",
    },
    {
      question: "How long does it take to set up a CI/CD pipeline?",
      answer:
        "A basic pipeline for one application, covering build, tests and deployment, is usually ready in days to a couple of weeks. More time is needed when tests are missing, several environments are involved or infrastructure must be rebuilt as code. We deliver in stages so you benefit early.",
    },
    {
      question: "Do we need Kubernetes?",
      answer:
        "Not always. Kubernetes helps when you run many services that need autoscaling and self-healing. For one or two apps, managed container services or plain virtual machines with Docker are simpler and cheaper. We recommend the smallest setup that meets your uptime and scaling needs.",
    },
    {
      question: "Which cloud providers do you work with?",
      answer:
        "We work with AWS, Microsoft Azure and Google Cloud, as well as private servers and on-premise data centers. We define infrastructure with Terraform or Ansible where possible, so it stays portable and you can change providers later without starting over.",
    },
  ],
  related: [
    { name: "Back-End Development", href: "/services/back-end-development" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Product Engineering", href: "/services/product-engineering-service" },
    { name: "VoIP Testing", href: "/services/voip-testing" },
  ],
  cta: {
    title: "Want releases without the stress?",
    text: "Tell us how you deploy today. A DevOps engineer will review it and suggest the first changes to automate.",
  },
};

export default devops;
