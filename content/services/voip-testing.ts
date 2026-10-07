import {
  Activity,
  ArrowRightLeft,
  Building2,
  FileBarChart,
  Gauge,
  Globe,
  Headphones,
  Layers,
  Network,
  PhoneCall,
  RefreshCcw,
  Smartphone,
  TestTube,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const voipTesting: ServicePageContent = {
  kind: "service",
  path: "/services/voip-testing",
  name: "VoIP Testing",
  eyebrow: "QA & Testing",
  seo: {
    title: "VoIP Testing Services: SIP & WebRTC QA",
    description:
      "VoIP testing services for SIP and WebRTC platforms: call quality, load, interoperability and failover tests with clear reports. Talk to a VoIP QA engineer.",
  },
  hero: {
    title: "VoIP testing services for SIP and WebRTC platforms",
    subtitle:
      "We test call quality, signaling, load and failover on your VoIP platform, find what breaks under real conditions and report exactly how to fix it.",
    primaryCta: "Talk to a VoIP QA engineer",
    secondaryCta: "See what we build",
  },
  highlights: [
    "Call quality: MOS, jitter, loss",
    "SIP & WebRTC protocol tests",
    "Load & failover testing",
    "Actionable test reports",
  ],
  diagram: {
    center: { icon: TestTube, label: "VoIP testing" },
    nodes: [
      { icon: Workflow, label: "SIP signaling" },
      { icon: Activity, label: "RTP & call quality" },
      { icon: Globe, label: "WebRTC clients" },
      { icon: Gauge, label: "Load & stress" },
      { icon: RefreshCcw, label: "Failover" },
      { icon: Network, label: "NAT & firewall" },
    ],
  },
  intro: {
    title: "What our VoIP testing covers",
    paragraphs: [
      "VoIP testing checks that your calls connect, sound clear and keep working as traffic grows. We test SIP signaling, RTP media and WebRTC clients, measuring jitter, latency, packet loss and MOS under realistic network conditions.",
      "We test platforms built on FreeSWITCH, Asterisk, Kamailio, OpenSIPS and SIP.js, because we build with them too. You get repeatable test cases and a report that ranks issues by impact.",
    ],
  },
  techStack: ["SIPp", "Wireshark", "JMeter", "sngrep", "Homer", "Playwright", "SIP", "RTP / SRTP", "WebRTC", "Python"],
  services: {
    title: "VoIP testing services we offer",
    items: [
      { icon: Activity, title: "Call quality testing", text: "Measure MOS, jitter, latency and packet loss, so you know how calls really sound to users." },
      { icon: Workflow, title: "SIP protocol testing", text: "Check INVITE, REGISTER, BYE and error flows, so calls set up and tear down correctly." },
      { icon: Globe, title: "WebRTC testing", text: "Test browser calls across devices and networks, including codec negotiation and ICE behaviour." },
      { icon: Gauge, title: "Load & stress testing", text: "Push concurrent calls and call rates with SIPp, so you find limits before your customers do." },
      { icon: ArrowRightLeft, title: "Interoperability testing", text: "Verify calls between Asterisk, FreeSWITCH, OpenSIPS, carriers and softphones, so mixed setups work." },
      { icon: RefreshCcw, title: "Failover & NAT testing", text: "Simulate crashes, network loss and NAT limits, so you can confirm recovery works as designed." },
    ],
  },
  useCases: {
    title: "Platforms we test",
    items: [
      { icon: Building2, title: "Multi-tenant IP PBX", text: "Per-tenant call quality and capacity checks for hosted PBX.", href: "/multi-tenant-ip-pbx-solution" },
      { icon: Headphones, title: "Call center software", text: "Dialer, queue and recording tests under real agent load.", href: "/call-center-solution" },
      { icon: Network, title: "Class 4 softswitch", text: "High-volume routing, CPS and carrier failover tests.", href: "/class-4-softswitch-solution" },
      { icon: PhoneCall, title: "Class 5 softswitch", text: "Feature and call-flow tests for retail VoIP services.", href: "/class-5-softswitch-solution" },
      { icon: Users, title: "Unified communications", text: "Voice, video and chat tests across browser and mobile.", href: "/unified-communications-solution" },
      { icon: Smartphone, title: "Mobile softphones", text: "Registration, push and audio tests for SIP apps.", href: "/services/linphone-app-development" },
    ],
  },
  whyUs: {
    title: "Why choose Driansh for VoIP testing",
    items: [
      { icon: Layers, title: "Testers who build VoIP", text: "Our QA engineers work next to our VoIP developers, so they know where platforms tend to fail." },
      { icon: TestTube, title: "Reusable test suites", text: "We hand over SIPp scenarios and automation scripts, so you can rerun tests after every release." },
      { icon: FileBarChart, title: "Clear reports", text: "Each issue comes with evidence, impact and a suggested fix, so your team knows what to do next." },
      { icon: Wrench, title: "Fixes on request", text: "If you want, the same team can fix the issues we find instead of handing you a list." },
    ],
  },
  faqs: [
    {
      question: "How do you load test a SIP server?",
      answer:
        "We use SIPp and custom scripts to generate thousands of simulated calls with realistic call rates, hold times and codecs. While traffic ramps up, we watch CPU, memory, call setup time and audio quality. The result shows the safe capacity of your server and what fails first.",
    },
    {
      question: "What causes choppy audio on VoIP calls?",
      answer:
        "Choppy audio usually comes from jitter, packet loss or too little bandwidth, and sometimes from an overloaded media server or bad codec choices. We capture RTP streams, measure each factor and trace where the problem starts, whether in the network, the server or the client.",
    },
    {
      question: "How much do VoIP testing services cost?",
      answer:
        "Cost depends on how many scenarios, platforms and test rounds you need. A one-off quality check is a small fixed-price project, while ongoing automated testing for each release is usually a monthly plan. We scope it in a free call and send a quote before starting.",
    },
    {
      question: "Can you test WebRTC calls in different browsers?",
      answer:
        "Yes. We run WebRTC calls in Chrome, Firefox, Safari and Edge on desktop and mobile, under good and poor network conditions. We check media permissions, ICE and TURN behaviour, codec negotiation and audio and video quality, then report which combinations fail and why.",
    },
    {
      question: "What is a good MOS score for VoIP calls?",
      answer:
        "A MOS of 4.0 or higher means clear calls that most users won't complain about, while scores below about 3.5 are usually noticeable. MOS drops as latency, jitter and packet loss rise. We measure it per route and codec, so you can see exactly where quality falls.",
    },
    {
      question: "Do you only test, or can you fix the issues too?",
      answer:
        "Both. Many clients want testing only, and we deliver the report and test scripts. If you prefer, our VoIP developers can fix the problems we find in FreeSWITCH, Asterisk, Kamailio or your client apps, then we retest to confirm each fix works.",
    },
  ],
  related: [
    { name: "VoIP Development", href: "/services/voip-development-service" },
    { name: "Kamailio Development", href: "/services/kamailio-development-service" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
    { name: "DevOps Services", href: "/services/devops-services" },
  ],
  cta: {
    title: "Worried about call quality or capacity?",
    text: "Tell us about your platform and traffic. A VoIP QA engineer will suggest a test plan and what to check first.",
  },
};

export default voipTesting;
