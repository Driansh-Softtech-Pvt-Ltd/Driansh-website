/*
 * Customer quotes for the home page "Customer stories" section. The section
 * is hidden while this list is empty.
 *
 * Only add real quotes that the customer has approved for publishing. Add an
 * entry like this (no job titles):
 *   { quote: "…", name: "Full name", company: "Company name", logo: "/images/customers/company.svg" }
 * `logo` is optional and should point to a file under public/.
 */

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  logo?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
