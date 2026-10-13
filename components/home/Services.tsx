"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { LineLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { services } = data;
const cards = services.items.filter((item) => item.showInGrid);
// card image shape on the design canvas: the first row is taller than the rest
const imageRatio = (service: (typeof cards)[number]) => (cards.indexOf(service) < 4 ? "388 / 163" : "388 / 139");

export default function Services({ pageSize = 8, showPagination = false }: { pageSize?: number; showPagination?: boolean }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = showPagination ? Math.ceil(cards.length / pageSize) : 1;
  const safePage = Math.min(currentPage, totalPages || 1);
  const visibleCards = showPagination ? cards.slice((safePage - 1) * pageSize, safePage * pageSize) : cards.slice(0, pageSize);
  return (
    <section className="section-space relative overflow-hidden bg-[#fcf8f7] xl:pt-100 xl:pb-60">
      {/* soft corner shapes */}
      <span className="absolute top-90 left-0 hidden h-200 w-150 bg-[#f6e3d6]/60 [clip-path:polygon(0_0,100%_50%,0_100%)] xl:block" />
      <span className="absolute top-170 right-0 hidden h-190 w-190 bg-[#f6e3d6]/35 [clip-path:polygon(100%_0,100%_100%,0_100%)] xl:block" />

      <div className="relative mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <LineLabel className="font-semibold! xl:tracking-[0.22em]!">{services.label}</LineLabel>
        <h2 className="mt-12 text-center fs-28 leading-34 font-extrabold tracking-[-0.02em] text-coal sm:fs-38 sm:leading-44 xl:mt-3 xl:fs-46 xl:leading-44">
          {services.titleTop}
          <br />
          {services.titleBottom} <span className="text-[#fb7f1a]">{services.highlight}</span>
        </h2>
        <p className="mx-auto mt-14 max-w-640 text-center fs-14 leading-22 text-[#3c4347] xl:mt-12 xl:max-w-none xl:fs-16 xl:whitespace-pre-line">
          {services.text}
        </p>

        <div className="mt-28 grid gap-20 sm:grid-cols-2 xl:grid-cols-4 xl:mt-21 xl:gap-x-22 xl:gap-y-21">
          {visibleCards.map((service) => (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-[5px] bg-white shadow-[0_2px_14px_rgba(60,40,20,0.05)] transition-shadow hover:shadow-[0_8px_26px_rgba(60,40,20,0.14)]"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: imageRatio(service) }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className={`relative flex-1 px-19 pb-18 ${cards.indexOf(service) < 4 ? "xl:pb-11" : "xl:pb-22"}`}>
                <div className="flex items-start gap-15">
                  <span className="relative -mt-11 flex size-56 shrink-0 items-center justify-center rounded-[5px] bg-copper text-white shadow-[0_4px_10px_rgba(200,122,46,0.35)] xl:size-64">
                    <Icon name={service.icon} className="size-30 xl:size-36" strokeWidth={1.3} />
                  </span>
                  <h3 className="mt-10 max-w-170 flex-1 pr-44 xl:pr-0 fs-17 leading-22 font-semibold text-coal xl:fs-18 xl:font-bold">
                    {service.title}
                  </h3>
                  <span className="absolute top-21 right-18 flex size-38 shrink-0 items-center justify-center rounded-full bg-peach text-copper transition-colors group-hover:bg-copper group-hover:text-white xl:size-42">
                    <Icon name="arrowRight" className="size-18" strokeWidth={2} />
                  </span>
                </div>
                <p className="mt-6 max-w-290 fs-15 leading-21 text-slate xl:mt-4 xl:ml-2 xl:max-w-none xl:fs-15 xl:whitespace-pre-line">{service.text}</p>
              </div>
            </Link>
          ))}
        </div>

        {!showPagination && (
          <div className="mt-28 flex justify-center xl:mt-32">
            <Link
              href={services.button.href}
              className="inline-flex items-center gap-10 rounded-[4px] border border-copper bg-copper px-20 py-12 fs-15 font-medium text-white transition-colors hover:bg-white hover:text-copper xl:px-24 xl:py-15 xl:fs-17"
            >
              {services.button.label}
              <Icon name="arrowRight" className="size-18 xl:size-20" strokeWidth={2} />
            </Link>
          </div>
        )}

        {showPagination && totalPages > 1 && (
          <div className="mt-28 flex items-center justify-center gap-10">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className="flex size-40 items-center justify-center rounded-full border border-[#d8dfe6] bg-white text-coal transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous services page"
            >
              <Icon name="chevronLeft" className="size-18" strokeWidth={2.4} />
            </button>
            <div className="flex items-center gap-8 fs-15 text-coal">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex size-34 items-center justify-center rounded-full transition-colors ${safePage === page ? "bg-copper text-white" : "bg-[#f7f4f2] text-coal hover:bg-copper hover:text-white"}`}
                  aria-label={`Go to services page ${page}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
              className="flex size-40 items-center justify-center rounded-full border border-[#d8dfe6] bg-white text-coal transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next services page"
            >
              <Icon name="chevronRight" className="size-18" strokeWidth={2.4} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
