import Icon from "@/components/common/Icon";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { serviceDetail } = data;

export default function Features({ title }: { title: string }) {
  return (
    <div className="mt-40 xl:mt-54">
      <BarLabel>{serviceDetail.featuresLabel}</BarLabel>
      <h2 className="mt-10 font-rajdhani text-[30px] leading-34 font-bold text-coal sm:text-[38px] sm:leading-42 xl:mt-14 xl:text-[46px] xl:leading-48">
        {serviceDetail.featuresTitleTop}
        <br />
        {serviceDetail.featuresTitleBottom} <span className="text-[#fb7d1b]">{title}</span>
      </h2>
      <ul className="mt-28 grid grid-cols-1 gap-x-24 gap-y-24 sm:grid-cols-2 sm:gap-x-32 sm:gap-y-28 xl:mt-36 xl:gap-x-40 xl:gap-y-32">
        {serviceDetail.features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-16 xl:gap-20">
            <span className="flex size-58 sm:size-64 xl:size-68 shrink-0 items-center justify-center rounded-[4px] bg-[#0a1c26] text-[#fb7d1b] shadow-sm">
              <Icon name={feature.icon} className="size-28 sm:size-32" strokeWidth={1.8} />
            </span>
            <span className="pt-1">
              <span className="block text-[17px] font-bold text-[#111418] sm:text-[18px] xl:text-[19px] leading-snug">
                {feature.title}
              </span>
              <span className="mt-4 block font-figtree text-[13.5px] leading-22 text-[#74797f] sm:text-[14px] xl:text-[14.5px] xl:leading-23">
                {feature.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
