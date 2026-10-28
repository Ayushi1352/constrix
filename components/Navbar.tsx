"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { site, header, nav } = data;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white lg:static">
        <div className="mx-auto flex h-72 w-full items-center justify-between gap-4 px-16 sm:px-24 lg:h-100 lg:px-48 xl:h-150 xl:px-80">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src={site.logo}
              alt={site.name}
              width={1024}
              height={341}
              priority
              sizes="(min-width: 1280px) 30vw, 260px"
              className="h-auto w-180 sm:w-220 lg:w-240 xl:w-483"
            />
          </Link>

          <div className="flex items-center gap-20 xl:mt-10 xl:gap-28">
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hidden items-center gap-14 lg:flex">
              <span className="flex size-48 items-center justify-center rounded-full bg-[#fbede3] text-copper xl:size-56">
                <Icon name="phone" className="size-22 xl:size-27" strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.8125rem] leading-20 text-[#555] xl:text-[0.9375rem] xl:leading-24">{header.callLabel}</span>
                <span className="text-[1rem] leading-24 font-medium text-[#111] xl:text-[1.1875rem] xl:leading-28">{site.contact.phone}</span>
              </span>
            </a>
            <span className="hidden h-56 w-px bg-[#eeeeee] lg:block xl:mr-24 xl:ml-29 xl:h-72" />
            <a href={`mailto:${site.contact.email}`} className="hidden items-center gap-14 lg:flex xl:gap-18">
              <span className="flex size-48 items-center justify-center rounded-full bg-[#fbede3] text-copper xl:size-56">
                <Icon name="mail" className="size-22 xl:size-27" strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.8125rem] leading-20 text-[#555] xl:text-[0.9375rem] xl:leading-24">{header.emailLabel}</span>
                <span className="text-[1rem] leading-24 font-medium text-[#111] xl:text-[1.1875rem] xl:leading-28">{site.contact.email}</span>
              </span>
            </a>
            <Link
              href={header.button.href}
              className="ml-2 hidden h-46 items-center justify-center gap-8 rounded-[4px] border border-copper bg-copper px-10 text-[0.9375rem] font-medium text-white shadow-[0_3px_8px_rgba(213,122,47,0.3)] transition-colors hover:bg-white hover:text-copper sm:inline-flex xl:ml-3 xl:h-62 xl:w-245 xl:gap-14 xl:px-0 xl:text-[1.1875rem]"
            >
              {header.button.label}
              <Icon name="arrowRight" className="size-18 xl:size-24" strokeWidth={2} />
            </Link>
            <button
              type="button"
              aria-label={open ? data.labels.closeMenu : data.labels.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="ml-12 flex size-44 items-center justify-center rounded-[4px] bg-nav text-white lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-24" strokeWidth={2} />
            </button>
          </div>
        </div>

        {open && (
          <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto bg-nav px-16 py-8 shadow-xl sm:px-24 lg:hidden">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-white/10 last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-13 text-[1rem] ${isActive(pathname, item.href) ? "text-copper-light" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-14 sm:hidden">
                <Link
                  href={header.button.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-46 items-center gap-12 rounded-[4px] border border-copper bg-copper px-20 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white hover:text-copper"
                >
                  {header.button.label}
                  <Icon name="arrowRight" className="size-18" strokeWidth={2} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <nav className="sticky top-0 z-40 hidden bg-[#192a31] lg:block">
        <ul className="mx-auto flex h-60 w-full max-w-1686 items-center justify-center gap-34 xl:h-84 xl:gap-59">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="group relative flex h-full items-center">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-10 text-[1rem] transition-colors hover:text-copper-light xl:text-[1.3125rem] ${active ? "text-copper-light" : "text-white"}`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -inset-x-2 -bottom-9 h-2 bg-copper xl:-bottom-13 xl:h-3" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
