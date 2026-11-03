import type { QuoteData } from "@/types/templates.types";
import { QuoteIntro } from "@/components/sections/QuoteIntro";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Benefits } from "@/components/sections/Benefits";

export const Quote = ({ data }: { data?: QuoteData }) => {
  if (!data) return null;
  return (
    <section className="bg-[var(--color-surface-white)]">
      <div className="py-48 sm:py-64 lg:py-80 xl:pt-51 xl:pb-38">
        <div className="mx-auto flex w-full flex-col gap-40 px-16 sm:px-24 lg:flex-row lg:gap-32 lg:px-48 xl:justify-between xl:gap-40 xl:px-80">
          <QuoteIntro data={data} />
          <QuoteForm data={data.form} />
        </div>
      </div>
      <Benefits benefits={data.benefits} />
    </section>
  );
};
