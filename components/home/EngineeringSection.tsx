import Link from "next/link";
import { ArrowRight, Bug, Headphones, PhoneCall, ServerCog, Smartphone } from "lucide-react";
import { CtaLink, FeatureCard, Section, SectionHeader } from "@/components/site";

const SERVICES = [
  {
    title: "VoIP & WebRTC",
    description: "Custom calling platforms on Asterisk, FreeSWITCH, Kamailio and WebRTC.",
    href: "/services/voip-development-service",
    icon: PhoneCall,
  },
  {
    title: "DevOps",
    description: "Cloud set-up, CI/CD, monitoring and scaling for real-time systems.",
    href: "/services/devops-services",
    icon: ServerCog,
  },
  {
    title: "Web & mobile apps",
    description: "Web, iOS, Android, Flutter and React Native apps built end to end.",
    href: "/services/web-development",
    icon: Smartphone,
  },
  {
    title: "QA & VoIP testing",
    description: "Functional, load and call-quality testing before you go live.",
    href: "/services/voip-testing",
    icon: Bug,
  },
];

export default function EngineeringSection() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Built by Driansh engineering"
        title="The team behind EngageOne builds for you too"
        description="Driansh Softtech, based in GIFT City, Gandhinagar, also delivers real-time communication engineering and a dedicated contact center product."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          {SERVICES.map(({ title, description, href, icon: Icon }) => (
            <FeatureCard key={href} href={href} title={title} description={description} icon={<Icon aria-hidden="true" />} />
          ))}
        </div>

        <Link
          href="/our-products/contactcenter"
          className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:p-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 -z-10 h-64 w-64 rounded-full bg-violet-600/40 blur-3xl"
          />
          <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient">
            <Headphones className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="eyebrow text-violet-300">Our second product</p>
          <h3 className="heading-3 mt-2">Driansh Contact Center</h3>
          <p className="mt-3 flex-1 leading-relaxed text-slate-300">
            A contact center suite with IVR, ACD, queues, dialers, live monitoring and reports, for teams that run
            high-volume voice operations.
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-white">
            Explore Contact Center
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </Link>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaLink href="/services" variant="outline">
          All services
        </CtaLink>
      </div>
    </Section>
  );
}
