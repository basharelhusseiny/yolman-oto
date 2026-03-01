import { Dictionary } from "@/dictionaries";

export type Locale = "ar" | "en";

export type DictProps = {
  dict: Dictionary;
  locale?: Locale;
};

export type NavLink = {
  key: string;
  href: string;
};

export type LocaleData = {
  code: Locale;
  label: string;
  short: string;
};

export type HeroStatData = {
  value: string;
  label: string;
};
