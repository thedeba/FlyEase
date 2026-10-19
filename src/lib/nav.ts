export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

/** Primary navigation shown in the header (and mobile menu). */
export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Destinations", href: "/destinations" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

/** Secondary / footer navigation groups. */
export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Flight Help",
    items: [
      { label: "Flight Booking", href: "/flights/flight-booking-help" },
      { label: "Change a Flight", href: "/flights/change-flight-help" },
      { label: "Cancel a Flight", href: "/flights/cancel-flight-help" },
      { label: "Last-Minute Flights", href: "/flights/last-minute-flights" },
      { label: "International Flights", href: "/flights/international-flights" },
    ],
  },
  {
    heading: "Explore",
    items: [
      { label: "Destinations", href: "/destinations" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];
