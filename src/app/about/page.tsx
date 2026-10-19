import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { FinalCta } from "@/components/FinalCta";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | US-Based Flight Help by Phone – FlyEase Travel Desk",
  description:
    "Learn about FlyEase Travel Desk, an independent US-based phone service for flight booking, flight changes and cancellation guidance.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About FlyEase Travel Desk",
    description:
      "An independent, US-based travel service helping callers book, change and cancel flights by phone.",
    url: `${site.siteUrl}/about`,
  },
};

const blocks = [
  {
    heading: "Who we are",
    body: "FlyEase Travel Desk is an independent travel service built around a simple belief: when travel gets complicated, talking to a real person is still the fastest way to sort it out. Our phone lines are open 24/7 for flight booking, flight changes and cancellation guidance.",
  },
  {
    heading: "What we do",
    body: "We help callers book domestic and international flights, change flight dates and itineraries, and understand refund and credit options when they cancel. We do not run a booking form or a chatbot — every request starts with a conversation.",
  },
  {
    heading: "How we work",
    body: "We keep things transparent. We explain the options available to you, any fees that may apply, and the rules that come with your fare, so you can make an informed decision without pressure. Final fares and outcomes are set by the airlines, and we help you navigate them.",
  },
  {
    heading: "Our commitment",
    body: "Friendly, US-based agents, clear language, and no obligation to proceed. Whether you call at noon or midnight, you will reach someone who can help with your trip.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ContentPage
        eyebrow="About Us"
        title="Real people, ready to help with your flight"
        intro={`${site.brandName} is an independent, US-based travel service helping callers book, change and cancel flights by phone — ${site.hours}, every day of the year.`}
        highlights={[
          "Independent travel service",
          "US-based phone agents",
          "Available 24/7",
          "No obligation to book",
        ]}
        blocks={blocks}
      />
      <FinalCta />
    </>
  );
}
