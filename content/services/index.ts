import type { ServicePageContent } from "@/content/types";
import voipDevelopment from "./voip-development";
import freeswitch from "./freeswitch";
import asterisk from "./asterisk";
import kamailio from "./kamailio";
import opensips from "./opensips";
import webrtc from "./webrtc";
import sipJs from "./sip-js";
import fusionpbx from "./fusionpbx";
import linphone from "./linphone";
import vicidial from "./vicidial";
import signalwire from "./signalwire";
import voipTesting from "./voip-testing";
import mobileApp from "./mobile-app";
import android from "./android";
import ios from "./ios";
import flutter from "./flutter";
import reactNative from "./react-native";
import webDevelopment from "./web-development";
import frontEnd from "./front-end";
import backEnd from "./back-end";
import devops from "./devops";
import productEngineering from "./product-engineering";

/** Service pages grouped for the /services hub. */
export const SERVICE_GROUPS: { title: string; description: string; items: ServicePageContent[] }[] = [
  {
    title: "VoIP development",
    description: "Voice, video and signaling platforms built on open-source telephony.",
    items: [voipDevelopment, freeswitch, asterisk, kamailio, opensips, webrtc],
  },
  {
    title: "Open-source VoIP & platforms",
    description: "Customisation and apps on proven VoIP projects and CPaaS platforms.",
    items: [fusionpbx, vicidial, linphone, sipJs, signalwire],
  },
  {
    title: "Mobile app development",
    description: "Native and cross-platform apps, including VoIP calling apps.",
    items: [mobileApp, android, ios, flutter, reactNative],
  },
  {
    title: "Web, DevOps & product engineering",
    description: "Web apps, APIs, cloud infrastructure and end-to-end product builds.",
    items: [webDevelopment, frontEnd, backEnd, devops, productEngineering],
  },
  {
    title: "QA & testing",
    description: "Load, quality and interoperability testing for voice platforms.",
    items: [voipTesting],
  },
];
