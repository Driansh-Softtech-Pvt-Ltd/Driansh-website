import { CheckList, CtaLink, MediaSplit, Section, SectionHeader } from "@/components/site";
import { CallingHeroVisual } from "@/components/visuals/engageone/FeatureVisuals";
import { ENGAGEONE_BASE } from "./links";

export default function CallingSection() {
  return (
    <Section tone="white">
      <MediaSplit visual={<CallingHeroVisual />} reverse>
        <SectionHeader
          align="left"
          eyebrow="Calling"
          title="Pick up calls right next to the chat"
          description="Customers can call your WhatsApp Business number or a phone number connected through Twilio. Agents answer in the browser, with the customer's messages on the same screen."
          className="mb-6 md:mb-8"
        />
        <CheckList
          items={[
            "WhatsApp and phone calls in the browser, no desk phone needed",
            "Every call logged in the conversation with its status and length",
            "Recordings saved when you turn recording on",
            "Twilio voice calls transcribed so you can read them later",
          ]}
        />
        <div className="mt-8">
          <CtaLink href={`${ENGAGEONE_BASE}/calling`} variant="outline">
            Explore calling
          </CtaLink>
        </div>
      </MediaSplit>
    </Section>
  );
}
