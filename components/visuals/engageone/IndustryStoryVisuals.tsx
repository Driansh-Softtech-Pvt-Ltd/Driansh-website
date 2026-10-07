import { CheckCircle2, Facebook, Filter, Instagram, Mail, MessageCircle, MessageSquare, Phone, Send, Smartphone, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IndustryChannel, IndustryStory } from "@/content/engageone/industries";
import { AppWindow, Bubble, ChatThread, Composer, FloatingTag, FlowSteps, ListRows, OptionChips, VisualStage } from "./primitives";

/*
 * Illustrations for the data-driven industry pages. Each one draws an
 * industry's sample conversation, inbox or automation. Sample data only.
 */

const CHANNEL_ICONS: Record<IndustryChannel, { icon: LucideIcon; tint: string }> = {
  whatsapp: { icon: MessageCircle, tint: "bg-emerald-50 text-emerald-600" },
  web: { icon: MessageSquare, tint: "bg-brand-soft text-brand" },
  email: { icon: Mail, tint: "bg-amber-50 text-amber-600" },
  phone: { icon: Phone, tint: "bg-violet-50 text-violet-600" },
  instagram: { icon: Instagram, tint: "bg-pink-50 text-pink-600" },
  facebook: { icon: Facebook, tint: "bg-blue-50 text-blue-600" },
  sms: { icon: Smartphone, tint: "bg-slate-100 text-slate-600" },
};

export function IndustryChatVisual({ industry }: { industry: IndustryStory }) {
  const { title, messages, chips, tag } = industry.chat;
  return (
    <VisualStage>
      <AppWindow title={`EngageOne · ${title}`}>
        <ChatThread>
          {messages.map(({ from, text }) => (
            <Bubble key={text} from={from}>
              {text}
            </Bubble>
          ))}
          {chips && <OptionChips options={chips} />}
        </ChatThread>
        <Composer />
      </AppWindow>
      {tag && <FloatingTag icon={CheckCircle2}>{tag}</FloatingTag>}
    </VisualStage>
  );
}

export function IndustryInboxVisual({ industry }: { industry: IndustryStory }) {
  return (
    <AppWindow title={`EngageOne · ${industry.inbox.title}`}>
      <ListRows
        rows={industry.inbox.rows.map(({ name, channel, preview, label }, i) => ({
          title: name,
          meta: preview,
          badge: label,
          icon: CHANNEL_ICONS[channel].icon,
          tint: CHANNEL_ICONS[channel].tint,
          active: i === 0,
        }))}
      />
    </AppWindow>
  );
}

export function IndustryFlowVisual({ industry }: { industry: IndustryStory }) {
  const [when, condition, then] = industry.flow.steps;
  return (
    <AppWindow title={`EngageOne · ${industry.flow.title}`}>
      <FlowSteps
        steps={[
          { label: "When", detail: when, icon: Zap },
          { label: "If", detail: condition, icon: Filter },
          { label: "Then", detail: then, icon: Send },
        ]}
      />
    </AppWindow>
  );
}
