import { SectionHeaderProps } from "@/types/ui";

const SectionHeader = ({
  children,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="relative overflow-hidden mb-16">
      <div className="relative flex flex-col items-center text-center gap-3 max-w-3xl mx-auto px-4">
        {/* Icon decoration */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-1 bg-linear-to-r from-transparent to-[#cc0075]"></div>
          <div className="relative">{children}</div>
          <div className="w-14 h-1 bg-linear-to-l from-transparent to-[#cc0075]"></div>
        </div>

        {/* Main heading */}
        <h2 className="py-2 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-linear-to-r from-[#cc0075] via-[#f00c8e] to-[#cc0075] bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-[#cc0075] max-w-2xl leading-relaxed font-semibold">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="w-24 h-1 bg-linear-to-r from-[#cc0075] via-[#511764] to-[#cc0075] rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
