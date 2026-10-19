import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { ArrowRightIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Home-page preview of the latest guides. */
export function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section
      aria-labelledby="blog-preview-heading"
      className="border-t border-white/5 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="blog-preview-heading"
          eyebrow="Travel Guides"
          title="Helpful reading before you fly"
          description="Practical tips on booking, changing and cancelling flights."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="surface surface-hover group flex h-full flex-col rounded-2xl p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-sky">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sky-soft/75">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-sky transition-transform group-hover:translate-x-1">
                  Read more
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-sky/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            Visit the blog
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
