import Link from "next/link";
import { site } from "@/config/site";
import { Reveal } from "./Reveal";
import { PhoneIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { CallButton } from "./CallButton";

/** Keyword-rich, fully readable content block (300–400 words) plus a grid of
 *  popular flight-help topics. This is real on-page copy, not hidden text. */
export function PopularContent() {
  const { popularContent, topics } = site;

  return (
    <section
      id="popular-topics"
      aria-labelledby="popular-heading"
      className="border-t border-white/5 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="popular-heading"
          eyebrow="Popular Flight Help"
          title={popularContent.heading}
          description={popularContent.intro}
          align="left"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-white/60">
            {popularContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>{popularContent.closing}</p>
          </div>

          <div className="surface rounded-3xl p-7">
            <h3 className="text-lg font-semibold text-white">
              Call for help with any of these
            </h3>
            <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-1">
              {topics.map((topic) => (
                <li key={topic.title} className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  <div>
                    <p className="font-medium text-white">{topic.title}</p>
                    <p className="text-sm text-white/50">{topic.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <CallButton
                location="section"
                label="Call Now"
                title="Call to book a cheap flight"
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Topic grid with descriptive anchor text */}
        <Reveal className="mt-14">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <li key={`grid-${topic.title}`}>
                <Link
                  href={`/flights/${topic.slug}`}
                  className="surface surface-hover group flex h-full flex-col rounded-2xl p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <span className="font-medium text-white group-hover:text-sky">
                    {topic.title}
                  </span>
                  <span className="mt-1 text-sm text-white/50">
                    {topic.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
