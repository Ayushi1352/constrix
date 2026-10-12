"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { slides, primaryButton, secondaryButton, features } = data.hero;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const go = (step: number) => setCurrent((value) => (value + step + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="home-hero relative overflow-hidden bg-[#0c1a26]">
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
      {/* left fade that keeps the text readable */}
      <div className="absolute inset-0 bg-[#0a1c26]/70 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0a1c26] lg:from-20% lg:via-[#0a1c26]/75 lg:via-42% lg:to-transparent lg:to-58%" />
      <div className="absolute inset-x-0 bottom-0 h-200 bg-linear-to-t from-[#061219] via-[#061219]/70 to-transparent" />

      <div className="relative mx-auto h-full w-full max-w-1686 px-20 pt-40 pb-28 sm:px-32 sm:pt-56 xl:px-0 xl:pt-90 xl:pb-36 xl:pl-111">
        <p className="flex items-center gap-14 fs-12 font-light tracking-[0.32em] text-white uppercase sm:fs-14 xl:gap-17 xl:fs-18">
          <span className="h-2 w-34 shrink-0 bg-[#e8923c] xl:w-52" />
          {slide.label}
        </p>
        <h1 className="mt-14 font-montserrat fs-46 leading-[0.91] font-extrabold tracking-[-0.03em] uppercase sm:fs-72 lg:fs-88 xl:mt-12 xl:fs-102">
          <span className="block text-white">{slide.titleTop}</span>
          <span className="block bg-linear-to-b from-[#f7993f] to-[#cf7a2c] bg-clip-text text-transparent">
            {slide.titleBottom}
          </span>
        </h1>
        <p className="mt-18 max-w-540 fs-15 leading-24 font-light tracking-[-0.01em] text-white sm:fs-17 sm:leading-27 xl:mt-17 xl:max-w-none xl:fs-19 xl:whitespace-pre-line">
          {slide.text}
        </p>
        <div className="mt-26 flex flex-wrap gap-14 xl:mt-28 xl:gap-23">
          <Link
            href={primaryButton.href}
            className="inline-flex h-50 items-center justify-center gap-14 rounded-[3px] border border-[#de8836] bg-[#de8836] px-26 fs-15 font-semibold text-white transition-colors hover:bg-white hover:text-copper xl:h-58 xl:w-221 xl:px-0 xl:fs-18"
          >
            {primaryButton.label}
            <Icon name="arrowRight" className="size-20 xl:size-24" strokeWidth={2} />
          </Link>
          <Link
            href={secondaryButton.href}
            className="inline-flex h-50 items-center justify-center gap-14 rounded-[3px] border border-white/80 px-26 fs-15 font-semibold text-white transition-colors hover:border-copper hover:bg-copper hover:text-white xl:h-58 xl:w-227 xl:px-0 xl:fs-18"
          >
            {secondaryButton.label}
            <Icon name="arrowRight" className="size-20 xl:size-24" strokeWidth={2} />
          </Link>
        </div>

        <ul className="mt-40 grid grid-cols-2 gap-x-16 gap-y-22 lg:grid-cols-4 xl:mt-66 xl:flex xl:gap-0">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className={`flex items-center gap-14 xl:h-48 xl:gap-26 ${index > 0 ? "xl:w-260 xl:border-l xl:border-white/25 xl:pl-42" : "xl:w-230 xl:pl-7"}`}
            >
              <Icon name={feature.icon} className="size-34 shrink-0 text-[#e8923c] xl:size-44" strokeWidth={1.3} />
              <span className="fs-14 leading-20 sm:fs-16 sm:leading-24 xl:fs-17">
                <span className="block font-semibold text-white">{feature.title}</span>
                <span className="block font-light text-white/85">{feature.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-32 flex gap-8 xl:mt-44">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-3 w-22 transition-colors ${index === current ? "bg-[#e8923c]" : "bg-white/35 hover:bg-[#e8923c]"}`}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-0 hidden h-58 w-55 -translate-y-1/2 items-center justify-center bg-[#16222c]/70 text-white transition-colors hover:bg-copper xl:top-284 xl:flex xl:translate-y-0"
      >
        <Icon name="chevronLeft" className="size-22" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute top-1/2 right-0 hidden h-58 w-55 -translate-y-1/2 items-center justify-center bg-[#16222c]/70 text-white transition-colors hover:bg-copper xl:top-284 xl:flex xl:translate-y-0"
      >
        <Icon name="chevronRight" className="size-22" strokeWidth={2} />
      </button>
    </section>
  );
}
