export type FlightPageSection = {
  heading: string;
  body: string;
};

export type FlightPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: FlightPageSection[];
  callout: string;
};

// Five sample landing pages, each with unique copy and internal links back to
// the home page. Add more entries here and they appear in the sitemap and as
// static routes automatically.
export const flightPages: FlightPage[] = [
  {
    slug: "flight-booking-help",
    eyebrow: "Flight Booking",
    title: "Book Flights by Phone | Cheap Flight Booking Help – Call 24/7",
    description:
      "Book domestic and international flights by phone with US-based travel experts. Cheap flight booking, round trip and one way fares, 24/7.",
    h1: "Book Flights by Phone – Fast, Simple Flight Booking Help",
    intro:
      "Prefer to talk to a real person instead of clicking through endless tabs? Call our travel desk to book a flight by phone. We search for options that fit your dates, route and budget, then handle the booking for you.",
    sections: [
      {
        heading: "Why book a flight by phone?",
        body: "Phone booking is ideal when your plans are specific or your trip is complicated. A travel agent can compare round trip and one way flights, check seat availability for families or groups, and explain stopovers and connection times in plain English — all in one conversation.",
      },
      {
        heading: "Domestic and international flight booking",
        body: "We help with short domestic hops and long-haul international trips alike. Tell us where you are flying from and to, your travel dates and how many people are travelling, and we will walk you through the best available options.",
      },
      {
        heading: "Last-minute and cheap flight deals",
        body: "When you need to fly soon, calling can save time. Our agents look at last-minute flight deals and date flexibility so you can decide quickly. Availability can change fast, so call as early as you can.",
      },
    ],
    callout:
      "Ready to book? Call now and have your dates and destinations ready.",
  },
  {
    slug: "change-flight-help",
    eyebrow: "Flight Changes",
    title: "Change Flight Date & Rebook | Flight Change Help – Call 24/7",
    description:
      "Need to change a flight date or rebook? Talk to a US-based agent 24/7 for flight change assistance, same-day changes and itinerary updates.",
    h1: "Change Your Flight Date – Flight Change & Rebooking Help",
    intro:
      "Plans change, and your booking should not hold you back. Call us to change flight dates, adjust your route or rebook a flight entirely. We explain your options and any applicable rules before you confirm.",
    sections: [
      {
        heading: "Change a flight date without the stress",
        body: "If your travel dates move, our agents can look at available options on a new date and explain how the change works. We keep it straightforward: you tell us the new timing, we tell you what is possible.",
      },
      {
        heading: "Rebook a flight or adjust your itinerary",
        body: "Sometimes a different flight, connection or departure time suits you better. Call for flight itinerary changes and rebooking help — including same-day changes when you need to move fast.",
      },
      {
        heading: "Name corrections and small fixes",
        body: "A misspelled name can cause real problems at the airport. If you spot an error, call us and we will help with a name correction so you can travel with confidence.",
      },
    ],
    callout:
      "Need a different date or time? Call now for flight change assistance.",
  },
  {
    slug: "cancel-flight-help",
    eyebrow: "Cancellations & Refunds",
    title: "Cancel a Flight & Refund Guidance | Cancellation Help – Call 24/7",
    description:
      "Cancel a flight and understand your refund or travel credit options. Get clear cancellation and refund guidance by phone, available 24/7.",
    h1: "Cancel a Flight – Clear Cancellation & Refund Guidance",
    intro:
      "Cancelling can feel confusing, especially with fine print and change rules. Call our travel desk to cancel a flight and understand whether a refund, travel credit or other option applies — before you decide.",
    sections: [
      {
        heading: "Understand your refund options",
        body: "Not every ticket is refundable, and the rules depend on your fare. Our agents explain what applies to your booking in plain language so you know what to expect from a refund or credit.",
      },
      {
        heading: "Cancel with confidence, not pressure",
        body: "We are here to give you clear guidance, not to rush you. Ask all the questions you need, and we will help you understand the next steps and timing.",
      },
      {
        heading: "After you cancel",
        body: "Once your cancellation is handled, we can explain what happens next — including any confirmation, credit details or follow-up you should watch for. If you decide to rebook later, we can help with that too.",
      },
    ],
    callout:
      "Thinking about cancelling? Call now for refund and cancellation guidance.",
  },
  {
    slug: "last-minute-flights",
    eyebrow: "Last-Minute Travel",
    title: "Last Minute Flights | Book Same-Day Flights by Phone – Call 24/7",
    description:
      "Need to fly today or tomorrow? Call 24/7 for last-minute flight booking and same-day travel help from US-based agents.",
    h1: "Last-Minute Flights – Book Same-Day Travel by Phone",
    intro:
      "When you have to travel now, speed matters. Our phone lines are open around the clock, so you can reach an agent day or night to find last-minute flight options and get booked quickly.",
    sections: [
      {
        heading: "Same-day and next-day flight help",
        body: "Call as early as possible when you are travelling at short notice. An agent can check available flights for today or tomorrow and help you book the option that works, while availability lasts.",
      },
      {
        heading: "Flexibility is your friend",
        body: "Being flexible on departure time or a nearby airport can open up more last-minute flight deals. Tell the agent what you can adjust and we will look at the widest set of options.",
      },
      {
        heading: "Stay calm and call",
        body: "Urgent travel is stressful. We keep the process simple: one call, a clear set of options, and help completing the booking so you can focus on the trip ahead.",
      },
    ],
    callout:
      "Travelling at short notice? Call now and we will look for the fastest options.",
  },
  {
    slug: "international-flights",
    eyebrow: "International Travel",
    title: "International Flight Booking Help | Call US-Based Agents 24/7",
    description:
      "International flight booking help by phone. Talk to US-based travel agents 24/7 for long-haul trips, connections and international reservations.",
    h1: "International Flight Booking Help – Talk to a Travel Agent",
    intro:
      "Long-haul trips come with more moving parts. Call our travel desk for international flight booking help, from choosing connections to booking the itinerary that fits your plans.",
    sections: [
      {
        heading: "Long-haul and multi-city trips",
        body: "International travel often means connections and multiple legs. Our agents help you think through departure times, layovers and routing so your trip makes sense from start to finish.",
      },
      {
        heading: "Documents and details to have ready",
        body: "Before you call, it helps to know your travel dates, destination and the full names of everyone travelling as they appear on their passports. We can help even if you are still sorting out the details.",
      },
      {
        heading: "One call, wherever you are flying",
        body: "From popular holiday destinations to business hubs, we help with international reservations by phone so you are not left juggling websites across time zones.",
      },
    ],
    callout:
      "Planning a trip abroad? Call now for international flight booking help.",
  },
];

export function getFlightPage(slug: string): FlightPage | undefined {
  return flightPages.find((page) => page.slug === slug);
}
