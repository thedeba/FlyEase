import type { ReactNode } from "react";
import type { Faq as FaqItem } from "@/config/site";
import { CallButton } from "./CallButton";
import { CheckCircleIcon } from "./Icons";
import { Faq } from "./Faq";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

type ContentPageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  highlights?: string[];
  blocks: { heading: string; body: string }[];
  faqs?: readonly FaqItem[];
  faqTitle?: string;
  faqDescription?: string;
  children?: ReactNode;
};

/** Reusable modern content page: hero → content blocks → optional FAQ → CTA. */
export function ContentPage({
  eyebrow,
  title,
  intro,
  highlights,
  blocks,
  faqs,
  faqTitle,
  faqDescription,
  children,
}: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} highlights={highlights} />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-10">
          {blocks.map((block, i) => (
            <Reveal key={block.heading} delay={i * 0.04}>
              <section>
                <h2 className="flex items-start gap-2.5 text-xl font-semibold text-white sm:text-2xl">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  {block.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-white/60">{block.body}</p>
              </section>
            </Reveal>
          ))}
        </div>

        {children}

        <aside className="surface mt-14 rounded-3xl p-8 text-center">
          <p className="font-display text-xl font-semibold text-white">
            Have a question? One call is all it takes.
          </p>
          <p className="mt-2 text-sm text-white/50">
            US-based travel experts, available 24/7.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton
              location="section"
              label="Call Now"
              showPhone
              size="lg"
              pulse
              title="Call our travel desk now"
            />
          </div>
        </aside>
      </div>

      {faqs && faqs.length > 0 && (
        <Faq
          items={faqs}
          eyebrow="FAQ"
          title={faqTitle ?? "Frequently asked questions"}
          description={faqDescription}
          idPrefix="page-faq"
        />
      )}
    </>
  );
}
