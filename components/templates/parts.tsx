import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Section, SectionHeader, FeatureCard, CardGrid } from "@/components/site";
import type { IconItem, LinkItem } from "@/content/types";

/** Factual capability chips directly under the hero. */
export function HighlightsStrip({ items }: { items: string[] }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <ul className="container-site grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IconCards({ items, columns = 3 }: { items: IconItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <CardGrid columns={columns}>
      {items.map(({ icon: Icon, title, text }) => (
        <FeatureCard key={title} icon={<Icon />} title={title} description={text} />
      ))}
    </CardGrid>
  );
}

/** Compact feature list for long lists (8–12 items). */
export function FeatureList({ items }: { items: IconItem[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className="flex gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="heading-4 text-ink">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function LinkCards({ items }: { items: LinkItem[] }) {
  return (
    <CardGrid>
      {items.map(({ icon: Icon, title, text, href }) => (
        <FeatureCard
          key={title}
          href={href}
          icon={<Icon />}
          title={title}
          description={text}
          className="group"
        >
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </FeatureCard>
      ))}
    </CardGrid>
  );
}

const PROCESS = [
  { title: "Discover", text: "We review your requirements, traffic and existing stack, then agree scope, milestones and cost." },
  { title: "Design", text: "We plan the architecture, integrations and failover so the platform fits your growth plans." },
  { title: "Build & test", text: "We develop in short sprints with regular demos, then load-test and QA before go-live." },
  { title: "Deploy & support", text: "We launch on your servers or cloud and stay on for monitoring, fixes and upgrades." },
];

export function ProcessSteps({ tone = "white" as const }: { tone?: "white" | "muted" }) {
  return (
    <Section tone={tone}>
      <SectionHeader eyebrow="How we work" title="From idea to live platform in four steps" />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
            <span className="text-gradient text-4xl font-bold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="heading-3 mt-3 text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** Final conversion block: short pitch + contact details + the enquiry form. */
export function LeadFormSection({ title, text, id = "contact" }: { title: string; text: string; id?: string }) {
  return (
    <Section tone="navy" id={id} className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl" />
      <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-3 text-violet-300">Get in touch</p>
          <h2 className="heading-2 text-white">{title}</h2>
          <p className="text-lead mt-4 text-slate-300">{text}</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a href="mailto:support@driansh.com" className="flex items-center gap-3 text-white hover:underline">
                <Mail className="h-5 w-5 text-violet-300" aria-hidden="true" /> support@driansh.com
              </a>
            </li>
            <li>
              <a href="tel:+917028764776" className="flex items-center gap-3 text-white hover:underline">
                <Phone className="h-5 w-5 text-violet-300" aria-hidden="true" /> +91 70287 64776
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-10">
          <h3 className="heading-3 text-ink">Tell us about your project</h3>
          <p className="mt-1 mb-8 text-slate-600">Share a few details and the right engineer will get back to you.</p>
          <ContactForm defaultInterest="custom-project" />
        </div>
      </div>
    </Section>
  );
}

export function RelatedLinks({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <Section size="sm" tone="muted">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <h2 className="heading-4 shrink-0 text-ink">{title}</h2>
        <ul className="flex flex-wrap gap-3">
          {items.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                {r.name} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Chips({ items, label }: { items: string[]; label?: string }) {
  return (
    <div className="mt-6">
      {label && <p className="eyebrow mb-3 text-slate-500">{label}</p>}
      <ul className="flex flex-wrap gap-2">
        {items.map((a) => (
          <li key={a} className="rounded-full bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand">
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
