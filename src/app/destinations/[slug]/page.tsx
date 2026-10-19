import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { FinalCta } from "@/components/FinalCta";
import { ArrowRightIcon } from "@/components/Icons";
import { site } from "@/config/site";
import { destinationImages, destinations, getDestination } from "@/lib/destinations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((dest) => ({ slug: dest.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return { title: "Destination not found" };

  return {
    title: dest.title,
    description: dest.description,
    alternates: { canonical: `/destinations/${dest.slug}` },
    openGraph: {
      title: dest.title,
      description: dest.description,
      url: `${site.siteUrl}/destinations/${dest.slug}`,
      type: "article",
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const related = destinations
    .filter((d) => d.slug !== dest.slug && d.kind === dest.kind)
    .slice(0, 4);

  const image = destinationImages[dest.slug];

  return (
    <>
      <ContentPage
        eyebrow={`${dest.kind} Flights · ${dest.region}`}
        title={dest.h1}
        intro={dest.intro}
        highlights={dest.highlights}
        blocks={dest.blocks}
      >
        {image && (
          <div className="frame mt-4 aspect-[16/9] w-full shadow-soft">
            <Image
              src={image}
              alt={`${dest.city} skyline`}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"
              aria-hidden="true"
            />
          </div>
        )}

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-lg font-semibold text-white">
              More {dest.kind.toLowerCase()} destinations
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/destinations/${item.slug}`}
                    className="surface surface-hover group flex items-center justify-between gap-3 rounded-xl px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <span>
                      <span className="font-medium text-white">
                        {item.city}
                      </span>
                      <span className="block text-xs text-white/50">
                        {item.region}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-sky transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </ContentPage>
      <FinalCta />
    </>
  );
}
