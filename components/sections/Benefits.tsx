import type { QuoteData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const Benefits = ({ benefits }: { benefits: QuoteData["benefits"] }) => {
  return (
    <div className="bg-[var(--color-white)] pb-48 sm:pb-64 lg:pb-80 xl:pb-69">
      <div className="bg-[var(--color-benefits-bg)] py-44 xl:h-287 xl:py-0">
        <ul className="mx-auto grid w-full gap-x-24 gap-y-36 px-16 sm:grid-cols-2 sm:px-24 lg:grid-cols-4 lg:px-48 xl:grid-cols-[25.9375rem_27.5rem_25.3125rem_1fr] xl:gap-0 xl:pt-54 xl:px-80">
          {benefits.map((benefit, index) => (
            <li key={benefit.id} className="relative">
              {index > 0 && <span className="absolute top-12 -left-92 hidden h-160 w-[1.5px] bg-[var(--color-flame-40)] xl:block" />}
              <Icon name={benefit.icon} className="size-44 text-flame xl:size-52" strokeWidth={2} />
              <h3 className="mt-14 text-[1.25rem] leading-30 font-semibold text-[var(--color-heading-card)] xl:mt-12 xl:text-[1.4375rem] xl:leading-34">{benefit.title}</h3>
              <p className="mt-6 text-[1.0625rem] leading-28 text-[var(--color-text-card)] xl:mt-10 xl:text-[1.3125rem] xl:leading-35">
                {benefit.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
