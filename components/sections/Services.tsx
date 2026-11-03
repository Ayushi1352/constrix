"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GlobalUIData, ServicesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { LineLabel } from "@/components/ui/SectionLabel";
import { Pagination } from "@/components/ui/Pagination";

// Home page: the first `homeCount` cards and a "View All" button. Our Services page (`showPagination`): every card, paged.
export const Services = ({ data: services, ui, showPagination = false }: { data?: ServicesData; ui: GlobalUIData; showPagination?: boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!services) return null;

  const cards = services.items.filter((item) => item.showInGrid);
  const pageSize = showPagination ? services.pageSize : services.homeCount;
  const totalPages = showPagination ? Math.ceil(cards.length / pageSize) : 1;
  const safePage = Math.min(currentPage, totalPages || 1);
  const visibleCards = cards.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <section className="py-48 sm:py-64 lg:py-80 relative overflow-hidden bg-[var(--color-services-bg)] xl:pt-100 xl:pb-60">
      {/* soft corner shapes */}
      <span className="absolute top-90 left-0 hidden h-200 w-150 bg-[var(--color-service-tint-60)] [clip-path:polygon(0_0,100%_50%,0_100%)] xl:block" />
      <span className="absolute top-170 right-0 hidden h-190 w-190 bg-[var(--color-service-tint-35)] [clip-path:polygon(100%_0,100%_100%,0_100%)] xl:block" />

      <div className="relative mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <LineLabel className="!font-semibold xl:!tracking-[0.22em]">{services.label}</LineLabel>
        <h2 className="mt-12 text-center text-[1.75rem] leading-38 font-extrabold tracking-[-0.02em] text-coal sm:text-[2.375rem] sm:leading-50 xl:mt-3 xl:text-[2.875rem] xl:leading-58">
          {services.titleTop}
          <br />
          {services.titleBottom} <span className="text-[var(--color-accent-service)]">{services.highlight}</span>
        </h2>
        <p className="mx-auto mt-14 max-w-640 text-center text-[0.9375rem] leading-24 text-[var(--color-text-service)] xl:mt-12 xl:max-w-none xl:text-[1.0625rem] xl:leading-26 xl:whitespace-pre-line">
          {services.text}
        </p>

        <div className="mt-28 grid gap-20 sm:grid-cols-2 xl:grid-cols-4 xl:mt-21 xl:gap-x-22 xl:gap-y-21">
          {visibleCards.map((service) => {
            // card image shape on the design canvas: the first row is taller than the rest
            const firstRow = cards.indexOf(service) < 4;
            return (
              <Link
                key={service.id}
                href={service.url}
                className="group flex flex-col overflow-hidden rounded-[5px] bg-[var(--color-white)] shadow-[0_2px_14px_var(--color-shadow-service)] transition-shadow hover:shadow-[0_8px_26px_var(--color-shadow-service-strong)]"
              >
                <div className={`relative overflow-hidden ${firstRow ? "aspect-[388/163]" : "aspect-[388/139]"}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`relative flex-1 px-19 pb-18 ${firstRow ? "xl:pb-11" : "xl:pb-22"}`}>
                  <div className="flex items-start gap-15">
                    <span className="relative mt-16 flex size-56 shrink-0 items-center justify-center rounded-[5px] bg-copper text-[var(--color-white)] shadow-[0_4px_10px_var(--color-shadow-service-hover)] xl:size-64">
                      <Icon name={service.icon} className="size-30 xl:size-36" strokeWidth={1.3} />
                    </span>
                    <h3 className="mt-37 max-w-170 flex-1 pr-44 xl:pr-0 text-[1.0625rem] xl:text-[1.1875rem] leading-22 font-semibold text-coal xl:font-bold">
                      {service.title}
                    </h3>
                    <span className="absolute top-48 right-18 flex size-38 shrink-0 items-center justify-center rounded-full bg-peach text-copper transition-colors group-hover:bg-copper group-hover:text-[var(--color-white)] xl:size-42">
                      <Icon name="LuArrowRight" className="size-18" strokeWidth={2} />
                    </span>
                  </div>
                  <p className="mt-6 max-w-290 text-[0.9375rem] xl:text-[1.0625rem] leading-24 xl:leading-26 text-slate xl:mt-4 xl:ml-2 xl:max-w-none">{service.text}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {!showPagination && (
          <div className="mt-28 flex justify-center xl:mt-32">
            <Link
              href={services.buttonUrl}
              className="inline-flex items-center gap-10 rounded-[4px] border border-copper bg-copper px-20 py-12 text-[0.9375rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-copper xl:px-24 xl:py-15 xl:text-[1.0625rem]"
            >
              {services.buttonText}
              <Icon name="LuArrowRight" className="size-18 xl:size-20" strokeWidth={2} />
            </Link>
          </div>
        )}

        {showPagination && (
          <Pagination
            className="mt-28"
            page={safePage}
            totalPages={totalPages}
            onChange={setCurrentPage}
            previousLabel={ui.previousServicesPage}
            nextLabel={ui.nextServicesPage}
            pageLabel={ui.goToServicesPage}
          />
        )}
      </div>
    </section>
  );
};
