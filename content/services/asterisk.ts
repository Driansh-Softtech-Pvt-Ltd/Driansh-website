import {
  Blocks,
  Building2,
  Cable,
  Code2,
  CreditCard,
  Gauge,
  Headphones,
  Layers,
  LifeBuoy,
  Mic,
  PhoneCall,
  Radio,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const asterisk: ServicePageContent = {
  kind: "service",
  path: "/services/asterisk-development-service",
  name: "Asterisk Development",
  eyebrow: "VoIP Development",
  seo: {
    title: "Asterisk Development Services",
    description:
      "Asterisk development services: AGI and AMI apps, dialplans, IP PBX, IVR and call centers. Talk to an Asterisk engineer for a free consultation.",
  },
  hero: {
    title: "Asterisk Development Services for Business Phone Systems",
    subtitle:
      "We build and customize Asterisk systems for businesses and VoIP providers, from dialplans and AGI apps to IP PBX and call centers you fully control.",
    primaryCta: "Talk to an Asterisk Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "AGI, AMI & ARI development",
    "Dialplan & IVR programming",
    "PJSIP migration & upgrades",
    "Cloud or on-premise deployment",
  ],
  diagram: {
    center: { icon: ServerCog, label: "Asterisk" },
    nodes: [
      { icon: PhoneCall, label: "SIP trunks & phones" },
      { icon: Workflow, label: "IVR & dialplan" },
      { icon: Headphones, label: "Queues & agents" },
      { icon: Mic, label: "Voicemail & recording" },
      { icon: Cable, label: "CRM & APIs" },
      { icon: CreditCard, label: "Billing & CDRs" },
    ],
  },
  intro: {
    title: "What we build with Asterisk",
    paragraphs: [
      "Our Asterisk development services turn the open-source PBX toolkit into a phone system shaped around your business. We write dialplans, AGI scripts and ARI applications, and connect Asterisk to your CRM, billing and web apps. The result is a PBX, IVR or contact center that behaves exactly the way you work.",
      "We also take over existing Asterisk servers. That means fixing call issues, moving from chan_sip to PJSIP, upgrading to supported releases and adding the features your team keeps asking for.",
    ],
  },
  techStack: ["Asterisk", "PJSIP", "AGI", "AMI", "ARI", "FreePBX", "Kamailio", "WebRTC", "PHP", "Python", "MySQL"],
  services: {
    title: "Asterisk development services we offer",
    items: [
      { icon: Code2, title: "Custom Asterisk apps", text: "Build call features Asterisk lacks out of the box, using ARI, AGI or custom modules." },
      { icon: Workflow, title: "Dialplan & IVR design", text: "Map your call routing, menus and time rules into clean dialplans that are easy to change." },
      { icon: Cable, title: "AMI & API integration", text: "Push call events into CRMs and helpdesks, and trigger click-to-call from your own apps." },
      { icon: Wrench, title: "Upgrades & migration", text: "Move old Asterisk servers to current releases and PJSIP without breaking your existing call flows." },
      { icon: Gauge, title: "High availability setup", text: "Cluster and load-balance Asterisk behind a SIP proxy so calls keep working if a server fails." },
      { icon: LifeBuoy, title: "Support & maintenance", text: "Keep your Asterisk platform patched, monitored and tuned after launch, with fixes when issues appear." },
    ],
  },
  useCases: {
    title: "Solutions we build on Asterisk",
    items: [
      { icon: Building2, title: "Multi-tenant IP PBX", text: "Hosted PBX for many business customers on shared servers.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Headphones, title: "Call center software", text: "Queues, agent panels, recording and live reports.", href: "/call-center-solution" },
      { icon: CreditCard, title: "Calling card platform", text: "PIN-based calling with vouchers, rates and resellers.", href: "/calling-card-solution" },
      { icon: Radio, title: "Voice broadcasting", text: "Automated outbound calls for alerts, reminders and campaigns.", href: "/voice-broadcasting-solution" },
      { icon: Smartphone, title: "Enterprise VoIP", text: "Office phone systems with extensions, mobility and call rules.", href: "/enterprise-voip-solutions" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for Asterisk",
    items: [
      { icon: Layers, title: "Beyond the PBX", text: "We also build billing, portals, softphones and SIP proxies, so your whole voice stack fits together." },
      { icon: ShieldCheck, title: "You own the code", text: "Dialplans, scripts and documentation are handed over, so any engineer can maintain them later." },
      { icon: Blocks, title: "Clean, readable config", text: "We keep dialplans modular and commented, so adding a feature does not mean untangling old logic." },
    ],
  },
  faqs: [
    {
      question: "What is Asterisk development?",
      answer:
        "Asterisk development means building or customizing phone systems on the open-source Asterisk framework. The work covers dialplans, IVR menus, AGI or ARI applications, AMI integrations and custom modules. The result can be an office PBX, a hosted multi-tenant PBX, a call center or a specialised voice app.",
    },
    {
      question: "How long does an Asterisk project take?",
      answer:
        "Timelines depend on scope. A dialplan change or single integration usually takes days to a few weeks. A full IP PBX or call center build with portals and reports takes a few months. We give you a written scope and timeline after a free discovery call.",
    },
    {
      question: "Can you migrate our Asterisk server from chan_sip to PJSIP?",
      answer:
        "Yes. chan_sip has been removed from current Asterisk releases, so moving to PJSIP is needed for upgrades. We map your existing peers, trunks and dialplan settings and test calls on a staging server. Then we switch over in a planned window to keep downtime low.",
    },
    {
      question: "Can Asterisk integrate with our CRM?",
      answer:
        "Yes. We use AMI and ARI to send call events to your CRM, show caller details as a call rings, log calls automatically and enable click-to-call. We can connect Asterisk to off-the-shelf CRMs and custom in-house systems through REST APIs and webhooks.",
    },
    {
      question: "Is Asterisk good for a call center?",
      answer:
        "Yes, for small to mid-sized contact centers. Asterisk ships with queues, agent login, recording and call monitoring. For larger deployments we add a SIP proxy for load balancing, a custom agent interface and reporting. The right design depends on agent count, call volume and dialer needs.",
    },
    {
      question: "Do you support Asterisk systems built by other developers?",
      answer:
        "Yes. We start with an audit of your servers, dialplans and scripts, then document what we find and fix urgent issues first. After that we can handle ongoing maintenance, upgrades and new features, so you are not stuck when the original developer is no longer available.",
    },
  ],
  related: [
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "FusionPBX Development", href: "/services/fusionpbx-development-service" },
    { name: "VICIdial Development", href: "/services/vicidial-development-service" },
    { name: "Kamailio Development", href: "/services/kamailio-development-service" },
  ],
  cta: {
    title: "Planning an Asterisk project?",
    text: "Tell us about your phone system or idea. An Asterisk engineer will review it and suggest next steps.",
  },
};

export default asterisk;
