export type Destination = {
  slug: string;
  city: string;
  region: string;
  kind: "Domestic" | "International";
  title: string;
  description: string;
  h1: string;
  intro: string;
  highlights: string[];
  blocks: { heading: string; body: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "new-york",
    city: "New York",
    region: "New York, USA",
    kind: "Domestic",
    title: "Flights to New York | Book, Change & Cancel by Phone – Call 24/7",
    description:
      "Need flights to New York? Call our US-based travel desk 24/7 to book, change or cancel flights to New York City and nearby airports.",
    h1: "Flights to New York – Book, Change or Cancel by Phone",
    intro:
      "New York is one of the busiest travel markets in the country, and fares move fast. Call our travel desk and we will help you book flights to New York, change your dates, or cancel with clear guidance — all in one call.",
    highlights: [
      "Multiple NYC-area airports to compare",
      "Business and weekend trip help",
      "Same-day and last-minute options",
    ],
    blocks: [
      {
        heading: "Choosing the right New York airport",
        body: "New York City is served by several airports, and the one you pick can change both your fare and your transfer time. An agent can talk through the options with you and help you book the arrival point that best fits your plans.",
      },
      {
        heading: "Changing New York travel dates",
        body: "Weather, work and plans all move quickly here. If your dates shift, call us to change your flight and rebook a New York trip that still works for you, including same-day changes when available.",
      },
      {
        heading: "Cancelling a New York flight",
        body: "If a New York trip falls through, we will help you cancel and explain whether a refund or travel credit applies under your fare rules, so there are no surprises.",
      },
    ],
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    region: "California, USA",
    kind: "Domestic",
    title: "Flights to Los Angeles | Book, Change & Cancel by Phone",
    description:
      "Book, change or cancel flights to Los Angeles by phone with US-based travel experts. 24/7 flight help for LAX and Southern California.",
    h1: "Flights to Los Angeles – Book, Change or Cancel by Phone",
    intro:
      "From quick business hops to long beach getaways, Los Angeles is a year-round destination. Our travel desk helps you book flights to LA, adjust your dates and understand cancellation options over the phone.",
    highlights: [
      "LAX and Southern California airports",
      "Flexible date and time changes",
      "Family and group seat help",
    ],
    blocks: [
      {
        heading: "Book LA flights without the tab overload",
        body: "Tell an agent your dates, departure city and how many travellers are flying, and we will search the options for you. It is the easiest way to compare fares when you would rather talk it through.",
      },
      {
        heading: "Rebooking a Los Angeles trip",
        body: "If your LA plans change, we can look at new dates, times or a different Southern California airport and help you rebook with the least disruption.",
      },
      {
        heading: "Cancellation and refund guidance",
        body: "Call to cancel a Los Angeles flight and we will explain your refund or credit options in plain language before you commit to anything.",
      },
    ],
  },
  {
    slug: "miami",
    city: "Miami",
    region: "Florida, USA",
    kind: "Domestic",
    title: "Flights to Miami | Book, Change & Cancel by Phone – Call 24/7",
    description:
      "Plan your Miami trip with phone support. Book, change or cancel flights to Miami with US-based agents available 24/7.",
    h1: "Flights to Miami – Book, Change or Cancel by Phone",
    intro:
      "Miami is a top pick for beach breaks, cruises and international connections. Call our travel desk to book flights to Miami, change your travel dates or cancel with clear refund guidance.",
    highlights: [
      "Cruise and connection friendly",
      "Peak-season fare help",
      "Group and family bookings",
    ],
    blocks: [
      {
        heading: "Coordinating Miami travel",
        body: "Many travellers connect through Miami before a cruise or an onward international flight. Tell us your full plan and we will help you book timing that leaves enough room.",
      },
      {
        heading: "Changing plans in Miami",
        body: "If your dates move, we can help change your flight and rebook a Miami itinerary that fits, including adjustments around high-season availability.",
      },
      {
        heading: "Cancelling a Miami flight",
        body: "Call us to cancel and we will walk you through what your fare allows, including any refund or travel credit, before you decide.",
      },
    ],
  },
  {
    slug: "las-vegas",
    city: "Las Vegas",
    region: "Nevada, USA",
    kind: "Domestic",
    title: "Flights to Las Vegas | Book, Change & Cancel by Phone",
    description:
      "Book, change or cancel Las Vegas flights by phone. US-based travel agents are available 24/7 for last-minute and weekend Vegas trips.",
    h1: "Flights to Las Vegas – Book, Change or Cancel by Phone",
    intro:
      "Las Vegas trips are often booked on a whim and moved just as quickly. Our travel desk is open around the clock to book flights to Vegas, change your dates and help with cancellations.",
    highlights: [
      "Weekend and event travel",
      "Last-minute booking help",
      "Date-change assistance",
    ],
    blocks: [
      {
        heading: "Last-minute Vegas trips",
        body: "Spur-of-the-moment travel is our specialty. Call and we will look at available flights for the dates you want and help you book before seats fill up.",
      },
      {
        heading: "Move your Vegas dates",
        body: "If an event or plan shifts, we can change your flight date and rebook so your trip still lines up, including same-day changes when possible.",
      },
      {
        heading: "Cancel with confidence",
        body: "Need to cancel a Las Vegas flight? We will explain your options and any refund or credit before you make the call.",
      },
    ],
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    region: "California, USA",
    kind: "Domestic",
    title: "Flights to San Francisco | Book, Change & Cancel by Phone",
    description:
      "Phone support for San Francisco flights. Book, change or cancel your Bay Area trip with US-based agents available 24/7.",
    h1: "Flights to San Francisco – Book, Change or Cancel by Phone",
    intro:
      "Whether it is a tech trip or a Bay Area getaway, we can help you book flights to San Francisco, adjust your itinerary and understand cancellation options — by phone.",
    highlights: [
      "Bay Area airports compared",
      "Business travel support",
      "Itinerary and date changes",
    ],
    blocks: [
      {
        heading: "Bay Area airport options",
        body: "San Francisco and the wider Bay Area have several airports. An agent can help you weigh convenience against fare and book the arrival point that suits your trip.",
      },
      {
        heading: "Flight changes for work trips",
        body: "Meetings move. Call us to change your San Francisco flight date or time and rebook quickly so your schedule stays on track.",
      },
      {
        heading: "Cancellation help",
        body: "If plans fall apart, we will help you cancel a San Francisco flight and explain your refund and credit choices clearly.",
      },
    ],
  },
  {
    slug: "chicago",
    city: "Chicago",
    region: "Illinois, USA",
    kind: "Domestic",
    title: "Flights to Chicago | Book, Change & Cancel by Phone – Call 24/7",
    description:
      "Book, change or cancel flights to Chicago by phone. US-based travel experts are available 24/7 for O'Hare and Midway trips.",
    h1: "Flights to Chicago – Book, Change or Cancel by Phone",
    intro:
      "Chicago is a major hub for both business and leisure travel. Call our travel desk to book flights to Chicago, change your dates or cancel with clear guidance.",
    highlights: [
      "O'Hare and Midway options",
      "Connections across the US",
      "Date and route changes",
    ],
    blocks: [
      {
        heading: "Chicago as a connection point",
        body: "Many itineraries pass through Chicago. If you are connecting, tell us your full route and we will help you book timing that reduces stress and missed connections.",
      },
      {
        heading: "Changing a Chicago itinerary",
        body: "We can help change your flight date, time or route and rebook a Chicago trip that fits — including winter weather flexibility.",
      },
      {
        heading: "Cancelling a Chicago flight",
        body: "Call to cancel and we will explain what your ticket allows, including any refund or travel credit, before you decide.",
      },
    ],
  },
  {
    slug: "seattle",
    city: "Seattle",
    region: "Washington, USA",
    kind: "Domestic",
    title: "Flights to Seattle | Book, Change & Cancel by Phone",
    description:
      "Plan a Pacific Northwest trip by phone. Book, change or cancel flights to Seattle with US-based agents available 24/7.",
    h1: "Flights to Seattle – Book, Change or Cancel by Phone",
    intro:
      "Seattle is a gateway to the Pacific Northwest and international routes alike. Our travel desk helps you book flights to Seattle, adjust dates and cancel with confidence.",
    highlights: [
      "Pacific Northwest getaways",
      "International connections",
      "Flexible date changes",
    ],
    blocks: [
      {
        heading: "Seattle and the Pacific Northwest",
        body: "Whether you are heading to the city or onward into the region, an agent can help you pick flights and timing that match your plans.",
      },
      {
        heading: "Rebooking Seattle travel",
        body: "Plans change — we can help change your flight date or route and rebook a Seattle itinerary that works for you.",
      },
      {
        heading: "Cancellation and refund help",
        body: "Call us to cancel a Seattle flight and we will explain your refund and credit options in plain English.",
      },
    ],
  },
  {
    slug: "orlando",
    city: "Orlando",
    region: "Florida, USA",
    kind: "Domestic",
    title: "Flights to Orlando | Book, Change & Cancel by Phone – Call 24/7",
    description:
      "Family-friendly flight help for Orlando. Book, change or cancel flights to Orlando by phone with US-based agents, available 24/7.",
    h1: "Flights to Orlando – Book, Change or Cancel by Phone",
    intro:
      "Orlando is a family favourite, and group trips mean more moving parts. Call our travel desk to book flights to Orlando, keep seats together, change dates or cancel with guidance.",
    highlights: [
      "Family and group seating",
      "School-holiday travel",
      "Multi-traveller bookings",
    ],
    blocks: [
      {
        heading: "Family and group bookings",
        body: "Travelling with kids or a larger group? Tell us how many seats you need and we will help find options and work toward keeping everyone together.",
      },
      {
        heading: "Changing an Orlando trip",
        body: "School calendars and plans shift. We can help change your flight dates and rebook an Orlando trip that still fits the whole family.",
      },
      {
        heading: "Cancelling an Orlando flight",
        body: "If your trip changes, call us to cancel and we will explain any refund or credit that applies to your fare.",
      },
    ],
  },
  {
    slug: "london",
    city: "London",
    region: "United Kingdom",
    kind: "International",
    title: "Flights to London | International Booking Help – Call 24/7",
    description:
      "International flight help for London. Book, change or cancel long-haul flights to London with US-based travel agents, 24/7.",
    h1: "Flights to London – International Booking & Change Help",
    intro:
      "Long-haul trips to London need a little more planning. Call our travel desk for international flight booking help, date changes and cancellation guidance on UK routes.",
    highlights: [
      "Long-haul and overnight flights",
      "Connection and layover help",
      "Passport-name checks",
    ],
    blocks: [
      {
        heading: "Planning a long-haul trip",
        body: "Overnight flights and connections can be tricky. An agent can help you think through departure times, layovers and arrival days so the trip flows.",
      },
      {
        heading: "Changing an international itinerary",
        body: "International changes often have different rules. Call us and we will explain what your fare allows before you change your London dates or route.",
      },
      {
        heading: "Cancelling an international flight",
        body: "We will help you understand refund and credit options on international fares, which can vary widely, before you decide to cancel.",
      },
    ],
  },
  {
    slug: "paris",
    city: "Paris",
    region: "France",
    kind: "International",
    title: "Flights to Paris | International Booking Help – Call 24/7",
    description:
      "Book, change or cancel international flights to Paris by phone. US-based travel experts available 24/7 for long-haul Europe trips.",
    h1: "Flights to Paris – International Booking & Change Help",
    intro:
      "Paris is a bucket-list destination, and booking it right makes the trip. Call our travel desk for international flight booking help, changes and cancellation guidance.",
    highlights: [
      "Europe long-haul specialists",
      "Multi-city Europe routing",
      "Document and name checks",
    ],
    blocks: [
      {
        heading: "Booking Europe the easy way",
        body: "If Paris is one stop on a wider Europe trip, tell us the whole plan. We can help book flights that connect sensibly across your itinerary.",
      },
      {
        heading: "Adjusting Paris travel dates",
        body: "International date changes can carry fees. Call us and we will explain the options and help you rebook a Paris trip that fits.",
      },
      {
        heading: "Cancelling a Paris flight",
        body: "Call to cancel an international flight and we will explain your refund and credit choices in plain language.",
      },
    ],
  },
  {
    slug: "dubai",
    city: "Dubai",
    region: "United Arab Emirates",
    kind: "International",
    title: "Flights to Dubai | International Booking Help – Call 24/7",
    description:
      "International flight help for Dubai. Book, change or cancel flights to Dubai with US-based travel agents available 24/7.",
    h1: "Flights to Dubai – International Booking & Change Help",
    intro:
      "Dubai is a major long-haul hub and a destination in its own right. Our travel desk helps you book international flights to Dubai, change plans and cancel with clear guidance.",
    highlights: [
      "Long-haul hub connections",
      "Layover planning",
      "Flexible date changes",
    ],
    blocks: [
      {
        heading: "Connecting through Dubai",
        body: "Many travellers connect in Dubai on the way to Asia, Africa or the Middle East. Tell us your final destination and we will help you plan the routing.",
      },
      {
        heading: "Changing a Dubai trip",
        body: "Call to change your flight dates or route and we will explain what your international fare allows before you rebook.",
      },
      {
        heading: "Cancellation guidance",
        body: "We will help you understand refund and credit options on your Dubai flight so you can decide with confidence.",
      },
    ],
  },
  {
    slug: "toronto",
    city: "Toronto",
    region: "Canada",
    kind: "International",
    title: "Flights to Toronto | Book, Change & Cancel by Phone – Call 24/7",
    description:
      "Book, change or cancel flights to Toronto by phone. US-based travel agents provide cross-border flight help around the clock.",
    h1: "Flights to Toronto – Book, Change or Cancel by Phone",
    intro:
      "Toronto is a short cross-border hop for many US travellers and a gateway to Canada. Call our travel desk to book flights to Toronto, change dates or cancel with guidance.",
    highlights: [
      "Cross-border travel help",
      "Short-haul and connection options",
      "Document reminders",
    ],
    blocks: [
      {
        heading: "Cross-border travel made simple",
        body: "Flying to Canada means a few extra details. An agent can help you book and flag the document basics to keep in mind before you travel.",
      },
      {
        heading: "Changing Toronto plans",
        body: "We can help change your flight date or route and rebook a Toronto trip that works for you.",
      },
      {
        heading: "Cancelling a Toronto flight",
        body: "Call us to cancel and we will explain any refund or credit that applies to your fare before you decide.",
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

/** Featured photo per destination slug (falls back to a gradient if missing). */
export const destinationImages: Record<string, string> = {
  "new-york": "/images/city-new-york.webp",
  "san-francisco": "/images/city-san-francisco.webp",
  "los-angeles": "/images/city-los-angeles.webp",
  miami: "/images/city-miami.webp",
  "las-vegas": "/images/city-las-vegas.webp",
  chicago: "/images/city-chicago.webp",
  seattle: "/images/city-seattle.webp",
  orlando: "/images/city-orlando.webp",
  london: "/images/city-london.webp",
  paris: "/images/city-paris.webp",
  dubai: "/images/city-dubai.webp",
  toronto: "/images/city-toronto.webp",
};
