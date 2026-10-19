"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { site } from "@/config/site";
import type { Faq as FaqItem } from "@/config/site";
import { ChevronIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

type FaqProps = {
  items?: readonly FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  idPrefix?: string;
};

export function Faq({
  items = site.faqs,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description = "Quick answers about booking, changing and cancelling flights by phone.",
  idPrefix = "faq",
}: FaqProps) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby={`${idPrefix}-heading`}
      className="mx-auto max-w-3xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id={`${idPrefix}-heading`}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <dl className="mt-12 divide-y divide-white/[0.07] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
        {items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.question}>
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`${idPrefix}-panel-${i}`}
                  id={`${idPrefix}-trigger-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sky"
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-sky"
                  >
                    <ChevronIcon className="h-5 w-5" />
                  </motion.span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    id={`${idPrefix}-panel-${i}`}
                    role="region"
                    aria-labelledby={`${idPrefix}-trigger-${i}`}
                    key="content"
                    initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pt-0 text-sm leading-relaxed text-white/60 sm:text-base">
                      {faq.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
