import { site } from "@/config/site";

/**
 * Builds the JSON-LD structured data for the site.
 *
 * NOTE ON REVIEWS: the Review / AggregateRating block below is generated only
 * from the genuine customer reviews in `site.testimonials`. Do not add reviews
 * that were not really left by customers — fake review markup violates Google's
 * structured-data guidelines and can trigger a manual action. If you ever need
 * to temporarily remove the reviews, empty `site.testimonials` and the block is
 * omitted automatically.
 */
export function buildStructuredData() {
  const { siteUrl, brandName, phoneE164 } = site;

  const reviews = site.testimonials.map((testimonial) => ({
    "@type": "Review",
    author: { "@type": "Person", name: testimonial.name },
    reviewBody: testimonial.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }));

  const aggregateRating =
    site.testimonials.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: (
            site.testimonials.reduce((sum, t) => sum + t.rating, 0) /
            site.testimonials.length
          ).toFixed(1),
          reviewCount: site.testimonials.length,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined;

  const organization = {
    "@type": "TravelAgency",
    "@id": `${siteUrl}/#organization`,
    name: brandName,
    url: siteUrl,
    telephone: phoneE164,
    description: site.shortDescription,
    ...(aggregateRating ? { aggregateRating } : {}),
    ...(reviews.length > 0 ? { review: reviews } : {}),
    areaServed: {
      "@type": "Country",
      name: site.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneE164,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: brandName,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  const services = site.services.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: site.country },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: phoneE164,
        contactType: "customer service",
      },
    },
  }));

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: site.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, ...services, faqPage],
  };
}
