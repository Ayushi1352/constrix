import Image from "next/image";
import Link from "next/link";
import { site as data } from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#0b1118]">
      <Image src={cta.image} alt="" fill sizes="100vw" className="object-cover object-[72%_center] xl:object-center" />
      <div className="absolute inset-0 bg-[#0b1118]/65 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0b1118]/85 lg:from-25% lg:via-[#0b1118]/45 lg:via-48% lg:to-transparent lg:to-62%" />

      <div className="relative mx-auto w-full max-w-1686 px-20 py-64 sm:px-32 xl:h-604 xl:px-0 xl:py-0 xl:pt-118 xl:pl-122">
        <p className="flex items-center gap-14 fs-12 font-bold tracking-[0.3em] text-white uppercase sm:fs-14 xl:gap-20 xl:fs-17">
          <span className="h-2 w-40 shrink-0 bg-[#e8923c] xl:w-62" />
          {cta.label}
        </p>
        <h2 className="mt-14 fs-34 leading-40 font-extrabold tracking-[-0.03em] sm:fs-52 sm:leading-58 xl:mt-12 xl:fs-76 xl:leading-72">
          <span className="block text-white">{cta.titleTop}</span>
          <span className="block bg-linear-to-r from-[#f38219] via-[#f59b22] to-[#f0a52c] bg-clip-text pb-8 text-transparent">
            {cta.highlight}
          </span>
        </h2>
        <p className="mt-10 max-w-760 font-roboto lg:max-w-560 fs-16 leading-27 text-white sm:fs-18 xl:mt-4 xl:max-w-none xl:fs-22 xl:leading-35 xl:tracking-[0.015em] xl:whitespace-pre-line">
          {cta.text}
        </p>
        <Link
          href={cta.button.href}
          className="mt-28 inline-flex h-56 items-center justify-center gap-30 bg-linear-to-r from-[#e3801c] to-[#c16c1d] px-34 fs-18 font-semibold text-white transition-opacity hover:opacity-90 xl:mt-31 xl:h-67 xl:w-266 xl:gap-40 xl:px-0 xl:fs-22"
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
