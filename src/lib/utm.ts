/**
 * UTM / gclid capture for ad attribution.
 *
 * Call this once on first page load (see AnalyticsProvider). If the visitor
 * arrives from an ad, the campaign parameters are stored in sessionStorage so
 * they survive internal navigation and can be attached to a future lead/call.
 */

const STORAGE_KEY = "flyease_attribution";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type Attribution = Partial<Record<(typeof TRACKED_PARAMS)[number], string>>;

export function captureAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};

    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }

    // Nothing in the URL – keep whatever we captured earlier this session.
    if (Object.keys(found).length === 0) {
      return getAttribution();
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    return found;
  } catch {
    return null;
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}
