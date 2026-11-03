import type { QuoteData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { BarLabel } from "@/components/ui/SectionLabel";

export const QuoteIntro = ({ data: quote }: { data: QuoteData }) => {
  return (
    <div className="min-w-0 flex-1 xl:pt-27">
      <BarLabel>{quote.label}</BarLabel>
      <h2 className="mt-10 font-display text-[2.5rem] leading-44 font-bold text-coal uppercase sm:text-[3.375rem] sm:leading-58 xl:mt-13 xl:text-[4.375rem] xl:leading-67">
        {quote.titleTop}
        <br />
        <span className="text-flame">{quote.highlight}</span> {quote.titleBottom}
      </h2>
      <p className="mt-16 max-w-690 text-[1rem] leading-28 text-[var(--color-text-quote)] xl:mt-15 xl:max-w-none xl:text-[1.25rem] xl:leading-34 xl:whitespace-pre-line">{quote.text}</p>

      <ul className="mt-28 space-y-22 xl:mt-37 xl:space-y-35">
        {quote.features.map((feature) => (
          <li key={feature.id} className="flex items-center gap-22 xl:gap-37">
            <span className="flex size-74 shrink-0 items-center justify-center rounded-[3px] bg-panel text-flame shadow-[0_6px_14px_var(--color-shadow-black-12)] xl:h-97 xl:w-99">
              <Icon name={feature.icon} className="size-36 xl:size-46" strokeWidth={1.7} />
            </span>
            <span>
              <span className="block text-[1.1875rem] leading-28 font-semibold text-[var(--color-heading-card)] xl:text-[1.4375rem] xl:leading-34">{feature.title}</span>
              <span className="block text-[1rem] xl:text-[1.1875rem] leading-26 text-[var(--color-text-quote-soft)] xl:mt-3 xl:leading-34">{feature.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
