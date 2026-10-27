import Image from "next/image";
import { BarLabel } from "@/components/SectionLabel";
import { site as data } from "@/data";

type Service = (typeof data.services.items)[number];

export default function ServiceOverview({ service }: { service: Service }) {
  const { detail } = service;

  return (
    <div className="flex flex-col gap-28 md:flex-row md:items-start xl:gap-28">
      <div className="min-w-0 flex-1">
        <BarLabel>{data.serviceDetail.overviewLabel}</BarLabel>
        <h2 className="mt-10 font-display text-[2rem] leading-36 font-bold text-coal uppercase sm:text-[2.625rem] sm:leading-46 xl:mt-14 xl:text-[3.25rem] xl:leading-50">
          {detail.titleTop}
          <br />
          {detail.titleBottom} <span className="text-flame">{detail.highlight}</span>
        </h2>
        <p className="mt-14 font-text text-[0.9375rem] leading-27 text-[#6a6f76] xl:mt-18 xl:text-[1rem] xl:leading-29 xl:whitespace-pre-line">
          {detail.text}
        </p>
      </div>
      <div className="relative aspect-[411/360] w-full shrink-0 overflow-hidden rounded-[4px] md:w-[44%] xl:w-410">
        <Image
          src={detail.image}
          alt={service.title}
          fill
          sizes="(min-width: 768px) 35vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
