import { pageMetadata } from "@/lib/seo";
import { PageHero, Section } from "@/components/site";

export const metadata = pageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Legal"
        title="Privacy Policy"
        primaryCta={null}
        description={
          <>
          <p className="mt-4 first:mt-0">
            At Driansh Softtech, we believe to be transparent with you and
            hence, through this Privacy Policy, we hereby give you a clear idea
            regarding the use of your personal information that we collect from
            your end when you visit our site and/or when you raise an inquiry to
            us.
          </p>
          </>
        }
      />
      <Section containerClassName="max-w-4xl">

      <section className="mt-12 first:mt-0">
        <div>
          <div>
            <h2 className="heading-3 text-ink">
              Information We Receive From You
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              When you visit our website, we collect personal information from
              you such as your name, contact number, e-mail, etc. We also
              collect your IP address, browser, and device identity. We collect
              this information in order to improve our site’s performance and
              provide you enhanced user experience. We also have access to your
              number of site visits, time spent on our site, the number of pages
              viewed, etc. But we don’t use these or any other details to trace
              your personal identification.
            </p>
            <p className="text-lead mt-4 text-slate-600">
              Plus, we never sell, transfer or trade your personal information
              with any third party websites or persons unless we are entitled to
              do it legally. Please be sure that we don’t use your personal
              details for any purpose other than what stated above. If at any
              time, if you want us to stop using your information, you can
              contact us.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-3 text-ink">
              Information You Provide Through Interactions
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              During the interaction happened between us (via forums, e-mails,
              chat box, feedback or any other way), whatever information you
              share with us will be protected from our end and will not share
              with any other person.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-3 text-ink">
              Protection Of Your Data
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              As we respect your privacy, we have implemented certain policies
              and technology standards with a view to protecting your data from
              any unauthorized or improper access. And we assure you to update
              them as and when required and new standards get available.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-3 text-ink">
              Online Privacy Policy Only
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              This Privacy Policy is applicable only in case of all your
              information we collect online through our website and not offline.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-3 text-ink">
              Changes and Amendments
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              We have the right and authority to make any amendment or
              alteration in any or all the grounds of this Privacy Policy. All
              such changes and amendments to this policy shall be communicated
              to you and published on this page. You are therefore advised to
              visit this page as and when you visit our website.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-3 text-ink">
              Your Consent
            </h2>
            <p className="text-lead mt-4 text-slate-600">
              By using our website, you assure us about your consent to this
              Privacy Policy.
            </p>
            <p className="text-lead mt-4 text-slate-600">
              When you visit or log in to our website, cookies and similar
              technologies may be used by our online data partners or vendors to
              associate these activities with other personal information they or
              others have about you, including by association with your email or
              home address. We (or service providers on our behalf) may then
              send communications and marketing to these email or home
              addresses.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="heading-3 text-ink">Contact Us</h2>
            <p className="text-lead mt-4 text-slate-600">
              Should you have any query or question regarding this Privacy
              Policy or any of our dealings or practices, kindly contact us.
            </p>
          </div>
        </div>
      </section>
      </Section>
    </>
  );
}
