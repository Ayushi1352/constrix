"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GlobalUIData, ProjectsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { LineLabel } from "@/components/ui/SectionLabel";
import { Pagination } from "@/components/ui/Pagination";
import { fill } from "@/components/ui/text";

const sliderArrow =
  "absolute top-1/2 hidden size-44 lg:flex xl:top-358 items-center justify-center rounded-full border border-[var(--color-white-25)] bg-[var(--color-project-overlay-60)] text-copper-light transition-colors hover:border-copper hover:bg-copper hover:text-[var(--color-white)]";
const viewerArrow =
  "absolute top-1/2 flex size-44 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-white-25)] bg-[var(--color-project-overlay-60)] text-copper-light transition-colors hover:border-copper hover:bg-copper hover:text-[var(--color-white)]";

// Home page: one row slider with a "View All" button. Our Projects page (`paged`): a paginated grid, no slider.
export const Projects = ({ data: projects, ui, paged = false }: { data?: ProjectsData; ui: GlobalUIData; paged?: boolean }) => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // index (within the filtered list) of the project open in the image viewer
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const track = useRef<HTMLDivElement>(null);

  const activeFilter = filter || projects?.allLabel || "";
  const filtered = projects?.items.filter((item) => activeFilter === projects.allLabel || item.category === activeFilter) ?? [];
  const count = filtered.length;

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

  if (!projects) return null;

  const tabs = [projects.allLabel, ...projects.categories];
  const pageSize = projects.pageSize;
  const totalPages = paged ? Math.ceil(count / pageSize) : 1;
  const safePage = Math.min(currentPage, totalPages || 1);
  const pageStart = paged ? (safePage - 1) * pageSize : 0;
  const pageItems = paged ? filtered.slice(pageStart, pageStart + pageSize) : filtered;
  const opened = openIndex === null ? null : filtered[openIndex];

  const step = (direction: number) => setOpenIndex((index) => (index === null ? index : (index + direction + count) % count));

  const slide = (direction: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  const changeFilter = (tab: string) => {
    setFilter(tab);
    setCurrentPage(1);
    setOpenIndex(null);
    track.current?.scrollTo({ left: 0 });
  };

  return (
    <section
      className={`py-48 sm:py-64 lg:py-80 relative overflow-hidden bg-[var(--color-project-overlay)] bg-[radial-gradient(120%_90%_at_0%_0%,var(--color-project-glow)_0%,var(--color-project-glow-mid)_38%,var(--color-project-overlay)_70%)] ${paged ? "xl:pt-99 xl:pb-45" : "xl:pt-41 xl:pb-57"}`}
    >
      <span className="text-transparent [-webkit-text-stroke:1px_var(--color-project-inset)] pointer-events-none absolute top-30 left-1/2 hidden -translate-x-1/2 text-[11.875rem] xl:top-6 leading-none font-extrabold tracking-[0.02em] uppercase select-none xl:block">
        {projects.watermark}
      </span>

      <div className="relative mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <LineLabel tone="light" className="!font-normal">
          {projects.label}
        </LineLabel>
        <h2 className="mt-12 text-center text-[1.75rem] leading-36 font-extrabold tracking-[-0.03em] text-[var(--color-white)] sm:text-[2.5rem] sm:leading-48 xl:mt-8 xl:text-[3.5rem] xl:leading-70">
          {projects.title} <span className="bg-gradient-to-r from-copper-light to-copper bg-clip-text text-transparent">{projects.highlight}</span>
        </h2>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4 xl:mt-16 xl:gap-0">
          {tabs.map((tab, index) => (
            <div key={tab} className="flex shrink-0 items-center">
              {index > 1 && <span className="hidden h-24 w-px bg-[var(--color-white-15)] xl:block" />}
              <button
                type="button"
                onClick={() => changeFilter(tab)}
                aria-pressed={activeFilter === tab}
                className={`h-38 rounded-[3px] px-18 text-[0.875rem] xl:text-[1.0625rem] transition-colors xl:h-42 xl:px-35 ${
                  activeFilter === tab ? "bg-gradient-to-b from-copper-light to-copper font-medium text-[var(--color-white)]" : "font-normal text-[var(--color-white)] hover:bg-copper"
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>

        <div
          ref={track}
          className={`mt-24 grid gap-x-19 gap-y-24 xl:mt-25 xl:gap-y-57 ${paged ? "sm:grid-cols-2 lg:grid-cols-4" : "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory grid-flow-col grid-rows-1 auto-cols-[100%] overflow-x-auto sm:auto-cols-[calc((100%-1.1875rem)/2)] lg:auto-cols-[calc((100%-3.5625rem)/4)]"}`}
        >
          {pageItems.map((project, index) => (
            <article key={`${project.title}-${index}`} className="snap-start overflow-hidden rounded-[6px] border border-[var(--color-white-12)] bg-[var(--color-project-bg)]">
              <button
                type="button"
                onClick={() => setOpenIndex(pageStart + index)}
                aria-label={fill(ui.viewProjectImage, { title: project.title })}
                className="group relative block aspect-[369/236] w-full cursor-zoom-in overflow-hidden"
              >
                <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </button>
              <div className="px-20 pt-12 pb-18 xl:px-22 xl:pt-13 xl:pb-17">
                <h3 className="text-[1.0625rem] xl:text-[1.1875rem] leading-26 font-semibold text-[var(--color-white)] xl:leading-28 xl:font-bold">{project.title}</h3>
                <p className="text-[0.875rem] leading-24 text-[var(--color-text-project)] xl:text-[1rem] xl:leading-27">{project.category}</p>
              </div>
            </article>
          ))}
        </div>

        {!paged && (
          <div className="mt-20 flex justify-center xl:mt-22">
            <Link
              href={projects.buttonUrl}
              className="inline-flex items-center gap-10 rounded-[4px] border border-copper bg-copper px-20 py-12 text-[0.9375rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-copper xl:px-24 xl:py-15 xl:text-[1.0625rem]"
            >
              {projects.buttonText}
              <Icon name="LuArrowRight" className="size-18 xl:size-20" strokeWidth={2} />
            </Link>
          </div>
        )}

        {paged && (
          <Pagination
            tone="dark"
            className="mt-24 xl:mt-28"
            page={safePage}
            totalPages={totalPages}
            onChange={setCurrentPage}
            previousLabel={ui.previousPage}
            nextLabel={ui.nextPage}
            pageLabel={ui.goToPage}
          />
        )}
      </div>

      {!paged && (
        <>
          <button type="button" aria-label={ui.previousProjects} onClick={() => slide(-1)} className={`${sliderArrow} left-4 xl:left-16`}>
            <Icon name="LuChevronLeft" className="size-20" strokeWidth={2.4} />
          </button>
          <button type="button" aria-label={ui.nextProjects} onClick={() => slide(1)} className={`${sliderArrow} right-4 xl:right-15`}>
            <Icon name="LuChevronRight" className="size-20" strokeWidth={2.4} />
          </button>
        </>
      )}

      {opened && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={opened.title}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-black-90)] px-16 py-70 sm:px-80"
        >
          <button
            type="button"
            aria-label={ui.closeImage}
            onClick={() => setOpenIndex(null)}
            className="absolute top-16 right-16 flex size-44 items-center justify-center rounded-full border border-[var(--color-white-25)] bg-[var(--color-project-overlay-60)] text-[var(--color-white)] transition-colors hover:border-copper hover:bg-copper"
          >
            <Icon name="LuX" className="size-20" strokeWidth={2.4} />
          </button>

          <figure onClick={(event) => event.stopPropagation()} className="flex max-h-full w-full max-w-1200 flex-col">
            <div className="relative h-[70vh] w-full">
              <Image src={opened.image} alt={opened.title} fill quality={90} sizes="(min-width: 1280px) 1200px, 100vw" className="object-contain" />
            </div>
            <figcaption className="mt-14 text-center">
              <p className="text-[1.0625rem] leading-26 font-semibold text-[var(--color-white)] xl:text-[1.1875rem]">{opened.title}</p>
              <p className="text-[0.875rem] leading-22 text-[var(--color-text-project)]">
                {fill(ui.viewerCaption, { category: opened.category, current: (openIndex ?? 0) + 1, total: count })}
              </p>
            </figcaption>
          </figure>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label={ui.previousImage}
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className={`${viewerArrow} left-8 sm:left-20`}
              >
                <Icon name="LuChevronLeft" className="size-20" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                aria-label={ui.nextImage}
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className={`${viewerArrow} right-8 sm:right-20`}
              >
                <Icon name="LuChevronRight" className="size-20" strokeWidth={2.4} />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};
