import { PageHero, Section, SectionHeader, CheckList } from "@/components/site";
import ContactForm from "@/components/home/ContactForm";
import { DemoHeroVisual } from "@/components/visuals/engageone/FeatureVisuals";

const DEMO_COVERS = [
  "Connecting your channels, like WhatsApp, website chat and email, to one inbox.",
  "How the EngageOne AI Assistant answers questions and hands chats to your team.",
  "WhatsApp calling, templates and campaigns.",
  "Roles, permissions and audit logs for your team.",
  "Cloud or self-hosted deployment, and what a plan would look like for you.",
];

const NEXT_STEPS = [
  "We read your message and reply to set a time.",
  "The demo is a live call shaped around your use case.",
  "After the call, we send a plan and quote if you want one.",
];

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne"
        title="Request a demo"
        description="See EngageOne working with your channels and your questions. Tell us a little about your team and we will set up a time."
        primaryCta={null}
        visual={<DemoHeroVisual />}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="What we will cover"
              title="A demo built around you"
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={DEMO_COVERS} />

            <h3 className="heading-3 mt-12 text-ink">What happens next</h3>
            <CheckList items={NEXT_STEPS} className="mt-4" />
          </div>

          <div id="demo-form" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
            <h2 className="heading-3 text-ink">Book your EngageOne demo</h2>
            <p className="mb-8 mt-1 text-slate-600">
              In the requirements box, tell us your team size and the channels you use.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
