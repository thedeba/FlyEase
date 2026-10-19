import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { HowItWorks } from "@/components/HowItWorks";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CheckCircleIcon } from "@/components/Icons";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "How It Works | Calling Our Flight Help Desk – FlyEase Travel Desk",
  description:
    "See how our phone support works: call, tell us your trip, and we handle it. What to have ready and what to expect when you call.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Our Flight Help Phone Service Works",
    description:
      "Three simple steps: call, tell us your trip, we handle it. Available 24/7.",
    url: `${site.siteUrl}/how-it-works`,
  },
};

const prepBlocks = [
  {
    heading: "Your travel dates and flexibility",
    body: "Know your ideal dates, and whether you can shift them by a day or two. Flexibility often unlocks better fares and smoother changes.",
  },
  {
    heading: "Departure city and destination",
    body: "Tell us where you are flying from and to. If nearby airports work for you, mention them — it can widen your options.",
  },
  {
    heading: "Number of travellers and names",
    body: "Have the count ready, plus full names as they appear on IDs or passports if you are booking, so the details are correct the first time.",
  },
  {
    heading: "Any existing booking reference",
    body: "If you are changing or cancelling an existing trip, your booking reference speeds things up. Missing it? We can still help.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From first ring to sorted — here is the process"
        intro="No apps, no forms, no hold music. Calling our travel desk is designed to be the simplest way to get flight help."
        highlights={["Call us", "Tell us your trip", "We handle it"]}
      />

      <HowItWorks />

      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            What to have ready before you call
          </h2>
          <p className="mt-3 max-w-2xl text-sky-soft/80">
            You do not need everything, but these details make the call faster.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {prepBlocks.map((block, i) => (
              <Reveal
                key={block.heading}
                delay={i * 0.05}
                className="rounded-2xl border border-white/10 bg-navy-800/60 p-6"
              >
                <h3 className="flex items-start gap-2 text-lg font-bold text-white">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  {block.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-soft/80">
                  {block.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq
        idPrefix="hiw-faq"
        eyebrow="Good to Know"
        title="Questions about calling us"
        description="A few quick answers before you dial."
      />

      <FinalCta />
    </>
  );
}
