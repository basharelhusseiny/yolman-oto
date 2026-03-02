"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const params = useParams();
  const locale = params.locale as string;
  const isAr = locale === "ar";

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-10">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-1.5 sm:p-2.5 rounded-full border border-white/10 text-white/50 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover:bg-[#C9A84C]/8 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300"
        aria-label="Previous page"
      >
        {isAr ? (
          <ChevronRight className="w-5 h-5" />
        ) : (
          <ChevronLeft className="w-5 h-5" />
        )}
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`w-8 sm:w-11 h-8 sm:h-11 rounded-full font-bold transition-all duration-300 flex items-center justify-center ${
              page === currentPage
                ? "text-[#060E1C] shadow-[0_0_20px_rgba(201,168,76,0.4)] scale-110"
                : page === "..."
                  ? "cursor-default text-white/25"
                  : "border border-white/10 text-white/55 hover:border-[#C9A84C]/40 hover:text-[#C9A84C] hover:bg-[#C9A84C]/8"
            }`}
            style={
              page === currentPage
                ? { background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }
                : {}
            }
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-1.5 sm:p-2.5 rounded-full border border-white/10 text-white/50 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover:bg-[#C9A84C]/8 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300"
        aria-label="Next page"
      >
        {isAr ? (
          <ChevronLeft className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default Pagination;
