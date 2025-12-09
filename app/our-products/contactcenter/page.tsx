"use client";

import Image from "next/image";
import { useState } from "react";
import { OUR_PRODUCTS } from "@/constants";
import { Activity, BarChart, Building, ChevronRight, Target, ChevronDown, ChevronUp, LayoutDashboard, LucideLayoutDashboard, } from "lucide-react";
import { motion } from "framer-motion";
import { benefits, keyFeaturesWithDesc, additionalFeaturesWithDesc, crm } from "@/constants/function";



export default function ContactCenterPage() {
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const contactCenterProduct = OUR_PRODUCTS.find(
    (product) => product.id === "contactCenter"
  );

  if (!contactCenterProduct) return null;



  return (
    <main className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={contactCenterProduct.image}
                alt={contactCenterProduct.title}
                width={700}
                height={550}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div>
              <Image
                src={contactCenterProduct.logo}
                alt={contactCenterProduct.title}
                width={200}
                height={70}
                className="w-40 h-auto"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {contactCenterProduct.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {contactCenterProduct.description}
            </p>

            <ul className="space-y-4">
              {contactCenterProduct.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <ChevronRight className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Dashboard Section */}
      {/* <section className="py-24 px-6 md:px-12 border-t border-gray-200 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
         
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dashboard Overview
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Dashboard offers a quick view of your operational setup, displaying counts for active Campaigns and core Processes.
                It tracks team resources, showing the number of available Agents and Supervisors.
                Functionally, the Call Summary monitors performance, detailing Inbound and Outbound
                volumes. This allows administrators to immediately assess call efficiency using
                Connected and Not Connected metrics.
              </p>
            </motion.div>

        
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/contactcenter/Dashboard.png"
                alt="Dashboard Overview"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Combined 4-Point Section */}
      <section className="py-24 px-6 md:px-12 border-t border-gray-200 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          {/* Left Side – Points */}
          <div>
            <div className="space-y-8">
              {/* Dashborad */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 mt-1 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">
                  <LucideLayoutDashboard className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h3>
                  <p className="text-gray-600 mt-1">
                    The Dashboard offers a quick view of your operational setup, displaying counts for active Campaigns and core Processes.
                    It tracks team resources, showing the number of available Agents and Supervisors.
                    Functionally, the Call Summary monitors performance, detailing Inbound and Outbound
                    volumes. This allows administrators to immediately assess call efficiency using
                    Connected and Not Connected metrics.
                  </p>
                </div>
              </div>

              {/* Monitor */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8  mt-1 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Monitor</h3>
                  <p className="text-gray-600 mt-1">
                    Real-time monitoring dashboard that displays live Agent Status, Call Activity,
                    and Queue Performance. Admins can track ongoing calls, idle time, duration,
                    and workflow direction. It provides instant visibility into alerts and operational
                    bottlenecks to ensure smooth contact center performance.
                  </p>
                </div>
              </div>

              {/* Tenant */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8  mt-1 bg-purple-500 rounded-full flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Tenant</h3>
                  <p className="text-gray-600 mt-1">
                    Tenant administration lets Super Admins manage organization-level
                    Business Groups. It supports adding new tenants, configuring their
                    users, assigning permissions, activating or deactivating groups, and
                    mapping SSO profiles. This ensures structured management of multiple
                    customers under one platform.
                  </p>
                </div>
              </div>

              {/* Campaign Management */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8  mt-1 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Management</h3>
                  <p className="text-gray-600 mt-1">
                    This module handles end-to-end configuration of outbound and inbound
                    campaigns. Admins can assign supervisors, set dialer rules, configure DNC & DID mappings,
                    manage lists, and enable auto-disposition. It centralizes everything needed to run large-scale
                    call campaigns efficiently.
                  </p>
                </div>
              </div>

              {/* Reports */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8  mt-1 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                  <BarChart className="w-6 h-6 text-black" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Reports</h3>
                  <p className="text-gray-600 mt-1">
                    The Reporting module provides detailed analytics for calls, agents, and campaigns.
                    It includes performance dashboards, call summaries, agent productivity logs, and hourly
                    traffic reports. Admins can export reports, monitor KPIs, and make data-driven decisions
                    based on real-time and historical insights.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side – ONE Image */}
          <div className="flex justify-center">
            <Image
              src="/images/contactcenter/all-combine.png"
              alt="Contact Center Overview"
              width={800}
              height={800}
              className="rounded-xl shadow-2xl object-cover w-full h-full "
            />
          </div>
        </div>
      </section>

      {/* Benefit */}
      <section className="py-24 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              What are the Benefits?
            </h2>
            <p className="text-xl text-gray-600">
              Our Contact Center platform delivers enterprise-grade security with
              multi-tenant architecture, intelligent automation that reduces manual work,
              and comprehensive workforce management across 7 process types. It provides
              advanced lead management with flexible ingestion, compliance governance,
              and real-time analytics with live monitoring and dashboards for data-driven decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="group hover:shadow-xl transition-all duration-300 rounded-xl p-8 border border-gray-200 hover:border-gray-300 bg-liner-to-br from-white to-gray-50"
                >
                  <div className={`${benefit.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-6 md:px-12 border-b border-gray-200 bg-[#f4f4f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              What are the Key Features ?
            </h2>
            <p className="text-xl text-gray-600">
              It offers a complete omnichannel contact center suite with calling, IVR, ACD, queue management, advanced
              dialers, reporting, and agent tools. It supports multi-tenant deployment, multi-lingual operations, CRM
              integrations, add-on modules, and real-time monitoring for efficient and scalable customer engagement.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {keyFeaturesWithDesc.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 rounded-xl p-8 border border-gray-200 hover:border-gray-300 bg-linear-to-br from-white to-gray-50"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-linear-to-br from-cyan-500 to-blue-600">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Show More / Show Less Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setExpandedFeatures(!expandedFeatures)}
              className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {expandedFeatures ? (
                <>
                  <span>Show Less Features</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Show More Features</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Additional Features - Expandable */}
          {expandedFeatures && (
            <div className="animate-in fade-in duration-300">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalFeaturesWithDesc.map((feature, idx) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group hover:shadow-xl transition-all duration-300 rounded-xl p-8 border border-gray-200 hover:border-gray-300 bg-linear-to-br from-white to-gray-50"
                    >
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-linear-to-br from-indigo-500 to-purple-600">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CRM */}
      <section className="py-24 px-6 md:px-12 border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              What is CRM?
            </h2>
            <p className="text-xl text-gray-600">
              CRM (Customer Relationship Management) is a software
              system that helps businesses manage customer interactions, leads,
              sales pipelines, support conversations, and customer data all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crm.map((crm) => {
              const IconComponent = crm.icon;
              return (
                <div
                  key={crm.id}
                  className="group hover:shadow-xl transition-all duration-300 rounded-xl p-8 border border-gray-200 hover:border-gray-300 bg-liner-to-br from-white to-gray-50"
                >
                  <div className={`${crm.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {crm.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {crm.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}