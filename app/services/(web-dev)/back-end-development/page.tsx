import { Server } from "lucide-react";
import ServicesCards from "@/components/Services-cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import {
  SERVICES_BACK_END_DEVELOPMENT_FAQ,
  SERVICES_BACK_END_PROCCESSTEP,
  SERVICES_BACK_END_SERVICES,
  SERVICES_BACK_END_TECHNOLOGIS,
  SERVICES_BACKEND_CARDS,
  WHY_CHOOSE_BACKEND,
} from "@/constants/services";
import {
  PageHero,
  Section,
  SectionHeader,
  CheckList,
  CTABanner,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function BackendDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Development"
        title="Leading Backend Development Services"
        description="We develop high performing, secure, and scalable backend applications using Python, NodeJS, and cutting-edge technologies to deliver seamless functionality and optimal performance."
        backgroundImage="/images/services/web-devlopment-service/backend-devlopment-service/backend.jpg"
      />

      <Section>
        <SectionHeader
          title="What is Back End Development?"
          description={
            <div className="space-y-4">
              <p>
                It is the practice of developing server side applications to deliver high performing, secure, and swift
                functionalities that elevate overall customer satisfaction and other benefits.
              </p>
              <p>
                Backend development using Python, NodeJS, and other cutting edge technologies create a bridge between
                frontend and backend to streamline interaction between the database and other applications for
                delivering optimal performance and managing operations seamlessly.
              </p>
              <p className="font-semibold text-brand">
                Our back end development company specializes in unfolding the potential of server side applications to
                bring out the best value of your backend solutions and applications.
              </p>
            </div>
          }
          className="mb-0 md:mb-0"
        />
      </Section>

      <ServicesCards
        tone="muted"
        title="Backend Development Services to Amplify Growth and Scalability"
        subtitle="As a leading backend web development company, we focus on developing high value backend solutions and applications. Our experienced and vetted developers ensure seamless server side operations and efficient data processing with reliable connection between frontend and backend for swift operations."
        data={SERVICES_BACKEND_CARDS}
      />

      <Section tone="muted" className="pt-0 md:pt-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h3 className="heading-3 mb-6 text-center text-ink">
            We offer a range of services covering back end development for:
          </h3>
          <CheckList
            columns={2}
            items={["Web application", "ERP/CRM", "Custom solution", "Mobile", "IoT", "And more"]}
            className="mx-auto max-w-2xl"
          />
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Backend Development Process"
          description="Our streamlined process ensures efficient delivery of robust backend solutions"
        />
        <CardGrid>
          {SERVICES_BACK_END_PROCCESSTEP.map((step) => (
            <FeatureCard
              key={step.number}
              icon={<span className="text-lg font-bold">{step.number}</span>}
              title={step.title}
              description={step.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Stack of Technologies Used for Back End Development"
          description="We ensure seamless performance with reliable backend development using bleeding-edge technologies and frameworks."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES_BACK_END_TECHNOLOGIS.map((tech) => (
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
        <p className="mt-10 text-center text-lg">
          We use NodeJS, Laravel, PHP, .Net, Java, Go, Solidity, Rust, Ruby on Rails, and Python for backend development
        </p>
      </Section>

      <Section>
        <SectionHeader
          title="Level Up Efficiency with Robust Backend Solutions"
          description="Our cherry-picked backend developers are highly proficient in building enduring and high performance server side solutions. Our company is renowned for offering all-inclusive back end development offerings for mobile, desktop, web, AI, AR/VR, and IoT solutions."
        />

        <div className="relative mb-12 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:p-12">
          <div aria-hidden="true" className="bg-brand-gradient absolute inset-0 opacity-90" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Building Sustainable Backend Infrastructure</h3>
              <p className="mb-6 leading-relaxed text-white/85">
                We ensure resilient, robust, secure, and highly accessible back-end solutions that align with your
                business goals and market trends. Choose the optimal cooperation model for a smooth and convenient
                association.
              </p>
              <CheckList
                theme="dark"
                items={[
                  "Cherry Picked Tech Stack",
                  "Reinforced Cybersecurity",
                  "High Availability",
                  "Exceptional Scalability",
                ]}
              />
            </div>
            <div className="hidden items-center justify-center md:flex">
              <Server className="h-40 w-40 text-white/90 lg:h-48 lg:w-48" aria-hidden="true" />
            </div>
          </div>
        </div>

        <CardGrid columns={2}>
          {SERVICES_BACK_END_SERVICES.map((service) => (
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
        </CardGrid>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_BACKEND} />

      <FAQ data={SERVICES_BACK_END_DEVELOPMENT_FAQ} />

      <Section size="sm" className="pt-0 md:pt-0">
        <CTABanner
          title="Ready to Start Your Backend Project?"
          description="Let's build sustainable and high performing backend solutions to empower your business growth"
          cta={{ label: "Get Started Today", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
