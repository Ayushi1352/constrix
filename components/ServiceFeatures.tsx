import Icon from "@/components/Icon";
import { BarLabel } from "@/components/SectionLabel";
import { site as data } from "@/data";

const { serviceDetail } = data;

export default function ServiceFeatures({ title }: { title: string }) {
  return (
    <div className="mt-40 xl:mt-54">
      <BarLabel>{serviceDetail.featuresLabel}</BarLabel>
      <h2 className="mt-10 font-display text-[2.375rem] sm:text-[3rem] xl:text-[3.5rem] leading-42 font-bold text-coal sm:leading-52 xl:mt-14 xl:leading-60">
        {serviceDetail.featuresTitleTop}
        <br />
        {serviceDetail.featuresTitleBottom} <span className="text-flame">{title}</span>
      </h2>
      <ul className="mt-28 grid grid-cols-1 gap-x-24 gap-y-24 sm:grid-cols-2 sm:gap-x-32 sm:gap-y-28 xl:mt-36 xl:gap-x-40 xl:gap-y-32">
        {serviceDetail.features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-16 xl:gap-20">
            <span className="flex size-58 sm:size-64 xl:size-68 shrink-0 items-center justify-center rounded-[4px] bg-ink text-flame shadow-sm">
              <Icon name={feature.icon} className="size-28 sm:size-32" strokeWidth={1.8} />
            </span>
            <span className="pt-1">
              <span className="block text-[1.1875rem] xl:text-[1.4375rem] font-bold text-[#111418] leading-snug">
                {feature.title}
              </span>
              <span className="mt-4 block font-text text-[1rem] xl:text-[1.1875rem] leading-22 text-[#74797f] xl:leading-23">
                {feature.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
