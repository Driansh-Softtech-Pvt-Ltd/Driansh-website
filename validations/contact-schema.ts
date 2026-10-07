import { z } from "zod";
import { CONTACT_INTERESTS, TEAM_SIZES } from "@/constants/contact";

const shortText = z.string().trim().max(300).optional();

/** Where a visitor came from — captured in the browser, attached to every lead. */
export const attributionSchema = z
  .object({
    page: shortText,
    landingPage: shortText,
    referrer: shortText,
    utmSource: shortText,
    utmMedium: shortText,
    utmCampaign: shortText,
    utmTerm: shortText,
    utmContent: shortText,
    gclid: shortText,
    firstSeen: shortText,
  })
  .optional();

export type Attribution = z.infer<typeof attributionSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(3, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(254),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9+\-\s()]*$/, "Invalid phone number format")
    .optional(),
  company: z.string().trim().max(150).optional(),
  interest: z.enum(CONTACT_INTERESTS.map((interest) => interest.value)).optional(),
  teamSize: z.enum(TEAM_SIZES).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(5000, "Message is too long"),
  consent: z.boolean().optional(),
  // Honeypot: hidden from real users, bots tend to fill it in.
  website: z.string().optional(),
  attribution: attributionSchema,
});

export type ContactFormData = z.infer<typeof contactSchema>;


export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email").max(254),
  website: z.string().optional(),
  attribution: attributionSchema,
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
