import Link from "next/link";
import { CallButton } from "@/components/CallButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        We could not find that page
      </h1>
      <p className="mt-4 text-base leading-relaxed text-sky-soft/85">
        But we can still help with your flight. Call our travel desk and speak
        with a US-based expert any time, day or night.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <CallButton location="section" label="Call Now" showPhone size="lg" pulse />
        <Link
          href="/"
          className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-sky/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
