import { FileText, History, MessageCircle, Mic, Phone, PhoneCall } from "lucide-react";
import { PageHero, Section, SectionHeader, MediaSplit, CheckList, CardGrid, FeatureCard, CTABanner } from "@/components/site";
import { CallingHeroVisual, CallLogVisual, CallsListVisual } from "@/components/visuals/engageone/FeatureVisuals";

const CALL_TYPES = [
  {
    title: "WhatsApp calling",
    description:
      "Customers call your WhatsApp Business number. Agents pick up in the browser, right inside the EngageOne inbox. You can also call customers on WhatsApp once they give permission.",
    icon: <MessageCircle />,
  },
  {
    title: "Phone calls on Twilio numbers",
    description:
      "Connect a Twilio number to take and make voice calls. Calls ring for the agents of that inbox, and agents can call a contact back from the conversation.",
    icon: <Phone />,
  },
];

const INBOX_POINTS = [
  "Incoming calls ring for the agents who handle that inbox.",
  "Accept or decline with one click. No desk phone or extra app.",
  "The call sits in the same conversation as the customer's messages.",
  "Agents see the contact details and past chats while they talk.",
];

const RECORD_POINTS = [
  "Every call is logged in the conversation with its status and length.",
  "Turn call recording on or off for each inbox.",
  "Twilio voice calls can be transcribed, so you can read a call instead of replaying it.",
  "WhatsApp call recordings are saved to the conversation when recording is on.",
];

const BENEFITS = [
  { title: "One place for every call", description: "The Calls page lists incoming and outgoing calls across your inboxes.", icon: <History /> },
  { title: "Context before you answer", description: "See who is calling and what they wrote before.", icon: <PhoneCall /> },
  { title: "Easy to review", description: "Play back recordings and read transcripts later.", icon: <Mic /> },
  { title: "Clear notes", description: "Add a private note after the call so the team stays in the loop.", icon: <FileText /> },
];

export default function CallingPage() {
  return (
    <>
      <PageHero
        size="md"
        eyebrow="EngageOne Calling"
        title="Take WhatsApp and phone calls from your inbox"
        description="Answer customer calls in the browser, next to their chats. Every call is logged, so your team always knows what was said."
        primaryCta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        secondaryCta={{ label: "Talk to us", href: "/contact-us" }}
        visual={<CallingHeroVisual />}
      />

      <Section>
        <SectionHeader
          eyebrow="Two ways to call"
          title="Voice where your customers already are"
          description="Use WhatsApp, a phone number, or both."
        />
        <CardGrid columns={2}>
          {CALL_TYPES.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="muted">
        <MediaSplit visual={<CallsListVisual />}>
          <SectionHeader
            eyebrow="In the inbox"
            title="Answer calls without leaving EngageOne"
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={INBOX_POINTS} />
        </MediaSplit>
      </Section>

      <Section>
        <MediaSplit visual={<CallLogVisual />} reverse>
          <SectionHeader
            eyebrow="Call history"
            title="Logs, recordings and transcripts"
            align="left"
            className="mb-6 md:mb-8"
          />
          <CheckList items={RECORD_POINTS} />
        </MediaSplit>
      </Section>

      <Section tone="muted">
        <CardGrid columns={4}>
          {BENEFITS.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </CardGrid>
      </Section>

      <Section size="sm">
        <CTABanner
          title="Bring calls and chats together"
          description="We will show you WhatsApp calling and phone calls in a live demo."
          cta={{ label: "Request a demo", href: "/our-products/engageone/request-demo" }}
        />
      </Section>
    </>
  );
}
