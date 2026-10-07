import { BookOpen, Inbox, Sparkles, Users2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/site";
import { TeamInboxHeroVisual, HelpCenterHeroVisual } from "@/components/visuals/engageone/WorkspaceVisuals";
import { AiReplyHelpVisual } from "@/components/visuals/engageone/FeatureVisuals";
import { SegmentSidebarVisual } from "@/components/visuals/engageone/ManageVisuals";
import FeatureTabs, { type FeatureTab } from "./FeatureTabs";
import { ENGAGEONE_BASE } from "./links";

const TABS: FeatureTab[] = [
  {
    id: "conversations",
    label: "Conversations",
    icon: <Inbox aria-hidden="true" />,
    title: "A shared inbox the whole team can work from",
    description:
      "Messages from every channel arrive in one list. Assign them, talk them over in private notes and close them without switching tools.",
    points: [
      "Assign by team, agent or rules you set",
      "Private notes and @mentions inside the conversation",
      "Saved replies, labels and keyboard shortcuts",
    ],
    link: { label: "Explore the shared inbox", href: `${ENGAGEONE_BASE}/omnichannel-inbox` },
    visual: <TeamInboxHeroVisual />,
  },
  {
    id: "ai-assistant",
    label: "AI Assistant",
    icon: <Sparkles aria-hidden="true" />,
    title: "An assistant for customers and for agents",
    description:
      "The EngageOne AI Assistant replies to common questions from your own content and helps agents write clear answers when a person takes over.",
    points: [
      "Answers from your help articles, pages and files",
      "Suggests replies, fixes spelling and changes the tone",
      "Summarises long conversations in a click",
    ],
    link: { label: "Explore the AI Assistant", href: `${ENGAGEONE_BASE}/ai-assistant` },
    visual: <AiReplyHelpVisual />,
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: <Users2 aria-hidden="true" />,
    title: "Know who you are talking to",
    description:
      "Each customer gets one profile with their details, notes and past conversations from every channel, so nobody has to ask twice.",
    points: [
      "Conversation history across all channels",
      "Notes and details your team adds over time",
      "Saved segments for follow-ups and campaigns",
    ],
    link: { label: "Explore contact segments", href: `${ENGAGEONE_BASE}/manage/contact-segments` },
    visual: <SegmentSidebarVisual />,
  },
  {
    id: "help-center",
    label: "Help center",
    icon: <BookOpen aria-hidden="true" />,
    title: "Answers customers can find on their own",
    description:
      "Publish a searchable help center on your own domain. Agents can share an article in a chat, and the AI Assistant can use it to answer.",
    points: [
      "Articles grouped into categories",
      "More than one language per portal",
      "Search inside the chat widget",
    ],
    link: { label: "Explore the help center", href: `${ENGAGEONE_BASE}/help-center` },
    visual: <HelpCenterHeroVisual />,
  },
];

export default function FeatureTabsSection() {
  return (
    <Section tone="muted" id="product">
      <SectionHeader
        eyebrow="One platform"
        title="Everything your support team needs, in one place"
        description="Conversations, AI help, customer profiles and self-service answers share the same data, so each part makes the others better."
      />
      <FeatureTabs tabs={TABS} />
    </Section>
  );
}
