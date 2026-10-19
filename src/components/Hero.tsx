"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

import { CallButton } from "./CallButton";
import { PhoneIcon } from "./Icons";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = reduceMotion ? { hidden: {}, show: {} } : staggerContainer;
  const item = reduceMotion ? { hidden: {}, show: {} } : fadeUp;

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-900 grain"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-[-20%] h-[520px] w-[520px] rounded-full bg-sky/[0.08] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left"
        >
          <motion.span
            variants={item}
            className="label flex items-center gap-3 text-sand"
          >
            <span className="h-px w-8 bg-sand/40" aria-hidden="true" />
            {site.hours} live phone support
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Flight booking, change &amp; cancellation help —{" "}
            <span className="text-gradient">just one call away.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {site.hero.subheading}
          </motion.p>

          <motion.div variants={item} className="mt-9 w-full sm:w-auto">
            <CallButton
              location="hero"
              label="Call"
              showPhone
              size="xl"
              pulse
              title="Call to book a flight or change an existing booking"
              className="w-full sm:w-auto"
            />
          </motion.div>

          <motion.p variants={item} className="mt-4 text-sm text-white/45">
            {site.hero.reassurance}
          </motion.p>

          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.06] pt-6 text-sm text-white/55"
          >
            {["No forms", "No apps", "No hold music", "Real US-based agents"].map(
              (chip) => (
                <li key={chip} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sand/70" />
                  {chip}
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>

        {/* Editorial image panel */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="frame aspect-[4/3] w-full shadow-soft">
            <Image
              src="/images/hero-sunset.webp"
              alt="Airplane flying through a golden sunset sky"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Departure-board style call card */}
          <div className="frame absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 rounded-2xl bg-navy-800/90 p-4 backdrop-blur-md sm:left-6 sm:right-auto sm:w-[320px]">
            <div>
              <p className="label text-sand">Direct line</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {site.phoneDisplay}
              </p>
            </div>
            <a
              href={`tel:${site.phoneE164}`}
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-call text-white shadow-call transition-colors hover:bg-call-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-call"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
