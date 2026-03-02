import { AboutSection } from "@/components/pages/about/AboutSection";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const AboutPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <AboutSection dict={dict} />;
};

export default AboutPage;
