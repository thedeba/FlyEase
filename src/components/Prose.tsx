import type { ReactNode } from "react";

/** Simple typographic wrapper for legal / informational pages. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 [&_a]:text-sky [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_li]:text-sky-soft/80 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-sky-soft/80 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}
