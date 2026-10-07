import { MessageSquareReply, Repeat, Workflow } from "lucide-react";
import { CardGrid, FeatureCard, Section, SectionHeader } from "@/components/site";

const BENEFITS = [
  {
    title: "Fewer repeat questions",
    description:
      "Help articles and the AI Assistant answer the questions customers ask every day, so your team spends its time where it matters.",
    icon: Repeat,
  },
  {
    title: "Faster replies",
    description:
      "Agents start from an AI draft or a saved reply and see the customer's history beside the chat, so answers go out sooner.",
    icon: MessageSquareReply,
  },
  {
    title: "Less manual work",
    description:
      "Automation rules assign, label and reply to conversations for you, and spread the work fairly across the team.",
    icon: Workflow,
  },
];

export default function BenefitsSection() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Why teams switch"
        title="Spend less time on busywork, more on customers"
        description="EngageOne takes care of the repetitive parts of support so people can focus on the conversations that need them."
      />
      <CardGrid>
        {BENEFITS.map(({ title, description, icon: Icon }) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            icon={<Icon aria-hidden="true" />}
            iconClassName="bg-brand-gradient text-white"
          />
        ))}
      </CardGrid>
    </Section>
  );
}
