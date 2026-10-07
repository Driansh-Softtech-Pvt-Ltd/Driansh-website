import { CtaLink } from "@/components/site";

/** "Can't find it?" band shown at the bottom of the docs hub and category pages. */
export default function DocsHelpBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-10 text-white sm:px-10 md:py-12">
      <div aria-hidden="true" className="bg-brand-gradient absolute inset-0 opacity-90" />
      <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="max-w-2xl">
          <h2 className="heading-2 text-white">Can&apos;t find what you need?</h2>
          <p className="mt-3 text-white/85">
            Our team sets up and supports every EngageOne account. Ask us a question, or book a walkthrough of the
            product with your own use case.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <CtaLink href="/contact-us" variant="light">
            Contact us
          </CtaLink>
          <CtaLink href="/our-products/engageone/request-demo" variant="outline-light" arrow={false}>
            Request a demo
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
