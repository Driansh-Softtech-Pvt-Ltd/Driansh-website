import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PageHero, Section } from "@/components/site";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from "@/constants/contact";

const CHANNELS: { icon: LucideIcon; title: string; detail: string; value: string; href: string; external?: boolean }[] = [
  { icon: Mail, title: "Email us", detail: "For enquiries, quotes and support.", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, title: "Call us", detail: "Talk to our team directly.", value: CONTACT_PHONE.display, href: `tel:${CONTACT_PHONE.tel}` },
  { icon: MessageCircle, title: "WhatsApp", detail: "Message us on WhatsApp.", value: CONTACT_PHONE.display, href: CONTACT_WHATSAPP, external: true },
  {
    icon: MapPin,
    title: "Visit our office",
    detail: CONTACT_ADDRESS.lines.join(", "),
    value: "Open in Google Maps",
    href: CONTACT_ADDRESS.mapUrl,
    external: true,
  },
];

const NEXT_STEPS = [
  { title: "We read your message", detail: "The right person on our team picks it up: sales, engineering or support." },
  { title: "We reply by email", detail: "With answers, questions about your setup, or times for a call." },
  { title: "We share a plan", detail: "A demo, a proposal or a fix, matched to what you need." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Contact"
        title="Talk to the Driansh team"
        description="Questions about Driansh EngageOne, Voice Call Center, Unified Communications or a custom VoIP or software project? Send us a message and the right person will get back to you."
        primaryCta={null}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="heading-3 text-ink">Ways to reach us</h2>
              <ul className="mt-5 space-y-3">
                {CHANNELS.map(({ icon: Icon, title, detail, value, href, external }) => (
                  <li key={title}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-card p-4 transition-colors hover:border-brand/40 hover:bg-brand-soft/40"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-ink">{title}</span>
                        <span className="block text-sm text-slate-500">{detail}</span>
                        <span className="mt-1 block truncate font-medium text-brand group-hover:underline">{value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="heading-3 text-ink">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map(({ title, detail }, i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{title}</span>
                      <span className="block text-sm text-slate-600">{detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="order-first lg:order-none lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-card p-6 shadow-xl shadow-slate-900/5 sm:p-10">
              <h2 className="heading-3 text-ink">Send us a message</h2>
              <p className="mt-1 mb-8 text-slate-600">Tell us a little about what you need and we&apos;ll get back to you.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
