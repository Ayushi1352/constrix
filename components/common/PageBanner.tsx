import Image from "next/image";
import Link from "next/link";
import { site as data } from "@/data";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  const items: BreadcrumbItem[] =
    breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : [{ label: title }];

  return (
    <section className="relative flex h-220 items-center justify-center overflow-hidden bg-nav sm:h-300 xl:h-452">
      <Image
        src={data.site.bannerImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-[center_30%] blur-[3px]"
      />
      <div className="absolute inset-0 bg-[#0f1c24]/75" />
      <div className="relative px-16 text-center xl:pt-12">
        <h1 className="font-roboto fs-34 leading-44 font-medium text-white sm:fs-44 sm:leading-56 xl:fs-56 xl:leading-70">
          {title}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex flex-wrap items-center justify-center gap-8 font-roboto fs-15 text-white sm:gap-12 xl:mt-16 xl:gap-17 xl:fs-18"
        >
          <Link href="/" className="transition-colors hover:text-copper-light">
            {data.pageBanner.homeLabel}
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span
                key={index}
                className="flex items-center gap-8 sm:gap-12 xl:gap-17"
              >
                <span className="text-white/70">/</span>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-copper-light"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-copper-light">{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
