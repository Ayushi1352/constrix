"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/common/Icon";
import { LineLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { projects } = data;

// `rows` = 1 on the home page, 2 on the Our Projects page.
export default function Projects({ rows = 1 }: { rows?: 1 | 2 }) {
  const [filter, setFilter] = useState(projects.allLabel);
  const track = useRef<HTMLDivElement>(null);
  const tabs = [projects.allLabel, ...projects.categories];
  const filtered = projects.items.filter((item) => filter === projects.allLabel || item.category === filter);
  // the track fills column by column, so with two rows the list is re-ordered to still read row by row
  const half = Math.ceil(filtered.length / 2);
  const items = rows === 2 ? filtered.slice(0, half).flatMap((item, index) => [item, filtered[index + half]]).filter(Boolean) : filtered;

  const slide = (direction: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      className="section-space relative overflow-hidden bg-[#03090f] bg-[radial-gradient(120%_90%_at_0%_0%,#1b2f40_0%,#0a1620_38%,#03090f_70%)]"
    >
      <span className="text-outline pointer-events-none absolute top-30 left-1/2 hidden -translate-x-1/2 fs-190 leading-none font-extrabold tracking-[0.02em] uppercase select-none xl:block">
        {projects.watermark}
      </span>

      <div className="relative mx-auto w-full max-w-1686 px-16 sm:px-24 xl:px-78">
        <LineLabel tone="light">{projects.label}</LineLabel>
        <h2 className="mt-12 text-center fs-28 leading-36 font-extrabold tracking-[-0.03em] text-white sm:fs-40 sm:leading-48 xl:mt-8 xl:fs-56 xl:leading-70">
          {projects.title}{" "}
          <span className="bg-linear-to-r from-copper-light to-copper bg-clip-text text-transparent">
            {projects.highlight}
          </span>
        </h2>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4 xl:mt-16 xl:gap-0">
          {tabs.map((tab, index) => (
            <div key={tab} className="flex shrink-0 items-center">
              {index > 1 && <span className="hidden h-24 w-px bg-white/15 xl:block" />}
              <button
                type="button"
                onClick={() => {
                  setFilter(tab);
                  track.current?.scrollTo({ left: 0 });
                }}
                className={`h-38 rounded-[3px] px-18 fs-14 transition-colors xl:h-42 xl:px-34 xl:fs-17 ${
                  filter === tab
                    ? "bg-linear-to-b from-copper-light to-copper font-semibold text-white"
                    : "font-medium text-white hover:text-copper-light"
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>

        <div
          ref={track}
          className={`no-scrollbar mt-24 grid snap-x snap-mandatory grid-flow-col auto-cols-[100%] gap-x-19 gap-y-24 overflow-x-auto sm:auto-cols-[calc((100%-1.1875rem)/2)] lg:auto-cols-[calc((100%-3.5625rem)/4)] xl:mt-25 xl:gap-y-47 ${rows === 2 ? "grid-rows-2" : "grid-rows-1"}`}
        >
          {items.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="snap-start overflow-hidden rounded-[6px] border border-white/12 bg-[#040d14]"
            >
              <div className="relative aspect-[369/236]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#040d14] to-transparent" />
              </div>
              <div className="px-20 pt-12 pb-18 xl:px-22 xl:pt-13 xl:pb-17">
                <h3 className="fs-17 leading-26 font-semibold text-white xl:fs-19 xl:leading-28">{project.title}</h3>
                <p className="fs-14 leading-24 text-[#cfd4d8] xl:fs-16 xl:leading-27">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous projects"
        onClick={() => slide(-1)}
        className="absolute top-1/2 left-4 hidden size-44 lg:flex xl:top-358 xl:left-16 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-copper-light transition-colors hover:border-copper-light xl:flex"
      >
        <Icon name="chevronLeft" className="size-20" strokeWidth={2.4} />
      </button>
      <button
        type="button"
        aria-label="Next projects"
        onClick={() => slide(1)}
        className="absolute top-1/2 right-4 hidden size-44 lg:flex xl:top-358 xl:right-15 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-copper-light transition-colors hover:border-copper-light xl:flex"
      >
        <Icon name="chevronRight" className="size-20" strokeWidth={2.4} />
      </button>
    </section>
  );
}
