"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

import { Locale } from "@/types/constants";
import { LOCALES } from "@/constants";

const LanguageToggle = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (targetLocale: string) => {
    if (targetLocale === locale) {
      setIsOpen(false);
      return;
    }
    const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);
    setIsOpen(false);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div ref={ref} className="relative" aria-label="Language switcher">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isPending}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center gap-1 sm:gap-3 px-2 sm:px-5 py-1.5 sm:h-10
          bg-white/10 hover:bg-white/20
          border border-white/10 hover:border-(--gold)/50
          rounded-full transition-all duration-300
          text-white/80 hover:text-white
          ${isPending ? "cursor-wait opacity-60" : "cursor-pointer"}
        `}
      >
        <span className="sm:hidden text-xs font-bold tracking-widest">
          {current.short}
        </span>
        <span className="hidden sm:block text-sm font-bold tracking-widest">
          {current.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-white/50" />
        </motion.div>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            // Position: open downward and align to end (right in LTR, left in RTL)
            className="absolute top-[calc(100%+10px)] z-50 min-w-[150px]
              bg-slate-900/90 backdrop-blur-xl
              border border-white/10 rounded-2xl
              shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(201,168,76,0.15)]
              overflow-hidden p-1.5 flex flex-col gap-1"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--gold)/60 to-transparent" />

            {LOCALES.map(({ code, label }, i) => {
              const isActive = code === locale;
              return (
                <motion.button
                  key={code}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => switchLocale(code)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                    transition-all duration-200 group text-start
                    ${
                      isActive
                        ? "bg-linear-to-r from-(--gold)/25 to-(--gold-dark)/25 text-white"
                        : "text-white/60 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <span className="text-sm font-semibold">{label}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-(--gold)" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
