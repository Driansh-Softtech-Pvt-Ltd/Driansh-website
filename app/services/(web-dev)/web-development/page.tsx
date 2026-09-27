import { Smartphone, Server, Boxes, Cpu, Lock } from "lucide-react";
import FAQ from "@/components/FAQ";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesCards from "@/components/Services-cards";
import {
  SERVICES_WEB_DEVELOPMENT_CARDS,
  SERVICES_WEB_DEVELOPMENT_CARDS1,
  SERVICES_WEB_DEVELOPMENT_FAQ,
  SERVICES_WEB_DEVELOPMENT_SERVICES,
  WHY_CHOOSE_WEB_DEVLOPMENT,
} from "@/constants/services";
import {
  PageHero,
  Section,
  SectionHeader,
  CheckList,
  CTABanner,
  CtaLink,
  FeatureCard,
  CardGrid,
} from "@/components/site";

export default function WebDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Web Development"
        title="Transform Your Digital Presence with Expert Web Development"
        description="Redefine your growth strategy with our intuitive, high quality, and high performance frontend and backend web development services."
        backgroundImage="/images/services/web-devlopment-service/web-service/Web-Development-Services.png"
      />

      <ServicesCards
        title="Select the Right Web Development Partner for Rapid Growth"
        subtitle="Your website and web app will make the first interaction with your customers. Thus, it has to be nothing less than the best."
        data={SERVICES_WEB_DEVELOPMENT_CARDS1}
      />

      <Section tone="muted">
        <SectionHeader
          title="Our Web Development Services"
          description="Comprehensive web solutions from simple business websites to intricate web applications"
        />
        <CardGrid columns={2}>
          {SERVICES_WEB_DEVELOPMENT_SERVICES.map((service) => (
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

      <ServicesCards
        title="Backend Development Excellence"
        subtitle="Building robust, secure, and high-performing server-side solutions that power your applications"
        data={SERVICES_WEB_DEVELOPMENT_CARDS}
      />

      <Section className="pt-0 md:pt-0">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:p-12">
          <div aria-hidden="true" className="bg-brand-gradient absolute inset-0 opacity-90" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Why Our Backend Matters</h3>
              <p className="mb-6 leading-relaxed text-white/85">
                We are one of the best backend development companies, with a team of handpicked and vetted backend
                developers that has expertise in developing layered or simplified backend for web apps and mobile apps.
              </p>
              <CheckList
                theme="dark"
                items={[
                  "Cherry-picked backend developers with proven expertise",
                  "Secure, scalable, and high-performance solutions",
                  "Python and NodeJS expertise for modern backends",
                ]}
              />
            </div>
            <div className="hidden items-center justify-center md:flex">
              <Server className="h-40 w-40 text-white/90 lg:h-48 lg:w-48" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeader
          title="Web Development Services"
          description="Complete web development lifecycle management from concept to deployment"
        />
        <CardGrid>
          <FeatureCard
            icon={<Boxes />}
            title="Custom Web Solutions"
            description="Tailored web development solutions that align with your unique business requirements and goals."
          />
          <FeatureCard
            icon={<Cpu />}
            title="Progressive Web Apps"
            description="Build fast, reliable PWAs that work seamlessly across all devices and platforms."
          />
          <FeatureCard
            icon={<Lock />}
            title="Security & Maintenance"
            description="Ongoing security updates, performance optimization, and technical support for your web applications."
          />
        </CardGrid>
      </Section>

      <Section tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 inline-flex items-center gap-2 text-violet-300">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              Mobile Solutions
            </p>
            <SectionHeader
              title="Interested in Mobile App Development Solution as Well?"
              description="Complement your web solutions with our award-winning mobile app development services. We build native, hybrid, and cross-platform applications that redefine the future."
              theme="dark"
              align="left"
              className="mb-8 md:mb-8"
            />
            <CheckList
              theme="dark"
              items={[
                "Native iOS & Android Development",
                "React Native & Flutter Expertise",
                "Full Cycle Development & Maintenance",
              ]}
              className="mb-10"
            />
            <CtaLink href="/services/mobile-app-development" variant="light">
              Explore Mobile Services
            </CtaLink>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 rounded-full bg-violet-600/30 blur-3xl" />
              <Smartphone className="relative h-56 w-56 text-white/90" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Section>

      <WhyChooseUs data={WHY_CHOOSE_WEB_DEVLOPMENT} />

      <FAQ data={SERVICES_WEB_DEVELOPMENT_FAQ} />

      <Section size="sm" className="pt-0 md:pt-0">
        <CTABanner
          title="Ready to Start Your Web Development Project?"
          description="Let's build sustainable and high performing web solutions to empower your business growth"
          cta={{ label: "Get Started Today", href: "/contact-us" }}
        />
      </Section>
    </>
  );
}
