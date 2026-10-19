import { site } from "@/config/site";
import { CallButton } from "./CallButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="px-4 py-20 sm:px-6">
      <Reveal className="grain relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-700 to-navy-900 p-10 text-center shadow-soft sm:p-16">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-call/10 blur-[100px]"
          aria-hidden="true"
        />
        <h2
          id="final-cta-heading"
          className="relative text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Ready to book, change or cancel your flight?
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
          One call is all it takes. Our US-based travel desk is open {site.hours},
          every day of the year.
        </p>

        <div className="relative mt-9 flex justify-center">
          <CallButton
            location="footer"
            label={site.cta.finalLabel}
            showPhone
            size="xl"
            pulse
            title="Call now for flight booking, change or cancellation help"
          />
        </div>

        <p className="relative mt-5 text-sm text-white/45">
          {site.hero.reassurance}
        </p>
      </Reveal>
    </section>
  );
}
