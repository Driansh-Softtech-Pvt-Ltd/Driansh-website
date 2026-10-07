import Image from "next/image";
import {
  Boxes,
  Cloud,
  Code2,
  Compass,
  Handshake,
  Headphones,
  LifeBuoy,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Unlock,
  Users,
  Wrench,
} from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CTABanner, FeatureCard, CardGrid } from "@/components/site";
import AboutStoryVisual from "@/components/visuals/AboutStoryVisual";

const FACTS = [
  { value: "2025", label: "Founded" },
  { value: "GIFT City", label: "Gandhinagar, India" },
  { value: "2 products", label: "EngageOne and Contact Center" },
  { value: "End to end", label: "Design, build, deploy and support" },
];

const WHAT_WE_DO = [
  {
    title: "Our products",
    description:
      "Driansh EngageOne brings chat, WhatsApp, email, social and calls into one inbox with an AI Assistant. Driansh Contact Center runs voice campaigns, IVR and live monitoring.",
    href: "/our-products",
    icon: Boxes,
  },
  {
    title: "Communication engineering",
    description:
      "VoIP, SIP and WebRTC systems built on FreeSWITCH, Kamailio, Asterisk, OpenSIPS and FusionPBX — from PBX and softswitches to call centers and conferencing.",
    href: "/services/voip-development-service",
    icon: PhoneCall,
  },
  {
    title: "Software and cloud",
    description:
      "Web and mobile apps, back-end systems and DevOps, so the software around your communication platform is as solid as the platform itself.",
    href: "/services",
    icon: Cloud,
  },
];

const HOW_WE_WORK = [
  { step: "01", title: "Understand", description: "We start with how your team and customers talk today, and what has to change.", icon: Compass },
  { step: "02", title: "Design", description: "We agree a clear plan: architecture, scope, milestones and what success looks like.", icon: Wrench },
  { step: "03", title: "Build and test", description: "We build in short cycles, show working software early, and test calls and load before launch.", icon: Code2 },
  { step: "04", title: "Launch and support", description: "We deploy on our cloud or your servers, train your team, and stay on for support.", icon: LifeBuoy },
];

const MISSION_VISION = [
  {
    title: "Our mission",
    image: "/images/mission.svg",
    text: "Give every business, not just large enterprises, reliable and modern tools to talk to its customers, built on open technology and delivered by a team that knows each client by name.",
  },
  {
    title: "Our vision",
    image: "/images/vision.svg",
    text: "To be the team businesses in India and around the world trust for customer communication: the products they run every day and the engineers they call to build what comes next.",
  },
];

const VALUES = [
  { title: "Own the outcome", description: "We judge our work by whether it runs well for you in production, not just by whether it shipped.", icon: ShieldCheck },
  { title: "Say it straight", description: "Clear estimates, honest timelines and early warnings. No surprises at the end of a project.", icon: MessageSquareText },
  { title: "Build to last", description: "Clean code, documentation and monitoring, so systems keep running long after launch.", icon: Wrench },
  { title: "Stay close", description: "You work directly with the engineers building your system, not through layers of hand-offs.", icon: Handshake },
];

const WHY_DRIANSH = [
  { title: "Telecom depth", description: "Hands-on experience with SIP, media servers, carriers and call flows — the hard parts of voice.", icon: PhoneCall },
  { title: "Products and services together", description: "We run our own products, so we build client systems with the same production habits.", icon: Boxes },
  { title: "Open technology, no lock-in", description: "We build on open-source platforms, and you own your deployment and data.", icon: Unlock },
  { title: "Your cloud or ours", description: "Run on Driansh cloud or on your own servers and private cloud.", icon: Cloud },
  { title: "Direct access to engineers", description: "A focused team means quick decisions and the same people from start to finish.", icon: Users },
  { title: "Support after launch", description: "Monitoring, updates and help when you need it, not just a hand-over at go-live.", icon: Headphones },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Driansh Softtech"
        title="We build the technology businesses use to talk to their customers"
        description="Driansh Softtech is a software company in GIFT City, Gandhinagar. We make communication products like Driansh EngageOne and Driansh Contact Center, and we engineer VoIP, WebRTC, cloud and app solutions for businesses in India and abroad."
        backgroundImage="/images/about-us-img1.png"
        primaryCta={{ label: "Talk to our team", href: "/contact-us" }}
        secondaryCta={{ label: "Explore our products", href: "/our-products" }}
      />

      <Section size="sm">
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {FACTS.map(({ value, label }) => (
            <div key={value} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <dt className="text-sm text-slate-500">{label}</dt>
              <dd className="order-first text-2xl font-bold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<AboutStoryVisual />}>
          <SectionHeader eyebrow="Our story" title="Why we started Driansh" align="left" className="mb-6 md:mb-6" />
          <div className="text-lead space-y-4">
            <p>
              Driansh Softtech was founded in 2025 because good customer communication was still out of reach for most
              businesses. Telephony was expensive and hard to change, and customer chats were scattered across apps that
              didn&apos;t talk to each other.
            </p>
            <p>
              Our founding team brings hands-on experience with FreeSWITCH, Kamailio and the systems that carry real
              calls. We set out to combine that depth with modern software: open, flexible and fair on price.
            </p>
            <p>
              Today we build our own products, EngageOne and Contact Center, and we engineer custom communication and
              software systems for our clients.
            </p>
          </div>
        </MediaSplit>
      </Section>

      <Section>
        <SectionHeader title="What we do" description="Products you can use today, and an engineering team to build what you need next." />
        <CardGrid>
          {WHAT_WE_DO.map(({ title, description, href, icon: Icon }) => (
            <FeatureCard key={title} href={href} title={title} description={description} icon={<Icon aria-hidden="true" />}>
              <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more</span>
            </FeatureCard>
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader title="How we work" description="A simple, open process, so you always know where your project stands." />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_WORK.map(({ step, title, description, icon: Icon }) => (
            <li key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-3xl font-bold text-brand/20">{step}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-slate-600">{description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <CardGrid columns={2}>
          {MISSION_VISION.map(({ title, image, text }) => (
            <FeatureCard
              key={title}
              icon={<Image src={image} alt="" width={40} height={40} className="h-10 w-10 object-contain" />}
              iconClassName="h-16 w-16"
              title={title}
              description={text}
            />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader title="What we value" description="The habits behind every project we take on." />
        <CardGrid columns={4}>
          {VALUES.map(({ title, description, icon: Icon }) => (
            <FeatureCard key={title} title={title} description={description} icon={<Icon aria-hidden="true" />} />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader title="Why businesses choose Driansh" />
        <CardGrid>
          {WHY_DRIANSH.map(({ title, description, icon: Icon }) => (
            <FeatureCard key={title} title={title} description={description} icon={<Icon aria-hidden="true" />} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm" tone="muted">
        <CTABanner
          title="Let's build your next communication system"
          description="Tell us what you need: a product demo, a custom VoIP platform or help with an existing system."
          cta={{ label: "Talk to our team", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
