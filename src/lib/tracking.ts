import { googleAdsSendTo, hasGoogleAds } from "@/config/tracking";

/** Locations a call CTA can appear in – used in dataLayer events. */
export type CallLocation = "hero" | "header" | "sticky" | "footer" | "section";

export type CallClickPayload = {
  location: CallLocation;
  label?: string;
  /** Destination phone number (E.164), forwarded to analytics. */
  phone?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires every conversion signal we care about from a single place:
 *  - Google Ads conversion
 *  - Meta Pixel "Contact" event
 *  - GA4 event
 *  - GTM / dataLayer push
 *
 * Every call is guarded, so the site keeps working even when no tracking
 * scripts are loaded (e.g. local development or a blocked script).
 */
export function trackCallClick({ location, label, phone }: CallClickPayload) {
  if (typeof window === "undefined") return;

  // --- Google Ads conversion ------------------------------------------------
  try {
    if (hasGoogleAds && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: googleAdsSendTo });
    }
  } catch {
    /* no-op */
  }

  // --- Meta Pixel -----------------------------------------------------------
  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact");
    }
  } catch {
    /* no-op */
  }

  // --- GA4 custom event -----------------------------------------------------
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "call_click", { location, label: label ?? "" });
    }
  } catch {
    /* no-op */
  }

  // --- GTM / dataLayer ------------------------------------------------------
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "call_click",
      location,
      label: label ?? "",
      phone: phone ?? "",
    });
  } catch {
    /* no-op */
  }
}
