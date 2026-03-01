import {
  CarCategoriesSection,
  FinancingSection,
  HeroSection,
  WhyChooseUsSection,
} from "@/components/pages/home";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div>
      <HeroSection dict={dict} />
      <WhyChooseUsSection dict={dict} />
      <FinancingSection dict={dict} />
      <CarCategoriesSection dict={dict} />
    </div>
  );
};

export default HomePage;
