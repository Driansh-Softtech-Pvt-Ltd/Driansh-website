import { CtaLink, Section, SectionHeader } from "@/components/site";
import AiAssistantDiagram from "./AiAssistantDiagram";
import { ENGAGEONE_BASE } from "./links";

export default function AiAssistantSection() {
  return (
    <Section tone="navy" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl"
      />
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          theme="dark"
          align="left"
          eyebrow="EngageOne AI Assistant"
          title="Let AI take the first reply, and your team the hard ones"
          description="Watch the assistant handle routine questions on every channel and give your agents a head start on the rest."
          className="mb-0 md:mb-0"
        />
        <CtaLink href={`${ENGAGEONE_BASE}/ai-assistant`} variant="light" className="shrink-0">
          Explore the AI Assistant
        </CtaLink>
      </div>
      <div className="mt-10 md:mt-14">
        <AiAssistantDiagram />
      </div>
    </Section>
  );
}
