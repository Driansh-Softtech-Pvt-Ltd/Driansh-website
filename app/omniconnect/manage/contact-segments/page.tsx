"use client";
 
import Image from "next/image";
 
export default function ContactSegmentsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Organize your contacts into segments
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Group your contacts using filters and save them into segments.
        </p>
      </section>
 
 
      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/contact-segment/contact-segment 1.png"
                alt="switch - to - private - note"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Set up customized segments in seconds
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Use advanced filters to group your contacts, and save the group as a
              segment. Now you can name it what you want, and get on with creating the next one.
            </p>
          </div>
        </div>
      </section>
 
 
      {/* Map fields with your custom attributes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
             Quickly access your segments
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              You don&apos;t need to filter and sort your contacts again and again.
              Once you have saved a segment, it appears on the sidebar of your
              Contacts page. Simply click on the segment you wish to see and you get going.
            </p>
          </div>
 
          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/contact-segment/contact-segment.png"
                alt="private - note - mentions"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 