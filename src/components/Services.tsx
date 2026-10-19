"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { CallButton } from "./CallButton";
import { CheckIcon, iconMap } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading
        id="services-heading"
        eyebrow="What We Help With"
        title="Flight help over the phone, without the runaround"
        description="Pick the help you need and call. A US-based travel expert will take it from there."
      />

      <motion.ul
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {site.services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <motion.li key={service.id} variants={fadeUp}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="surface surface-hover group flex h-full flex-col rounded-2xl p-7"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.04] text-sky ring-1 ring-white/10 transition-transform group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/75"
                    >
                      <CheckIcon className="h-4 w-4 text-sky" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-1">
                  <CallButton
                    location="section"
                    label="Call Now"
                    title={service.ctaTitle}
                    size="md"
                  />
                </div>
              </motion.article>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
