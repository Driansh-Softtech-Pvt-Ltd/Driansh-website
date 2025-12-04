"use client";
 
import Image from "next/image";
 
export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
         Organize your agents into teams
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Create internal teams in your account to assign them conversations when working collaboratively.
        </p>
      </section>
 
      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/teams/create-team.png"
                alt="create-teams"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Set up your teams in seconds
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
             All you have to do is set a name and description for your desired team, and add agents to it. Later,
            you will be able to see your teams through your chat sidebar, and select the relevant one for that conversation.
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
            Auto assign your conversations to specific teams
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              With Automations, you can set conditions and keywords in your incoming messages
               to automatically assign such conversations to the relevant team. This helps you
               and your customers get faster resolutions.
               </p>
          </div>
 
          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/teams/auto-assign-teams.png"
                alt="auto-assign-teams"
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
                src="/images/manage/teams/teams-overview.png"
                alt="teams - overview"
                fill
                className="object-contain"
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Team Analytics
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
             Easily see how each of your teams is performing. View metrics like conversations,
              incoming and outgoing messages, First Response Time, etc.filtered by your teams.
              Filter these reports by duration and business hours, and download them to your system.
            </p>
          </div>
        </div>
      </section>
 
    </main>
  );
}
 
 