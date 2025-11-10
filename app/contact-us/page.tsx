import Image from "next/image";
import { ContactForm } from "@/components/Contact-Form";

export default function ContactPage() {
  return (
    <section className="min-h-screen py-16 flex flex-col items-center mt-20">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          We'd love to hear from you. Get in touch with our team for any inquiries or support.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full px-4 max-w-360 md:px-0 gap-12">
        <div className="w-full md:[40%] flex justify-center">
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              rel="preload"
              src="/logo.png"
              alt="Contact Us"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
        <div className="w-full md:[60%] flex justify-center md:mr-4 md:-ml-5">
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
