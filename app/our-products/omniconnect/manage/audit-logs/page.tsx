"use client";
 
import Image from "next/image";
 
export default function AuditLogsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Track and trace account activities with ease
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Conduct audits, stay secure, and stay compliant with detailed audit logs
        </p>
      </section>
 
 
      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/audit-logs/audit-log-categories.webp"
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
              Comprehensive tracking: who, what, when, and where
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Get a close look at the actions taken within your account. Audit
              Logs reveal the specifics of what&apos;s been happening, when it occurred,
              and the originating IP addresses.
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
              Tailored tracking for users, accounts, and more
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Track a range of activities related to users, account configurations,
              or modifications made to automation rules, macros, inboxes, webhooks, and teams.
            </p>
          </div>
 
          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/audit-logs/audit-log-activities.webp"
                alt="formate - note"
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
 
 