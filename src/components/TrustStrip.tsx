import { site } from "@/config/site";
import { CountUp } from "./CountUp";

/** Trust strip with animated counters.
 *  ⚠️ All values are editable placeholders in src/config/site.ts (`stats`). */
export function TrustStrip() {
  return (
    <section
      aria-label="Service highlights"
      className="border-y border-white/5 bg-gradient-to-r from-navy-800 to-navy-700"
    >
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <dd className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
            <dt className="mt-3 label text-white/45">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
