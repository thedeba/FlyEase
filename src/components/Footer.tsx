import Link from "next/link";
import { site, telHref } from "@/config/site";
import { footerNav } from "@/lib/nav";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sky-soft/70">
              {site.shortDescription}
            </p>
            <a
              href={telHref}
              className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-call transition-colors hover:text-call-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-call"
              aria-label={`Call ${site.brandName} at ${site.phoneDisplay}`}
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-sky-soft/60">
              {site.hours} phone support · {site.serviceRegion}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="label text-sand">
                  {group.heading}
                </h2>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-white/55 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Mandatory disclaimer */}
        <p className="mt-12 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/60 sm:text-sm">
          {site.disclaimer}
        </p>

        <p className="mt-8 text-xs text-white/50 sm:text-sm">
          © {year} {site.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
