/** Company contact details and contact-form options, shared by every form and contact block. */

export const CONTACT_EMAIL = "support@driansh.com";
export const CONTACT_PHONE = { display: "+91 70287 64776", tel: "+917028764776" };
export const CONTACT_WHATSAPP = "https://wa.me/917028764776";
export const CONTACT_ADDRESS = {
  lines: ["C/104, Riverfront, GIFT City", "Gandhinagar – 382426, Gujarat, India"],
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Riverfront+GIFT+City+Gandhinagar",
};

export const CONTACT_INTERESTS = [
  { value: "engageone-demo", label: "EngageOne demo" },
  { value: "voice-call-center", label: "Voice Call Center" },
  { value: "unified-communications", label: "Unified Communications" },
  { value: "custom-project", label: "VoIP or software project" },
  { value: "support", label: "Support for an existing system" },
  { value: "other", label: "Something else" },
] as const;

export type ContactInterest = (typeof CONTACT_INTERESTS)[number]["value"];

export const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"] as const;

export function interestLabel(value?: string) {
  return CONTACT_INTERESTS.find((interest) => interest.value === value)?.label;
}
