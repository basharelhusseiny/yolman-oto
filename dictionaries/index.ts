import "server-only";
import { Locale } from "@/types/constants";

const dictionaries = {
  ar: () => import("./ar.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
