"use client";

import { SectionHeader } from "@/components/ui";
import { DictProps } from "@/types/constants";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Calculator, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const FinancingSection = ({ dict }: DictProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { financing, leaseToOwn, image } = dict.home.financingSection;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-[#060E1C]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C9A84C]/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#0D2144]/80 blur-[120px]" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-5 relative z-10">
        {/* ── Section Label ── */}
        <SectionHeader
          title={dict.home.financingSection.title}
          description={dict.home.financingSection.description}
          isInView={isInView}
        />

        {/* ── Split Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ── LEFT: Image Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-0"
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#060E1C] via-[#060E1C]/30 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#060E1C]/60 via-transparent to-transparent" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />

            {/* ── Floating stat card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 flex gap-3"
            >
              {dict.home.financingSection.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "rgba(9,16,34,0.85)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="text-lg font-bold text-[#C9A84C]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/55 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Content Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* ── Financing Card ── */}
            <div
              className="relative rounded-2xl p-7 flex-1 overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #0D1F3C, #091628)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(201,168,76,0.08) 0%, transparent 60%)",
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    <Calculator
                      size={18}
                      className="text-[#C9A84C]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-(--gold)">
                    {financing.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {financing.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + idx * 0.07, duration: 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#C9A84C] shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-white/70 font-semibold">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Lease-to-Own Card ── */}
            <div
              className="relative rounded-2xl p-7 overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #091628, #060E1C)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Subtle gold border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.3)" }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right, rgba(201,168,76,0.4), transparent)",
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <BadgeCheck
                      size={18}
                      className="text-[#C9A84C]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-(--gold)">
                    {leaseToOwn.title}
                  </h3>
                </div>

                <p className="text-white/60 mb-5 leading-relaxed pl-[52px]">
                  {leaseToOwn.description}
                </p>

                {/* Points as pills */}
                <div className="flex flex-wrap gap-2">
                  {leaseToOwn.points.map((point, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + idx * 0.08 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "rgba(201,168,76,0.9)",
                      }}
                    >
                      {point}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
