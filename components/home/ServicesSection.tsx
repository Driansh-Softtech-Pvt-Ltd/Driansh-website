import { HOME_PAGE_SERVICES } from "@/constants";
import { Section, SectionHeader, MediaSplit, CtaLink } from "@/components/site";

export default function ServicesSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="What we do"
        title="Our Offerings"
        description="Driansh Softtech offers market-leading expertise and real-time communications solutions to empower your businesses."
      />
      <div className="flex flex-col gap-16 md:gap-24">
        {HOME_PAGE_SERVICES.map((service, i) => (
          <MediaSplit key={service.title} image={service.image} imageAlt={service.title} reverse={i % 2 === 1}>
            <h3 className="heading-2 text-ink">{service.title}</h3>
            <p className="text-lead mt-4 mb-8">{service.desc}</p>
            <CtaLink href={service.href}>Explore More</CtaLink>
          </MediaSplit>
        ))}
      </div>
    </Section>
  );
}
