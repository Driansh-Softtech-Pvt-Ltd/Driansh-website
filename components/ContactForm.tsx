"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle2, ChevronDown, Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import { submitContact } from "@/actions/submitContact";
import { getAttribution } from "@/lib/analytics/attribution";
import { cn } from "@/lib/utils";
import { ctaClasses } from "@/components/site/CtaLink";
import { contactSchema, type ContactFormData } from "@/validations/contact-schema";
import {
  CONTACT_EMAIL,
  CONTACT_INTERESTS,
  CONTACT_PHONE,
  CONTACT_WHATSAPP,
  TEAM_SIZES,
  type ContactInterest,
  interestLabel,
} from "@/constants/contact";

type Status = { kind: "idle" } | { kind: "success"; name: string } | { kind: "error"; message: string; data: ContactFormData };

const FIELD =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-ink placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-rose-400";

function Field({
  id,
  label,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-slate-400">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}

/** Pre-filled email so a visitor can still reach us if the form can't send. */
function mailtoFor(data: ContactFormData) {
  const subject = `Website enquiry${data.interest ? `: ${interestLabel(data.interest)}` : ""} — ${data.name}`;
  const body = [
    data.message,
    "",
    `Name: ${data.name}`,
    data.company && `Company: ${data.company}`,
    data.phone && `Phone: ${data.phone}`,
    data.teamSize && `Team size: ${data.teamSize}`,
  ]
    .filter((line) => line !== undefined && line !== "")
    .join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm({
  defaultInterest,
  submitLabel = "Send message",
}: {
  defaultInterest?: ContactInterest;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { interest: defaultInterest, consent: false },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await submitContact({ ...data, attribution: getAttribution() });
      if (result.success) {
        setStatus({ kind: "success", name: data.name.split(" ")[0] });
        reset({ interest: defaultInterest, consent: false });
      } else {
        setStatus({ kind: "error", message: result.message, data });
      }
    } catch {
      setStatus({ kind: "error", message: "We couldn't send your message.", data });
    }
  };

  if (status.kind === "success") {
    return (
      <div className="flex flex-col items-center py-8 text-center" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="heading-3 mt-5 text-ink">Thanks, {status.name}! Your message is with our team.</h3>
        <p className="mt-2 max-w-md text-slate-600">
          We&apos;ll reply to the email address you gave us. If it&apos;s urgent, call us on{" "}
          <a href={`tel:${CONTACT_PHONE.tel}`} className="font-medium text-brand hover:underline">
            {CONTACT_PHONE.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 min-h-10 text-sm font-semibold text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const invalid = (field: keyof ContactFormData) => (errors[field] ? true : undefined);
  const describedBy = (field: keyof ContactFormData) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Full name" error={errors.name?.message}>
          <input
            id="contact-name"
            autoComplete="name"
            placeholder="Priya Shah"
            className={FIELD}
            aria-invalid={invalid("name")}
            aria-describedby={describedBy("name")}
            {...register("name")}
          />
        </Field>
        <Field id="contact-email" label="Work email" error={errors.email?.message}>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="priya@company.com"
            className={FIELD}
            aria-invalid={invalid("email")}
            aria-describedby={describedBy("email")}
            {...register("email")}
          />
        </Field>
        <Field id="contact-phone" label="Phone" optional error={errors.phone?.message}>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={FIELD}
            aria-invalid={invalid("phone")}
            aria-describedby={describedBy("phone")}
            {...register("phone")}
          />
        </Field>
        <Field id="contact-company" label="Company" optional error={errors.company?.message}>
          <input
            id="contact-company"
            autoComplete="organization"
            placeholder="Company name"
            className={FIELD}
            {...register("company")}
          />
        </Field>
        <Field id="contact-interest" label="What can we help with?" optional>
          <div className="relative">
          <select
            id="contact-interest"
            className={cn(FIELD, "appearance-none pr-10")}
            {...register("interest", { setValueAs: (value) => value || undefined })}
          >
            <option value="">Choose a topic</option>
            {CONTACT_INTERESTS.map((interest) => (
              <option key={interest.value} value={interest.value}>
                {interest.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </Field>
        <Field id="contact-team" label="Team size" optional>
          <div className="relative">
          <select
            id="contact-team"
            className={cn(FIELD, "appearance-none pr-10")}
            {...register("teamSize", { setValueAs: (value) => value || undefined })}
          >
            <option value="">Select team size</option>
            {TEAM_SIZES.map((size) => (
              <option key={size} value={size}>
                {size} people
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </Field>
      </div>

      <Field id="contact-message" label="How can we help?" error={errors.message?.message}>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your team, the channels you use and what you'd like to achieve."
          className={cn(FIELD, "resize-y")}
          aria-invalid={invalid("message")}
          aria-describedby={describedBy("message")}
          {...register("message")}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand"
          {...register("consent")}
        />
        Send me product news and updates from Driansh Softtech. You can unsubscribe at any time.
      </label>

      {status.kind === "error" && (
        <div role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
          <p className="flex items-center gap-2 font-semibold">
            <AlertCircle className="h-4 w-4 shrink-0" /> {status.message}
          </p>
          <p className="mt-1 text-rose-800">Your details are still in the form. You can also reach us directly:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={mailtoFor(status.data)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink shadow-sm hover:text-brand"
            >
              <Mail className="h-4 w-4" /> Email this message
            </a>
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink shadow-sm hover:text-brand"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={`tel:${CONTACT_PHONE.tel}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-ink shadow-sm hover:text-brand"
            >
              <Phone className="h-4 w-4" /> {CONTACT_PHONE.display}
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          By sending this form you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-brand">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(ctaClasses(), "shrink-0")}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              {submitLabel} <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
