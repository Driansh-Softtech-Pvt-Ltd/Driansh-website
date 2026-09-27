import { Code, Smartphone, Monitor, Zap, Globe, Palette } from "lucide-react";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesCards from "@/components/Services-cards";
import {
  SERVICES_FRONT_END_DEVELOPMENT_CARDS,
  SERVICES_FRONT_END_DEVELOPMENT_FAQ,
  SERVICES_FRONT_END_SERVICES,
  SERVICES_FRONT_END_TECHNOLOGIS,
  WHY_CHOOSE_FRONTEND,
} from "@/constants/services";
import { PageHero, Section, SectionHeader, CheckList, CTABanner, FeatureCard, CardGrid } from "@/components/site";

export default function FrontEndDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Development"
        title="Leading Frontend Development Services"
        description="We craft sleek, compelling, and operational front-ends that deliver seamless user experiences with React, Angular, and cutting-edge technologies."
        backgroundImage="/images/services/web-devlopment-service/frontend-devlopment-service/FreeSwitch-01-scaled.jpg"
      />

      <ServicesCards
        title="Best Front End Development Company That Creates Digital Experiences"
        subtitle="Proficiency, transparency, and professionalism are in our DNA. Our innovative approach and all-inclusive front-end development solutions make us the top front-end development company."
        data={SERVICES_FRONT_END_DEVELOPMENT_CARDS}
      />

      <Section tone="muted">
        <SectionHeader
          title="Wide Ranging Front End App Development Services"
          description="Access the top 10% of tech talent with rich expertise and innovative mindset to offer a diverse range of front-end web application development services."
        />
        <CardGrid columns={2}>
          {SERVICES_FRONT_END_SERVICES.map((service) => (
            <FeatureCard key={service.title} icon={service.icon} title={service.title} description={service.description}>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </FeatureCard>
          ))}
          <FeatureCard
            icon={<Code />}
            title="React Development"
            description="Our advanced front-end web development with React leverages modular code structure, server-side rendering capabilities, extensibility, adaptability, and user-friendliness of ReactJS to craft compelling and top-performing interfaces."
          />
          <FeatureCard
            icon={<Zap />}
            title="Angular Development"
            description="Our experienced Angular front-end development team harnesses the potential of Angular with a focus on scalability, performance, and intuitive user elements to ensure our front-ends exceed industry standards."
          />
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader
          title="Stack of Technologies Used for Front-End Web Development"
          description="We ensure a seamless experience with our reliable advanced front-end web development using bleeding-edge technologies and frameworks."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES_FRONT_END_TECHNOLOGIS.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg sm:p-6"
            >
              <div className="mb-3 flex h-12 items-center text-4xl font-bold text-brand" aria-hidden="true">
                {tech.logo || tech.name.charAt(0)}
              </div>
              <h3 className="text-base font-semibold text-ink sm:text-lg">{tech.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="You Think Design, We Craft Front Ends"
          description="Through our tailored front-end web application development services, we build engaging user interfaces for the web, fast single-page applications, eye-catching websites, intuitive mobile apps, and all other types of front-ends."
        />

        <div className="relative mb-12 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:p-12">
          <div aria-hidden="true" className="bg-brand-gradient absolute inset-0 opacity-90" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Building Engaging User Interfaces</h3>
              <p className="mb-6 leading-relaxed text-white/85">
                We have proficiency in designing and developing personalized, goal-oriented, visionary, and stunning
                front-ends. Our practices focus on building and nurturing relations with all sorts of users: surfing
                visitors, first-time users, returning users, and even bouncing users.
              </p>
              <CheckList
                theme="dark"
                items={[
                  "Personalized and goal-oriented solutions",
                  "Visionary and stunning design implementations",
                  "Building relations with all types of users",
                  "Uniting functionality with visual appeal",
                ]}
              />
            </div>
            <div className="hidden items-center justify-center md:flex">
              <Palette className="h-40 w-40 text-white/90 lg:h-48 lg:w-48" aria-hidden="true" />
            </div>
          </div>
        </div>

        <CardGrid>
          <FeatureCard
            icon={<Monitor />}
            title="Web Applications"
            description="Responsive and performant web applications built with modern frameworks"
          />
          <FeatureCard
            icon={<Smartphone />}
            title="Mobile Interfaces"
            description="Native-like mobile experiences that engage users across all devices"
          />
          <FeatureCard
            icon={<Globe />}
            title="Progressive Web Apps"
            description="Offline capabilities with lightning-fast loading and seamless performance"
          />
        </CardGrid>
      </Section>

      <WhyChooseUs tone="white" data={WHY_CHOOSE_FRONTEND} />

      <FAQ tone="muted" data={SERVICES_FRONT_END_DEVELOPMENT_FAQ} />

      <Section size="sm">
        <CTABanner
          title="Ready to Start Your Front-End Project?"
          description="Let's build sustainable and high performing front-end solutions to empower your business growth"
          cta={{ label: "Get Started Today", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
