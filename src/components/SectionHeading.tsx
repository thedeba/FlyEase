import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "flex items-center gap-3 text-sand label",
            centered && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-sand/40" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-8 bg-sand/40" aria-hidden="true" />
        </span>
      )}
      <h2
        id={id}
        className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed text-white/55",
            centered ? "max-w-2xl" : "max-w-3xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
