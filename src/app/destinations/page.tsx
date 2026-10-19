import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/Icons";
import { site } from "@/config/site";
import { destinationImages, destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations | Flight Booking Help Across the US & Worldwide",
  description:
    "Browse popular destinations and get phone help to book, change or cancel flights to each one. US-based travel experts available 24/7.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Destinations – Flight Help by Phone",
    description:
      "Book, change or cancel flights to popular domestic and international destinations by phone.",
    url: `${site.siteUrl}/destinations`,
  },
};

const groups = ["Domestic", "International"] as const;

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Flight help for the places you want to go"
        intro="Pick a destination and call us to book, change or cancel your flights. Whether it is a quick domestic hop or a long-haul international trip, a US-based agent is ready to help."
        highlights={["Domestic & international", "Book, change or cancel", "24/7 support"]}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {groups.map((group) => {
          const items = destinations.filter((d) => d.kind === group);
          return (
            <section key={group} className="[&:not(:first-child)]:mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {group} flights
              </h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((dest, i) => {
                  const image = destinationImages[dest.slug];
                  return (
                    <Reveal as="li" key={dest.slug} delay={i * 0.04}>
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="surface surface-hover group flex h-full flex-col overflow-hidden rounded-2xl"
                      >
                        <span className="relative block h-36 w-full overflow-hidden border-b border-white/[0.06]">
                          {image ? (
                            <Image
                              src={image}
                              alt={`${dest.city} skyline`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <span
                              className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-900"
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"
                            aria-hidden="true"
                          />
                          <span className="label absolute bottom-3 left-5 text-sand">
                            {dest.kind}
                          </span>
                        </span>

                        <span className="flex flex-1 flex-col p-6">
                          <span className="font-display text-xl font-semibold text-white">
                            {dest.city}
                          </span>
                          <span className="mt-1 text-sm text-white/50">
                            {dest.region}
                          </span>
                          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-sky transition-transform group-hover:translate-x-1">
                            Flight help for {dest.city}
                            <ArrowRightIcon className="h-4 w-4" />
                          </span>
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <FinalCta />
    </>
  );
}
