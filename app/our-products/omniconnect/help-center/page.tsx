"use client";
 
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Globe, MessageCircle, FolderTree, Heart, Lock } from "lucide-react";
 
export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      {/* Hero: Delight customers. Empower teams. */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-20">
        <div className="w-full md:w-1/2">
          {/* Help Center badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide">
              Help Center
            </span>
          </div>
         
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Delight customers. Empower teams.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl">
            Build your personalized help center with our intuitive knowledge base software. Streamline queries, enhance agent efficiency, and elevate customer support.
          </p>
 
          <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            Create a free account
          </button>
        </div>
 
        {/* Right: Help center hero image with workflow illustration */}
        <div className="w-full md:w-1/2">
          <div className="relative h-64 sm:h-72 lg:h-80">
            <Image
              src="/images/help-center/help-center-hero.webp"
              alt="Help center workflow - search, editor, and article view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
 
      {/* Manage multiple portals section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: Portal cards with animations */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              {/* Handbook Portal - Animated with hover effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="absolute top-0 left-0 w-48 sm:w-56 md:w-64 z-10 cursor-pointer"
              >
                <Image
                  src="/images/help-center/handbook-portal.svg"
                  alt="Handbook portal"
                  width={256}
                  height={180}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </motion.div>
 
              {/* User Guide Portal - Animated with hover effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="absolute top-24 sm:top-32 md:top-40 left-8 sm:left-12 md:left-16 w-48 sm:w-56 md:w-64 z-20 cursor-pointer"
              >
                <Image
                  src="/images/help-center/userguide-portal.svg"
                  alt="User Guide portal"
                  width={256}
                  height={180}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </motion.div>
 
              {/* Portals Management View */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-0 right-0 w-56 sm:w-64 md:w-72 z-30"
              >
                <Image
                  src="/images/help-center/portal-handbook.svg"
                  alt="Portals management dashboard"
                  width={288}
                  height={200}
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </div>
 
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Manage multiple portals
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Provide targeted support to different segments of your customer base. Whether you&apos;re managing multiple brands, products, or services, you can create a unique portal for each and manage all of them from a centralized dashboard.
            </p>
          </div>
        </div>
      </section>
 
      {/* Create engaging articles section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Left: Text with bullet points */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Create engaging articles
            </h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Rich content editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Support for YouTube and Vimeo links</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Support for drafts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span>Metadata management for better SEO</span>
              </li>
            </ul>
          </div>
 
          {/* Right: Article editor mockup */}
          <div className="h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/help-center/help-center-article.webp"
                alt="Article editor interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Feature Cards Grid */}
      <section className="max-w-6xl mx-auto  sm:px-6 lg:px-8 mb-20">
        {/* First Row */}
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {/* SSL certificates card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              SSL certificates
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Get secure documentation with your custom domain.
            </p>
            <div className="h-40 w-full flex items-center justify-center overflow-hidden px-4">
              <Image
                src="/images/help-center/certificates-card.svg"
                alt="SSL certificates"
                width={250}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
 
          {/* Locales card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Locales
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Make your informative articles accessible to everyone.
            </p>
            <div className="h-40 w-full flex items-center justify-center overflow-hidden px-4">
              <Image
                src="/images/help-center/locales-card.svg"
                alt="Locales"
                width={250}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
 
          {/* Live chat widget card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Live chat widget
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Attach your help center to live chat widget with a single click.
            </p>
            <div className="h-40 w-full flex items-center justify-center overflow-hidden px-4">
              <Image
                src="/images/help-center/widget-card.svg"
                alt="Live chat widget"
                width={250}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
 
        {/* Second Row */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Categories card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FolderTree className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Categories
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Keep your informative articles well organized and easily accessible.
            </p>
            <div className="h-40 w-full flex items-center justify-center overflow-hidden px-4">
              <Image
                src="/images/help-center/categories-card.svg"
                alt="Categories"
                width={250}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
 
          {/* Full API support card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Full API support
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Build innovative custom apps with our advanced, powerful API.
            </p>
            <div className="h-40 w-full flex items-center justify-center overflow-hidden px-4">
              <Image
                src="/images/help-center/support-card.svg"
                alt="Full API support"
                width={250}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
 
          {/* Private pages card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 relative"
          >
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold">
                Coming Soon
              </span>
            </div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Private pages
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Provide restricted, selected access to specific pages.
            </p>
            <div className="h-40 w-full flex items-center justify-center overflow-hidden px-4">
              <Image
                src="/images/help-center/private-card.svg"
                alt="Private pages"
                width={250}
                height={160}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
 
 