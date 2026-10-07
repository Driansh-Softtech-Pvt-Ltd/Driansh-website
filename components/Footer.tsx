"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ctaClasses } from "@/components/site/CtaLink";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FOOTER_COLUMNS, FOOTER_TAGLINE } from "@/constants/index";
import { newsletterSchema, NewsletterFormData } from "@/validations/contact-schema";
import { saveNewsletter } from "@/actions/saveNewsletter";
import { getAttribution } from "@/lib/analytics/attribution";
import { ThemeSegmented } from "@/components/theme/ThemeSwitcher";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSuccessMsg(null);
    try {
      const res = await saveNewsletter({ ...data, attribution: getAttribution() });
      setSuccessMsg(res.message);
      if (res.success) reset();
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error(err);
      }
      setSuccessMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="light-tokens bg-navy text-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr_0.9fr] gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <h3 className="heading-3 text-white">Driansh Softtech Pvt. Ltd.</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {FOOTER_TAGLINE}
            </p>
            <div className="space-y-1 lg:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-violet-300 mt-1" />
                <p className="text-sm text-slate-400">
                  C/104, Riverfront, GIFT City,<br />
                  Gandhinagar – 382426, Gujarat, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-violet-300" />
                <a href="https://driansh.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-sm text-slate-400 transition-colors hover:text-white lg:min-h-0">
                  www.driansh.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-violet-300" />
                <a href="tel:+917028764776" className="inline-flex min-h-10 items-center text-sm text-slate-400 transition-colors hover:text-white lg:min-h-0">
                  +91 70287 64776
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-violet-300" />
                <a href="mailto:support@driansh.com" className="inline-flex min-h-10 items-center text-sm text-slate-400 transition-colors hover:text-white lg:min-h-0">
                  support@driansh.com
                </a>
              </div>
            </div>
          </div>

          {FOOTER_COLUMNS.map(column => (
            <div key={column.title}>
              <h4 className="heading-4 mb-4 text-white">{column.title}</h4>
              <ul className="lg:space-y-2">
                {column.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex min-h-10 items-center py-1.5 text-sm text-slate-400 transition-colors hover:text-white lg:inline lg:min-h-0 lg:py-0">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <h4 className="heading-4 mb-3 text-white">Stay updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
              {/* Honeypot field for bots — hidden from users */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("website")}
              />
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                {...register("email")}
                className="min-h-10 min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
              />
              <button type="submit" disabled={isSubmitting} className={ctaClasses({ size: "sm" })}>
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </form>
            {errors.email && <p className="mt-1 text-sm text-rose-400">{errors.email.message}</p>}
            {successMsg && <p className={`text-sm mt-2 ${successMsg.includes("successfully") ? "text-emerald-400" : "text-rose-400"}`}>{successMsg}</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© {currentYear} Driansh Softtech Pvt. Ltd. All rights reserved.</p>
            <ThemeSegmented compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
