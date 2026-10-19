export type ClassValue = string | false | null | undefined;

/** Tiny className joiner (avoids a dependency). */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
