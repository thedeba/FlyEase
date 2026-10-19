import type { Metadata } from "next";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { WhyCallUs } from "@/components/WhyCallUs";
import { Marquee } from "@/components/Marquee";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services | Flight Booking, Change & Cancellation Help",
  description:
    "Explore our phone support services for flight booking, flight changes and rebooking, and cancellation with refund guidance. Call 24/7.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Flight Booking, Change & Cancellation Services",
    description:
      "Phone-only travel support: book flights, change dates and get cancellation help.",
    url: `${site.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Flight help over the phone, in three simple ways"
        intro="Book a flight, change your dates, or cancel with clear refund guidance. Pick the help you need and call — a US-based agent takes it from there."
        highlights={[
          "No forms or apps",
          "Talk to a real person",
          "Free to call",
        ]}
      />
      <Marquee />
      <Services />
      <WhyCallUs />
      <FinalCta />
    </>
  );
}
