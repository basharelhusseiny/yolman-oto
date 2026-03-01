"use client";

import { NAV_LINKS } from "@/constants";
import { DictProps } from "@/types/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  dict: DictProps["dict"];
  locale: string;
}

const MobileMenu = ({ isOpen, onClose, dict, locale }: MobileMenuProps) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    (pathname === `/${locale}` && href === "/") ||
    pathname === `/${locale}${href}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-49 top-[72px] bg-black/60 backdrop-blur-sm"
            onClick={() => onClose(false)}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[72px] inset-e-0 z-50 h-[calc(100dvh-72px)] w-[280px] flex flex-col
              bg-[#091931] border-s border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--gold) to-transparent" />

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 p-5 mt-2">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={`/${locale}${link.href === "/" ? "" : link.href}`}
                      onClick={() => onClose(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                        active
                          ? "bg-linear-to-r from-(--gold)/20 to-(--gold-dark)/20 text-white border border-(--gold)/40"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {/* Active indicator dot */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                          active ? "bg-(--gold)" : "bg-white/20"
                        }`}
                      />
                      {dict.nav[link.key as keyof typeof dict.nav]}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="mx-5 h-px bg-white/10" />

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--gold-dark)/60 to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
