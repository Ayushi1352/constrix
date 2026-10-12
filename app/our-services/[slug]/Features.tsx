import Icon from "@/components/common/Icon";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { serviceDetail } = data;

export default function Features({ title }: { title: string }) {
  return (
    <div className="mt-48 xl:mt-79">
      <BarLabel>{serviceDetail.featuresLabel}</BarLabel>
      <h2 className="mt-12 font-rajdhani fs-36 leading-40 font-bold text-coal sm:fs-46 sm:leading-50 xl:mt-20 xl:fs-64 xl:leading-59">
        {serviceDetail.featuresTitleTop}
        <br />
        {serviceDetail.featuresTitleBottom} <span className="text-[#f47d14]">{title}</span>
      </h2>
      <ul className="mt-32 grid gap-x-24 gap-y-32 sm:grid-cols-2 xl:mt-39 xl:grid-cols-[37rem_1fr] xl:gap-x-0 xl:gap-y-48">
        {serviceDetail.features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-20 xl:gap-31">
            <span className="flex size-76 shrink-0 items-center justify-center rounded-[3px] bg-panel text-[#f58220] shadow-[0_6px_14px_rgba(0,0,0,0.12)] xl:size-97">
              <Icon name={feature.icon} className="size-38 xl:size-48" strokeWidth={1.7} />
            </span>
            <span className="pt-2 xl:pt-0">
              <span className="block fs-19 leading-28 font-semibold text-[#111418] xl:fs-23 xl:leading-30">{feature.title}</span>
              <span className="mt-4 block max-w-360 fs-16 leading-27 text-[#74797f] xl:mt-5 xl:max-w-none xl:fs-19 xl:leading-34 xl:whitespace-pre-line">
                {feature.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
