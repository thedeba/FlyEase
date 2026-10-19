import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `Our commitment to making ${site.brandName} accessible to all visitors and callers.`,
  alternates: { canonical: "/accessibility" },
  robots: { index: false, follow: true },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      intro={`${site.brandName} is committed to making our website and phone support usable by as many people as possible, including people with disabilities. This statement is a template and should be reviewed for your business before launch.`}
      sections={[
        {
          heading: "Our approach",
          body: "We build with accessibility in mind: semantic HTML, clear heading structure, sufficient color contrast, visible keyboard focus states, and support for reduced-motion preferences.",
        },
        {
          heading: "Measures we take",
          body: "Accessibility is an ongoing effort. Current measures include:",
          bullets: [
            "Keyboard-accessible navigation, accordions and carousel controls",
            "ARIA labels on icon-only controls",
            "Respect for the prefers-reduced-motion setting",
            "Text alternatives for meaningful images and icons",
          ],
        },
        {
          heading: "Accessible phone support",
          body: "Our service is phone-first, which can be easier for some callers. Our agents are trained to speak clearly and to repeat or explain details as needed.",
        },
        {
          heading: "Feedback",
          body: `If you encounter an accessibility barrier, please call us at ${site.phoneDisplay} so we can help and improve.`,
        },
      ]}
    />
  );
}
