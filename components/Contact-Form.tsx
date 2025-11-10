"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { UserRound, AtSign, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/validations/contact-schema";
import { sendMail } from "@/actions/sendContactUsMail";
import { saveContact } from "@/actions/saveContact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSuccessMsg(null);
    try {
      await sendMail(data);
      setSuccessMsg("Thank you! We'll contact you soon.");
      reset();
      saveContact(data).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          console.error("Failed to save contact in DB:", err);
        }
      });
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Error submitting contact form:", err);
      }
      setSuccessMsg("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center h-full">
      <h2 className="text-xl font-bold text-center text-[#1D9863] my-6">
        Let's Build the Future of Communication Together!
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
        {/* Row 1: Name + Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center border-b border-gray-300">
              <UserRound className="text-gray-400" />
              <Input
                placeholder="Full Name*"
                {...register("name")}
                className="flex-1 border-none bg-transparent text-gray-600 placeholder-gray-400 p-6 outline-none shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center border-b border-gray-300">
              <Phone className="text-gray-400" />
              <Input
                placeholder="Phone"
                {...register("phone")}
                className="flex-1 border-none bg-transparent text-gray-600 placeholder-gray-400 p-6 outline-none shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Email + Website */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center border-b border-gray-300">
              <AtSign className="text-gray-400" />
              <Input
                placeholder="Email*"
                type="email"
                {...register("email")}
                className="flex-1 border-none bg-transparent text-gray-600 placeholder-gray-400 p-6 outline-none shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <div className="border-b border-gray-300">
              <Input
                placeholder="Company Name"
                {...register("company")}
                className="flex-1 border-none bg-transparent text-gray-600 placeholder-gray-400 p-6 outline-none shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none"
              />
            </div>
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="border-b border-gray-300">
            <Textarea
              placeholder="Any Requirements*"
              rows={3}
              {...register("message")}
              className="border-none bg-transparent text-gray-600 placeholder-gray-400 p-6 resize-none overflow-y-auto h-30 outline-none shadow-none focus-visible:ring-0 focus-visible:outline-none focus-visible:shadow-none"
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Checkbox */}
        <Controller
          name="consent"
          control={control}
          render={({ field }) => (
            <div className="flex items-start gap-2 mt-6">
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(!!checked)}
                className="mt-2"
              />
              <span className="text-lg text-gray-600">
                By submitting the form, you will be eligible for receiving the
                newsletter, and product & services update from Driansh Softech.
              </span>
            </div>
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-8">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#1E4EC4] text-white py-3 px-6 rounded-md text-center hover:bg-[#1E4EC4] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out cursor-pointer active:translate-y-0"
          >
            {isSubmitting ? "Submitting..." : "Submit Your Requirements Now"}
          </Button>
        </div>

        {/* Success Message */}
        {successMsg && (
          <p
            className={`text-center mt-4 font-medium ${
              successMsg.startsWith("Thank you")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
}
