import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `How refunds, travel credits and cancellations are handled by ${site.brandName}.`,
  alternates: { canonical: "/refund-policy" },
  robots: { index: false, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro={`This Refund Policy explains how refunds and credits are handled when you cancel a flight with help from ${site.brandName}. It is a template and should be reviewed to fit your business and applicable law before launch.`}
      sections={[
        {
          heading: "Who controls refunds",
          body: "Refunds and travel credits are governed by the airline and the fare rules attached to your ticket. We help you understand and pursue the options available, but the final decision and processing rest with the airline.",
        },
        {
          heading: "Refundable vs. non-refundable fares",
          body: "Some fares are refundable to the original payment method, some provide a travel credit, and some are non-refundable. We will tell you which category your fare falls into before you cancel.",
        },
        {
          heading: "Service fees",
          body: "If a service fee applies to work we perform, it will be disclosed before you agree. Service fees may not be refundable once the service has been delivered.",
          bullets: [
            "Fees are explained up front, before you confirm",
            "Airline-imposed fees are set by the airline",
            "Timelines for refunds depend on the airline and payment provider",
          ],
        },
        {
          heading: "How to request help",
          body: `Call us at ${site.phoneDisplay} to discuss your booking. Have your booking reference and travel details ready so we can look into your options quickly.`,
        },
      ]}
    />
  );
}
