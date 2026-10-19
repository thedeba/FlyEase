export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  intro: string;
  blocks: { heading: string; body: string }[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-book-a-flight-by-phone",
    title: "How to Book a Flight by Phone: A Simple Step-by-Step Guide",
    description:
      "Learn how to book a flight by phone, what to have ready, and the questions to ask so you get the right fare the first time.",
    category: "Booking",
    readTime: "5 min read",
    date: "2026-01-12",
    author: "FlyEase Travel Desk",
    excerpt:
      "Phone booking is still one of the fastest ways to sort a trip. Here is exactly how it works and what to have ready.",
    intro:
      "Booking a flight online is not for everyone — especially when your plans are specific, your group is large, or you simply want a person to confirm the details. Here is a practical walkthrough of booking a flight by phone.",
    blocks: [
      {
        heading: "1. Have the essentials ready",
        body: "Before you call, note your departure city, destination, travel dates, number of travellers and full names as they appear on IDs. If you have flexible dates, say so — it gives the agent more room to find a better fare.",
      },
      {
        heading: "2. Describe the trip, not the website",
        body: "You do not need to know which fare class or route you want. Tell the agent what matters: budget, timing, nonstop preference or a specific arrival window. They can translate that into real options.",
      },
      {
        heading: "3. Confirm before you pay",
        body: "Ask the agent to read back the dates, times, airports and traveller names. Confirm the total price, including any service fees, and ask what the change and cancellation rules are for the fare you are buying.",
      },
      {
        heading: "4. Keep your confirmation",
        body: "Once booked, save the confirmation email and booking reference. If you need to change or cancel later, that reference is the fastest way to get help.",
      },
    ],
    takeaways: [
      "Write down dates, airports and traveller names first",
      "Ask about change and cancellation rules before paying",
      "Confirm the total price, including fees",
    ],
  },
  {
    slug: "change-flight-date-without-overpaying",
    title: "How to Change a Flight Date Without Overpaying",
    description:
      "A practical guide to changing your flight date, understanding fare rules, and keeping change costs as low as possible.",
    category: "Flight Changes",
    readTime: "6 min read",
    date: "2026-01-20",
    author: "FlyEase Travel Desk",
    excerpt:
      "Changing a flight date can be simple or expensive depending on your fare. These steps help you avoid nasty surprises.",
    intro:
      "Flight changes are one of the most common reasons people call a travel desk. The cost depends on your fare rules, how far ahead you are changing, and whether fares on the new date are higher. Here is how to approach it.",
    blocks: [
      {
        heading: "Know your fare type",
        body: "Basic economy fares often restrict changes or charge a fee, while flexible fares may allow changes with little or no penalty. Ask what your specific ticket allows before assuming the worst — or the best.",
      },
      {
        heading: "Check the new date's fare",
        body: "Even when a change fee is waived, you may owe the difference between your original fare and the current fare on the new date. Flexible dates can dramatically reduce that difference.",
      },
      {
        heading: "Change sooner rather than later",
        body: "Availability and prices get worse as the date approaches. If you already know you need to move, call early. Waiting can turn a small difference into a large one.",
      },
      {
        heading: "Ask about same-day options",
        body: "Some fares allow same-day changes or standby for a reduced cost. It is worth asking, especially for business travel where timing is tight.",
      },
    ],
    takeaways: [
      "Ask what your fare type actually permits",
      "Be flexible on dates to reduce the fare difference",
      "Call as soon as you know your plans changed",
    ],
  },
  {
    slug: "flight-cancellation-refund-guide",
    title: "Flight Cancellation and Refund Options, Explained",
    description:
      "Understand refunds, travel credits and cancellation rules before you cancel a flight. A clear guide to your options.",
    category: "Cancellations",
    readTime: "6 min read",
    date: "2026-02-02",
    author: "FlyEase Travel Desk",
    excerpt:
      "Refundable, non-refundable, credit only — here is what those words actually mean when you cancel a flight.",
    intro:
      "Cancelling a flight is stressful enough without confusing fare language. Before you cancel, it helps to understand the difference between a refund, a travel credit and a total loss.",
    blocks: [
      {
        heading: "Refund vs. credit",
        body: "A refund returns money to your original payment method. A travel credit keeps value with the airline for future use, often with an expiry date. Some fares offer one, some the other, and some neither.",
      },
      {
        heading: "Timing matters",
        body: "Many tickets can be cancelled within 24 hours of booking for a refund under certain conditions. After that, your fare rules take over. Check the timing before you assume a refund is impossible.",
      },
      {
        heading: "Airline-initiated changes",
        body: "If the airline significantly changes or cancels your flight, you may have more flexibility than a voluntary cancellation. Ask what applies before you act.",
      },
      {
        heading: "Get it in writing",
        body: "Ask for confirmation of the cancellation, any credit value and its expiry. Keep that record until the matter is fully resolved.",
      },
    ],
    takeaways: [
      "Know whether you are getting a refund or a credit",
      "Ask about 24-hour cancellation rules",
      "Save written confirmation of the outcome",
    ],
  },
  {
    slug: "last-minute-flight-booking-tips",
    title: "Last-Minute Flight Booking Tips for Same-Day Travel",
    description:
      "Flying today or tomorrow? These last-minute flight booking tips help you move fast without overpaying.",
    category: "Last-Minute Travel",
    readTime: "5 min read",
    date: "2026-02-14",
    author: "FlyEase Travel Desk",
    excerpt:
      "When you need to fly now, speed and flexibility are everything. Here is how to book last-minute without panicking.",
    intro:
      "Last-minute travel is rarely planned, but it can still be handled well. The key is to move quickly, stay flexible and avoid a few common traps.",
    blocks: [
      {
        heading: "Call early in the day",
        body: "Availability changes throughout the day and prices tend to climb as departure nears. If you know you need to travel today, start looking as early as possible.",
      },
      {
        heading: "Flex on airports and times",
        body: "Being open to a nearby airport or an earlier or later departure can unlock options that a narrow search misses. Tell the agent what you can adjust.",
      },
      {
        heading: "Pack carry-on if you can",
        body: "Checked bags add time and complexity on same-day trips. If you can travel light, you will have more flights to choose from and a smoother airport experience.",
      },
      {
        heading: "Confirm the total cost",
        body: "Last-minute fares can include extra fees. Ask for the full total, including bags and service fees, before you commit.",
      },
    ],
    takeaways: [
      "Start early — availability shrinks fast",
      "Be flexible on airports and departure times",
      "Ask for the all-in total before booking",
    ],
  },
  {
    slug: "international-flight-booking-checklist",
    title: "International Flight Booking Checklist Before You Call",
    description:
      "A checklist to prepare for international flight booking: documents, names, connections and questions to ask.",
    category: "International",
    readTime: "7 min read",
    date: "2026-03-01",
    author: "FlyEase Travel Desk",
    excerpt:
      "International trips need more than a destination. Use this checklist so your booking call goes smoothly.",
    intro:
      "International flight booking involves more detail than a domestic hop. A few minutes of preparation can save hours of rework later. Run through this checklist before you call.",
    blocks: [
      {
        heading: "Passport names and validity",
        body: "Book tickets in the exact name shown on each traveller's passport. Check passport validity too — many countries require several months beyond your return date.",
      },
      {
        heading: "Visa and entry requirements",
        body: "Entry rules vary by destination and nationality. Confirm what applies to your trip before booking. Our agents can flag common considerations, but you are responsible for meeting entry requirements.",
      },
      {
        heading: "Connections and layovers",
        body: "For long-haul trips, think about connection times and whether you are changing airports. A short layover can be risky; a long one can be tiring. Talk it through before you book.",
      },
      {
        heading: "Baggage and fare rules",
        body: "International baggage allowances vary widely. Ask what is included and what it costs to add more, and confirm the change and cancellation rules for your fare.",
      },
    ],
    takeaways: [
      "Book with exact passport names",
      "Check visa and passport validity early",
      "Review baggage and connection details before paying",
    ],
  },
  {
    slug: "family-group-flight-booking-tips",
    title: "Flying with Family: Group Booking Tips for Stress-Free Travel",
    description:
      "Tips for booking family and group flights by phone, keeping seats together, and managing changes with kids.",
    category: "Family Travel",
    readTime: "5 min read",
    date: "2026-03-18",
    author: "FlyEase Travel Desk",
    excerpt:
      "Seats together, sensible connections and a little flexibility make family travel much easier. Here is how to plan.",
    intro:
      "Family and group travel multiplies every detail: more tickets, more names, more seats to coordinate. A short call can be far easier than juggling multiple bookings online.",
    blocks: [
      {
        heading: "Book everyone together",
        body: "When possible, book the whole group on one reservation. It makes seat assignment, changes and cancellations much simpler later.",
      },
      {
        heading: "Ask about seat assignment",
        body: "Seats are not always guaranteed to be together, especially on basic fares. Ask what the airline's policy is and whether you can reserve seats in advance.",
      },
      {
        heading: "Choose connections wisely",
        body: "With children or older travellers, a slightly longer layover is often worth it. Avoid very short connections that leave no room for delays.",
      },
      {
        heading: "Keep documents organised",
        body: "Have every traveller's ID and name details ready before you call. One accurate booking beats several corrections later.",
      },
    ],
    takeaways: [
      "Book the group on one reservation when possible",
      "Confirm seat-together policies up front",
      "Prefer comfortable connections over tight ones",
    ],
  },
  {
    slug: "flight-name-correction-help",
    title: "Name Correction on a Flight Ticket: What to Do",
    description:
      "A misspelled name can cause problems at the airport. Learn how name corrections work and what to do before you fly.",
    category: "Booking",
    readTime: "4 min read",
    date: "2026-04-04",
    author: "FlyEase Travel Desk",
    excerpt:
      "Spotted a typo on your ticket? Address it early — name corrections are much easier before departure day.",
    intro:
      "A small typo in a name can turn into a big problem at check-in. If you notice an error, act early and understand what type of correction you need.",
    blocks: [
      {
        heading: "Minor vs. major corrections",
        body: "Small fixes, like a missing middle initial or a swapped letter, are often handled differently from a full name change. Ask what your booking allows before assuming.",
      },
      {
        heading: "Corrections are not transfers",
        body: "Changing a ticket to a completely different person is not a name correction — it is usually treated as a cancellation and rebooking. Be clear about what you actually need.",
      },
      {
        heading: "Act before you fly",
        body: "The closer you get to departure, the harder and more expensive corrections become. Call as soon as you spot the issue and keep the confirmation.",
      },
    ],
    takeaways: [
      "Check your name the moment you receive the ticket",
      "Ask whether your issue is a correction or a transfer",
      "Handle it well before departure day",
    ],
  },
  {
    slug: "common-flight-change-mistakes",
    title: "Common Flight Change Mistakes to Avoid",
    description:
      "Avoid these common flight change mistakes, from cancelling before checking options to ignoring fare differences.",
    category: "Flight Changes",
    readTime: "5 min read",
    date: "2026-04-22",
    author: "FlyEase Travel Desk",
    excerpt:
      "A few avoidable mistakes can make a simple flight change far more expensive. Here is what to watch for.",
    intro:
      "Most flight changes go smoothly, but a few common missteps can cost money or create bigger problems. Avoid these before you call.",
    blocks: [
      {
        heading: "Cancelling before checking change options",
        body: "Some travellers cancel first and then try to rebook, only to lose value. Ask about changing first — it is often cheaper than cancelling and starting over.",
      },
      {
        heading: "Assuming the fee is the whole cost",
        body: "A waived change fee does not mean a free change. You may still owe the fare difference on the new date. Always ask for the full cost.",
      },
      {
        heading: "Waiting until the last minute",
        body: "Prices and availability get worse as departure approaches. If your plans change, call early rather than hoping the fare improves.",
      },
      {
        heading: "Forgetting the rest of the itinerary",
        body: "Changing one leg can affect connections, car rentals and hotel plans. Review the full trip, not just the flight you are changing.",
      },
    ],
    takeaways: [
      "Check change options before cancelling",
      "Ask for the total cost, not just the fee",
      "Change early and review the whole itinerary",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
