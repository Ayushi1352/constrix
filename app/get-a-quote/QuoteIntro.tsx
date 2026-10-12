import Icon from "@/components/common/Icon";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { quote } = data;

export default function QuoteIntro() {
  return (
    <div className="min-w-0 flex-1 xl:pt-27">
      <BarLabel>{quote.label}</BarLabel>
      <h2 className="mt-10 font-rajdhani fs-40 leading-44 font-bold text-coal uppercase sm:fs-54 sm:leading-58 xl:mt-13 xl:fs-70 xl:leading-67">
        {quote.titleTop}
        <br />
        <span className="text-copper">{quote.highlight}</span> {quote.titleBottom}
      </h2>
      <p className="mt-16 max-w-690 fs-16 leading-28 text-[#2f3440] xl:mt-15 xl:max-w-none xl:fs-20 xl:leading-34 xl:whitespace-pre-line">{quote.text}</p>

      <ul className="mt-28 space-y-22 xl:mt-37 xl:space-y-35">
        {quote.features.map((feature) => (
          <li key={feature.title} className="flex items-center gap-22 xl:gap-37">
            <span className="flex size-74 shrink-0 items-center justify-center rounded-[3px] bg-panel text-copper shadow-[0_6px_14px_rgba(0,0,0,0.12)] xl:h-97 xl:w-99">
              <Icon name={feature.icon} className="size-38 xl:size-50" strokeWidth={1.7} />
            </span>
            <span>
              <span className="block fs-19 leading-28 font-semibold text-[#111418] xl:fs-23 xl:leading-34">{feature.title}</span>
              <span className="block fs-16 leading-26 text-[#474c56] xl:mt-3 xl:fs-19 xl:leading-34">{feature.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
