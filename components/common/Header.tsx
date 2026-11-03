"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CompanyData, GlobalUIData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

function isActive(pathname: string, url: string) {
  return url === "/" ? pathname === "/" : pathname === url || pathname.startsWith(`${url}/`);
}

export const Header = ({ data: header, company, ui }: { data?: HeaderData; company: CompanyData; ui: GlobalUIData }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (!header) return null;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--color-white)] lg:static">
        <div className="mx-auto flex h-72 w-full items-center justify-between gap-4 px-16 sm:px-24 lg:h-100 lg:px-48 xl:h-150 xl:px-80">
          <Link href={company.logoUrl} className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src={company.logo}
              alt={company.logoAlt}
              width={company.logoWidth}
              height={company.logoHeight}
              priority
              sizes="(min-width: 1280px) 30vw, 260px"
              className="h-auto w-180 sm:w-220 lg:w-240 xl:w-483"
            />
          </Link>

          <div className="flex items-center gap-20 xl:mt-10 xl:gap-28">
            <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="hidden items-center gap-14 lg:flex">
              <span className="flex size-48 items-center justify-center rounded-full bg-[var(--color-nav-icon-bg)] text-copper xl:size-56">
                <Icon name="LuPhone" className="size-22 xl:size-27" strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.8125rem] leading-20 text-[var(--color-text-nav-muted)] xl:text-[0.9375rem] xl:leading-24">{header.callLabel}</span>
                <span className="text-[1rem] leading-24 font-medium text-[var(--color-text-nav-dark)] xl:text-[1.1875rem] xl:leading-28">{company.phone}</span>
              </span>
            </a>
            <span className="hidden h-56 w-px bg-[var(--color-nav-divider)] lg:block xl:mr-24 xl:ml-29 xl:h-72" />
            <a href={`mailto:${company.email}`} className="hidden items-center gap-14 lg:flex xl:gap-18">
              <span className="flex size-48 items-center justify-center rounded-full bg-[var(--color-nav-icon-bg)] text-copper xl:size-56">
                <Icon name="LuMail" className="size-22 xl:size-27" strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.8125rem] leading-20 text-[var(--color-text-nav-muted)] xl:text-[0.9375rem] xl:leading-24">{header.emailLabel}</span>
                <span className="text-[1rem] leading-24 font-medium text-[var(--color-text-nav-dark)] xl:text-[1.1875rem] xl:leading-28">{company.email}</span>
              </span>
            </a>
            <Link
              href={header.buttonUrl}
              className="ml-2 hidden h-46 items-center justify-center gap-8 rounded-[4px] border border-copper bg-copper px-10 text-[0.9375rem] font-medium text-[var(--color-white)] shadow-[0_3px_8px_var(--color-shadow-nav)] transition-colors hover:bg-[var(--color-white)] hover:text-copper sm:inline-flex xl:ml-3 xl:h-62 xl:w-245 xl:gap-14 xl:px-0 xl:text-[1.1875rem]"
            >
              {header.buttonText}
              <Icon name="LuArrowRight" className="size-18 xl:size-24" strokeWidth={2} />
            </Link>
            <button
              type="button"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="ml-12 flex size-44 items-center justify-center rounded-[4px] bg-nav text-[var(--color-white)] lg:hidden"
            >
              <Icon name={open ? "LuX" : "LuMenu"} className="size-24" strokeWidth={2} />
            </button>
          </div>
        </div>

        {open && (
          <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto bg-nav px-16 py-8 shadow-xl sm:px-24 lg:hidden">
            <ul>
              {header.nav.map((item) => (
                <li key={item.id} className="border-b border-[var(--color-white-10)] last:border-0">
                  <Link
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className={`block py-13 text-[1rem] ${isActive(pathname, item.url) ? "text-copper-light" : "text-[var(--color-white)]"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-14 sm:hidden">
                <Link
                  href={header.buttonUrl}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-46 items-center gap-12 rounded-[4px] border border-copper bg-copper px-20 text-[0.9375rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-copper"
                >
                  {header.buttonText}
                  <Icon name="LuArrowRight" className="size-18" strokeWidth={2} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <nav className="sticky top-0 z-40 hidden bg-[var(--color-nav-bar-bg)] lg:block">
        <ul className="mx-auto flex h-60 w-full max-w-1686 items-center justify-center gap-34 xl:h-84 xl:gap-59">
          {header.nav.map((item) => {
            const active = isActive(pathname, item.url);
            return (
              <li key={item.id} className="group relative flex h-full items-center">
                <Link
                  href={item.url}
                  className={`relative flex items-center gap-10 text-[1rem] transition-colors hover:text-copper-light xl:text-[1.3125rem] ${active ? "text-copper-light" : "text-[var(--color-white)]"}`}
                >
                  {item.label}
                  {active && <span className="absolute -inset-x-2 -bottom-9 h-2 bg-copper xl:-bottom-13 xl:h-3" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
