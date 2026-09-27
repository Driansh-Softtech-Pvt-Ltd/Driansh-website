import { Section, SectionHeader, FeatureCard, CardGrid, CheckList } from "@/components/site";
import type { SectionTone } from "@/components/site/Section";

interface WhyChooseUsItem {
  title: string;
  description: string;
  points: string[];
}

interface WhyChooseUsProps {
  data: WhyChooseUsItem[];
  title?: string;
  subtitle?: string;
  tone?: SectionTone;
}

export default function WhyChooseUs({
  data,
  title = "Why Choose Us?",
  subtitle,
  tone = "muted",
}: WhyChooseUsProps) {
  return (
    <Section tone={tone}>
      <SectionHeader title={title} description={subtitle} />
      <CardGrid>
        {data.map((item, index) => (
          <FeatureCard key={index} title={item.title} description={item.description}>
            {item.points && item.points.length > 0 && (
              <CheckList items={item.points} className="mt-6 [&_li]:text-base" />
            )}
          </FeatureCard>
        ))}
      </CardGrid>
    </Section>
  );
}
