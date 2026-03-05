"use client";

import { DictProps } from "@/types/constants";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Dictionary } from "@/dictionaries";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

const Footer = ({ dict }: DictProps) => {
  const fDict = (dict as Dictionary).footer;
  if (!fDict) return null;

  return (
    <footer className="relative bg-[#04080F] overflow-hidden z-10">
      {/* ── Rich Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top center massive glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#0D2144]/70 blur-[130px]" />
        {/* Gold left leak */}
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-[#C9A84C]/6 blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* ── Top Editorial Banner ── */}
      <div className="relative border-b border-white/6">
        {/* Gold line */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

        <div className="container mx-auto px-5 py-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: headline */}
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <span className="text-[#C9A84C] text-lg">✦</span>
              </div>
              <div>
                <p className="text-sm sm:text-base tracking-[0.2em] uppercase text-[#C9A84C]/70 font-semibold mb-2">
                  {fDict.premiumAutoDeals}
                </p>
                <p className="text-white/80 font-bold text-lg leading-tight">
                  {fDict.turkeyOmanTrustedCarPartner}
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <a
              href={`tel:${fDict.contactInfo?.phone?.replace(/[^0-9+]/g, "")}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm text-[#060E1C] transition-all duration-300 hover:scale-105 shrink-0"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
              }}
            >
              <Phone size={15} strokeWidth={2} />
              {fDict.contactInfo?.phone}
              <ArrowUpRight
                size={14}
                className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="container mx-auto px-5 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* ── Brand Column (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/logo/yolman-oto-removebg.png"
                alt="Yolman Logo"
                width={120}
                height={55}
                className="h-auto w-auto object-contain"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(201,168,76,0.25))",
                }}
              />
            </Link>

            <p className="text-white/50 leading-[1.8] max-w-md">
              {fDict.description}
            </p>

            {/* Social section */}
            <div>
              <p className="tracking-[0.22em] uppercase text-white/40 font-semibold mb-4">
                {fDict.socials}
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="group relative flex items-center justify-center w-12 h-12 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* hover fill */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))",
                      }}
                    />
                    <Icon
                      size={22}
                      className="relative z-10 text-white/50 group-hover:text-[#C9A84C] transition-colors duration-300"
                      strokeWidth={1.8}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Quick Links (3 cols) ── */}
          <div className="lg:col-span-3">
            {/* Editorial heading */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-px bg-[#C9A84C]" />
              <h4 className="text-[#C9A84C] font-bold text-lg">
                {fDict.links.title}
              </h4>
            </div>

            <ul className="space-y-1">
              {NAV_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-2.5 border-b border-white/5 text-white/55 hover:text-white transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {dict.nav[link.key as keyof typeof dict.nav] as string}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 text-[#C9A84C] transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact (4 cols) ── */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-px bg-[#C9A84C]" />
              <h4 className="text-[#C9A84C] font-bold text-lg">
                {fDict.contactInfo.title}
              </h4>
            </div>

            <ul className="space-y-5">
              {/* Address */}
              <li className="group flex items-start gap-4">
                <div
                  className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5 transition-all duration-300"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <MapPin
                    size={18}
                    className="text-[#C9A84C] group-hover:text-white transition-colors"
                    strokeWidth={1.8}
                  />
                </div>
                <p className="text-white/50 leading-relaxed group-hover:text-white/75 transition-colors pt-1">
                  {fDict.contactInfo.address}
                </p>
              </li>

              {/* Phone */}
              <li className="group">
                <a
                  href={`tel:${fDict.contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-4"
                >
                  <div
                    className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C]"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <Phone
                      size={18}
                      className="text-[#C9A84C] group-hover:text-white transition-colors"
                      strokeWidth={1.8}
                    />
                  </div>
                  <span
                    className="text-white/50 group-hover:text-white transition-colors"
                    dir="ltr"
                  >
                    {fDict.contactInfo.phone}
                  </span>
                </a>
              </li>

              {/* Email */}
              <li className="group">
                <a
                  href={`mailto:${fDict.contactInfo.email}`}
                  className="flex items-center gap-4"
                >
                  <div
                    className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C]"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <Mail
                      size={18}
                      className="text-[#C9A84C] group-hover:text-white transition-colors"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      {fDict.contactInfo.email}
                    </span>
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      Yolmanoto@gmail.com
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative border-t border-white/6">
        {/* Thin gold line */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

        <div className="container mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40">{fDict.rights}</p>
          {/* Decorative wordmark */}
          <p className="text-lg uppercase text-white/40 font-medium select-none">
            {fDict.developedBy}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
