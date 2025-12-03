"use client";

import Image from "next/image";

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: Manage conversations on the go */}
      <section className="w-full bg-[#f7f9fc] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: Smartphone with app interface */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/mobile/phone-hero.png"
                alt="Mobile app interface showing conversations list"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Marketing text and download buttons */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              Manage conversations on the go
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
              Don't miss out on the new customers, download our mobile apps and talk to your customers easily.
            </p>

            {/* App Store Download Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-block"
                aria-label="Download on the App Store"
              >
                <div className="h-12 w-40 bg-black rounded-lg flex items-center justify-center px-3 hover:opacity-90 transition-opacity">
                  <span className="text-white text-xs font-medium">
                    Download on the App Store
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="inline-block"
                aria-label="Get it on Google Play"
              >
                <div className="h-12 w-40 bg-black rounded-lg flex items-center justify-center px-3 hover:opacity-90 transition-opacity">
                  <span className="text-white text-xs font-medium">
                    GET IT ON Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


