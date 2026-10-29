"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { slides } = data.hero;

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
