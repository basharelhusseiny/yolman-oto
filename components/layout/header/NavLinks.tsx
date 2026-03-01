"use client";

import { NAV_LINKS } from "@/constants";
import { DictProps } from "@/types/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ dict, locale }: DictProps) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    (pathname === `/${locale}` && href === "/") ||
    pathname === `/${locale}${href}`;

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={`/${locale}${link.href === "/" ? "" : link.href}`}
            className={`relative px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 group ${
              active
                ? "text-white bg-white/10"
                : "text-white/70 hover:text-white hover:bg-white/8"
            }`}
          >
            {dict.nav[link.key as keyof typeof dict.nav]}

            {/* Animated underline */}
            <span
              className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-linear-to-r from-(--gold) to-(--gold-dark)
                transition-all duration-300 origin-left
                ${active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
