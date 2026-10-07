import { Shield, Users, BarChart3, Zap, Lock, Headphones, Phone, Coffee, CheckSquare, Smartphone, RotateCcw, CheckCircle, ShieldAlert, Users2, Clock, Share2, GitBranch, Monitor, BarChart, MessageSquare, Layers, Target, PhoneCall, ArrowRightCircle, FileSearch, Hand, AudioLines, PackagePlus, Mic, UsersRound, Workflow, PhoneIncoming, Hash, Split, PanelsTopLeft, Contact, Bot, Contact2 } from "lucide-react";

export const benefits = [
  {
    id: 1,
    title: "Enterprise-grade security & multi-tenancy",
    description: "Multi-tenant architecture with SSO and dual authentication (password & SSO-based login) ensures secure, isolated environments for each organization with dynamic, role-based permission management.",
    icon: Shield,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Intelligent call management & automation",
    description: "Advanced disposition management, auto-disposition on timeouts, and dynamic auto re-attempt configuration based on telecom outcomes and agent dispositions reduce manual workload and improve efficiency.",
    icon: Zap,
    color: "bg-orange-500"
  },
  {
    id: 3,
    title: "Comprehensive workforce management",
    description: "Sophisticated agent lifecycle management with supervisor and team lead oversight, aux code management for breaks, business hours management, and real-time team monitoring ensure optimal resource utilization.",
    icon: Users,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Multi-channel campaign operations",
    description: "Support for 7 distinct process types—predictive, progressive, preview, manual outbound, inbound, IVR/Voice Blast, and voicebot—with flexible campaign and process management for diverse business needs.",
    icon: Headphones,
    color: "bg-green-500"
  },
  {
    id: 5,
    title: "Advanced lead & list management",
    description: "Flexible lead ingestion (Blob, SFTP, manual), comprehensive lead state controls (reset, flush, pause, resume), intelligent ordering, and governance rules (DND, daily attempt limits) ensure compliant, efficient campaigns.",
    icon: BarChart3,
    color: "bg-red-500"
  },
  {
    id: 6,
    title: "Real-time intelligence & analytics",
    description: "Live call monitoring, comprehensive agent analytics, multi-view reporting (call details, recordings, productivity, audit logs), and real-time dashboard visibility enable data-driven decision-making.",
    icon: Lock,
    color: "bg-indigo-500"
  }
];

export const keyFeaturesWithDesc = [
  {
    title: "Multi-tenant system with SSO",
    description: "Enterprise-grade multi-tenant architecture supporting both SSO and traditional username/password authentication, ensuring secure and flexible user access across organizational boundaries.",
    icon: Lock
  },
  {
    title: "Dynamic user management",
    description: "Comprehensive role-based access control with 7 user roles (Agent, Supervisor, QA, Team Lead, Admin, Super Admin) and dynamic permission modules assignable directly from the UI.",
    icon: Users
  },
  {
    title: "SIP trunk management",
    description: "Advanced SIP trunk configuration with prefix management, channel control, and seamless integration capabilities for flexible telecommunications infrastructure.",
    icon: Phone
  },
  {
    title: "Aux code management",
    description: "Streamlined aux code system for agent breaks including tea, lunch, training, and custom break types with precise time tracking and reporting.",
    icon: Coffee
  },
  {
    title: "Multi-level call disposition",
    description: "Sophisticated disposition management supporting multiple hierarchy levels, custom disposition codes, and flexible disposition tracking for comprehensive call outcome analysis.",
    icon: CheckSquare
  },
  {
    title: "Dynamic caller ID management",
    description: "Intelligent outbound caller ID management with randomization capabilities, prefix controls, and compliance-driven options for professional outbound calling.",
    icon: Smartphone
  },
  {
    title: "Auto-disposition system",
    description: "Automated disposition assignment when agents fail to manually dispose calls within timeout periods, ensuring no call goes unprocessed and improving data integrity.",
    icon: CheckCircle
  },
  {
    title: "Intelligent re-attempt engine",
    description: "Dynamic auto re-attempt configuration based on telecom outcomes or agent dispositions with customizable time slots and multiple retry strategies for improved contact rates.",
    icon: RotateCcw
  },
  {
    title: "Governance module",
    description: "Comprehensive compliance and governance controls including DND (Do Not Disturb) management, daily attempt limits, and regulatory compliance enforcement.",
    icon: ShieldAlert
  }
];

