import Image from "next/image";
import Link from "next/link";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";

/** Page banner: the page title over the banner image, with the breadcrumb trail under it. */
export const Breadcrumb = ({ data, ui }: { data?: BreadcrumbData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { title, paths: crumbs } = data;

  return (
    <section className="relative flex h-220 items-center justify-center overflow-hidden bg-nav sm:h-300 xl:h-452">
      {ui?.breadcrumbImage && (
        <Image src={ui.breadcrumbImage} alt="" fill priority sizes="100vw" className="object-cover object-[center_30%]" />
      )}
      {/* CSS overlay that keeps the page title and breadcrumbs readable without modifying the banner image */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--color-ink-65)]" />
      <div className="relative px-16 text-center xl:pt-12">
        <h1 className="font-ui text-[2.125rem] leading-44 font-medium text-[var(--color-white)] sm:text-[2.75rem] sm:leading-56 xl:text-[3.5rem] xl:leading-70">
          {title}
        </h1>
        <nav aria-label={ui?.breadcrumbLabel} className="mt-6 xl:mt-16">
          <ol className="flex flex-wrap items-center justify-center gap-8 font-ui text-[0.9375rem] text-[var(--color-white)] sm:gap-12 xl:gap-17 xl:text-[1.125rem]">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <li key={crumb.id} className="flex items-center gap-8 sm:gap-12 xl:gap-17">
                  {index > 0 && (
                    <span className="text-[var(--color-white-70)]" aria-hidden="true">
                      {ui?.breadcrumbSeparator}
                    </span>
                  )}
                  {!last && crumb.url ? (
                    <Link href={crumb.url} className="transition-colors hover:text-copper-light">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-copper-light" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};
