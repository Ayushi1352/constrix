import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { band } = data.serviceDetail;

export default function ModernBand() {
  return (
    <section className="bg-[#0a1c26]">
      <div className="mx-auto flex w-full max-w-1686 flex-col lg:flex-row">
        <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:w-[62%] xl:min-h-480">
          <Image src={band.image} alt={band.imageAlt} fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center px-24 py-40 sm:px-36 lg:px-48 xl:px-70 xl:py-50">
          <BarLabel>{band.label}</BarLabel>
          <h2 className="mt-12 font-rajdhani text-[34px] leading-38 font-bold text-white uppercase sm:text-[44px] sm:leading-48 xl:text-[52px] xl:leading-50">
            {band.titleTop}
            <br />
            <span className="text-[#fb7d1b]">{band.highlight}</span>
          </h2>
          <p className="mt-14 max-w-480 font-figtree text-[15px] sm:text-[16px] xl:text-[17px] leading-28 text-[#d0d6dc] xl:whitespace-pre-line">
            {band.text}
          </p>
          <div>
            <Link
              href={band.button.href}
              className="mt-22 inline-flex h-48 sm:h-52 items-center justify-center gap-12 rounded-[3px] border border-[#fb7d1b] bg-[#fb7d1b] px-28 text-[15px] sm:text-[16px] font-semibold text-white transition-colors hover:bg-white hover:text-flame"
            >
              {band.button.label}
              <Icon name="arrowRight" className="size-18 xl:size-20" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
