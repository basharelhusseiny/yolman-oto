import type { Metadata } from "next";
import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import ScrollToTop from "@/providers/ScrollToTop";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const roboto = Roboto({ subsets: ["latin"], display: "swap" });
const cairo = Cairo({ subsets: ["arabic"], display: "swap" });

export const metadata: Metadata = {
  title: "يولمان اوتو | بيع سيارات وتقسيط سيارات في تركيا وسلطنة عمان",
  description:
    "نقدم حلولًا متكاملة تشمل: بيع سيارات نقدًا ,تقسيط سيارات حتى 24 شهر ,إيجار تملكي بشروط واضحة ,سيارات وارد ومزادات",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${locale === "ar" ? cairo.className : roboto.className} antialiased min-h-screen flex flex-col`}
      >
        <ScrollToTop />
        <Header dict={dict} locale={locale as Locale} />
        <main className="grow mt-[72px]">{children}</main>
        <Footer dict={dict} locale={locale as Locale} />
      </body>
    </html>
  );
}
