"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site, telHref } from "@/config/site";
import { trackCallClick, type CallLocation } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { PhoneIcon } from "./Icons";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

type CallButtonProps = {
  location: CallLocation;
  label?: string;
  title?: string;
  showPhone?: boolean;
  variant?: Variant;
  size?: Size;
  /** Gentle attention pulse (respects reduced motion). */
  pulse?: boolean;
  /** Kept for backwards compatibility; no longer wiggles. */
  wiggle?: boolean;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-5 py-3 text-sm gap-2.5",
  lg: "px-6 py-3.5 text-base gap-3",
  xl: "px-8 py-4 text-lg gap-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-call text-white shadow-call hover:bg-call-dark focus-visible:outline-call",
  outline:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5 focus-visible:outline-sky",
  ghost:
    "bg-white/[0.06] text-white ring-1 ring-inset ring-white/10 hover:bg-white/[0.1] focus-visible:outline-sky",
};

export function CallButton({
  location,
  label = site.cta.label,
  title,
  showPhone = false,
  variant = "primary",
  size = "md",
  pulse = false,
  className,
}: CallButtonProps) {
  const reduceMotion = useReducedMotion();

  const handleClick = () => {
    trackCallClick({ location, label, phone: site.phoneE164 });
  };

  return (
    <motion.a
      href={telHref}
      onClick={handleClick}
      title={title ?? `${label} – ${site.phoneDisplay}`}
      aria-label={`${label} at ${site.phoneDisplay}`}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className={cn(
        "group inline-flex items-center justify-center rounded-full font-semibold tracking-tight",
        "transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        pulse && !reduceMotion && "animate-pulseSoft",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <PhoneIcon
        className={cn(
          "shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]",
          size === "xl" ? "h-6 w-6" : "h-5 w-5",
        )}
      />
      <span>
        {label}
        {showPhone && (
          <span className="ml-2 font-bold whitespace-nowrap">
            {site.phoneDisplay}
          </span>
        )}
      </span>
    </motion.a>
  );
}
