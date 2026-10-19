type LegalSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

/** Reusable layout for policy / legal pages. */
export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-white/50">
        Last updated: {new Date().getFullYear()}
      </p>
      <p className="mt-8 leading-relaxed text-sky-soft/80">{intro}</p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-white">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-sky-soft/80">
              {section.body}
            </p>
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-sky-soft/80">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
