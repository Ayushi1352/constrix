import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { band } = data.serviceDetail;

export default function ModernBand() {
  return (
    <section className="bg-nav">
      <div className="mx-auto flex w-full max-w-1686 flex-col lg:flex-row">
        <div className="relative aspect-[1102/568] w-full lg:aspect-auto lg:w-[65.4%] xl:h-568">
          <Image src={band.image} alt={band.imageAlt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
        </div>
        <div className="flex-1 px-20 py-48 sm:px-32 lg:self-center xl:self-start xl:px-0 xl:pt-56 xl:pr-40 xl:pb-0 xl:pl-87">
          <BarLabel className="xl:fs-23">{band.label}</BarLabel>
          <h2 className="mt-14 font-rajdhani fs-40 leading-44 font-bold text-white uppercase sm:fs-48 sm:leading-52 xl:mt-30 xl:fs-66 xl:leading-61">
            {band.titleTop}
            <br />
            <span className="text-copper">{band.highlight}</span>
          </h2>
          <p className="mt-18 max-w-420 fs-17 leading-30 text-white xl:mt-22 xl:max-w-none xl:fs-22 xl:leading-37 xl:whitespace-pre-line">{band.text}</p>
          <Link
            href={band.button.href}
            className="mt-28 inline-flex h-58 items-center justify-center gap-18 rounded-[2px] border border-copper bg-copper px-30 fs-18 font-semibold text-white transition-colors hover:bg-white hover:text-copper xl:mt-47 xl:h-75 xl:w-240 xl:gap-22 xl:px-0 xl:fs-22"
          >
            {band.button.label}
            <Icon name="arrowRight" className="size-22 xl:size-26" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
