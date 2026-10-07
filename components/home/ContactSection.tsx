import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/site";

const CONTACT_INFO = [
  { icon: "/images/mail-icon.svg", title: "Email", value: "support@driansh.com", href: "mailto:support@driansh.com" },
  { icon: "/images/phone-icon.svg", title: "Call", value: "+91 70287 64776", href: "tel:+917028764776" },
];

export default function ContactSection() {
  return (
    <Section tone="navy" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-600/25 blur-3xl"
      />
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-3 text-violet-300">Contact</p>
          <h2 className="heading-2 text-white">Let’s get in touch</h2>
          <p className="text-lead mt-4 mb-10">
            Tell us what you need, from an EngageOne demo to a custom VoIP or software project, and our team will get back to you.
          </p>

          <div className="flex flex-wrap gap-10 sm:gap-16">
            {CONTACT_INFO.map((item) => (
              <a key={item.title} href={item.href} className="group flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5">
                  <Image src={item.icon} alt="" width={28} height={28} />
                </span>
                <span>
                  <span className="eyebrow block text-slate-400">{item.title}</span>
                  <span className="font-semibold text-white group-hover:underline">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-10">
          <h3 className="heading-3 text-ink">How can we help?</h3>
          <p className="mb-8 mt-1 text-slate-600">Share a few details and we’ll get back to you.</p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
