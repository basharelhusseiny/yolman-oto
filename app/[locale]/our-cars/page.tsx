import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";
import OurCarsClient from "@/components/pages/our-cars/OurCarsClient";

const OurCarsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <OurCarsClient dict={dict} locale={locale} />;
};

export default OurCarsPage;
