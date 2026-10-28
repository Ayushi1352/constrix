import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { BarLabel } from "@/components/SectionLabel";
import { site as data } from "@/data";

const { band } = data.serviceDetail;

export default function ModernBand() {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex w-full max-w-1686 flex-col lg:flex-row">
        <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:w-[62%] xl:min-h-480">
          <Image src={band.image} alt={band.imageAlt} fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center px-24 py-40 sm:px-36 lg:px-48 xl:px-70 xl:py-50">
          <BarLabel className="xl:text-[1.4375rem]!">{band.label}</BarLabel>
          <h2 className="mt-12 font-display text-[2.5rem] sm:text-[3rem] xl:text-[4.125rem] leading-48 font-bold text-white uppercase sm:leading-58 xl:leading-74">
            {band.titleTop}
            <br />
            <span className="text-flame">{band.highlight}</span>
          </h2>
          <p className="mt-14 max-w-480 font-text text-[1.0625rem] xl:text-[1.375rem] leading-28 text-[#d0d6dc] xl:whitespace-pre-line">
            {band.text}
          </p>
          <div>
            <Link
              href={band.button.href}
              className="mt-22 inline-flex h-48 sm:h-52 items-center justify-center gap-12 rounded-[3px] border border-flame bg-flame px-28 text-[1.125rem] xl:text-[1.375rem] font-semibold text-white transition-colors hover:bg-white hover:text-flame"
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
