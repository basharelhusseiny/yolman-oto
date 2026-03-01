"use client";

import { HERO_STATS } from "@/constants";
import { DictProps } from "@/types/constants";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ dict }: DictProps) => {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* ── Background glow layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold rim glow top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/15 blur-[120px]" />
        {/* Navy deep glow bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#091931]/60 blur-[100px]" />
        {/* Subtle center vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-[#091931]/40 via-transparent to-[#091931]/80" />
      </div>

      {/* ── Decorative grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Main content ── */}
      <div className="container mx-auto px-5 relative z-10 w-full py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* ──────── Left: Text ──────── */}
          <div className="flex flex-col gap-6 order-1 lg:order-1 text-center lg:text-start">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-6 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                {dict.home.hero.badge}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl leading-normal font-bold text-transparent bg-clip-text bg-linear-to-r from-(--gold) via-[#C9A84C] to-[#d6cbaf]">
                {dict.home.hero.title}
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl mt-6 font-semibold tracking-tight text-gray-200">
                {dict.home.hero.subtitle}
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              {dict.home.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#our-cars"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#091931] text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #E8C96A 0%, #C9A84C 60%, #8B6914 100%)",
                }}
              >
                <span>{dict.home.hero.primaryButton}</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ltr:rotate-180" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white/80 text-sm uppercase tracking-widest border border-white/15 hover:border-[#C9A84C]/50 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {dict.home.hero.secondaryButton}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-4 border-t border-white/8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-start">
                  <div
                    className="text-3xl sm:text-4xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #E8C96A, #C9A84C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-white/60 uppercase tracking-wide mt-0.5 font-medium">
                    {
                      dict.home.hero.stats[
                        stat.label as keyof typeof dict.home.hero.stats
                      ]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ──────── Right: Car Showcase ──────── */}
          <div className="hidden lg:block relative order-2">
            {/* ── Outer frame ── */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-linear-to-br from-white/4 via-transparent to-[#C9A84C]/4">
              {/* Spotlight top-left */}
              <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#C9A84C]/12 blur-[80px] pointer-events-none" />
              {/* Spotlight bottom-right */}
              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#091931]/80 blur-[80px] pointer-events-none" />

              {/* Gold top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/70 to-transparent" />

              {/* Car image */}
              <div className="relative w-full aspect-4/3">
                <Image
                  src="/cars/hero_car_1772184636614.png"
                  alt="Luxury Showcase Car"
                  fill
                  className="object-cover object-center scale-105"
                  priority
                />
                {/* Reflection fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-[#0b1f3f] via-[#0b1f3f]/40 to-transparent" />
              </div>

              {/* Gold bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/70 to-transparent" />

              {/* Gold corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/60 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]/60 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]/60 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/60 rounded-br-xl" />
            </div>

            {/* ── Floating card — Finance ── */}
            <div className="absolute -bottom-5 -inset-s-5 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#091931]/90 border border-[#C9A84C]/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 shrink-0">
                <span className="text-base">⚡</span>
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-tight">
                  {dict.home.hero.features.instantFinance}
                </p>
                <p className="text-white/45 text-[10px] leading-tight mt-0.5">
                  {dict.home.hero.features.upTo24Months}
                </p>
              </div>
            </div>

            {/* ── Floating card — Verified ── */}
            <div className="absolute -top-5 -inset-e-5 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#091931]/90 border border-[#C9A84C]/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 shrink-0">
                <span className="text-base">✅</span>
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-tight">
                  {dict.home.hero.features.trusted}
                </p>
                <p className="text-white/45 text-[10px] leading-tight mt-0.5">
                  {dict.home.hero.features.customers}
                </p>
              </div>
            </div>

            {/* ── Floating card — Location ── */}
            <div className="absolute top-1/2 -translate-y-1/2 -inset-e-5 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#091931]/90 border border-[#C9A84C]/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 shrink-0">
                <span className="text-base">🌍</span>
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-tight">
                  {dict.home.hero.features.locations}
                </p>
                <p className="text-white/45 text-[10px] leading-tight mt-0.5">
                  {dict.home.hero.features.internationalShipping}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
