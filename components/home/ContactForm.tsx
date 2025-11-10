"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/validations/contact-schema";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { sendMail } from "@/actions/sendContactUsMail";
import { saveContact } from "@/actions/saveContact";

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
      await sendMail(data);
      setSuccessMsg("Thank you! We'll contact you soon.");
      reset();
      saveContact(data).catch((err) =>
        console.error("Failed to save contact in DB:", err)
      );
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setSuccessMsg("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            <span className="text-red-500 mr-1">*</span>Your Name
          </label>
          <input
            {...register("name")}
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:ring-0"
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
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:ring-0"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Phone Number
          </label>
          <input
            {...register("phone")}
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-800 mb-2">
            Company Name
          </label>
          <input
            {...register("company")}
            className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none focus:ring-0"
          />
        </div>
      </div>

      <div>
        <label className="block text-base font-medium text-gray-800 mb-2">
          <span className="text-red-500 mr-1">*</span>Any Requirements
        </label>
        <textarea
          {...register("message")}
          rows={3}
          className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-base text-gray-700 outline-none resize-none focus:ring-0"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-yellow-400 text-black text-lg font-semibold rounded-full px-14 py-6 flex items-center gap-2 shadow-none hover:bg-yellow-400"
        >
          {isSubmitting ? "Sending..." : "Send"}
          {!isSubmitting && <Send className="w-5 h-5" />}
        </Button>
      </div>

      {successMsg && (
        <p
          className={`text-center text-sm font-medium mt-2 ${
            successMsg.includes("Failed") ? "text-red-500" : "text-green-600"
          }`}
        >
          {successMsg}
        </p>
      )}
    </form>
  );
}
