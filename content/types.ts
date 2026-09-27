import type { LucideIcon } from "lucide-react";

/** Card with an icon: 2–4 word title, one sentence (≤25 words) of text. */
export type IconItem = { icon: LucideIcon; title: string; text: string };

/** Card that links to another page on the site (internal linking for SEO). */
export type LinkItem = { icon: LucideIcon; title: string; text: string; href: string };

/** FAQ phrased the way people search; answer 40–60 words, direct answer first. */
export type FAQItem = { question: string; answer: string };

/** Hub-and-spoke illustration: the core technology in the middle, what it connects around it. */
export type Diagram = {
  center: { icon: LucideIcon; label: string };
  nodes: { icon: LucideIcon; label: string }[]; // 4–6
};

type PageBase = {
  /** Route path, e.g. "/services/freeswitch-development-service". */
  path: string;
  /** Short name used in breadcrumbs and related links. */
  name: string;
  eyebrow: string;
  seo: {
    /** ≤ 45 chars — " | Driansh" is appended. Primary keyword first. */
    title: string;
    /** 140–155 chars: keyword + what + for whom + CTA. */
    description: string;
  };
  hero: {
    /** H1, 5–10 words: [primary keyword] + [who/outcome]. */
    title: string;
    /** 20–30 words: what we build + for whom + one differentiator. */
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** 3–4 short factual capability chips shown under the hero (no invented numbers). */
  highlights: string[];
  diagram: Diagram;
  faqs: FAQItem[]; // 5–6
  related: { name: string; href: string }[]; // 3–4
  cta: { title: string; text: string };
};

export type ServicePageContent = PageBase & {
  kind: "service";
  intro: { title: string; paragraphs: string[] }; // 80–100 words total
  services: { title: string; description?: string; items: IconItem[] }; // exactly 6
  useCases: { title: string; description?: string; items: LinkItem[] }; // 3–6
  whyUs: { title: string; items: IconItem[] }; // 3–4
  techStack: string[];
};

export type SolutionPageContent = PageBase & {
  kind: "solution";
  overview: { title: string; paragraphs: string[]; audiences: string[] }; // 90–110 words
  features: { title: string; description?: string; items: IconItem[] }; // 8–12
  benefits: { title: string; items: IconItem[] }; // exactly 4
  howItWorks: { title: string; text: string; points: string[] }; // text ≤ 60 words
  integrations: { title: string; description?: string; items: LinkItem[] }; // 3–6
};
