import HeroSection from "@/components/pages/home/HeroSection";
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
    </div>
  );
};

export default HomePage;
