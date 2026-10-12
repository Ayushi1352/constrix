import Image from "next/image";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

type Service = (typeof data.services.items)[number];

export default function Overview({ service }: { service: Service }) {
  const { detail } = service;

  return (
    <div className="flex flex-col gap-32 md:flex-row md:items-start xl:gap-20">
      <div className="min-w-0 flex-1 xl:pt-25">
        <BarLabel>{data.serviceDetail.overviewLabel}</BarLabel>
        <h2 className="mt-12 font-rajdhani fs-38 leading-40 font-bold text-coal uppercase sm:fs-48 sm:leading-50 xl:mt-29 xl:fs-62 xl:leading-59">
          {detail.titleTop}
          <br />
          {detail.titleBottom} <span className="text-copper">{detail.highlight}</span>
        </h2>
        <p className="mt-20 fs-15 leading-28 text-[#6a6f76] xl:mt-27 xl:fs-17 xl:leading-31 xl:whitespace-pre-line">{detail.text}</p>
      </div>
      <div className="relative aspect-[411/369] w-full shrink-0 overflow-hidden rounded-[3px] md:w-[40%] xl:w-411">
        <Image
          src={detail.image}
          alt={service.title}
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
