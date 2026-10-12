"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { site, header, nav, services } = data;
const serviceLinks = services.items.filter((item) => item.showInGrid);

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white lg:static">
        <div className="mx-auto flex h-72 w-full max-w-1686 items-center justify-between gap-16 px-16 sm:px-24 lg:h-100 xl:h-140 xl:pr-56 xl:pl-111">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src={site.logo}
              alt={site.name}
              width={1024}
              height={341}
              priority
              sizes="(min-width: 1280px) 30vw, 260px"
              className="h-auto w-180 sm:w-220 lg:w-280 xl:w-420"
            />
          </Link>

          <div className="flex items-center">
            <a href={`tel:${header.phone.replace(/\s/g, "")}`} className="hidden items-center gap-14 lg:flex">
              <span className="flex size-48 items-center justify-center rounded-full bg-[#fbede3] text-copper xl:size-56">
                <Icon name="phone" className="size-22 xl:size-27" strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <span className="fs-13 leading-20 text-[#555] xl:fs-15 xl:leading-24">{header.callLabel}</span>
                <span className="fs-16 leading-24 font-medium text-[#111] xl:fs-19 xl:leading-28">{header.phone}</span>
              </span>
            </a>
            <span className="hidden h-72 w-px bg-[#eeeeee] xl:mr-24 xl:ml-29 xl:block" />
            <a href={`mailto:${header.email}`} className="hidden items-center gap-18 xl:flex">
              <span className="flex size-56 items-center justify-center rounded-full bg-[#fbede3] text-copper">
                <Icon name="mail" className="size-27" strokeWidth={1.4} />
              </span>
              <span className="flex flex-col">
                <span className="fs-15 leading-24 text-[#555]">{header.emailLabel}</span>
                <span className="fs-19 leading-28 font-medium text-[#111]">{header.email}</span>
              </span>
            </a>
            <Link
              href={header.button.href}
              className="ml-24 hidden h-46 items-center justify-center gap-12 rounded-[4px] bg-copper px-20 fs-15 font-medium text-white shadow-[0_3px_8px_rgba(213,122,47,0.3)] transition-colors hover:bg-copper-dark sm:inline-flex xl:ml-32 xl:h-62 xl:w-245 xl:gap-14 xl:px-0 xl:fs-19"
            >
              {header.button.label}
              <Icon name="arrowRight" className="size-18 xl:size-24" strokeWidth={2} />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
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
                    className={`block py-13 fs-16 ${isActive(pathname, item.href) ? "text-copper-light" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ul className="pb-10 pl-16">
                      {serviceLinks.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/our-services/${service.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-7 fs-14 text-white/75"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="py-14 sm:hidden">
                <Link
                  href={header.button.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-46 items-center gap-12 rounded-[4px] bg-copper px-20 fs-15 font-medium text-white transition-colors hover:bg-copper-dark"
                >
                  {header.button.label}
                  <Icon name="arrowRight" className="size-18" strokeWidth={2} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <nav className="sticky top-0 z-40 hidden bg-nav lg:block">
        <ul className="mx-auto flex h-60 w-full max-w-1686 items-center justify-center gap-34 xl:h-84 xl:gap-59">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="group relative flex h-full items-center">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-10 fs-16 transition-colors hover:text-copper-light xl:fs-21 ${active ? "text-copper-light" : "text-white"}`}
                >
                  {item.label}
                  {item.dropdown && <Icon name="chevronDown" className="size-16 xl:size-20" strokeWidth={2.2} />}
                  {active && (
                    <span className="absolute -inset-x-2 -bottom-9 h-2 bg-copper xl:-bottom-13 xl:h-3" />
                  )}
                </Link>
                {item.dropdown && (
                  <ul className="invisible absolute top-full left-0 w-260 bg-white py-8 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 xl:w-300">
                    {serviceLinks.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/our-services/${service.slug}`}
                          className="block px-20 py-10 fs-15 text-coal transition-colors hover:bg-cream hover:text-copper xl:fs-17"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
