"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/config/site";
import { QuoteIcon, StarIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const AUTOPLAY_MS = 6000;

// Reviews are read from site.testimonials (src/config/site.ts).
export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = site.testimonials.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, count, go]);

  const active = site.testimonials[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="testimonials-heading"
        eyebrow="What Callers Say"
        title="Trusted by travelers across the US"
        description="Real feedback from travelers who called our US-based flight help desk."
      />

      <div
        className="relative mt-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 shadow-soft sm:min-h-[220px] sm:p-10">
          <QuoteIcon className="h-8 w-8 text-sky/40" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag={reduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              className="mt-5 cursor-grab active:cursor-grabbing"
              aria-live="polite"
            >
              <div className="flex gap-0.5 text-call" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                “{active.quote}”
              </p>
              <footer className="mt-5 text-sm font-semibold text-sky-soft">
                {active.name}
                <span className="font-normal text-white/50"> · {active.location}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <CarouselButton label="Previous testimonial" onClick={() => go(-1)}>
            <span aria-hidden="true">‹</span>
          </CarouselButton>

          <div className="flex gap-2" role="group" aria-label="Choose testimonial">
            {site.testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-current={i === index}
                aria-label={`Show testimonial ${i + 1} of ${count}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                  i === index ? "w-6 bg-sky" : "w-2.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <CarouselButton label="Next testimonial" onClick={() => go(1)}>
            <span aria-hidden="true">›</span>
          </CarouselButton>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xl text-white/80 transition-colors hover:border-sky/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
    >
      {children}
    </button>
  );
}
