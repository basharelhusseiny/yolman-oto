"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CARS_DATA } from "@/data";
import {
  CarCard,
  CategoryFilter,
  Pagination,
} from "@/components/pages/our-cars";
import { Dictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

interface OurCarsClientProps {
  dict: Dictionary;
  locale: Locale;
}

const ITEMS_PER_PAGE = 6;

const OurCarsClient = ({ dict, locale }: OurCarsClientProps) => {
  const isAr = locale === "ar";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCars = useMemo(() => {
    if (selectedCategory === "all") return CARS_DATA;
    return CARS_DATA.filter((car) => car.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const currentCars = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCars.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCars, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="relative min-h-screen py-20 bg-[#04080F] overflow-hidden">
      {/* ── Atmospheric Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#0D2144]/70 blur-[130px]" />
        <div className="absolute top-[40%] -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/8 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-[#091628]/80 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="h-px w-12 bg-linear-to-r from-transparent to-[#C9A84C]" />
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase"
              style={{
                color: "#C9A84C",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "999px",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              {dict.ourCars.header.badge}
            </span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-[#C9A84C]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-transparent bg-clip-text bg-linear-to-br from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf]"
          >
            {dict.ourCars.header.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/60 text-lg leading-relaxed font-light"
          >
            {dict.ourCars.header.subtitle}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
          </motion.div>
        </section>

        {/* ── Category Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            labels={dict.ourCars.filters}
          />
        </motion.div>

        {/* ── Cars Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {currentCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Empty State ── */}
        {filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px dashed rgba(201,168,76,0.2)",
            }}
          >
            <p className="text-white/40 font-semibold text-base">
              {isAr
                ? "لا توجد سيارات في هذه الفئة حالياً"
                : "No cars found in this category"}
            </p>
          </motion.div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default OurCarsClient;
