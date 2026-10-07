import Image from "next/image";
import { Clock, Filter, Languages, Play, Send, Tag, Zap, type LucideIcon } from "lucide-react";

/*
 * Three cards under the Omnichannel accordion: macros, automations and
 * message translation. Sample data only.
 */

function ToolCard({ eyebrow, icon: Icon, title, description, children }: {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6">
      <p className="eyebrow flex items-center gap-1.5 text-brand">
        <Icon className="h-3.5 w-3.5" /> {eyebrow}
      </p>
      <h3 className="heading-4 mt-2 text-ink">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <div className="mt-5 flex-1 rounded-xl border border-slate-100 bg-surface p-4 text-xs" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

const MACRO_STEPS = [
  { icon: Send, label: "Send reply" },
  { icon: Tag, label: "Add label · delayed" },
  { icon: Clock, label: "Snooze conversation" },
];

const RULE = [
  { when: "When", detail: "Message created" },
  { when: "If", detail: "Message contains “order”" },
  { when: "Then", detail: "Add label · delayed, send reply" },
];

export default function OmnichannelToolCards() {
  return (
    <div className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
      <ToolCard
        eyebrow="Macros"
        icon={Play}
        title="Run a playbook in one click"
        description="Save the steps you repeat as a macro and run them on any conversation."
      >
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-ink">Order delayed</span>
            <span className="flex items-center gap-1 rounded-md bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-white">
              <Play className="h-3 w-3" /> Run
            </span>
          </div>
          <ol className="mt-3 space-y-1.5">
            {MACRO_STEPS.map(({ icon: StepIcon, label }, i) => (
              <li key={label} className="flex items-center gap-2 text-slate-600">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[10px] font-semibold text-brand">
                  {i + 1}
                </span>
                <StepIcon className="h-3.5 w-3.5 text-slate-400" /> {label}
              </li>
            ))}
          </ol>
        </div>
      </ToolCard>

      <ToolCard
        eyebrow="Automations"
        icon={Zap}
        title="Or let it run on its own"
        description="Rules act on new conversations and messages the moment they arrive."
      >
        <div className="space-y-1.5">
          {RULE.map(({ when, detail }) => (
            <div key={when} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <span className="w-10 shrink-0 text-[10px] font-bold uppercase tracking-wide text-brand">{when}</span>
              <span className="text-ink">{detail}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 pt-1 text-[10px] text-emerald-700">
            <Filter className="h-3 w-3" /> Active on all inboxes
          </div>
        </div>
      </ToolCard>

      <ToolCard
        eyebrow="Translation"
        icon={Languages}
        title="Every language, one inbox"
        description="Translate messages into your team's language with one click, using the Google Translate integration."
      >
        <div className="space-y-2.5">
          {[
            { original: "Olá! Meu pedido ainda não chegou.", english: "Hello! My order still hasn't arrived." },
            { original: "क्या मैं डिलीवरी का पता बदल सकता हूँ?", english: "Can I change the delivery address?" },
          ].map(({ original, english }) => (
            <div key={original} className="rounded-lg rounded-tl-sm bg-white p-3">
              <p className="text-ink">{original}</p>
              <p className="mt-1.5 border-t border-slate-100 pt-1.5 text-slate-500">{english}</p>
            </div>
          ))}
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <Image src="/images/integrations/googletranslate.png" alt="" width={14} height={14} className="h-3.5 w-3.5" />
            Translated with Google Translate
          </div>
        </div>
      </ToolCard>
    </div>
  );
}
