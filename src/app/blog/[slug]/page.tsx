import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallButton } from "@/components/CallButton";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { CheckCircleIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { site } from "@/config/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${site.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${site.siteUrl}/#organization` },
    mainEntityOfPage: `${site.siteUrl}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-sky">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-sky">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-sky-soft" aria-current="page">
              {post.category}
            </li>
          </ol>
        </nav>

        <header className="mt-8">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
            {post.category}
          </span>
          <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <p className="mt-8 text-lg leading-relaxed text-sky-soft/90">
          {post.intro}
        </p>

        <div className="mt-10 space-y-9">
          {post.blocks.map((block, i) => (
            <Reveal key={block.heading} delay={i * 0.03}>
              <section>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  {block.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-sky-soft/80">
                  {block.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        <aside className="mt-12 rounded-2xl border border-sky/25 bg-sky/10 p-6">
          <h2 className="text-lg font-bold text-white">Key takeaways</h2>
          <ul className="mt-4 space-y-2">
            {post.takeaways.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-12 rounded-2xl border border-call/30 bg-call/10 p-6 text-center">
          <p className="font-semibold text-white">
            Prefer to just talk it through? Call our travel desk.
          </p>
          <div className="mt-5 flex justify-center">
            <CallButton
              location="section"
              label="Call Now"
              showPhone
              size="md"
              wiggle
              title="Call for flight booking, change or cancellation help"
            />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-lg font-bold text-white">Keep reading</h2>
            <ul className="mt-5 grid gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group block rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-sky/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-semibold text-white group-hover:text-sky">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <FinalCta />
    </>
  );
}
