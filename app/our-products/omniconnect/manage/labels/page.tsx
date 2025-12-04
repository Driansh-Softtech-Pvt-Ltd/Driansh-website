"use client";
 
import Image from "next/image";
 
export default function LabelsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: User context on your fingertips, faster resolutions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Easily organize your conversations with labels
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be better organized about conversations by labelling them for future reference.
        </p>
      </section>
 
      {/* Easy and quick set-up */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/label/adding-label.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Create and customize your labels
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              You only need to create your labels once in your Driansh OmniConnect account. Name your labels,
              give them a description, and choose a colour for distinction.That is all you need to
              do to activate labels and get more organized. And yes, you can edit them whenever you want.
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
              Instantly label your incoming conversations
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Once you have added your labels to your account, you will be able to see them on your chat s
              sidebar. You can simply select them to label certain conversations the way you want to</p>
          </div>
 
          {/* Right: UI Screenshot */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/manage/label/labelling-conversations-from-sidebar.png"
                alt=""
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
                src="/images/manage/label/label 3.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Get an overview of your labels
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From your dashboard, you can view and download your Labels Report. Just select a certain label to
              get insights on the metrics associated with it—conversations, messages, First Response Time, Resolution
              Time and more.
            </p>
          </div>
        </div>
      </section>
 
    </main>
  );
}
 
 