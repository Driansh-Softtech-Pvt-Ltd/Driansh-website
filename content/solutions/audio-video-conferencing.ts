import {
  Archive,
  Bell,
  Disc,
  Hand,
  Layers,
  Lock,
  MessagesSquare,
  Mic,
  Monitor,
  Network,
  PenLine,
  Phone,
  Plane,
  Presentation,
  ScreenShare,
  ServerCog,
  UserCog,
  Video,
  Zap,
} from "lucide-react";
import type { SolutionPageContent } from "@/content/types";

const audioVideoConferencing: SolutionPageContent = {
  kind: "solution",
  path: "/audio-video-conferencing-solution",
  name: "Audio & Video Conferencing",
  eyebrow: "Solutions",
  seo: {
    title: "Audio & Video Conferencing Solution",
    description:
      "Audio and video conferencing solution with screen sharing, chat, recording and moderator controls, under your brand and on your servers. Book a free demo.",
  },
  hero: {
    title: "Audio & video conferencing solution for remote teams",
    subtitle:
      "We build browser-based audio and video conferencing with screen sharing, chat and recording, branded as yours and hosted on your own servers or cloud.",
    primaryCta: "Talk to our team",
    secondaryCta: "View features",
  },
  highlights: [
    "Browser-based meetings",
    "Screen & presentation sharing",
    "Recording & shared notes",
    "Role-based controls",
  ],
  diagram: {
    center: { icon: Video, label: "Conference Server" },
    nodes: [
      { icon: Monitor, label: "Web participants" },
      { icon: Phone, label: "Dial-in callers" },
      { icon: UserCog, label: "Moderators" },
      { icon: ScreenShare, label: "Screen sharing" },
      { icon: Disc, label: "Recordings" },
      { icon: MessagesSquare, label: "Chat & notes" },
    ],
  },
  overview: {
    title: "What is an audio and video conferencing solution?",
    paragraphs: [
      "An audio and video conferencing solution lets people meet over voice, video and screen share from anywhere. Participants join from a browser, and audio conferences can also accept callers who dial in by phone.",
      "We build conferencing platforms you can brand and host yourself. Admins decide who can moderate, moderators run each meeting, and every session can be recorded with its chat and notes.",
    ],
    audiences: [
      "Enterprises & remote teams",
      "Training & e-learning providers",
      "VoIP service providers",
      "Resellers",
      "Consultancies & agencies",
    ],
  },
  features: {
    title: "Audio and video conferencing features",
    items: [
      { icon: Mic, title: "Audio conferencing", text: "Host voice-only meetings that people can join from a browser or by dialling in." },
      { icon: Video, title: "Video meetings", text: "Meet face to face on video, with webcam controls for every participant." },
      { icon: ScreenShare, title: "Screen sharing", text: "Share a screen or window so you can run demos, walkthroughs and training." },
      { icon: Presentation, title: "Presentations & PDFs", text: "Upload slides or PDFs and present them without leaving the meeting." },
      { icon: MessagesSquare, title: "Public & private chat", text: "Message the whole room or one person, then save or clear the chat." },
      { icon: PenLine, title: "Whiteboard & notes", text: "Draw on a shared canvas and write notes together during the call." },
      { icon: UserCog, title: "Moderator controls", text: "Mute everyone, lock webcams or microphones, remove participants and hand over presenter rights." },
      { icon: Hand, title: "Raise hand & reactions", text: "Let participants raise a hand or react, so larger meetings stay orderly." },
      { icon: Disc, title: "Recording & downloads", text: "Record meetings and email the recording, chat, audio clips and notes afterwards." },
      { icon: Bell, title: "Alerts & accessibility", text: "Get sound and pop-up alerts for joins and messages, with language and font-size settings." },
    ],
  },
  benefits: {
    title: "What your business gets",
    items: [
      { icon: Plane, title: "Less travel spend", text: "Replace many trips and venue bookings with meetings your team joins from anywhere." },
      { icon: Zap, title: "Faster decisions", text: "Get decision makers into one meeting within minutes instead of waiting for a shared diary slot." },
      { icon: Archive, title: "A record of every meeting", text: "Recordings, chat and notes give you material for training, follow-ups and dispute resolution." },
      { icon: Lock, title: "Your brand, your data", text: "Run the platform under your name and on your infrastructure, so meeting data stays in your control." },
    ],
  },
  howItWorks: {
    title: "How the conferencing platform works",
    text: "Participants join a meeting room from a web browser, or by phone for audio. The media server mixes audio and video and relays screen shares. Admins grant rights to moderators, who run each session. Recordings and chat are stored for later download.",
    points: [
      "WebRTC in the browser, so participants need no downloads",
      "Admin, moderator, participant and guest roles",
      "Deploy on your own servers or in the cloud",
      "Custom features and integrations on request",
    ],
  },
  integrations: {
    title: "Pairs well with",
    items: [
      { icon: Network, title: "WebRTC development", text: "Custom browser calling and video features for your platform.", href: "/services/webrtc-development-service" },
      { icon: Layers, title: "Unified communications", text: "Add conferencing to calling, chat and presence in one app.", href: "/unified-communications-solution" },
      { icon: Phone, title: "Enterprise VoIP", text: "Give conference users a full business phone system.", href: "/enterprise-voip-solutions" },
      { icon: ServerCog, title: "FreeSWITCH development", text: "Dial-in bridges and custom conference logic.", href: "/services/freeswitch-development-service" },
    ],
  },
  faqs: [
    {
      question: "How many participants can join a video conference?",
      answer:
        "There is no fixed limit in the software. The practical number depends on your server capacity, bandwidth and how many people share video at the same time. We size the servers for the meetings you plan to run and can add media servers as usage grows.",
    },
    {
      question: "Can participants join a conference call without internet access?",
      answer:
        "Yes, for audio. Participants can dial into an audio conference from a regular phone when their internet is limited or unavailable, using a number linked to the meeting. Video, screen sharing and chat still need a browser and an internet connection.",
    },
    {
      question: "Can I use only audio conferencing and not video?",
      answer:
        "Yes. You can run audio-only meetings, video meetings or both, depending on how your teams work. Features can be switched on per meeting or per role. If your use case needs something the standard platform lacks, we can build it.",
    },
    {
      question: "Can I white-label a video conferencing platform?",
      answer:
        "Yes. We deliver the conferencing platform under your brand, with your logo, colours and domain. You can use it internally or sell it as a service to your own customers. Because the source code is handed over, your team can keep developing it after launch.",
    },
    {
      question: "What are the main business uses of video conferencing software?",
      answer:
        "The most common uses are team meetings, client demos, remote training, board meetings and interviews. Recording turns each session into reusable material, so a training call or demo can be shared with people who missed it. Screen sharing and presentations help these sessions work as well as in person.",
    },
  ],
  related: [
    { name: "Unified Communications", href: "/unified-communications-solution" },
    { name: "Enterprise VoIP", href: "/enterprise-voip-solutions" },
    { name: "VoIP Business Solutions", href: "/voip-business-solutions" },
    { name: "WebRTC Development", href: "/services/webrtc-development-service" },
  ],
  cta: {
    title: "See the conferencing platform in action",
    text: "Book a free demo and we'll run a live meeting with screen sharing, chat and recording.",
  },
};

export default audioVideoConferencing;
