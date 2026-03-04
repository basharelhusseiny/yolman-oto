import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CardProps {
  category: {
    title: string;
    description: string;
    features: string[];
    sources?: string[];
    img: string;
  };
  accent: string;
  cardKey: string;
  index: number;
}

const CategoryCard = ({ category, accent, cardKey, index }: CardProps) => {
  const isAuction = cardKey === "importAuction";

  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: `1px solid rgba(255,255,255,0.07)` }}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0D1F3C] via-[#0A1628] to-[#080F1E]" />

      {/* Hover fill effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top right, ${accent}12 0%, transparent 65%)`,
        }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}30` }}
      />

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col h-full">
        {/* Top row: icon + arrow */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon pill */}
          <div
            className="flex items-center justify-center w-18 h-18 rounded-xl transition-transform duration-300 group-hover:scale-110 overflow-hidden relative"
            style={{
              background: `${accent}15`,
              border: `1px solid ${accent}25`,
            }}
          >
            <Image
              src={category.img}
              alt={category.title}
              width={60}
              height={60}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Arrow — appears on hover */}
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
            style={{ background: `${accent}20`, color: accent }}
          >
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Category number label */}
        <span
          className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2"
          style={{ color: `${accent}80` }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3 className="text-2xl text-(--gold) font-bold mb-3 leading-tight group-hover:text-white transition-colors">
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-white/70 leading-relaxed mb-6 grow group-hover:text-white/65 transition-colors">
          {category.description}
        </p>

        {/* Sources badges (auction card) */}
        {isAuction && category.sources && (
          <div className="flex flex-wrap gap-2 mb-5">
            {category.sources.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-sm font-medium rounded-full"
                style={{
                  background: `${accent}15`,
                  border: `1px solid ${accent}30`,
                  color: accent,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          className="h-px w-full mb-4 transition-all duration-500"
          style={{
            background: `linear-gradient(to right, ${accent}40, transparent)`,
          }}
        />

        {/* Features */}
        <ul className="space-y-2.5">
          {category.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
                style={{ background: accent }}
              />
              <span className="text-sm sm:text-base text-white/60 group-hover:text-white/75 transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCard;
