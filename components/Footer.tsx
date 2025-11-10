"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from "@/constants/index";
import { newsletterSchema, NewsletterFormData } from "@/validations/contact-schema";
import { saveNewsletter } from "@/actions/saveNewsletter";

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
      const res = await saveNewsletter(data.email);
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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.3fr_1.3fr_1fr_1fr] gap-8 lg:gap-12">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Driansh Softtech Pvt. Ltd.</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premier software and VoIP solutions provider, delivering innovative technology solutions to businesses worldwide. Transforming ideas into powerful digital experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <p className="text-sm text-gray-400">
                  C/104, Riverfront, GIFT City,<br />
                  Gandhinagar – 382426, Gujarat, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-500" />
                <a href="https://driansh.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  www.driansh.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+917028764776" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  +91 70287 64776
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:support@driansh.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  support@driansh.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Solutions</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.solution.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Products</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.products.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md">
            <h4 className="font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-500"
              />
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 px-6 py-2 rounded-r-lg hover:bg-blue-700 text-sm font-medium">
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            {successMsg && <p className={`text-sm mt-2 ${successMsg.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{successMsg}</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© {currentYear} Driansh Softtech Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              {FOOTER_SOCIAL_LINKS.map(social => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label} className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
