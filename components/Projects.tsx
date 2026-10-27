"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { LineLabel } from "@/components/SectionLabel";
import { site as data, fillLabel } from "@/data";

const { projects } = data;

// `rows` = 1 on the home page (slider), 2 on the Our Projects page (paginated grid, no slider).
export default function Projects({ rows = 1, showViewAll = true, pageSize = 8 }: { rows?: 1 | 2; showViewAll?: boolean; pageSize?: number }) {
  const [filter, setFilter] = useState(projects.allLabel);
  const [currentPage, setCurrentPage] = useState(1);
  // index (within the filtered list) of the project open in the image viewer
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const tabs = [projects.allLabel, ...projects.categories];
  const filtered = projects.items.filter((item) => filter === projects.allLabel || item.category === filter);
  const totalPages = rows === 2 ? Math.ceil(filtered.length / pageSize) : 1;
  const safePage = Math.min(currentPage, totalPages || 1);
  const pageStart = (safePage - 1) * pageSize;
  const pageItems = filtered.slice(pageStart, pageStart + pageSize);

  const count = filtered.length;
  const opened = openIndex === null ? null : filtered[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") setOpenIndex((index) => (index === null ? index : (index + 1) % count));
      if (event.key === "ArrowLeft") setOpenIndex((index) => (index === null ? index : (index - 1 + count) % count));
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, count]);

  const step = (direction: number) => setOpenIndex((index) => (index === null ? index : (index + direction + count) % count));

  const slide = (direction: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  const handleFilterChange = (tab: string) => {
    setFilter(tab);
    setCurrentPage(1);
    setOpenIndex(null);
    track.current?.scrollTo({ left: 0 });
  };

  return (
    <section
      className={`py-48 sm:py-64 lg:py-80 relative overflow-hidden bg-[#03090f] bg-[radial-gradient(120%_90%_at_0%_0%,#1b2f40_0%,#0a1620_38%,#03090f_70%)] ${rows === 2 ? "xl:pt-99 xl:pb-45" : "xl:pt-41 xl:pb-57"}`}
    >
      <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] pointer-events-none absolute top-30 left-1/2 hidden -translate-x-1/2 text-[11.875rem] xl:top-6 leading-none font-extrabold tracking-[0.02em] uppercase select-none xl:block">
        {projects.watermark}
      </span>

      <div className="relative mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <LineLabel tone="light" className="font-normal!">{projects.label}</LineLabel>
        <h2 className="mt-12 text-center text-[1.75rem] leading-36 font-extrabold tracking-[-0.03em] text-white sm:text-[2.5rem] sm:leading-48 xl:mt-8 xl:text-[3.5rem] xl:leading-70">
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
                onClick={() => handleFilterChange(tab)}
                className={`h-38 rounded-[3px] px-18 text-[0.875rem] transition-colors xl:h-42 xl:px-35 xl:text-[1rem] ${
                  filter === tab
                    ? "bg-linear-to-b from-copper-light to-copper font-medium text-white"
                    : "font-normal text-white hover:bg-copper"
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>

        <div
          ref={track}
          className={`mt-24 grid gap-x-19 gap-y-24 xl:mt-25 xl:gap-y-57 ${rows === 2 ? "sm:grid-cols-2 lg:grid-cols-4" : "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory grid-flow-col grid-rows-1 auto-cols-[100%] overflow-x-auto sm:auto-cols-[calc((100%-1.1875rem)/2)] lg:auto-cols-[calc((100%-3.5625rem)/4)]"}`}
        >
          {pageItems.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="snap-start overflow-hidden rounded-[6px] border border-white/12 bg-[#040d14]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(pageStart + index)}
                aria-label={fillLabel(data.labels.viewProjectImage, { title: project.title })}
                className="group relative block aspect-[369/236] w-full cursor-zoom-in overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </button>
              <div className="px-20 pt-12 pb-18 xl:px-22 xl:pt-13 xl:pb-17">
                <h3 className="text-[1.0625rem] leading-26 font-semibold text-white xl:text-[1.125rem] xl:leading-28 xl:font-bold">{project.title}</h3>
                <p className="text-[0.875rem] leading-24 text-[#cfd4d8] xl:text-[1rem] xl:leading-27">{project.category}</p>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-20 flex justify-center xl:mt-22">
            <Link
              href={projects.button.href}
              className="inline-flex items-center gap-10 rounded-[4px] border border-copper bg-copper px-20 py-12 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-copper xl:px-24 xl:py-15 xl:text-[1.0625rem]"
            >
              {projects.button.label}
              <Icon name="arrowRight" className="size-18 xl:size-20" strokeWidth={2} />
            </Link>
          </div>
        )}

        {rows === 2 && totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-10 xl:mt-28">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className="flex size-40 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={data.labels.previousPage}
            >
              <Icon name="chevronLeft" className="size-18" strokeWidth={2.4} />
            </button>
            <div className="flex items-center gap-8 text-white text-[0.9375rem]">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex size-34 items-center justify-center rounded-full transition-colors ${safePage === page ? "bg-copper text-white" : "bg-white/5 text-white/80 hover:bg-copper hover:text-white"}`}
                  aria-label={fillLabel(data.labels.goToPage, { n: page })}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
              className="flex size-40 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={data.labels.nextPage}
            >
              <Icon name="chevronRight" className="size-18" strokeWidth={2.4} />
            </button>
          </div>
        )}
      </div>

      {rows === 1 && (
        <>
          <button
            type="button"
            aria-label={data.labels.previousProjects}
            onClick={() => slide(-1)}
            className="absolute top-1/2 left-4 hidden size-44 lg:flex xl:top-358 xl:left-16 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-copper-light transition-colors hover:border-copper hover:bg-copper hover:text-white xl:flex"
          >
            <Icon name="chevronLeft" className="size-20" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            aria-label={data.labels.nextProjects}
            onClick={() => slide(1)}
            className="absolute top-1/2 right-4 hidden size-44 lg:flex xl:top-358 xl:right-15 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-copper-light transition-colors hover:border-copper hover:bg-copper hover:text-white xl:flex"
          >
            <Icon name="chevronRight" className="size-20" strokeWidth={2.4} />
          </button>
        </>
      )}

      {opened && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={opened.title}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-16 py-70 sm:px-80"
        >
          <button
            type="button"
            aria-label={data.labels.closeImage}
            onClick={() => setOpenIndex(null)}
            className="absolute top-16 right-16 flex size-44 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-white transition-colors hover:border-copper hover:bg-copper"
          >
            <Icon name="close" className="size-20" strokeWidth={2.4} />
          </button>

          <figure onClick={(event) => event.stopPropagation()} className="flex max-h-full w-full max-w-1200 flex-col">
            <div className="relative h-[70vh] w-full">
              <Image src={opened.image} alt={opened.title} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-contain" />
            </div>
            <figcaption className="mt-14 text-center">
              <p className="text-[1.0625rem] leading-26 font-semibold text-white xl:text-[1.1875rem]">{opened.title}</p>
              <p className="text-[0.875rem] leading-22 text-[#cfd4d8]">
                {opened.category} · {(openIndex ?? 0) + 1} / {count}
              </p>
            </figcaption>
          </figure>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label={data.labels.previousImage}
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute top-1/2 left-8 flex size-44 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-copper-light transition-colors hover:border-copper hover:bg-copper hover:text-white sm:left-20"
              >
                <Icon name="chevronLeft" className="size-20" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                aria-label={data.labels.nextImage}
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute top-1/2 right-8 flex size-44 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#03090f]/60 text-copper-light transition-colors hover:border-copper hover:bg-copper hover:text-white sm:right-20"
              >
                <Icon name="chevronRight" className="size-20" strokeWidth={2.4} />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
