import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ | Flight Booking, Change & Cancellation Questions Answered",
  description:
    "Answers to common questions about booking flights by phone, changing flight dates, cancellations, refunds and our 24/7 phone support.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions – FlyEase Travel Desk",
    description:
      "Common questions about our flight booking, change and cancellation phone help.",
    url: `${site.siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Your flight questions, answered"
        intro="Everything you might want to know before you call, from booking a flight by phone to understanding refund options."
        highlights={["Booking", "Changes", "Cancellations", "Refunds"]}
      />
      <Faq
        idPrefix="faq-page"
        eyebrow="Questions & Answers"
        title="Frequently asked questions"
        description="Quick answers about booking, changing and cancelling flights by phone."
      />
      <FinalCta />
    </>
  );
}
