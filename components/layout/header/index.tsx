"use client";

import { DictProps } from "@/types/constants";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import LanguageToggle from "./Languagetoggle";
import { useState, useEffect } from "react";

const Header = ({ dict, locale }: DictProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-[#091931]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)] border-b border-white/5"
            : "bg-[#091931]"
        }`}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link
            href={`/${locale}`}
            className="shrink-0 flex items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo/yolman-logo.jpeg"
              alt="Yolman Logo"
              width={60}
              height={50}
              className="h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* ── Desktop Nav (hidden on mobile) ── */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks dict={dict} locale={locale} />
          </div>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-3">
            {/* Language toggle — always visible */}
            <LanguageToggle locale={locale!} />

            {/* Hamburger — only on mobile */}
            <div className="lg:hidden">
              <MobileMenuToggle
                isOpen={isMobileMenuOpen}
                onClose={setIsMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — rendered outside header to avoid clipping */}
      <MobileMenu
        dict={dict}
        locale={locale!}
        isOpen={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      />
    </>
  );
};

export default Header;
