import Image from "next/image";
import { ContactForm } from "@/components/Contact-Form";
import { PageHero, Section } from "@/components/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Contact"
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team for any inquiries or support."
        primaryCta={null}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-2 lg:max-w-md">
            <Image
              src="/images/logo.png"
              alt="Contact Us"
              width={1024}
              height={1024}
              priority
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="aspect-video w-full object-cover lg:aspect-square lg:object-contain"
            />
          </div>
          <div className="w-full lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
