// =============================================================================
// SINGLE SOURCE OF TRUTH
// -----------------------------------------------------------------------------
// Change the phone number, brand name or any marketing copy HERE and it
// propagates across the whole site: header, hero, every CTA, metadata,
// JSON-LD structured data and click-to-call tracking.
//
// Phone number, site URL and contact email come from `.env.local`
// (NEXT_PUBLIC_PHONE_DISPLAY / _E164, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_CONTACT_EMAIL).
//
// ⚠️  PLACEHOLDERS: replace `stats` and social links before going live.
//     `testimonials` are real customer reviews — keep them up to date only with
//     genuine, verifiable reviews.
// =============================================================================

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  ctaTitle: string;
  features: string[];
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export type Step = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Topic = {
  title: string;
  description: string;
  slug: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

// -----------------------------------------------------------------------------
// Environment-backed values
// -----------------------------------------------------------------------------
// The phone number, site URL and contact email are read from environment
// variables so they can be managed per-deployment. Set them in `.env.local`
// (see `.env.example`). Fallbacks keep the site working in a fresh checkout.
const envSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
const envPhoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(800) 000-0000";
const envPhoneE164 = process.env.NEXT_PUBLIC_PHONE_E164 || "+18000000000";
const envContactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@example.com";

export const site = {
  // ---------------------------------------------------------------- Identity
  brandName: "FlyEase Travel Desk",
  tagline: "Book, Change or Cancel Flights – Just One Call Away",
  shortDescription:
    "US-based, 24/7 phone support for flight booking, flight changes and cancellations.",

  // ------------------------------------------------------------- Contact info
  // Configured via .env.local (NEXT_PUBLIC_PHONE_DISPLAY / _E164).
  phoneDisplay: envPhoneDisplay,
  phoneE164: envPhoneE164, // E.164 format, used in tel: links and JSON-LD
  email: envContactEmail, // used on the contact page only
  hours: "24/7",
  areaServed: "US",
  country: "United States",
  serviceRegion: "Nationwide (USA)",

  // --------------------------------------------------------------------- URLs
  // Configured via .env.local (NEXT_PUBLIC_SITE_URL).
  siteUrl: envSiteUrl,

  // --------------------------------------------------------------- Social
  social: {
    // Placeholder links – update or remove before launch.
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },

  // ------------------------------------------------------------------- Copy
  hero: {
    h1: "Flight Booking, Change & Cancellation Help – Call Now",
    subheading:
      "Talk to a travel expert 24/7 to book cheap flights, change your flight date, or cancel and get refund guidance. Skip the long hold times.",
    reassurance: "Available 24/7 • Free to call • No obligation",
  },

  cta: {
    label: "Call Now",
    heroLabel: "Call",
    stickyLabel: "Tap to Call Now",
    finalLabel: "Call Now for Flight Help",
  },

  // --------------------------------------------------------------- Services
  services: [
    {
      id: "booking",
      title: "Flight Booking",
      description:
        "Book domestic or international flights by phone and let a travel expert find you great fares — quickly and without the guesswork.",
      icon: "plane",
      ctaTitle: "Call to book a flight",
      features: ["Round trip & one way", "Last-minute deals", "Family & group seats"],
    },
    {
      id: "change",
      title: "Flight Change / Rebooking",
      description:
        "Need a different date, time or route? We help you change your flight and rebook so your plans stay on track.",
      icon: "swap",
      ctaTitle: "Call to change a flight date",
      features: ["Date & time changes", "Rebooking help", "Same-day changes"],
    },
    {
      id: "cancellation",
      title: "Flight Cancellation & Refund Guidance",
      description:
        "Cancel a flight and understand your refund or travel-credit options before you decide — no confusing fine print.",
      icon: "shield",
      ctaTitle: "Call for flight cancellation help",
      features: ["Cancellation help", "Refund guidance", "Credit options"],
    },
  ] satisfies Service[],

  // --------------------------------------------------------------- Benefits
  benefits: [
    {
      title: "Fast Help",
      description:
        "Skip the hold music. Get a real person on the line who can act on your booking right away.",
      icon: "bolt",
    },
    {
      title: "24/7 Support",
      description:
        "Early morning or late at night, our travel desk is open every day of the year.",
      icon: "clock",
    },
    {
      title: "Friendly US-Based Agents",
      description:
        "Speak with knowledgeable, US-based travel agents who explain every step in plain English.",
      icon: "headset",
    },
    {
      title: "Simple Process",
      description:
        "One call is all it takes. Tell us your trip and we handle the rest for you.",
      icon: "check",
    },
  ] satisfies Benefit[],

  // ------------------------------------------------------------------ Steps
  steps: [
    {
      title: "Call Us",
      description:
        "Tap the call button and connect with a travel expert in moments — no apps, no forms.",
      icon: "phone",
    },
    {
      title: "Tell Us Your Trip",
      description:
        "Share your dates, destination and any preferences. We listen and confirm the details with you.",
      icon: "chat",
    },
    {
      title: "We Handle It",
      description:
        "We book, change or cancel your flight and walk you through the next steps and any options.",
      icon: "plane",
    },
  ] satisfies Step[],

  // ------------------------------------------------------------------ Stats
  // ⚠️ PLACEHOLDER statistics – replace with real, verifiable numbers.
  stats: [
    { value: 250, suffix: "K+", label: "Calls handled" },
    { value: 24, suffix: "/7", label: "Live phone support" },
    { value: 98, suffix: "%", label: "Caller satisfaction" },
    { value: 60, suffix: "+", label: "Destinations covered" },
  ] satisfies Stat[],

  // ----------------------------------------------------------- Testimonials
  // Real customer reviews supplied by the business owner. Update this list as
  // new reviews come in — /reviews, the home section and the Review
  // structured data all read from here.
  testimonials: [
    {
      name: "Sarah Mitchell",
      location: "Austin, TX",
      quote:
        "Booking my flight was quick and hassle-free. The support team helped me find a suitable flight and made the entire process simple. Great experience!",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      location: "Dallas, TX",
      quote:
        "I needed a last-minute flight and was able to get assistance quickly. The booking process was smooth, and the customer service was very helpful.",
      rating: 5,
    },
    {
      name: "Emily Carter",
      location: "Orlando, FL",
      quote:
        "Excellent service from start to finish. Finding flight options and getting help with my booking was easy. I would definitely consider using this service again.",
      rating: 5,
    },
    {
      name: "James Wilson",
      location: "Phoenix, AZ",
      quote:
        "My travel plans changed unexpectedly, and I needed to reschedule my flight. The team explained my options clearly and helped me through the process.",
      rating: 5,
    },
    {
      name: "David Anderson",
      location: "Atlanta, GA",
      quote:
        "I needed to adjust my departure date and wanted to understand the available options. The support team guided me through the next steps professionally.",
      rating: 5,
    },
    {
      name: "Jessica Parker",
      location: "Miami, FL",
      quote:
        "I had to cancel my trip unexpectedly and needed help understanding the cancellation process. The team explained the available options and what to expect.",
      rating: 5,
    },
    {
      name: "Robert Harris",
      location: "Houston, TX",
      quote:
        "The cancellation process was explained clearly, including the possible refund options. I appreciated having someone guide me through the process.",
      rating: 5,
    },
    {
      name: "Amanda Lewis",
      location: "Los Angeles, CA",
      quote:
        "When my travel plans fell through, I needed quick guidance on cancelling my flight. The customer support experience was straightforward and reassuring.",
      rating: 5,
    },
  ] satisfies Testimonial[],

  // -------------------------------------------------------------- SEO topics
  topics: [
    {
      title: "Book a flight by phone",
      description:
        "Prefer talking to a person? Call our travel desk to book a flight by phone in minutes.",
      slug: "flight-booking-help",
    },
    {
      title: "Change flight date without hassle",
      description:
        "Move your trip to a new date and get rebooked on a schedule that fits your plans.",
      slug: "change-flight-help",
    },
    {
      title: "Cancel a flight and understand refund options",
      description:
        "Cancel with confidence and get clear guidance on refunds, credits and next steps.",
      slug: "cancel-flight-help",
    },
    {
      title: "Last-minute flight booking",
      description:
        "Need to fly today or tomorrow? Call now for last-minute flight options and fares.",
      slug: "last-minute-flights",
    },
    {
      title: "International & domestic flights",
      description:
        "From short domestic hops to long-haul international trips, we help with both.",
      slug: "international-flights",
    },
    {
      title: "Group and family flight bookings",
      description:
        "Seat the whole family or group together with help from a real travel agent.",
      slug: "flight-booking-help",
    },
    {
      title: "Name correction help",
      description:
        "Fix a misspelled name on your booking so you can travel without a hiccup.",
      slug: "change-flight-help",
    },
    {
      title: "Same-day flight changes",
      description:
        "Plans changed at the last minute? Call for same-day flight change assistance.",
      slug: "change-flight-help",
    },
    {
      title: "Round trip & one way flights",
      description:
        "Compare round trip and one way options and book the one that fits your trip.",
      slug: "flight-booking-help",
    },
    {
      title: "Flight itinerary change",
      description:
        "Adjust your itinerary, connections or departure times with a single call.",
      slug: "change-flight-help",
    },
  ] satisfies Topic[],

  // ------------------------------------------------------------------- FAQs
  faqs: [
    {
      question: "How can I book a flight by phone?",
      answer:
        "Just tap any call button on this page to reach our travel desk. Tell the agent your departure city, destination and travel dates, and we will walk you through available flight options and book the one you choose.",
    },
    {
      question: "Can I change the date of a flight I already booked?",
      answer:
        "Yes. Call our travel experts and we will check the options for changing your flight date. We will explain any applicable rules or fees up front so there are no surprises before you confirm.",
    },
    {
      question: "How do I cancel a flight and ask for a refund?",
      answer:
        "Call us and we will guide you through cancelling your flight, explain whether a refund or travel credit applies, and outline the next steps. We help you understand your options before you make a decision.",
    },
    {
      question: "Is calling free?",
      answer:
        "Calling our travel desk is free and there is no obligation to proceed. Standard rates from your phone provider may apply, but we do not charge you simply to talk with an agent.",
    },
    {
      question: "How fast can I get help with a last-minute flight?",
      answer:
        "Our phone lines are open 24/7, so you can reach an agent at any time. For last-minute travel, call as early as possible and we will work to find you the fastest available options.",
    },
    {
      question: "Do you help with international flights?",
      answer:
        "Yes. We assist with both domestic and international flight reservations, changes and cancellations. Tell the agent where you are travelling and we will help from there.",
    },
    {
      question: "What information should I keep ready before calling?",
      answer:
        "It helps to have your travel dates, departure and arrival cities, number of travellers and, if you already booked, any existing booking reference. But do not worry if you are missing something — we can still help.",
    },
    {
      question: "Are you affiliated with any airline?",
      answer:
        "No. FlyEase Travel Desk is an independent travel service and is not affiliated with, endorsed by, or sponsored by any airline. All airline names and trademarks belong to their respective owners.",
    },
  ] satisfies Faq[],

  // ------------------------------------------------------- Popular copy block
  popularContent: {
    heading: "Popular Flight Help Topics",
    intro:
      "Whether you are planning a trip months ahead or need help right now, our travel desk is built around one simple idea: a real person on the phone who can get things done. Below are the most common ways callers use our service every day.",
    paragraphs: [
      "Booking a flight by phone is ideal when you want answers, not endless tabs. Instead of comparing dozens of options on your own, you can describe your trip to a travel expert and have them search for cheap flight booking options that match your dates and budget. This is especially useful for round trip and one way fares, family or group travel where seats need to sit together, and last-minute flight deals when timing matters most.",
      "Flight changes are one of the most stressful parts of travel, and they are exactly where phone support shines. If your plans move, call us to change your flight date, adjust your itinerary or rebook a flight entirely. A US-based agent can explain the available options and any rules that apply, so you can decide quickly and get back to enjoying your trip. Same-day flight changes and name corrections are common requests we handle every day.",
      "Cancellations and refunds come with a lot of fine print, and that is where clear guidance helps. Call our cancellation support line to understand what happens when you cancel a flight, whether a refund or travel credit is available, and what steps come next. We do not pressure you — we simply make sure you know your options before you act. For international flight booking and domestic trips alike, one call is often all it takes to get moving again.",
    ],
    closing:
      "Have a question that is not listed here? Pick up the phone and ask. Our travel support team is available 24/7 and ready to help with flight booking, flight change and cancellation requests, any time of day.",
  },

  // ------------------------------------------------------------- Disclaimer
  disclaimer:
    "FlyEase Travel Desk is an independent travel service and is not affiliated with, endorsed by, or sponsored by any airline. All airline names and trademarks belong to their respective owners. Service fees may apply.",
} as const;

export type Site = typeof site;

// Convenience helpers ---------------------------------------------------------
export const telHref = `tel:${site.phoneE164}`;
