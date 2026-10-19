import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.brandName} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots:
    process.env.NEXT_PUBLIC_INDEX_UTILITY_PAGES === "true"
      ? { index: true, follow: true }
      : { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-white/50">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-6 text-sky-soft/80">
        <p>
          This Privacy Policy describes how {site.brandName} (&quot;we&quot;,
          &quot;us&quot;) handles information when you use this website or call
          our phone support service. This is a template and should be reviewed to
          fit your business and applicable law before launch.
        </p>

        <h2 className="text-xl font-bold text-white">Information we collect</h2>
        <p>
          When you call us you may share details such as your name, contact
          information and travel details in order to receive help. This website
          may also collect limited technical information such as your device,
          browser and pages visited through analytics and advertising tools.
        </p>

        <h2 className="text-xl font-bold text-white">
          How we use information
        </h2>
        <p>
          We use information to provide flight booking, change and cancellation
          assistance, to improve our service, and to measure the performance of
          our advertising. We do not sell your personal information.
        </p>

        <h2 className="text-xl font-bold text-white">
          Advertising and analytics
        </h2>
        <p>
          We may use third-party tools such as Google Analytics, Google Ads and
          the Meta Pixel. These tools may set cookies or similar technologies.
          You can control cookies through your browser settings.
        </p>

        <h2 className="text-xl font-bold text-white">Contact us</h2>
        <p>
          Questions about this policy? Call us at {site.phoneDisplay} or visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
