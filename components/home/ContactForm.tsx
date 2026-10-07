"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/validations/contact-schema";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { submitContact } from "@/actions/submitContact";
import { getAttribution } from "@/lib/analytics/attribution";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSuccessMsg(null);
    try {
      const res = await submitContact({ ...data, attribution: getAttribution() });
      setSuccessMsg(res.message);
      if (res.success) reset();
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setSuccessMsg("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Honeypot field for bots — hidden from users */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("website")}
        />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            <span className="text-red-500 mr-1">*</span>Your name
          </label>
          <input
            {...register("name")}
            suppressHydrationWarning
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:border-brand focus:ring-0"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            <span className="text-red-500 mr-1">*</span>Email
          </label>
          <input
            {...register("email")}
            suppressHydrationWarning
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:border-brand focus:ring-0"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Phone number
          </label>
          <input
            {...register("phone")}
            suppressHydrationWarning
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:border-brand focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Company name
          </label>
          <input
            {...register("company")}
            suppressHydrationWarning
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:border-brand focus:ring-0"
          />
        </div>
      </div>

      <div>
        <label className="block text-base font-medium text-gray-800 mb-2">
          <span className="text-red-500 mr-1">*</span>Your requirements
        </label>
        <textarea
          {...register("message")}
          suppressHydrationWarning
          rows={3}
          className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none resize-none focus:border-brand focus:ring-0"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-gradient flex items-center gap-2 rounded-full px-10 py-6 text-base font-semibold text-white shadow-md hover:brightness-110"
        >
          {isSubmitting ? "Sending..." : "Send"}
          {!isSubmitting && <Send className="w-5 h-5" />}
        </Button>
      </div>

      {successMsg && (
        <p
          className={`text-center text-sm font-medium mt-2 ${
            successMsg.startsWith("Thank you") ? "text-green-600" : "text-red-500"
          }`}
        >
          {successMsg}
        </p>
      )}
    </form>
  );
}
