import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${site.brandName}.`,
  alternates: { canonical: "/terms" },
  robots:
    process.env.NEXT_PUBLIC_INDEX_UTILITY_PAGES === "true"
      ? { index: true, follow: true }
      : { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-white/50">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-6 text-sky-soft/80">
        <p>
          By using this website or calling {site.brandName}, you agree to these
          Terms of Service. This is a template and should be reviewed to fit your
          business and applicable law before launch.
        </p>

        <h2 className="text-xl font-bold text-white">Independent service</h2>
        <p>
          {site.brandName} is an independent travel service and is not affiliated
          with, endorsed by, or sponsored by any airline. All airline names and
          trademarks belong to their respective owners. Service fees may apply.
        </p>

        <h2 className="text-xl font-bold text-white">Our service</h2>
        <p>
          We provide telephone-based assistance with flight booking, flight
          changes and cancellation guidance. Availability, fares and airline
          rules are set by the airlines and are subject to change.
        </p>

        <h2 className="text-xl font-bold text-white">No guarantee</h2>
        <p>
          While we work to help you find suitable options, we cannot guarantee
          any particular fare, seat, refund or outcome. Final decisions rest with
          the airline and the fare rules that apply to your ticket.
        </p>

        <h2 className="text-xl font-bold text-white">Contact us</h2>
        <p>
          Questions about these terms? Call us at {site.phoneDisplay} or visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
