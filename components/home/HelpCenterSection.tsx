import { CtaLink, Section, SectionHeader } from "@/components/site";
import HelpCenterPlayer from "./HelpCenterPlayer";
import { ENGAGEONE_BASE } from "./links";

export default function HelpCenterSection() {
  return (
    <Section tone="muted">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          align="left"
          eyebrow="Help Center"
          title="Answers ready before anyone has to ask"
          description="Publish a self-service knowledge base with your logo and colours. Customers find answers on their own, any hour of the day."
          className="mb-0 md:mb-0"
        />
        <CtaLink href={`${ENGAGEONE_BASE}/help-center`} variant="outline" className="shrink-0">
          Explore the help center
        </CtaLink>
      </div>
      <div className="mt-10 md:mt-14">
        <HelpCenterPlayer />
      </div>
    </Section>
  );
}
