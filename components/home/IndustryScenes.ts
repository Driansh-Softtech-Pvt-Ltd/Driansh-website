import { INDUSTRIES } from "@/content/engageone/industries";
import { ENGAGEONE_BASE } from "./links";

/*
 * Scripted conversations for the home page industries showcase. Names,
 * amounts and references are sample data only; references are masked.
 */

export type IndustryScene = {
  name: string;
  href: string;
  heading: string;
  line: string;
  bullets: string[];
  window: string;
  contact: { name: string; channel: string; reference: string };
  /** Contact attributes shown as chips under the contact name. */
  attributes: string[];
  label: string;
  sla?: string;
  customer: string;
  draft: string;
  agent: string;
  system: string;
};

const story = (slug: string) => {
  const found = INDUSTRIES.find((industry) => industry.slug === slug);
  if (!found) throw new Error(`Missing industry content for "${slug}"`);
  return found;
};

const local = story("local-businesses");
const logistics = story("logistics");
const fintech = story("banking-insurance-fintech");

const INDUSTRIES_HREF = `${ENGAGEONE_BASE}/industries`;

export const INDUSTRY_SCENES: IndustryScene[] = [
  {
    name: "E-commerce",
    href: `${INDUSTRIES_HREF}/ecommerce`,
    heading: "Calm a late order before it turns into a refund",
    line: "Order details sit beside the chat, so the reply is specific and fast.",
    bullets: [
      "Website chat, WhatsApp, Instagram and email in one list",
      "Store orders beside the chat with the Shopify integration",
      "Labels and priority to sort urgent orders first",
    ],
    window: "EngageOne · Website chat",
    contact: { name: "Priya Nair", channel: "via Website chat", reference: "Order #EO-•••482" },
    attributes: ["COD · ₹2,349", "Orders · 6"],
    label: "Delivery delay",
    sla: "SLA 15m",
    customer: "My order was due yesterday and still hasn't arrived. I need it for a wedding on Saturday!",
    draft:
      "Sorry for the wait, Priya. Your parcel left our Pune hub this morning and is due by Friday 7 PM. I've flagged it as urgent with the courier.",
    agent: "Rahul",
    system: "Rahul set the priority to High",
  },
  {
    name: local.name,
    href: `${INDUSTRIES_HREF}/${local.slug}`,
    heading: "Turn a quick DM into a confirmed booking",
    line: "Instagram, WhatsApp and website messages land in one inbox you can answer from your phone.",
    bullets: local.splits[0].points,
    window: "EngageOne · Instagram",
    contact: { name: "Kavya Iyer", channel: "via Instagram", reference: "Regular customer" },
    attributes: ["Visits · 4", "Branch · Satellite"],
    label: "Booking",
    customer: "Hi! Can I get a haircut and hair spa for two this Sunday, around 11?",
    draft:
      "Hi Kavya! Sunday 11:00 is free for two at our Satellite branch. Haircut with hair spa is ₹1,800 per person. Shall I book it in your name?",
    agent: "Pooja",
    system: "Assigned to Satellite branch by Pooja",
  },
  {
    name: logistics.name,
    href: `${INDUSTRIES_HREF}/${logistics.slug}`,
    heading: "Rescue a failed delivery in one reply",
    line: "Exceptions reach operations quickly, with response targets so nothing sits waiting.",
    bullets: logistics.splits[1].points,
    window: "EngageOne · WhatsApp",
    contact: { name: "Vikram Rao", channel: "via WhatsApp", reference: "AWB ••••8274" },
    attributes: ["Attempt · 1 failed", "Zone · Pune East"],
    label: "Reschedule",
    sla: "SLA 10m",
    customer: "The rider marked my parcel 'customer not home' but I was in all day. Can it come tomorrow?",
    draft:
      "Sorry about that, Vikram. I've rescheduled AWB ••••8274 for tomorrow, 10 AM–1 PM, and asked the rider to call before arriving.",
    agent: "Asha",
    system: "Assigned to Last-mile operations by Asha",
  },
  {
    name: fintech.name,
    href: `${INDUSTRIES_HREF}/${fintech.slug}`,
    heading: "Act on a suspicious charge within minutes",
    line: "Verified customer details and response targets help the right team move fast.",
    bullets: fintech.splits[1].points,
    window: "EngageOne · WhatsApp",
    contact: { name: "Arjun Mehta", channel: "via WhatsApp", reference: "Card ••••4417" },
    attributes: ["KYC · Verified", "Risk · High"],
    label: "Fraud",
    sla: "SLA 8m",
    customer: "There's a ₹12,499 charge on my card that I never made. Please help!",
    draft:
      "I'm sorry, Arjun. I've raised a dispute for the ₹12,499 charge on card ••••4417 and our fraud team is reviewing it now. Never share your OTP with anyone.",
    agent: "Meera",
    system: "Assigned to Fraud team by Meera",
  },
];
