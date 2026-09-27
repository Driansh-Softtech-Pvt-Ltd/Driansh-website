import Image from "next/image";
import { HOME_PAGE_WHY_CHOOSE_US } from "@/constants";
import { Section, SectionHeader, FeatureCard, CardGrid } from "@/components/site";

export default function WhyChooseUs() {
  return (
    <Section tone="muted">
      <SectionHeader title="Why Choose Us?" />
      <CardGrid>
        {HOME_PAGE_WHY_CHOOSE_US.map((item) => (
          <FeatureCard
            key={item.title}
            icon={<Image src={item.icon} alt="" width={64} height={64} className="h-full w-full scale-125 rounded-full object-contain" />}
            iconClassName="bg-brand-gradient h-16 w-16 overflow-hidden rounded-full"
            title={item.title}
            description={item.desc}
          />
        ))}
      </CardGrid>
    </Section>
  );
}
