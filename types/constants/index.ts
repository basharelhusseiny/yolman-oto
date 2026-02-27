import { Dictionary } from "@/dictionaries";

export type Locale = "ar" | "en";

export type DictProps = {
  dict: Dictionary;
  locale?: Locale;
};
