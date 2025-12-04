"use client";
 
import Image from "next/image";
 
export default function ContactNotesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Note down important info about your contacts
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Never lose sight of your contacts, by simply adding notes to them.
        </p>
      </section>
 
 
      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/contact-note/add-note.png"
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
              Add notes easily, anytime
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Anytime you decide to add a note to a conversation, you can simply
              open their contact page through the Driansh OmniConnect Dashboard and add it. Just like that!
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
              Rich text formatting
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Coz, why not? Format and highlight your notes the way you like.
            </p>
          </div>
 
          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/contact-note/format-note.png"
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
                src="/images/manage/contact-note/del-note.png"
                alt="delete - note"
                fill
                className="object-contain"
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Delete them later
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              If you don&apos;t need a note anymore, it is confusing your team members,
              or it has served its purpose, you can delete it by clicking on the bin icon.
            </p>
          </div>
        </div>
      </section>
 
    </main>
  );
}
 
 