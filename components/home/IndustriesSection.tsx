import { Section, SectionHeader } from "@/components/site";
import IndustryShowcase from "./IndustryShowcase";

export default function IndustriesSection() {
  return (
    <Section tone="white" className="overflow-hidden">
      <SectionHeader
        align="left"
        eyebrow="Solutions"
        title="Built for how your industry talks"
        description="Pick an industry and watch EngageOne handle a real conversation, from the first message to the right team."
      />
      <IndustryShowcase />
    </Section>
  );
}
