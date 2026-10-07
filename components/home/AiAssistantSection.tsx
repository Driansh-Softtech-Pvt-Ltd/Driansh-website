import { CtaLink, Section, SectionHeader } from "@/components/site";
import { AiAssistantHeroVisual } from "@/components/visuals/engageone/FeatureVisuals";
import NumberedFeatures from "./NumberedFeatures";
import { ENGAGEONE_BASE } from "./links";

const CAPABILITIES = [
  {
    title: "Learns from your own content",
    description: "Point it at your help articles, website pages and PDF files. It answers from what you have written, not from guesswork.",
  },
  {
    title: "Replies at any hour",
    description: "Common questions about orders, timings or prices get an answer straight away, even when your team is offline.",
  },
  {
    title: "Knows when to hand over",
    description: "When a customer needs a person, the chat moves to the right team with everything said so far.",
  },
  {
    title: "Helps agents write better replies",
    description: "Agents can ask for a suggested reply, a summary of a long thread or a friendlier tone.",
  },
  {
    title: "You stay in control",
    description: "Review suggested FAQs drawn from real conversations and approve them before the assistant uses them.",
  },
];

export default function AiAssistantSection() {
  return (
    <Section tone="navy" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl"
      />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            theme="dark"
            align="left"
            eyebrow="EngageOne AI Assistant"
            title="Let AI take the first reply, and your team the hard ones"
            description="The assistant handles routine questions on every channel and gives your agents a head start on the rest."
            className="mb-8 md:mb-10"
          />
          <NumberedFeatures items={CAPABILITIES} theme="dark" />
          <div className="mt-8">
            <CtaLink href={`${ENGAGEONE_BASE}/ai-assistant`} variant="light">
              Explore the AI Assistant
            </CtaLink>
          </div>
        </div>
        <AiAssistantHeroVisual />
      </div>
    </Section>
  );
}
