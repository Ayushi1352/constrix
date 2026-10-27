import Image from "next/image";
import Link from "next/link";
import { site as data } from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image src={cta.image} alt="" fill sizes="100vw" className="object-cover object-[72%_center] xl:object-center" />
      {/* CSS gradient fade that keeps the CTA text readable without modifying the image */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a1c26]/75 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0a1c26] lg:from-20% lg:via-[#0a1c26]/80 lg:via-45% lg:to-transparent lg:to-65%" />
      <div className="relative mx-auto w-full px-16 py-64 sm:px-24 lg:px-80 xl:h-604 xl:px-150 xl:py-0 xl:pt-118">
        <p className="flex items-center gap-14 text-[0.75rem] font-bold tracking-[0.3em] text-white uppercase sm:text-[0.875rem] xl:gap-20 xl:text-[1.0625rem] xl:tracking-[0.34em]">
          <span className="h-2 w-40 shrink-0 bg-[#e8923c] xl:w-62" />
          {cta.label}
        </p>
        <h2 className="mt-14 text-[2.125rem] leading-40 font-extrabold tracking-[-0.03em] sm:text-[3.25rem] sm:leading-58 xl:mt-12 xl:text-[4.75rem] xl:leading-72">
          <span className="block text-white">{cta.titleTop}</span>
          <span className="block bg-linear-to-r from-[#c56b19] via-[#e99029] to-[#f7b750] bg-clip-text pb-8 text-transparent">
            {cta.highlight}
          </span>
        </h2>
        <p className="mt-10 max-w-760 font-ui lg:max-w-560 text-[1rem] leading-27 text-white sm:text-[1.125rem] xl:mt-4 xl:max-w-none xl:text-[1.375rem] xl:leading-33 xl:tracking-[0.02em] xl:whitespace-pre-line">
          {cta.text}
        </p>
        <Link
          href={cta.button.href}
          className="mt-28 inline-flex h-56 items-center justify-center gap-30 bg-linear-to-r from-[#e3801c] to-[#c16c1d] px-34 text-[1.125rem] font-semibold text-white transition-colors hover:bg-white hover:bg-none hover:text-copper xl:mt-35 xl:h-67 xl:font-medium xl:w-266 xl:gap-40 xl:px-0 xl:text-[1.375rem]"
        >
          {cta.button.label}
          <svg viewBox="0 0 28 20" className="h-18 w-26 xl:h-20 xl:w-28" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M1 10h25M17 2l9 8-9 8" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
