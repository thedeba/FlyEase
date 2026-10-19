import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2.5", className)}>
      <span className="font-display text-xl font-semibold tracking-tight text-white">
        FlyEase
      </span>
      <span className="label hidden text-sand sm:inline">Travel Desk</span>
      <span className="sr-only">{site.brandName}</span>
    </span>
  );
}
