"use client";

import { SectionHeader } from "@/components/ui";
import { DictProps } from "@/types/constants";
import { motion, useInView, Variants } from "framer-motion";
import {
  ShieldCheck,
  Paintbrush2,
  ScanSearch,
  ScrollText,
  Globe,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

// Icons for each point — matched to the card content
const POINT_ICONS: LucideIcon[] = [
  ShieldCheck,
  Paintbrush2,
  ScanSearch,
  ScrollText,
  Globe,
  Headphones,
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WhyChooseUsSection = ({ dict }: DictProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-[#060E1C]"
    >
      {/* ── Atmospheric Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial center glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-[#0D2144]/60 blur-[160px]" />
        {/* Gold bottom accent */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top & bottom border lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-5 relative z-10">
        {/* ── Section Header ── */}
        <SectionHeader
          isInView={isInView}
          title={dict.home.whyChooseUs.title}
          description={dict.home.whyChooseUs.description}
        />

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.home.whyChooseUs.points.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl border border-white/8 bg-linear-to-br from-white/4 via-transparent to-[#C9A84C]/4 p-6 overflow-hidden transition-all duration-300 group-hover:border-[#C9A84C]/30 group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)]">
                {/* Inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 group-hover:to-transparent transition-all duration-500" />

                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/60 transition-all duration-500" />

                {/* Corner accent */}
                <div className="absolute top-3 inset-s-3 w-5 h-5 border-t-2 border-s-2 border-[#C9A84C]/30 rounded-tl-lg group-hover:border-[#C9A84C]/70 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  {(() => {
                    const Icon = POINT_ICONS[i];
                    return Icon ? (
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 mb-5 transition-all duration-300 group-hover:bg-[#C9A84C]/18 group-hover:border-[#C9A84C]/40 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]">
                        <Icon
                          size={26}
                          strokeWidth={1.5}
                          className="text-[#C9A84C] group-hover:text-[#E8C96A] transition-colors duration-300"
                        />
                      </div>
                    ) : null;
                  })()}

                  {/* Number badge */}
                  <div
                    className="absolute top-0 inset-e-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black"
                    style={{
                      background: "linear-gradient(135deg, #E8C96A, #C9A84C)",
                      color: "#091931",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base sm:text-xl mb-2 leading-snug text-[#E8C96A] group-hover:text-white transition-colors duration-300">
                    {point.title}
                  </h3>

                  {/* Text */}
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer Note ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-12 relative"
        >
          <div className="relative rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 backdrop-blur-sm px-8 py-6 text-center overflow-hidden">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#C9A84C]/5 to-transparent" />
            {/* Left gold line */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-linear-to-b from-transparent via-[#C9A84C]/50 to-transparent" />
            {/* Right gold line */}
            <div className="absolute top-0 bottom-0 right-0 w-px bg-linear-to-b from-transparent via-[#C9A84C]/50 to-transparent" />

            <span className="relative z-10 text-[#E8C96A] font-semibold text-sm sm:text-lg leading-relaxed">
              ✦ &nbsp;{dict.home.whyChooseUs.footerNote}&nbsp; ✦
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
