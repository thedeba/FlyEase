import type { ReactNode } from "react";
import { CallButton } from "./CallButton";
import { CheckIcon } from "./Icons";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  highlights?: string[];
  children?: ReactNode;
};

/** Editorial hero used by inner pages (premium dark travel theme). */
export function PageHero({ eyebrow, title, intro, highlights, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.06] bg-navy-900 grain">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-sky/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <span className="inline-flex items-center gap-3 text-sand label">
          <span className="h-px w-8 bg-sand/40" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-8 bg-sand/40" aria-hidden="true" />
        </span>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
          {intro}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                <CheckIcon className="h-4 w-4 text-sky" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex justify-center">
          <CallButton
            location="section"
            label="Call Now"
            showPhone
            size="lg"
            pulse
            title="Call our US-based travel desk now"
          />
        </div>

        {children}
      </div>
    </section>
  );
}
