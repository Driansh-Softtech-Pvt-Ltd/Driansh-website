import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  message: z.string().min(10, "Message should be at least 10 characters"),
  consent: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;


export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;