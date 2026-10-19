"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { iconMap } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function WhyCallUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-call-us"
      aria-labelledby="why-heading"
      className="border-y border-white/5 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Call Us"
          title="A real person, ready to help right now"
          description="No apps to install, no forms to fill. One phone call gets your flight sorted."
        />

        <motion.ul
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {site.benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <motion.li
                key={benefit.title}
                variants={fadeUp}
                className="surface rounded-2xl p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-call/10 text-call ring-1 ring-call/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {benefit.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
