import Image from "next/image";
import { CallButton } from "./CallButton";

type ImageBandProps = {
  eyebrow?: string;
  title: string;
  copy: string;
};

/** Full-width photo band with an overlay — adds depth to the dark theme. */
export function ImageBand({
  eyebrow = "Why callers choose us",
  title,
  copy,
}: ImageBandProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/runway.webp"
        alt="Airport runway and terminal under a dramatic sky"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-xl">
          <span className="label flex items-center gap-3 text-sand">
            <span className="h-px w-8 bg-sand/40" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/65">{copy}</p>
          <div className="mt-8">
            <CallButton
              location="section"
              label="Call Now"
              showPhone
              size="lg"
              pulse
              title="Call for flight booking, change or cancellation help"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
