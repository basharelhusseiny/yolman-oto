"use client";

import { Dictionary } from "@/dictionaries";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  Target,
  CheckCircle2,
  MapPin,
  Building2,
  ShieldCheck,
  Star,
  Users,
  Handshake,
  Award,
} from "lucide-react";
import { useRef } from "react";

interface Props {
  dict: Dictionary;
}

const VALUE_ICONS = [ShieldCheck, Star, Award, Handshake, Users];
const WHY_ICONS = [Award, Star, ShieldCheck, MapPin, Handshake];

export const AboutSection = ({ dict }: Props) => {
  const aDict = dict.aboutPage;

  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const whyRef = useRef(null);
  const marketsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-60px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-60px" });
  const marketsInView = useInView(marketsRef, { once: true, margin: "-60px" });

  return (
    <main className="min-h-screen bg-[#04080F] overflow-hidden">
      {/* ══════════════════════════════════════
          SECTION 1 — HERO / INTRO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative py-28 overflow-hidden bg-[#04080F]"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#0D2144]/70 blur-[140px]" />
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="container mx-auto px-5 relative z-10 max-w-5xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-linear-to-r from-[#C9A84C] to-transparent" />
            <span className="tracking-[0.3em] uppercase font-bold text-[#C9A84C]">
              {aDict.intro.title.split("|")[0]?.trim()}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-transparent bg-clip-text bg-linear-to-br from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf]"
          >
            {aDict.intro.title.split("|")[1]?.trim() ?? aDict.intro.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed max-w-4xl font-light"
          >
            {aDict.intro.description}
          </motion.p>

          {/* Decorative bottom bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={heroInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-14 h-px bg-linear-to-r from-[#C9A84C]/50 via-[#C9A84C]/20 to-transparent origin-start"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — VISION & MISSION
      ══════════════════════════════════════ */}
      <section
        ref={visionRef}
        className="relative py-20 overflow-hidden bg-[#060E1C]"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full bg-[#0D2144]/60 blur-[150px]" />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-5xl font-black bg-linear-to-r from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf] text-transparent bg-clip-text pb-4">
              {aDict.visionMission.vision.title} &{" "}
              {aDict.visionMission.mission.title}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
              <div className="w-3 h-3 rounded-full bg-[#C9A84C] animate-pulse" />
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative rounded-3xl p-8 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,31,60,0.6), rgba(9,22,40,0.4))",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-[#C9A84C]/60 via-[#C9A84C]/30 to-transparent" />
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/6 transition-all duration-500" />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                >
                  <Eye size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-[#E8C96A] mb-4">
                  {aDict.visionMission.vision.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-base">
                  {aDict.visionMission.vision.text}
                </p>
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={visionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative rounded-3xl p-8 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(9,22,40,0.6), rgba(6,14,28,0.4))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C9A84C]/8 blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/0 to-white/0 group-hover:from-white/3 transition-all duration-500" />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Target
                    size={24}
                    className="text-[#C9A84C]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#E8C96A] mb-4">
                  {aDict.visionMission.mission.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-base">
                  {aDict.visionMission.mission.text}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — VALUES
      ══════════════════════════════════════ */}
      <section
        ref={valuesRef}
        className="relative py-20 overflow-hidden bg-[#04080F]"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#C9A84C]/6 blur-[130px]" />
        </div>

        <div className="container mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-5xl font-black bg-linear-to-r from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf] text-transparent bg-clip-text pb-4">
              {aDict.values.title}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
              <div className="w-3 h-3 rounded-full bg-[#C9A84C] animate-pulse" />
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {aDict.values.items.map((item, i) => {
              const Icon = VALUE_ICONS[i] ?? ShieldCheck;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={valuesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-2xl p-6 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#C9A84C]/8 to-transparent" />
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.25)",
                    }}
                  />

                  {/* Number */}
                  <div
                    className="absolute top-3 inset-e-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                    style={{
                      background: "linear-gradient(135deg, #E8C96A, #C9A84C)",
                      color: "#091931",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      <Icon
                        size={26}
                        className="text-[#C9A84C]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — WHY US
      ══════════════════════════════════════ */}
      <section
        ref={whyRef}
        className="relative py-20 overflow-hidden bg-[#060E1C]"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-full bg-[#0D2144]/60 blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-[#C9A84C]/6 blur-[100px]" />
        </div>

        <div className="container mx-auto px-5 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-5xl font-black bg-linear-to-r from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf] text-transparent bg-clip-text pb-4">
              {aDict.whyUs.title}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
              <div className="w-3 h-3 rounded-full bg-[#C9A84C] animate-pulse" />
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aDict.whyUs.points.map((point, i) => {
              const Icon = WHY_ICONS[i] ?? CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={whyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Hover accent */}
                  <div className="absolute top-0 inset-s-0 bottom-0 w-1 bg-linear-to-b from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/70 transition-all duration-500 rounded-full" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-[#C9A84C]/5 to-transparent" />

                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <Icon
                      size={24}
                      className="text-[#C9A84C]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="sm:text-lg relative z-10 text-white/70 font-semibold leading-relaxed group-hover:text-white transition-colors duration-300">
                    {point}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — MARKETS
      ══════════════════════════════════════ */}
      <section
        ref={marketsRef}
        className="relative py-20 overflow-hidden bg-[#04080F]"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#0D2144]/50 blur-[150px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[120px]" />
        </div>

        <div className="container mx-auto px-5 relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={marketsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-5xl font-black bg-linear-to-r from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf] text-transparent bg-clip-text pb-4">
              {aDict.markets.title}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
              <div className="w-3 h-3 rounded-full bg-[#C9A84C] animate-pulse" />
              <div className="w-16 h-0.5 bg-[#C9A84C]/40" />
            </div>
          </motion.div>

          {/* Countries cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {aDict.markets.countries.map((country, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={marketsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group relative rounded-3xl p-8 overflow-hidden text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,31,60,0.5), rgba(9,22,40,0.3))",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#C9A84C]/8 blur-[50px] group-hover:bg-[#C9A84C]/16 transition-all duration-700" />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.3)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    {i === 0 ? (
                      <Building2
                        size={28}
                        className="text-[#C9A84C]"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <MapPin
                        size={28}
                        className="text-[#C9A84C]"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <p className="text-white font-semibold text-lg sm:text-xl leading-relaxed group-hover:text-[#E8C96A] transition-colors duration-300">
                    {country}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Description box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={marketsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 backdrop-blur-sm px-8 py-6 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#C9A84C]/5 to-transparent" />
            <div className="absolute top-0 bottom-0 inset-s-0 w-px bg-linear-to-b from-transparent via-[#C9A84C]/50 to-transparent" />
            <div className="absolute top-0 bottom-0 inset-e-0 w-px bg-linear-to-b from-transparent via-[#C9A84C]/50 to-transparent" />
            <p className="relative z-10 text-white/80 text-base sm:text-lg leading-relaxed font-light">
              {aDict.markets.description}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
