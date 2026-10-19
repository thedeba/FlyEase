import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyCallBar } from "@/components/StickyCallBar";
import { site } from "@/config/site";
import { buildStructuredData } from "@/lib/structured-data";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default:
      "Flight Booking, Change & Cancellation Help | Call 24/7 – FlyEase Travel Desk",
    template: "%s | FlyEase Travel Desk",
  },
  description:
    "Need to book, change or cancel a flight? Call our US-based travel experts 24/7 for cheap flight booking, date changes, rebooking and cancellation help.",
  applicationName: site.brandName,
  keywords: [
    "flight booking phone number",
    "book flights by phone",
    "cheap flight booking",
    "last minute flight deals",
    "flight reservation help",
    "change flight date",
    "flight change assistance",
    "rebook flight",
    "flight cancellation help",
    "cancel flight and refund guidance",
    "flight ticket booking support",
    "international flight booking",
    "domestic flight booking",
    "round trip flights",
    "one way flights",
    "flight itinerary change",
    "24/7 travel support",
    "travel agent phone number",
    "talk to a travel agent",
    "call to book a flight",
    "airline ticket booking help",
    "flight booking customer support",
    "USA flight booking service",
  ],
  authors: [{ name: site.brandName }],
  creator: site.brandName,
  publisher: site.brandName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: site.brandName,
    title:
      "Flight Booking, Change & Cancellation Help | Call 24/7 – FlyEase Travel Desk",
    description:
      "Call our US-based travel experts 24/7 for cheap flight booking, date changes, rebooking and cancellation help. Skip the long hold times.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.brandName} – ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Flight Booking, Change & Cancellation Help | Call 24/7 – FlyEase Travel Desk",
    description:
      "Book, change or cancel flights by phone. US-based travel experts, available 24/7.",
    images: ["/opengraph-image"],
  },
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#0A1128",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-call focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Header />
        <main id="main" className="flex-1 pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <BackToTop />

        <JsonLd data={buildStructuredData()} />
        <AnalyticsProvider />
        <Analytics />
      </body>
    </html>
  );
}
