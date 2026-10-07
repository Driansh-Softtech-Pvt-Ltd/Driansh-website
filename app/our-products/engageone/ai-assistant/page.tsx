import { Bot, FileText, Globe, Lightbulb, MessageCircle, Tag, UserCheck, Wand2 } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import {
  AiAssistantHeroVisual,
  AiFaqSuggestionsVisual,
  AiKnowledgeVisual,
  AiReplyHelpVisual,
} from "@/components/visuals/engageone/FeatureVisuals";

const HIGHLIGHTS = [
  {
    title: "Always on",
    description: "The assistant replies day and night, so customers get an answer even when your team is offline.",
    icon: <Bot />,
  },
  {
    title: "Uses your content",
    description: "Answers come from your FAQs, website pages and PDFs. You decide what it knows.",
    icon: <FileText />,
  },
  {
    title: "Knows when to step back",
    description: "When it cannot help, or the customer asks for a person, it hands the chat to your team.",
    icon: <UserCheck />,
  },
  {
    title: "Works on your channels",
    description: "Connect it to website chat, WhatsApp, Messenger and the other inboxes you run in EngageOne.",
    icon: <MessageCircle />,
  },
];

const KNOWLEDGE_POINTS = [
  "Add website pages by link and keep them in sync.",
  "Upload PDFs such as product guides and policies.",
  "Write your own FAQs for the questions you hear most.",
];

const HANDOFF_POINTS = [
  "Hands over when it has no good answer.",
  "Hands over the moment a customer asks for a person.",
  "The conversation moves to your team with the full history.",
  "Agents see what the assistant already said, so nobody repeats themselves.",
];

const AGENT_TOOLS = [
  { title: "Suggest a reply", description: "Get a draft reply based on the conversation so far.", icon: <Wand2 /> },
  { title: "Rewrite and fix", description: "Fix spelling and grammar, or improve a reply before you send it.", icon: <FileText /> },
  { title: "Change the tone", description: "Make a reply more professional, friendly, casual or confident.", icon: <Globe /> },
  { title: "Summarise a chat", description: "Catch up on a long conversation in a few lines.", icon: <Lightbulb /> },
  { title: "Label suggestions", description: "Get label ideas for a conversation to keep your inbox tidy.", icon: <Tag /> },
];

export default function AiAssistantPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne AI Assistant"
        title="An AI assistant that answers from your own content"
        description="The EngageOne AI Assistant replies to customers around the clock using your FAQs and documents. When a person is needed, it passes the chat to your team."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        secondaryCta={{ label: "Talk to us", href: "/contact-us" }}
        visual={<AiAssistantHeroVisual />}
      />

      <Section>
        <SectionHeader
          eyebrow="Why it helps"
          title="Fast answers without losing the human touch"
          description="Let the assistant take the common questions. Your team handles the rest."
        />
        <CardGrid columns={4}>
          {HIGHLIGHTS.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<AiKnowledgeVisual />}>
          <SectionHeader
            eyebrow="Knowledge"
            title="Teach it with what you already have"
            description="Point the assistant at the content your team already trusts."
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={KNOWLEDGE_POINTS} />
        </MediaSplit>
      </Section>

      <Section>
        <MediaSplit visual={<AiFaqSuggestionsVisual />} reverse>
          <SectionHeader
            eyebrow="Suggested FAQs"
            title="New FAQs from real conversations"
            description="The assistant looks at past conversations and suggests FAQs you do not have yet. Nothing goes live until someone on your team approves it. Dismiss the ones you do not need."
            align="left"
            className="mb-0 md:mb-0"
          />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            eyebrow="Human handoff"
            title="A clean handover to your team"
            description="Customers never get stuck with a bot. The assistant knows its limits."
            align="left"
            className="mb-0 md:mb-0"
          />
          <CheckList items={HANDOFF_POINTS} />
        </div>
      </Section>

      <Section>
        <MediaSplit visual={<AiReplyHelpVisual />}>
          <SectionHeader
            eyebrow="For agents"
            title="AI help right in the reply box"
            description="The same AI also works for your agents. Use it while you write, then review and send."
            align="left"
            className="mb-0 md:mb-0"
          />
        </MediaSplit>
        <CardGrid className="mt-12" columns={3}>
          {AGENT_TOOLS.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="See the AI Assistant answer your questions"
          description="We will set it up with your own content during the demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
