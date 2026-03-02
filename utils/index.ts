import { CARS_DATA, CATEGORIES } from "@/data";

export const getCategoryLabel = (categoryKey: string) => {
  const category = CATEGORIES.find((c) => c.key === categoryKey);
  return category ? category.label : categoryKey;
};

export const getProductCount = (category: string) => {
  if (category === "all") {
    return CARS_DATA.length;
  }
  return CARS_DATA.filter((product) => product.category === category).length;
};
