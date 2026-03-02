"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CreditCard, Clock } from "lucide-react";
import { useParams } from "next/navigation";

interface Car {
  id: number;
  car: string;
  category: string;
  period: number;
  monthlyPayment: number;
  downPayment: number;
  img: string;
}

const CarCard = ({ car }: { car: Car }) => {
  const params = useParams();
  const locale = params.locale as string;
  const isAr = locale === "ar";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1F3C, #091628)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.35)" }}
      />

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/60 transition-all duration-500 z-10" />

      {/* ── Image Section ── */}
      <div className="relative h-56 w-full overflow-hidden bg-[#060E1C]">
        {/* Subtle grid overlay on image */}
        <div
          className="absolute inset-0 opacity-[0.04] z-1 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <Image
          src={car.img}
          alt={car.car}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#0D1F3C] to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 inset-s-4 z-2">
          <span
            className="px-5 py-1 text-sm font-black uppercase tracking-[0.15em]"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              borderRadius: "999px",
              backdropFilter: "blur(8px)",
            }}
          >
            {car.category}
          </span>
        </div>
      </div>

      {/* ── Content Section ── */}
      <div className="p-6 relative z-1">
        {/* Hover inner glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />

        <h3 className="text-2xl sm:text-3xl font-bold text-[#E8C96A] mb-5 line-clamp-1 group-hover:text-white transition-colors duration-300 relative z-1">
          {car.car}
        </h3>

        {/* ── Specs Grid ── */}
        <div className="grid grid-cols-2 gap-3 mb-6 relative z-1">
          <div
            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="p-2 rounded-lg shrink-0"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <CreditCard
                className="w-5 h-5 text-[#C9A84C]"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm uppercase tracking-[0.12em] font-bold text-white/60">
                {isAr ? "دفعة أولى" : "Down Payment"}
              </span>
              <span className="text-lg font-bold text-white/80 truncate">
                {car.downPayment}
                {isAr ? " ر.ع" : " OMR"}
              </span>
            </div>
          </div>

          <div
            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="p-1.5 rounded-lg shrink-0"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <Clock className="w-5 h-5 text-[#C9A84C]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm uppercase tracking-[0.12em] font-bold text-white/60">
                {isAr ? "فترة القسط" : "Period"}
              </span>
              <span className="text-lg font-bold text-white/80 truncate">
                {car.period} {isAr ? "شهر" : "mo"}
              </span>
            </div>
          </div>
        </div>

        {/* ── Price & CTA ── */}
        <div
          className="flex items-center justify-between pt-5 relative z-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <span className="block text-lg font-bold text-white/70 uppercase tracking-[0.12em] mb-0.5">
              {isAr ? "قسط شهري" : "Monthly"}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#C9A84C] group-hover:text-[#E8C96A] transition-colors duration-300">
                {car.monthlyPayment}
                {isAr ? " ر.ع" : " OMR"}
              </span>
              <span className="text-sm font-bold text-white/70">
                /{isAr ? "شهر" : "mo"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
