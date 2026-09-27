import Image from "next/image";
import { Section, SectionHeader, FeatureCard, CardGrid } from "@/components/site";
import type { SectionTone } from "@/components/site/Section";

interface Benifits {
  icon: string;
  title: string;
  desc: string;
}

interface SolutionsBenifitsProps {
  title: string;
  description?: string;
  data: Benifits[];
  tone?: SectionTone;
}

export default function SolutionsBenifits({
  title,
  description,
  data,
  tone = "muted",
}: SolutionsBenifitsProps) {
  return (
    <Section tone={tone}>
      <SectionHeader title={title} description={description} />
      <CardGrid>
        {data.map((item, index) => (
          <FeatureCard
            key={index}
            icon={<Image src={item.icon} alt="" width={28} height={28} className="object-contain" />}
            iconClassName="bg-brand-gradient p-2.5"
            title={item.title}
            description={item.desc}
          />
        ))}
      </CardGrid>
    </Section>
  );
}
