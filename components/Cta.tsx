import Image from "next/image";
import Link from "next/link";
import { site as data } from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image src={cta.image} alt="" fill sizes="100vw" className="object-cover object-[72%_center] xl:object-center" />
      {/* CSS gradient fade that keeps the CTA text readable without modifying the image */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--color-ink-75)] lg:bg-transparent lg:bg-gradient-to-r lg:from-[var(--color-ink)] lg:from-20% lg:via-[var(--color-ink-80)] lg:via-45% lg:to-transparent lg:to-65%" />
      <div className="relative mx-auto w-full px-16 py-64 sm:px-24 lg:px-80 xl:h-604 xl:px-150 xl:py-0 xl:pt-118">
        <p className="flex items-center gap-14 text-[0.75rem] font-bold tracking-[0.3em] text-[var(--color-white)] uppercase sm:text-[0.875rem] xl:gap-20 xl:text-[1.0625rem] xl:tracking-[0.34em]">
          <span className="h-2 w-40 shrink-0 bg-[var(--color-accent-bar)] xl:w-62" />
          {cta.label}
        </p>
        <h2 className="mt-14 text-[2.125rem] leading-44 font-extrabold tracking-[-0.03em] sm:text-[3.25rem] sm:leading-64 xl:mt-12 xl:text-[4.75rem] xl:leading-88">
          <span className="block text-[var(--color-white)]">{cta.titleTop}</span>
          <span className="block bg-gradient-to-r from-[var(--color-cta-gradient-2)] via-[var(--color-cta-gradient-4)] to-[var(--color-cta-gradient-5)] bg-clip-text pb-8 text-transparent">
            {cta.highlight}
          </span>
        </h2>
        <p className="mt-10 max-w-760 font-ui lg:max-w-560 text-[1rem] leading-27 text-[var(--color-white)] sm:text-[1.125rem] xl:mt-4 xl:max-w-none xl:text-[1.375rem] xl:leading-33 xl:tracking-[0.02em] xl:whitespace-pre-line">
          {cta.text}
        </p>
        <Link
          href={cta.button.href}
          className="mt-28 inline-flex h-56 items-center justify-center gap-30 bg-gradient-to-r from-[var(--color-cta-gradient-3)] to-[var(--color-cta-gradient-1)] px-34 text-[1.125rem] font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:bg-none hover:text-copper xl:mt-35 xl:h-67 xl:font-medium xl:w-266 xl:gap-40 xl:px-0 xl:text-[1.375rem]"
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