export const additionalFeaturesWithDesc = [
  {
    title: "Lead & list management",
    description: "Easily import leads from multiple sources and manage their complete lifecycle with options to reset, pause, resume, and prioritize leads for smoother campaign operations.",
    icon: Layers
  },
  {
    title: "Campaign management",
    description: "End-to-end campaign creation and execution with assignment of supervisors, dialer configuration, DNC/DID mappings, and automated list management.",
    icon: Target
  },
  {
    title: "Process management",
    description: "Support for diverse operational modes: Predictive Outbound, Progressive Outbound, Preview Outbound, Manual Outbound, Inbound, IVR, Voice Blast, and Voicebot for maximum flexibility.",
    icon: Layers
  },

  {
    title: "Predictive outbound",
    description: "Automated high-speed dialing powered by predictive algorithms that analyze agent availability, call duration, and answer ratios to optimize connection rates, reduce idle time, and increase overall productivity.",
    icon: PhoneCall
  },
  {
    title: "Progressive outbound",
    description: "A controlled outbound dialing mode where each call is placed only when an agent becomes available, ensuring consistent pacing, improved call quality, and balanced agent workload without overwhelming the team.",
    icon: ArrowRightCircle
  },
  {
    title: "Preview outbound",
    description: "Allows agents to review customer information, history, and context before dialing, enabling personalized communication, higher conversion potential, and better preparation for complex interactions.",
    icon: FileSearch
  },
  {
    title: "Manual outbound",
    description: "Gives agents full control to dial numbers manually, making it ideal for high-value leads, personalized follow-ups, or sensitive conversations where human discretion and judgment are essential.",
    icon: Hand
  },
  {
    title: "Business hours management",
    description: "Sophisticated scheduling system enabling time-zone aware business hours configuration, holiday management, and automated workflow control based on operational schedules.",
    icon: Clock
  },
  {
    title: "Agent process mapping",
    description: "Flexible assignment of agents to specific processes with skill-based routing and workload balancing for optimized contact center operations.",
    icon: Share2
  },
  {
    title: "Supervisor & team lead mapping",
    description: "Hierarchical team management with supervisor and team lead assignment to campaigns and processes for better oversight and performance management.",
    icon: Users2
  },
  {
    title: "Real-time call monitoring",
    description: "Live call supervision capabilities including barge-in, whisper coaching, and conference bridging for real-time quality assurance and agent support.",
    icon: Monitor
  },
  {
    title: "Intelligent call transfer",
    description: "Multiple transfer options including agent-to-agent, supervisor transfer, queue routing, IVR navigation, attendant transfers, and blind transfers for flexible call handling.",
    icon: GitBranch
  },
  {
    title: "Real-time reporting",
    description: "Comprehensive reporting suite with call detail records, call recordings, agent productivity metrics, login reports, audit logs, and real-time dashboards.",
    icon: BarChart
  },
  {
    title: "Unified call handling desk",
    description: "Feature-rich agent interface supporting remote login with persistent mobile calling, WebRTC-based browser soft dialer, and IP phone registration for flexible work environments.",
    icon: MessageSquare
  },
  {
    title: "Agent analytics",
    description: "In-depth agent productivity analytics including average handling time, call duration, disposition efficiency, and performance trends for data-driven coaching and improvement.",
    icon: BarChart3
  },
  {
    title: "Automatic call distribution (ACD)",
    description: "Smart routing engine that distributes incoming calls to the most suitable agents based on skills, availability, and real-time conditions, ensuring faster resolutions and higher customer satisfaction.",
    icon: Split
  },
  {
    title: "DID management",
    description: "Centralized management of Direct Inward Dialing numbers with easy allocation, routing, and monitoring to streamline inbound communication across teams and departments.",
    icon: Hash
  },
  {
    title: "Easy agent management",
    description: "Simple and intuitive interface to manage agent profiles, permissions, skills, and availability, enabling quick onboarding and efficient workforce organization.",
    icon: Users
  },
  {
    title: "Agent callback management",
    description: "Ensures no customer query is missed by enabling agents to schedule, track, and complete follow-up callbacks with proper reminders and disposition tracking.",
    icon: PhoneIncoming
  },
  {
    title: "Multi-level IVR",
    description: "Flexible IVR flow builder that supports multi-level menus, automated responses, personalized routing, and self-service options to enhance customer experience.",
    icon: Workflow
  },
  {
    title: "Call transfer",
    description: "Allows seamless transfer of active calls to agents, queues, supervisors, campaigns, external numbers, or groups—improving call handling flexibility and escalation efficiency.",
    icon: Share2
  },
  {
    title: "Call conference",
    description: "Enables agents to initiate three-way conferencing with supervisors or external numbers, facilitating real-time collaboration and smoother issue resolution.",
    icon: UsersRound
  },
  {
    title: "Barge-in & whisper coaching",
    description: "Supervisor tools that enable real-time monitoring of live calls. Supervisors can silently whisper guidance to agents or join the call directly (barge-in) to ensure quality, training, and customer satisfaction.",
    icon: Headphones
  },
  {
    title: "Agent break details",
    description: "Tracks agent break types, duration, and frequency to maintain workforce discipline, ensure fair scheduling, and optimize productivity.",
    icon: Clock
  },
  {
    title: "Call recording & downloads",
    description: "Supports 100% call recording with selective recording options, advanced filtering, easy playback, and secure download access for audits, training, and compliance.",
    icon: Mic
  },
  {
    title: "Comprehensive reporting",
    description: "Provides real-time, inbound/outbound, agent, system, and standard reports that help supervisors track performance, identify patterns, and make informed decisions.",
    icon: BarChart3
  },
  {
    title: "Add-on modules",
    description: "Optional feature extensions such as Survey Module, SMS Broadcasting, WhatsApp Broadcast, and QA tools, enabling businesses to enhance communication capabilities as needed.",
    icon: PackagePlus
  },
  {
    title: "Speech-to-text (STT) & text-to-speech (TTS)",
    description: "AI-powered voice processing that converts customer speech to text and generates natural voice responses from text, enabling automated call handling, IVR menus, and transcription.",
    icon: AudioLines
  },
  {
    title: "Dynamic IVRs",
    description: "Advanced IVR system that adapts in real time based on customer input, past interactions, and business rules—delivering personalized and efficient call flows.",
    icon: GitBranch
  },
  {
    title: "Voicebot",
    description: "AI-powered automation that interacts with callers using natural speech, handles routine queries, collects information, and routes calls intelligently—reducing agent workload and improving customer experience.",
    icon: Bot
  },

];

export const crm = [
  {
    id: 1,
    title: "Microsoft Teams integration",
    description: "Seamless integration with Microsoft Teams enables users to initiate calls, share data, and collaborate directly within Teams. Enhances productivity with unified communication, call logs, and synchronized customer interactions.",
    icon: PanelsTopLeft,
    color: "bg-purple-500"
  },
  {
    id: 2,
    title: "LeadSquared integration",
    description: "Native LeadSquared integration that syncs contacts, captures lead activities, logs call recordings, and automates follow-ups. Boosts sales efficiency with real-time telephony updates inside LeadSquared CRM.",
    icon: Contact,
    color: "bg-orange-500"
  },
  {
  id: 3,
  title: "Zoho CRM integration",
  description: "Seamless Zoho CRM integration enabling automatic call logs, contact sync, and real-time telephony updates to improve customer tracking, lead management, and workflow efficiency.",
  icon: Contact2,
  color: "bg-blue-500"
}



]

