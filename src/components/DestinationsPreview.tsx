import Image from "next/image";
import Link from "next/link";
import { destinationImages, destinations } from "@/lib/destinations";
import { ArrowRightIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Home-page preview of popular destinations. */
export function DestinationsPreview() {
  const featured = destinations.slice(0, 6);

  return (
    <section
      aria-labelledby="destinations-preview-heading"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <SectionHeading
        id="destinations-preview-heading"
        eyebrow="Popular Destinations"
        title="Where are you flying?"
        description="Pick a destination and call for booking, change or cancellation help — domestic and international."
      />

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((dest, i) => {
          const image = destinationImages[dest.slug];
          return (
            <Reveal as="li" key={dest.slug} delay={i * 0.05}>
              <Link
                href={`/destinations/${dest.slug}`}
                className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.08] p-5"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`${dest.city} skyline`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900"
                    aria-hidden="true"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/35 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="label text-sand">{dest.kind}</span>
                  <span className="mt-1 flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-white">
                      {dest.city}
                    </span>
                    <ArrowRightIcon className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-12 flex justify-center">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        >
          View all destinations
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
