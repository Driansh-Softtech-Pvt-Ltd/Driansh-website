import {
  Blocks,
  Cable,
  Globe,
  Headphones,
  Layers,
  LifeBuoy,
  Lock,
  MessagesSquare,
  Monitor,
  PhoneCall,
  Radio,
  ScreenShare,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
} from "lucide-react";
import type { ServicePageContent } from "@/content/types";

const webrtc: ServicePageContent = {
  kind: "service",
  path: "/services/webrtc-development-service",
  name: "WebRTC Development",
  eyebrow: "VoIP Development",
  seo: {
    title: "WebRTC Development Company",
    description:
      "WebRTC development company building browser voice, video, screen sharing and web softphones linked to SIP networks. Talk to a WebRTC engineer today.",
  },
  hero: {
    title: "WebRTC Development Company for Voice and Video Apps",
    subtitle:
      "We build WebRTC apps for voice, video, chat and screen sharing. They run in the browser and on mobile, and connect to your SIP or VoIP platform.",
    primaryCta: "Talk to a WebRTC Engineer",
    secondaryCta: "See What We Build",
  },
  highlights: [
    "Browser softphones & dialers",
    "Video calls & conferencing",
    "SIP & PSTN connectivity",
    "Web, desktop & mobile apps",
  ],
  diagram: {
    center: { icon: ServerCog, label: "WebRTC" },
    nodes: [
      { icon: Globe, label: "Browser clients" },
      { icon: Smartphone, label: "Mobile apps" },
      { icon: PhoneCall, label: "SIP & PSTN" },
      { icon: Users, label: "Video rooms" },
      { icon: ScreenShare, label: "Screen sharing" },
      { icon: Cable, label: "CRM & APIs" },
    ],
  },
  intro: {
    title: "What we build with WebRTC",
    paragraphs: [
      "WebRTC development lets your users talk, see and share in real time without installing plugins. We build web softphones, video meeting apps, contact center agent screens and in-app calling for web and mobile. Each one is designed around your users, workflows and product.",
      "We also handle the server side: signaling, TURN and STUN, media servers and gateways to SIP. That way your WebRTC app can call phone numbers, desk phones and existing VoIP systems as well as other browsers.",
    ],
  },
  techStack: ["WebRTC", "SIP.js", "JsSIP", "Janus", "mediasoup", "coturn", "FreeSWITCH", "Kamailio", "React", "Node.js", "Flutter"],
  services: {
    title: "WebRTC development services we offer",
    items: [
      { icon: PhoneCall, title: "Web softphones", text: "Give users a browser phone that registers to your SIP platform, so they can call from any computer." },
      { icon: Video, title: "Video calling & meetings", text: "Build one-to-one and group video with layouts, moderation and recording that fit your product." },
      { icon: ScreenShare, title: "Screen & file sharing", text: "Add screen sharing, chat and file transfer so teams can work together inside one call." },
      { icon: Cable, title: "SIP & PSTN gateways", text: "Bridge WebRTC to SIP trunks and phone numbers, so browser users can reach any phone." },
      { icon: Smartphone, title: "Mobile WebRTC apps", text: "Ship native or cross-platform calling apps that share accounts and features with your web app." },
      { icon: LifeBuoy, title: "Media servers & support", text: "Set up TURN, SFU and recording servers, then monitor and tune call quality after launch." },
    ],
  },
  useCases: {
    title: "Solutions we build with WebRTC",
    items: [
      { icon: Users, title: "Audio & video conferencing", text: "Browser meetings with dial-in, moderation and recording.", href: "/audio-video-conferencing-solution" },
      { icon: Headphones, title: "Call center agent apps", text: "Browser-based agent desktops with softphone and CRM data.", href: "/call-center-solution" },
      { icon: MessagesSquare, title: "Unified communications", text: "Calls, video, chat and presence in one web workspace.", href: "/unified-communications-solution" },
      { icon: Monitor, title: "Omnichannel inbox", text: "Voice and chat conversations handled from a single inbox.", href: "/our-products/omniconnect" },
      { icon: Radio, title: "Live call monitoring", text: "Listen, whisper or barge into live calls from the browser.", href: "/live-call-monitoring-solution" },
    ],
  },
  whyUs: {
    title: "Why teams choose Driansh for WebRTC",
    items: [
      { icon: Layers, title: "Browser to carrier", text: "We build the client, the media servers and the SIP side, so calls work end to end." },
      { icon: Lock, title: "Secure by default", text: "WebRTC encrypts media with DTLS-SRTP, and we add authentication and access control as well." },
      { icon: Blocks, title: "Fits your product", text: "We embed calling into your existing web or mobile app instead of forcing a separate tool." },
      { icon: ShieldCheck, title: "You own the code", text: "Source code and documentation are handed over, so your team can extend the app freely." },
    ],
  },
  faqs: [
    {
      question: "What is WebRTC development?",
      answer:
        "WebRTC development is building real-time voice, video and data features that run directly in browsers and mobile apps. It covers the client interface, signaling, TURN and STUN servers, and media servers. Typical results are web softphones, video meetings, telehealth or support calls, and in-app calling.",
    },
    {
      question: "How much does it cost to build a WebRTC app?",
      answer:
        "A focused web softphone or one-to-one video feature is a smaller project than a full conferencing platform with recording and mobile apps. Media servers and hosting also affect cost. We scope your features in a free call, then share a written estimate and a phased plan.",
    },
    {
      question: "Can a WebRTC app call regular phone numbers?",
      answer:
        "Yes. WebRTC connects to SIP through a gateway such as FreeSWITCH, Kamailio with RTPengine, or Asterisk. From there, calls go out over SIP trunks to mobile and landline numbers. We set up the gateway, codecs and routing, so browser users can call anyone and receive inbound calls.",
    },
    {
      question: "Which browsers support WebRTC?",
      answer:
        "Current versions of Chrome, Firefox, Safari and Edge support WebRTC on desktop, and most support it on mobile too. Browsers differ slightly in codecs and permissions, so we test across them. For iOS and Android we can also build native apps that use the same backend.",
    },
    {
      question: "How many people can join a WebRTC video call?",
      answer:
        "It depends on the architecture. Peer-to-peer calls work well for a handful of people. For larger meetings we use a media server, an SFU such as Janus or mediasoup, which forwards streams efficiently. We size servers around your expected room size and number of parallel meetings.",
    },
  ],
  related: [
    { name: "SIP.js Development", href: "/services/sip-js-development-service" },
    { name: "Kamailio Development", href: "/services/kamailio-development-service" },
    { name: "FreeSWITCH Development", href: "/services/freeswitch-development-service" },
    { name: "Linphone App Development", href: "/services/linphone-app-development" },
  ],
  cta: {
    title: "Building a WebRTC app?",
    text: "Tell us what your users need to do. A WebRTC engineer will review it and suggest the right setup.",
  },
};

export default webrtc;
