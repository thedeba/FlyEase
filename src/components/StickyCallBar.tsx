import { site } from "@/config/site";
import { CallButton } from "./CallButton";

/** Fixed bottom call bar for mobile — the always-visible primary CTA. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-navy-900/95 p-3 backdrop-blur-md md:hidden">
      <CallButton
        location="sticky"
        label={site.cta.stickyLabel}
        showPhone
        size="lg"
        pulse
        title="Tap to call now for flight help"
        className="w-full"
      />
    </div>
  );
}
