"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Section, SectionHeader } from "@/components/site";
import type { SectionTone } from "@/components/site/Section";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  sub_title?: string;
  data: FAQItem[];
  tone?: SectionTone;
}

export default function FAQ({
  title = "Frequently asked questions",
  sub_title,
  data,
  tone = "white",
}: FAQSectionProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <Section tone={tone} containerClassName="max-w-4xl">
      <SectionHeader title={title} description={sub_title} />

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3"
          onValueChange={(value) => setActiveItem(value)}
        >
          {data.map((faq, index) => {
            const value = `item-${index}`;
            const isActive = activeItem === value;

            return (
              <AccordionItem
                key={index}
                value={value}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-card transition-all duration-300"
              >
                <AccordionTrigger
                  className={`flex w-full cursor-pointer items-center justify-between rounded-none px-5 py-4 text-left text-base font-semibold no-underline transition-all duration-200 hover:no-underline sm:px-6 sm:text-lg ${
                    isActive
                      ? "bg-brand-solid text-white [&_svg]:text-white"
                      : "text-ink hover:bg-surface"
                  }`}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="whitespace-pre-line px-5 pb-5 pt-4 text-base leading-relaxed text-slate-600 sm:px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
    </Section>
  );
}
