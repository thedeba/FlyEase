import Link from "next/link";
import { site } from "@/config/site";
import type { FlightPage } from "@/lib/flight-pages";
import { CallButton } from "./CallButton";
import { ArrowRightIcon, CheckCircleIcon } from "./Icons";
import { Reveal } from "./Reveal";

/**
 * Reusable template for focused landing pages (flight booking, changes,
 * cancellations, last-minute and international help). Keep each page's
 * title/description/H1/content unique — see src/lib/flight-pages.ts.
 */
export function CityRoutePage({ page }: { page: FlightPage }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-white/50">
        <ol className="flex items-center gap-2">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ArrowRightIcon className="h-4 w-4" />
          </li>
          <li className="text-white/70" aria-current="page">
            {page.eyebrow}
          </li>
        </ol>
      </nav>

      <header className="mt-8">
        <span className="label text-sand">{page.eyebrow}</span>
        <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-5 text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
          {page.intro}
        </p>

        <div className="mt-8">
          <CallButton
            location="section"
            label="Call Now"
            showPhone
            size="lg"
            pulse
            title={page.callout}
          />
        </div>
      </header>

      <div className="mt-14 space-y-10">
        {page.sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 0.05}>
            <section>
              <h2 className="flex items-start gap-2 text-xl font-semibold text-white sm:text-2xl">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                {section.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/60">
                {section.body}
              </p>
            </section>
          </Reveal>
        ))}
      </div>

      <aside className="surface mt-14 rounded-2xl p-7 text-center">
        <p className="font-display text-xl font-semibold text-white">
          {page.callout}
        </p>
        <div className="mt-5 flex justify-center">
          <CallButton
            location="section"
            label="Call Now"
            showPhone
            size="lg"
            pulse
            title={`${page.eyebrow} – call ${site.phoneDisplay}`}
          />
        </div>
      </aside>

      <p className="mt-10 text-sm text-white/50">
        <Link
          href="/"
          className="font-medium text-sky transition-colors hover:text-sky-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        >
          ← Back to all flight booking, change and cancellation help
        </Link>
      </p>
    </article>
  );
}
