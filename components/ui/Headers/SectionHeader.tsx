import { motion } from "framer-motion";

interface SectionHeaderProps {
  isInView?: boolean;
  title: string;
  description: string;
}

const SectionHeader = ({
  isInView,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black pb-5 bg-linear-to-r from-[#E8C96A] via-[#C9A84C] to-[#d6cbaf] text-transparent bg-clip-text">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
        {description}
      </p>

      {/* Decorative underline */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="w-20 h-0.5 bg-[#C9A84C]/40" />
        <div className="w-3 h-3 rounded-full bg-[#C9A84C] animate-pulse" />
        <div className="w-20 h-0.5 bg-[#C9A84C]/40" />
      </div>
    </motion.div>
  );
};

export default SectionHeader;
