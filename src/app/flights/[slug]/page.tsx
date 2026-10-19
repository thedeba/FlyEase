import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CityRoutePage } from "@/components/CityRoutePage";
import { FinalCta } from "@/components/FinalCta";
import { site } from "@/config/site";
import { flightPages, getFlightPage } from "@/lib/flight-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return flightPages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getFlightPage(slug);

  if (!page) {
    return { title: "Page not found" };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/flights/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${site.siteUrl}/flights/${page.slug}`,
      type: "article",
    },
  };
}

export default async function FlightPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getFlightPage(slug);

  if (!page) notFound();

  return (
    <>
      <CityRoutePage page={page} />
      <FinalCta />
    </>
  );
}
