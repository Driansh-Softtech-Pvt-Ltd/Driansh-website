import { Section, SectionHeader, FeatureCard, CardGrid } from "@/components/site";
import type { SectionTone } from "@/components/site/Section";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardsProps {
  title?: string;
  subtitle?: string;
  data: Feature[];
  tone?: SectionTone;
}

export default function ServicesCards({
  title,
  subtitle,
  data,
  tone = "white",
}: FeatureCardsProps) {
  return (
    <Section tone={tone}>
      {title && <SectionHeader title={title} description={subtitle} />}
      <CardGrid>
        {data.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </CardGrid>
    </Section>
  );
}
