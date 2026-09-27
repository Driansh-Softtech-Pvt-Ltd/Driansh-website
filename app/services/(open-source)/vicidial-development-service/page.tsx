import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { SERVICES_VICI_CARDS, SERVICES_VICIDIAL_AI, WHY_CHOOSE_VICI } from "@/constants/services";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CTABanner, CtaLink } from "@/components/site";

export default function VICIdialDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Open Source Development"
        title="VICIdial Development Services"
        description="Add missing features or enhance current performance by leveraging our expertise in this open source call center software."
        backgroundImage="/images/services/open-source-service/vicidial-devlopment-service/Vicidial-scaled.webp"
      />

      <Section>
        <MediaSplit
          image="/images/services/open-source-service/vicidial-devlopment-service/vicidial1.webp"
          imageAlt="VICIdial: A popular open source call center solution"
        >
          <SectionHeader
            title="VICIdial: A popular open source call center solution to run diversified business campaigns"
            align="left"
            className="mb-6 md:mb-6"
          />
          <p className="text-lead">
            The increasing demand for call center solutions at cheaper rates can be met by VICIdial, call center
            software. It has several amazing features to support inbound and outbound campaigns. With VICIdial CRM
            integration, you can streamline customer data management and enhance your team&apos;s productivity. This
            highly scalable platform is ideal for growing businesses, allowing you to run customer care, sales, survey,
            and other types of campaigns while maintaining smooth workflow and improved customer engagement.
          </p>
        </MediaSplit>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Does your business need a Custom VICIdial CRM Integration?"
          description="Our VICIdial development company helps you build cost-effective, high-performing, and scalable call center solutions with seamless VICIdial CRM Integration, tailored to your business needs."
          cta={{ label: "Integrate VICIdial CRM Now", href: "/contact-us" }}
        />
      </Section>

      <ServicesCards
        tone="muted"
        title="Our VICIdial Development Services"
        subtitle="Our commitment is to develop software that aligns with the specific requirements of our clients' business."
        data={SERVICES_VICI_CARDS}
      />

      <Section>
        <MediaSplit
          image="/images/services/open-source-service/vicidial-devlopment-service/vicidial-img.png"
          imageAlt="Call Center Solution"
          reverse
        >
          <SectionHeader title="Call Center Solution" align="left" className="mb-6 md:mb-6" />
          <p className="text-lead mb-6">
            We have demonstrated our proficiency in developing custom call center software solutions that can perfectly
            align with your business needs and client expectations. We can provide you with the most personalized
            solution or development services to furnish you with an ideal contact center solution.
          </p>
          <CheckList items={["Tailored software", "Custom development", "Customization and enhancements"]} />
        </MediaSplit>
      </Section>

      <Section tone="muted" containerClassName="max-w-4xl">
        <SectionHeader title="VICIdial Development Company" />
        <div className="text-lead space-y-4">
          <p>
            <b className="font-semibold text-ink">We are popular as a VoIP open source development company</b> due to our
            expertise in building, scaling up, and maintaining the best open source VoIP solutions. We have a team of
            VICIdial experts that specializes in this open source call center software. We provide the development of
            custom features, add-ons, etc. to add missing functionalities to this contact center solution.
          </p>
          <p>
            As a leading VICIdial Development Company, Our VICIdial skin development and VICIdial theme customization
            services are popular due to the transformation of this software with better and enhanced UI and UX elements.
            We also provide various other VICIdial services to benefit its users.
          </p>
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <p className="text-lead max-w-3xl text-slate-200">
            Enhance your call center’s interface with our VICIdial custom theme. Tailored to your brand, it offers a
            visually appealing and intuitive design, optimizing the user experience for agents. Customize colors, logos,
            and layouts to create a branded and engaging environment that boosts productivity and customer satisfaction.
          </p>
          <CtaLink href="/contact-us" variant="light" className="shrink-0">
            Request Live Demo for Custom Theme
          </CtaLink>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_VICI} subtitle="Discover the Benefits of Partnering with Our Team" tone="white" />

      <Section tone="muted">
        <MediaSplit
          image="/images/services/open-source-service/vicidial-devlopment-service/Supercharge-Your-VICIdial-with-AI-Powered-Agents.webp"
          imageAlt="VICIdial AI Agent"
          reverse
        >
          <SectionHeader
            title="Supercharge Your VICIdial With AI-Powered Agents"
            description="Take your VICIdial system to the next level with our AI Agent integration! Designed to enhance productivity, reduce manual workloads, and offer intelligent automation, our VICIdial AI Agent empowers call centers to:"
            align="left"
            className="mb-6 md:mb-6"
          />
          <ul className="mb-6 space-y-3">
            {SERVICES_VICIDIAL_AI.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="pt-1 font-medium text-slate-700">{text}</span>
              </li>
            ))}
          </ul>
          <p className="mb-8 text-slate-600">
            Built by the VICIdial experts at Driansh, our AI solution seamlessly integrates with your existing VICIdial
            setup.
          </p>
          <CtaLink href="/contact-us">Explore VICIdial AI Agent</CtaLink>
        </MediaSplit>
      </Section>
    </>
  );
}
