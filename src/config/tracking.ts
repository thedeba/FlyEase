// =============================================================================
// Tracking configuration
// -----------------------------------------------------------------------------
// IDs are read from environment variables. When an ID is missing the related
// script is NOT loaded and the tracking calls become safe no-ops, so the site
// keeps working in local development.
//
// Set these in .env.local (see .env.example):
//   NEXT_PUBLIC_GA_ID
//   NEXT_PUBLIC_GOOGLE_ADS_ID
//   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
//   NEXT_PUBLIC_META_PIXEL_ID
// =============================================================================

export const tracking = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  googleAdsConversionLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
} as const;

export const hasGoogleAds =
  tracking.googleAdsId.length > 0 &&
  tracking.googleAdsConversionLabel.length > 0;

export const hasGa = tracking.gaId.length > 0;
export const hasMetaPixel = tracking.metaPixelId.length > 0;

/** Google Ads `send_to` value, e.g. "AW-XXXXXXXXX/YYYYYY". */
export const googleAdsSendTo = hasGoogleAds
  ? `${tracking.googleAdsId}/${tracking.googleAdsConversionLabel}`
  : "";
