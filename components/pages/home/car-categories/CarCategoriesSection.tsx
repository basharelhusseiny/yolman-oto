"use client";

import { SectionHeader } from "@/components/ui";
import { DictProps } from "@/types/constants";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import CategoryCard from "./CategoryCard";
// Visual accent color per category — adds personality
const CATEGORY_ACCENTS: Record<string, string> = {
  economy: "#60A5FA",
  family: "#34D399",
  suv: "#FB923C",
  midLuxury: "#C9A84C",
  importAuction: "#C9A84C",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const CarCategoriesSection = ({ dict }: DictProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const categories = dict.home.carCategories.categories;
  const categoryKeys = Object.keys(categories) as Array<
    keyof typeof categories
  >;

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
          title={dict.home.carCategories.title}
          description={dict.home.carCategories.description}
        />

        {/* ── Bento Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4"
        >
          {categoryKeys.map((key, index) => {
            const category = categories[key];
            const accent = CATEGORY_ACCENTS[key];

            const colSpanClass =
              key === "importAuction"
                ? "col-span-1 md:col-span-2 lg:col-span-2"
                : "col-span-1";

            return (
              <motion.div
                key={key}
                variants={cardVariants}
                className={`group relative ${colSpanClass}`}
              >
                <CategoryCard
                  category={category}
                  accent={accent}
                  cardKey={key}
                  index={index}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CarCategoriesSection;
