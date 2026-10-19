"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { site } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { iconMap } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="how-heading"
        eyebrow="How It Works"
        title="Three simple steps to get your flight sorted"
        description="From first ring to resolved — here is exactly what happens when you call."
      />

      <div ref={ref} className="relative mt-16">
        {/* Progress line (desktop: horizontal, mobile: hidden) */}
        <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-white/10 md:block">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-sky to-call"
            style={{ scaleX: reduceMotion ? 1 : progress }}
          />
        </div>

        <motion.ol
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 md:grid-cols-3"
        >
          {site.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-navy-800 text-sand shadow-soft">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-call text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
