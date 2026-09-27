import Image from "next/image";
import { Section, SectionHeader } from "@/components/site";
import type { SectionTone } from "@/components/site/Section";

interface Features {
  icon: string;
  feature: string;
}

interface SolutionFeaturesProps {
  title: string;
  description?: string;
  data: Features[];
  tone?: SectionTone;
}

export default function SolutionFeatures({
  title,
  description,
  data,
  tone = "white",
}: SolutionFeaturesProps) {
  return (
    <Section tone={tone}>
      <SectionHeader title={title} description={description} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="rounded-2xl bg-brand-soft p-3">
              <Image src={item.icon} alt="" width={40} height={40} className="object-contain" />
            </div>
            <h3 className="heading-3 text-ink">{item.feature}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
