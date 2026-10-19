import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { ImageBand } from "@/components/ImageBand";
import { Marquee } from "@/components/Marquee";
import { PopularContent } from "@/components/PopularContent";
import { Services } from "@/components/Services";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyCallUs } from "@/components/WhyCallUs";
import { site } from "@/config/site";

// Below-the-fold client components are code-split out of the initial bundle.
// They are still server-rendered for SEO and first paint.
const HowItWorks = dynamic(() =>
  import("@/components/HowItWorks").then((m) => m.HowItWorks),
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((m) => m.Testimonials),
);
const DestinationsPreview = dynamic(() =>
  import("@/components/DestinationsPreview").then((m) => m.DestinationsPreview),
);
const BlogPreview = dynamic(() =>
  import("@/components/BlogPreview").then((m) => m.BlogPreview),
);
const FinalCta = dynamic(() =>
  import("@/components/FinalCta").then((m) => m.FinalCta),
);

export const metadata: Metadata = {
  title:
    "Flight Booking, Change & Cancellation Help | Call 24/7 – FlyEase Travel Desk",
  description:
    "Need to book, change or cancel a flight? Call our US-based travel experts 24/7 for cheap flight booking, date changes, rebooking and cancellation help.",
  alternates: { canonical: "/" },
  openGraph: {
    url: site.siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyCallUs />
      <HowItWorks />
      <TrustStrip />
      <ImageBand
        eyebrow="Independent · US-based"
        title="Skip the hold music. Talk to someone who can actually help."
        copy="Booking, changing or cancelling a flight should not mean fighting a website. Call our travel desk and a real person will handle the details with you — day or night."
      />
      <DestinationsPreview />
      <Testimonials />
      <BlogPreview />
      <PopularContent />
      <Faq />
      <FinalCta />
    </>
  );
}
