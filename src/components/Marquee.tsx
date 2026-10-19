const items = [
  "Book flights by phone",
  "Change flight dates",
  "Cancel & refund guidance",
  "Last-minute flights",
  "International & domestic",
  "Family & group bookings",
  "Name corrections",
  "Same-day changes",
  "24/7 phone support",
];

/** Subtle scrolling keyword band used as a modern section divider. */
export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/[0.06] bg-navy-900 py-4 mask-fade-x"
    >
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.16em] text-white/40"
          >
            <span className="h-1 w-1 rounded-full bg-sand/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
