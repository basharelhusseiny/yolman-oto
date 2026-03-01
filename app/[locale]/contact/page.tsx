import { ContactSection } from "@/components/pages/contact/ContactSection";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/types/constants";

const ContactPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#04080F]">
      <ContactSection dict={dict} />
    </main>
  );
};

export default ContactPage;
