"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  hasGa,
  hasGoogleAds,
  hasMetaPixel,
  tracking,
} from "@/config/tracking";
import { captureAttribution } from "@/lib/utm";

/**
 * Loads Google Analytics 4, Google Ads and the Meta Pixel after the page is
 * interactive (so they never block rendering), and captures UTM/gclid/fbclid
 * parameters into sessionStorage for ad attribution.
 */
export function AnalyticsProvider() {
  useEffect(() => {
    captureAttribution();
  }, []);

  const gtagId = hasGoogleAds ? tracking.googleAdsId : tracking.gaId;

  return (
    <>
      {(hasGa || hasGoogleAds) && (
        <>
          <Script
            id="ga-lib"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${hasGa ? `gtag('config', '${tracking.gaId}');` : ""}
              ${
                hasGoogleAds
                  ? `gtag('config', '${tracking.googleAdsId}');`
                  : ""
              }
            `}
          </Script>
        </>
      )}

      {hasMetaPixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${tracking.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
