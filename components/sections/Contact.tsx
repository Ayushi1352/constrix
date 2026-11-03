import type { CompanyData, ContactData } from "@/types/templates.types";
import { InfoCards } from "@/components/sections/InfoCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { Location } from "@/components/sections/Location";

export const Contact = ({ data, company }: { data?: ContactData; company?: CompanyData }) => {
  if (!data) return null;
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-gradient-to-b from-[var(--color-surface-white)] from-10% to-cream to-40% xl:pt-64 xl:pb-213">
      <InfoCards cards={data.cards} company={company} />
      <div className="mx-auto mt-32 flex w-full flex-col gap-32 px-16 sm:px-24 lg:flex-row lg:gap-24 lg:px-48 xl:mt-40 xl:px-80">
        <ContactForm data={data.form} />
        <Location data={data.location} company={company} />
      </div>
    </section>
  );
};
