import { HeroStatData, LocaleData, NavLink } from "@/types/constants";

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "/" },
  { key: "our-cars", href: "/our-cars" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const LOCALES: LocaleData[] = [
  { code: "ar", label: "العربية", short: "AR" },
  { code: "en", label: "English", short: "EN" },
];

export const HERO_STATS: HeroStatData[] = [
  { value: "200+", label: "cars" },
  { value: "3K+", label: "customer" },
  { value: "99%", label: "satisfaction" },
];
