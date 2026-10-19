import type { Metadata } from "next";
import { CallButton } from "@/components/CallButton";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${site.brandName} for flight booking, change and cancellation help. Phone support available ${site.hours}.`,
  alternates: { canonical: "/contact" },
  robots:
    process.env.NEXT_PUBLIC_INDEX_UTILITY_PAGES === "true"
      ? { index: true, follow: true }
      : { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-5 text-base leading-relaxed text-sky-soft/85">
        The fastest way to reach us is by phone. Our travel desk is open{" "}
        {site.hours} to help with flight booking, flight changes and
        cancellation guidance. There is no form to fill in — just call.
      </p>

      <div className="mt-8 flex">
        <CallButton
          location="section"
          label="Call Now"
          showPhone
          size="lg"
          pulse
          wiggle
          title="Call our travel desk now"
        />
      </div>

      <dl className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <dt className="text-sm font-semibold uppercase tracking-wider text-sky">
            Phone
          </dt>
          <dd className="mt-2 text-lg font-bold text-white">
            {site.phoneDisplay}
          </dd>
          <dd className="mt-1 text-sm text-white/60">{site.hours} support</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <dt className="text-sm font-semibold uppercase tracking-wider text-sky">
            Email
          </dt>
          <dd className="mt-2 text-lg font-bold text-white">{site.email}</dd>
          <dd className="mt-1 text-sm text-white/60">
            For non-urgent enquiries only
          </dd>
        </div>
      </dl>

      <p className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/60">
        {site.disclaimer}
      </p>
    </article>
  );
}
