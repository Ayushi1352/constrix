"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site as data, fillLabel } from "@/data";

const { slides, primaryButton, secondaryButton } = data.hero;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const go = (step: number) => setCurrent((value) => (value + step + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-[#0c1a26] lg:min-h-[calc(100svh-160px)] xl:min-h-[42rem]">
      {slides.map((item, index) => (
        <Image
          key={index}
          src={item.image}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-[78%_center] transition-opacity duration-700 xl:object-center ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {/* CSS gradient fade that keeps the text readable without modifying the images */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a1c26]/75 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0a1c26] lg:from-20% lg:via-[#0a1c26]/75 lg:via-42% lg:to-transparent lg:to-60%" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-200 bg-linear-to-t from-[#061219] via-[#061219]/70 to-transparent" />
      <div className="relative mx-auto w-full px-16 py-40 sm:px-24 sm:py-56 lg:px-48 xl:px-80 xl:py-60">
        <p className="flex items-center gap-14 text-[0.75rem] font-light tracking-[0.32em] text-white uppercase sm:text-[0.875rem] xl:gap-17 xl:text-[1.125rem]">
          <span className="h-2 w-34 shrink-0 bg-[#e8923c] xl:w-52" />
          {slide.label}
        </p>
        <h1 className="mt-14 font-alt text-[2.875rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.375rem] leading-[1.05] font-extrabold tracking-[-0.03em] uppercase xl:mt-12 xl:leading-[1.02]">
          <span className="block text-white">{slide.titleTop}</span>
          <span className="block bg-linear-to-b from-[#f7993f] to-[#cf7a2c] bg-clip-text text-transparent">
            {slide.titleBottom}
          </span>
        </h1>
        <p className="mt-18 max-w-540 text-[0.9375rem] leading-24 font-light tracking-[-0.01em] text-white sm:text-[1.0625rem] sm:leading-27 xl:mt-17 xl:max-w-none xl:text-[1.1875rem] xl:whitespace-pre-line">
          {slide.text}
        </p>
        <div className="mt-26 flex flex-wrap gap-14 xl:mt-28 xl:gap-23">
          <Link
            href={primaryButton.href}
            className="inline-flex h-50 items-center justify-center gap-14 rounded-[3px] border border-[#de8836] bg-[#de8836] px-26 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-white hover:text-copper xl:h-58 xl:w-221 xl:px-0 xl:text-[1.125rem]"
          >
            {primaryButton.label}
            <Icon name="arrowRight" className="size-20 xl:size-24" strokeWidth={2} />
          </Link>
          <Link
            href={secondaryButton.href}
            className="inline-flex h-50 items-center justify-center gap-14 rounded-[3px] border border-white/80 px-26 text-[0.9375rem] font-semibold text-white transition-colors hover:border-copper hover:bg-copper hover:text-white xl:h-58 xl:w-227 xl:px-0 xl:text-[1.125rem]"
          >
            {secondaryButton.label}
            <Icon name="arrowRight" className="size-20 xl:size-24" strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-32 flex gap-8 xl:mt-44">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={fillLabel(data.labels.goToSlide, { n: index + 1 })}
              onClick={() => setCurrent(index)}
              className={`h-3 w-22 transition-colors ${index === current ? "bg-[#e8923c]" : "bg-white/35 hover:bg-[#e8923c]"}`}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={data.labels.previousSlide}
        onClick={() => go(-1)}
        className="absolute top-1/2 left-0 hidden h-58 w-55 -translate-y-1/2 items-center justify-center bg-[#16222c]/70 text-white transition-colors hover:bg-copper xl:flex"
      >
        <Icon name="chevronLeft" className="size-22" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label={data.labels.nextSlide}
        onClick={() => go(1)}
        className="absolute top-1/2 right-0 hidden h-58 w-55 -translate-y-1/2 items-center justify-center bg-[#16222c]/70 text-white transition-colors hover:bg-copper xl:flex"
      >
        <Icon name="chevronRight" className="size-22" strokeWidth={2} />
      </button>
    </section>
  );
}
