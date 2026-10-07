import { Section, SectionHeader } from "@/components/site";
import OmnichannelShowcase from "./OmnichannelShowcase";
import OmnichannelToolCards from "./OmnichannelToolCards";

export default function OmnichannelSection() {
  return (
    <Section tone="muted">
      <SectionHeader
        eyebrow="Omnichannel"
        title="Every conversation, in one place"
        description="Website chat, email, social and messaging apps arrive as threads in one shared queue, so nothing slips between tools."
        className="mb-10 md:mb-14"
      />
      <OmnichannelShowcase />
      <OmnichannelToolCards />
    </Section>
  );
}
