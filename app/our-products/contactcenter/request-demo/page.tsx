import { PageHero, Section, SectionHeader, CheckList } from "@/components/site";
import ContactForm from "@/components/ContactForm";
import { AgentHomeVisual } from "@/components/visuals/contactcenter/OverviewVisuals";

const DEMO_COVERS = [
  "The agent workspace: one screen for calls, WhatsApp, live chat and email.",
  "Dialer modes — predictive, progressive, preview and manual — against your own list.",
  "Inbound queues, IVR menus and the routing behind them.",
  "Live monitoring, listen and whisper, and the reports your supervisors would use.",
  "Multi-tenant setup, roles and permissions, and how it would be deployed for you.",
];

const NEXT_STEPS = [
  "We read your message and reply to set a time.",
  "The demo is a live call shaped around your floor and your campaigns.",
  "After the call, we send a plan and quote if you want one.",
];

export default function ContactCenterDemoPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="Driansh Contact Center"
        title="Request a demo"
        description="See the agent workspace, the dialers and the live floor working the way your team would use them. Tell us a little about your operation and we will set up a time."
        primaryCta={null}
        visual={<AgentHomeVisual />}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="What we will cover"
              title="A demo built around your floor"
              align="left"
              className="mb-6 md:mb-8"
            />
            <CheckList items={DEMO_COVERS} />

            <h3 className="heading-3 mt-12 text-ink">What happens next</h3>
            <CheckList items={NEXT_STEPS} className="mt-4" />
          </div>

          <div id="demo-form" className="rounded-3xl border border-slate-200 bg-card p-6 shadow-xl sm:p-10">
            <h2 className="heading-3 text-ink">Book your Contact Center demo</h2>
            <p className="mb-8 mt-1 text-slate-600">
              Tell us how many agents you run and which channels you handle, and we&apos;ll tailor the demo to you.
            </p>
            <ContactForm defaultInterest="contactcenter-demo" submitLabel="Request my demo" />
          </div>
        </div>
      </Section>
    </>
  );
}
