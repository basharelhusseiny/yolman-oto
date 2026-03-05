"use client";

import { useState } from "react";
import { Dictionary } from "@/dictionaries";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  Star,
  Clock,
  Car,
  ShieldCheck,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

interface Props {
  dict: Dictionary;
}

export const ContactSection = ({ dict }: Props) => {
  const cDict = dict.contact;
  const fDict = dict.footer;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form styles
  const inputClass =
    "w-full bg-white/5 border border-white/10 focus:border-[#C9A84C] focus:bg-white/10 focus:ring-1 focus:ring-[#C9A84C]/30 text-white px-5 py-4 rounded-2xl outline-none placeholder:text-white/20 transition-all duration-300 text-sm backdrop-blur-md";

  const STATS = [
    { value: "200+", label: cDict.stats.cars, icon: Car },
    { value: "3K+", label: cDict.stats.customers, icon: Star },
    { value: "99%", label: cDict.stats.satisfaction, icon: ShieldCheck },
  ];

  const contactMethods = [
    {
      icon: MapPin,
      label: cDict.info.addressTitle,
      details: [cDict.info.address1, cDict.info.address2],
    },
    {
      icon: Phone,
      label: cDict.info.phoneTitle,
      details: [fDict.contactInfo.phone],
      href: `tel:${fDict.contactInfo.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: Mail,
      label: cDict.info.emailTitle,
      details: [fDict.contactInfo.email],
      href: `mailto:${fDict.contactInfo.email}`,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen py-20 bg-[#04080F] overflow-hidden selection:bg-[#C9A84C]/30 selection:text-white">
      {/* ── Immersive Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated dynamic flares */}
        <div className="absolute -top-32 right-[10%] w-[600px] h-[600px] rounded-full bg-[#0D2144]/60 blur-[150px] animate-pulse" />
        <div
          className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/10 blur-[180px]"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="absolute bottom-[-10%] right-[20%] w-[700px] h-[700px] rounded-full bg-[#091628]/80 blur-[150px]" />

        {/* Subtle geometric pattern mesh */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* ── Modern Header ── */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-16 bg-linear-to-r from-[#C9A84C] to-transparent" />
            <span className="text-sm tracking-[0.25em] uppercase font-bold text-[#C9A84C] drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">
              {cDict.header.title}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-white via-white/90 to-white/50 leading-tight tracking-tight">
            {cDict.header.title}
          </h1>
          <p className="mt-6 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
            {cDict.header.subtitle}
          </p>
        </div>

        {/* ── Main Dashboard Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-8 h-full">
            {/* Contact Methods Glass Cards */}
            <div className="grid gap-4">
              {contactMethods.map((method, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-3xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/0 to-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.02))",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <method.icon
                      size={22}
                      className="text-[#C9A84C]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="relative z-10 flex-1">
                    <p className="tracking-widest uppercase text-[#C9A84C]/70 font-semibold mb-2">
                      {method.label}
                    </p>
                    <div className="flex flex-col gap-1">
                      {method.details.map((d, j) =>
                        method.href ? (
                          <a
                            key={j}
                            href={method.href}
                            dir="ltr"
                            className="w-fit text-white/80 text-base md:text-lg font-medium hover:text-[#C9A84C] transition-colors"
                          >
                            {d}
                          </a>
                        ) : (
                          <p
                            key={j}
                            className="text-white/80 text-base font-medium"
                          >
                            {d}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Glowing Testimonial Card */}
            <div
              className="relative rounded-3xl p-8 overflow-hidden group"
              style={{
                background:
                  "linear-gradient(145deg, rgba(13,31,60,0.4), rgba(9,22,40,0.4))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Animated glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C9A84C]/10 blur-[50px] rounded-full group-hover:bg-[#C9A84C]/20 transition-all duration-700" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#C9A84C] fill-[#C9A84C]"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-base md:text-lg leading-relaxed italic mb-6 font-light">
                  {cDict.testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[#060E1C] shadow-[0_0_15px_rgba(201,168,76,0.3)]"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    }}
                  >
                    {cDict.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold tracking-wide">
                      {cDict.testimonial.author}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {cDict.testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Social Links */}
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/2 border border-white/5 mt-auto backdrop-blur-sm">
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 font-bold shrink-0">
                {cDict.info.socialsTitle}
              </p>
              <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(201,168,76,0.4)]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.05))",
                      }}
                    />
                    <Icon
                      size={18}
                      className="relative z-10 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                      strokeWidth={1.5}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 h-full">
            {/* Top Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="group rounded-3xl p-5 md:p-6 text-center relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <stat.icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#C9A84C] mx-auto mb-3 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />

                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#C9A84C]/80 uppercase tracking-[0.15em] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Immersive Glassmorphic Form Container */}
            <div
              className="relative rounded-4xl p-8 md:p-12 overflow-hidden flex-1 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTopColor: "rgba(201,168,76,0.3)",
              }}
            >
              {/* Form aesthetic glows */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/10 blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#0D2144]/40 blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {cDict.form.title}
                  </h2>
                  <p className="text-white/40 text-sm md:text-base font-light max-w-sm">
                    {cDict.form.subtitle}
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shrink-0 text-white/50 text-xs font-semibold tracking-wider">
                  <Clock size={14} className="text-[#C9A84C]" />
                  {cDict.form.responseNote}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-white/60 font-semibold px-2">
                      {cDict.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={cDict.form.namePlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-widest uppercase text-white/60 font-semibold px-2">
                      {cDict.form.phoneLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={cDict.form.phonePlaceholder}
                      className={inputClass}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase text-white/60 font-semibold px-2">
                    {cDict.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={cDict.form.emailPlaceholder}
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase text-white/60 font-semibold px-2">
                    {cDict.form.messageLabel}
                  </label>
                  <textarea
                    required
                    placeholder={cDict.form.messagePlaceholder}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-[#060E1C] text-base transition-all duration-300 overflow-hidden disabled:opacity-60 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] active:scale-[0.98]"
                    style={{
                      background:
                        "linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)",
                      backgroundSize: "200% auto",
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          {cDict.form.loading}
                        </>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle2 size={20} className="text-green-800" />
                          {cDict.form.success}
                        </>
                      ) : (
                        <>
                          <span className="tracking-wide">
                            {cDict.form.submitButton}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <Send
                              size={14}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                          </div>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
