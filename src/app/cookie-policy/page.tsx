import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.brandName} uses cookies and similar technologies on this website.`,
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro={`This Cookie Policy explains how ${site.brandName} uses cookies and similar technologies on this website. It is a template and should be reviewed to fit your business and applicable law before launch.`}
      sections={[
        {
          heading: "What cookies are",
          body: "Cookies are small text files stored on your device. They help websites function, remember preferences, and measure how the site is used.",
        },
        {
          heading: "How we use cookies",
          body: "We use cookies and similar technologies primarily for analytics and advertising measurement, so we can understand which ads and pages lead people to call us.",
          bullets: [
            "Analytics cookies to understand site usage",
            "Advertising cookies to measure campaign performance",
            "Essential storage to keep the site working correctly",
          ],
        },
        {
          heading: "Managing cookies",
          body: "You can control or delete cookies through your browser settings. Blocking some cookies may affect how the website works.",
        },
        {
          heading: "Contact",
          body: `Questions about this policy? Call us at ${site.phoneDisplay}.`,
        },
      ]}
    />
  );
}
