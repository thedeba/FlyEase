import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/lib/destinations";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Site Map | All Pages – FlyEase Travel Desk",
  description:
    "Browse every page on the FlyEase Travel Desk website: flight help, destinations, guides and company information.",
  alternates: { canonical: "/sitemap" },
};

const groups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Reviews", href: "/reviews" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Destinations", href: "/destinations" },
    ],
  },
  {
    heading: "Flight Help",
    links: [
      { label: "Flight Booking", href: "/flights/flight-booking-help" },
      { label: "Change a Flight", href: "/flights/change-flight-help" },
      { label: "Cancel a Flight", href: "/flights/cancel-flight-help" },
      { label: "Last-Minute Flights", href: "/flights/last-minute-flights" },
      { label: "International Flights", href: "/flights/international-flights" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <>
      <PageHero
        eyebrow="Site Map"
        title="Every page in one place"
        intro="A full list of what you will find on this site. Prefer a faster route? Just call us — that is the whole point."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sky-soft/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Destinations">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Destinations
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-sky-soft/80 transition-colors hover:text-white"
                  >
                    Flights to {dest.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Blog">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Guides
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sky-soft/80 transition-colors hover:text-white"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <FinalCta />
    </>
  );
}
