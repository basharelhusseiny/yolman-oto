import { HeroStatData, LocaleData, NavLink } from "@/types/constants";
import { Facebook, Instagram, Linkedin, Music2, Twitter } from "lucide-react";

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

export const SOCIAL_LINKS = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/otoyolman",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/otoyolman",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.instagram.com/otoyolman",
  },
  {
    icon: Twitter,
    label: "X",
    href: "https://x.com/otoyolman",
  },
  {
    icon: Music2,
    label: "TikTok",
    href: "https://www.tiktok.com/@otoyolman?_r=1&_t=ZS-94LtOoAV0PU",
  },
];
