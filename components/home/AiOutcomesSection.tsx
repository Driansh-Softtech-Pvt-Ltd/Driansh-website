import { Section, SectionHeader } from "@/components/site";
import { AiOutcomesBreakdownCard, AiOutcomesDraftCard, AiOutcomesFaqCard, AiOutcomesScenarioCard } from "./AiOutcomesCards";

export default function AiOutcomesSection() {
  return (
    <Section tone="white" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-80 w-80 rounded-full bg-brand-soft blur-3xl"
      />
      <SectionHeader
        eyebrow="AI Assistant"
        title={
          <>
            Fewer conversations reach your team, <span className="text-gradient">not just faster replies</span>
          </>
        }
        description="The EngageOne AI Assistant closes routine chats on its own, hands the rest over with context, and shows you exactly how each conversation ended."
      />
      <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
        <AiOutcomesBreakdownCard className="lg:col-span-2" />
        <AiOutcomesFaqCard />
        <AiOutcomesDraftCard />
        <AiOutcomesScenarioCard className="lg:col-span-2" />
      </div>
    </Section>
  );
}
