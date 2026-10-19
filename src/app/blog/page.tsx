import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/Icons";
import { site } from "@/config/site";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Flight Booking, Change & Cancellation Tips – FlyEase",
  description:
    "Practical guides and tips on booking flights by phone, changing flight dates, cancellations, refunds and last-minute travel.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Flight Travel Blog – FlyEase Travel Desk",
    description:
      "Guides and tips for booking, changing and cancelling flights.",
    url: `${site.siteUrl}/blog`,
  },
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Flight tips, guides and travel know-how"
        intro="Straightforward advice on booking, changing and cancelling flights — written to help you make confident decisions before you call."
        highlights={["Booking", "Changes", "Refunds", "Last-minute travel"]}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="surface surface-hover group block rounded-3xl p-8 sm:p-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-soft">
              Featured · {featured.category}
            </span>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sky-soft/80">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-sky transition-transform group-hover:translate-x-1">
              Read the guide
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>

        {/* Grid */}
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.04}>
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
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-white/50">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>

      <FinalCta />
    </>
  );
}
