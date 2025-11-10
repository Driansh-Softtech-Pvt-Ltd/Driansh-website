"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sub_title?: string;
  data: FAQItem[];
}

export default function FAQ({ sub_title, data }: FAQSectionProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D1A4E]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg mt-5 max-w-5xl mx-auto">{sub_title}</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          onValueChange={(value) => setActiveItem(value)}
        >
          {data.map((faq, index) => {
            const value = `item-${index}`;
            const isActive = activeItem === value;

            return (
              <AccordionItem
                key={index}
                value={value}
                className="transition-all duration-300 border-none"
              >
                <AccordionTrigger
                  className={`flex justify-between items-center w-full px-6 py-4 font-bold text-lg no-underline cursor-pointer hover:no-underline rounded-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#1E4EC4] text-white"
                      : "text-[#1D1A4E] bg-transparent hover:bg-gray-100"
                  }`}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-lg px-6 pb-4 pt-2 bg-transparent text-gray-700 whitespace-pre-line shadow-none">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
