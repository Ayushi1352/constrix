"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/common/Icon";
import { LineLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { homeTestimonials: content } = data;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = content.items.length;
  const item = content.items[current];
  const go = (step: number) => setCurrent((value) => (value + step + total) % total);

  return (
    <section className="section-space overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-20 sm:px-32 lg:flex-row lg:items-center lg:gap-40 xl:items-start xl:gap-39 xl:pr-60 xl:pl-96">
        {/* photo collage; positions are % of the 671x504 design box */}
        <div className="@container relative mx-auto aspect-[671/504] w-full max-w-560 shrink-0 lg:w-[46%] xl:mx-0 xl:w-671 xl:max-w-none">
          <div className="absolute top-0 left-0 h-full w-[66.2%] overflow-hidden">
            <Image
              src={content.backgroundImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 28vw, 66vw"
              className="object-cover"
            />
            <span className="absolute bottom-[4%] left-[2%] rotate-180 font-montserrat text-[9.4cqw] leading-none font-extrabold tracking-[0.02em] whitespace-nowrap text-white/40 uppercase [writing-mode:vertical-rl]">
              {content.sideText}
            </span>
          </div>
          <span className="absolute top-[18.2%] left-[70%] h-[58.6%] w-[30%] border-2 border-[#ee8a45]" />
          <div className="absolute top-[20.4%] left-[55.1%] h-[64.5%] w-[43.2%] overflow-hidden border-[0.75cqw] border-white bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
            <Image
              key={item.name}
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 18vw, 43vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 xl:pt-16">
          <LineLabel align="left" className="xl:[&>span:first-child]:w-56">
            {content.label}
            <span className="ml-14 inline-block h-2 w-30 bg-copper align-middle xl:ml-18 xl:w-68" />
          </LineLabel>
          <h2 className="mt-8 fs-30 leading-38 font-extrabold tracking-[-0.03em] text-coal sm:fs-42 sm:leading-52 xl:mt-1 xl:fs-67 xl:leading-72">
            {content.title}{" "}
            <span className="bg-linear-to-r from-copper-light to-copper-dark bg-clip-text text-transparent">
              {content.highlight}
            </span>
          </h2>

          <div className="mt-28 flex items-center gap-20 xl:mt-42 xl:ml-9">
            <span className="flex size-52 shrink-0 items-center justify-center rounded-full border-2 border-copper text-copper xl:size-62">
              <Icon name="quote" className="size-28 xl:size-36" />
            </span>
            <div>
              <p className="fs-20 leading-28 font-semibold text-coal xl:fs-24 xl:leading-32">{item.name}</p>
              <p className="fs-14 leading-22 text-[#6b707e] xl:fs-16 xl:leading-28">{item.role}</p>
            </div>
          </div>
          <blockquote className="mt-20 max-w-680 font-figtree fs-16 leading-26 text-[#6b707e] xl:mt-22 xl:ml-8 xl:min-h-140 xl:max-w-none xl:fs-19 xl:leading-28 xl:tracking-[0.02em] xl:whitespace-pre-line">
            &ldquo;{item.quote}&rdquo;
          </blockquote>

          <div className="mt-28 flex xl:mt-57 xl:ml-8">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-48 w-60 items-center justify-center border-[1.5px] border-copper text-copper transition-colors hover:bg-copper hover:text-white xl:h-55 xl:w-70"
            >
              <Icon name="arrowLeft" className="size-24 xl:size-30" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="-ml-[1.5px] flex h-48 w-60 items-center justify-center border-[1.5px] border-copper text-copper transition-colors hover:bg-copper hover:text-white xl:h-55 xl:w-70"
            >
              <Icon name="arrowRight" className="size-24 xl:size-30" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
