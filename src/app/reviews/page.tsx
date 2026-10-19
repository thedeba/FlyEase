import type { Metadata } from "next";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Reviews | What Callers Say – FlyEase Travel Desk",
  description:
    "Read what callers say about our flight booking, change and cancellation phone support. US-based travel help available 24/7.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews – FlyEase Travel Desk",
    description:
      "Feedback from travelers who called our US-based flight help desk.",
    url: `${site.siteUrl}/reviews`,
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Trusted by travelers across the US"
        intro="Real conversations, real help. Here is what callers have to say about our flight support desk."
        highlights={["24/7 support", "US-based agents", "No obligation"]}
      />
      <TrustStrip />
      <Testimonials />
      <FinalCta />
    </>
  );
}
