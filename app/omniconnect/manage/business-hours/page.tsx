"use client";
 
import Image from "next/image";
 
export default function BusinessHoursPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Let customers know you&apos;re not available to answer their questions
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Set office hours for your inbox channels, and display a custom Unavailable Message to your visitors.
        </p>
      </section>
 
 
      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/business-hours/business-hours-settings.png"
                alt="add-note"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Set your daily working hours and Unavailability message
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Set your working hours defined by time zone, and let your visitors
              know that you or your team is currently not working.
            </p>
          </div>
        </div>
      </section>
 
 
      {/* Map fields with your custom attributes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Set Business Hours for every inbox separately
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Your Business Hours settings are not account-wide. Select custom
              Business Hours for every inbox (and hence, the agents associated with that inbox)
              configured on your Driansh OmniConnect account, separately.
            </p>
          </div>
 
          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/business-hours/business-hours-for-every-inbox.png"
                alt="formate - note"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
 
 
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/business-hours/business-hours-in-reports.png"
                alt="delete - note"
                fill
                className="object-contain"
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Adjust your performance reports for Business Hours
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Get the correct sense of your account&apos;s performance and metrics.
              View your Conversation, Agent, Inbox, Label and Team Reports - with
              or without data adjusted for Business Hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
 
 