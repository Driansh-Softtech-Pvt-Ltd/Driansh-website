import type { SolutionPageContent } from "@/content/types";
import class4 from "./class-4-softswitch";
import class5 from "./class-5-softswitch";
import multiTenantPbx from "./multi-tenant-ip-pbx";
import voipBilling from "./voip-billing";
import callingCard from "./calling-card";
import voipBusiness from "./voip-business";
import callCenter from "./call-center";
import liveCallMonitoring from "./live-call-monitoring";
import voiceBroadcasting from "./voice-broadcasting";
import enterpriseVoip from "./enterprise-voip";
import unifiedCommunications from "./unified-communications";
import conferencing from "./audio-video-conferencing";
import faxing from "./faxing";

/** Solution pages grouped for the /solutions hub. */
export const SOLUTION_GROUPS: { title: string; description: string; items: SolutionPageContent[] }[] = [
  {
    title: "For VoIP providers & carriers",
    description: "Switching, PBX hosting and billing platforms you can brand and resell.",
    items: [class4, class5, multiTenantPbx, voipBilling, callingCard, voipBusiness],
  },
  {
    title: "For contact centers",
    description: "Dialing, monitoring and outreach tools for sales and support teams.",
    items: [callCenter, liveCallMonitoring, voiceBroadcasting],
  },
  {
    title: "For businesses & enterprises",
    description: "Phone systems, collaboration and document tools for your own teams.",
    items: [enterpriseVoip, unifiedCommunications, conferencing, faxing],
  },
];
