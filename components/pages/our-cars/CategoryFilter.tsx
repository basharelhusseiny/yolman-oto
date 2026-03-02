"use client";

import { CATEGORIES } from "@/data";
import { getProductCount } from "@/utils";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  labels: Record<string, string>;
}

const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  labels,
}: CategoryFilterProps) => {
  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category.key;
          const count = getProductCount(category.key);

          return (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 overflow-hidden"
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                      color: "#060E1C",
                      boxShadow:
                        "0 4px 20px rgba(201,168,76,0.35), 0 0 0 1px rgba(201,168,76,0.5)",
                      transform: "translateY(-1px)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                    }
              }
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(201,168,76,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#C9A84C";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(201,168,76,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }
              }}
            >
              {/* Active shimmer */}
              {isActive && (
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                  }}
                />
              )}

              <span className="relative z-10">
                {labels[category.key] || category.label}
              </span>

              {/* Count badge */}
              <span
                className="relative z-10 flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-md text-[10px] font-black tabular-nums"
                style={
                  isActive
                    ? {
                        background: "rgba(6,14,28,0.2)",
                        color: "#060E1C",
                      }
                    : {
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        color: "#C9A84C",
                      }
                }
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
