import { Section } from "@/components/site";
import { AiOutcomesBanner, AiOutcomesFeatureCards } from "./AiOutcomesCards";

export default function AiOutcomesSection() {
  return (
    <Section tone="white">
      <AiOutcomesBanner />
      <AiOutcomesFeatureCards />
    </Section>
  );
}
