import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { site, footer, services } = data;
const serviceLinks = services.items
  .filter((item) => item.showInFooter)
  .map((item) => ({ label: item.title, href: `/our-services/${item.slug}` }));
const legalLinks = footer.supportLinks.filter((link) => link.legal);

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="fs-12 font-extrabold tracking-[0.08em] text-white uppercase sm:fs-13 xl:fs-17 xl:tracking-[0.1em]">{title}</h3>
      <span className="mt-8 block h-3 w-36 bg-copper sm:w-38 xl:mt-13 xl:w-42" />
      <ul className="mt-12 space-y-8 sm:mt-14 xl:mt-29 xl:space-y-[1.156rem]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-8 fs-12 leading-18 text-[#e6e6e6] transition-colors hover:text-copper sm:fs-13 sm:leading-20 lg:fs-14 lg:leading-21 xl:fs-15 xl:leading-21 xl:gap-10"
            >
              <Icon name="chevronRight" className="-ml-2 size-12 shrink-0 text-copper sm:size-13 xl:-ml-3 xl:size-16" strokeWidth={2.6} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.address.join(" "))}`;
  const contacts = [
    { icon: "pinFill", lines: site.contact.address, href: mapHref, external: true },
    { icon: "phoneFill", lines: [site.contact.phone], href: (line: string) => `tel:${line.replace(/[^\d+]/g, "")}` },
    { icon: "mailFill", lines: [site.contact.email], href: (line: string) => `mailto:${line}` },
  ];

  return (
    <footer className="bg-[#0a0f13] font-montserrat">
      <div className="mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        {/* mobile: quick links + services share a row; tablet: get in touch joins that row */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-32 pt-40 pb-32 sm:gap-x-28 md:grid-cols-[1fr_1.1fr_1.3fr] md:gap-x-24 xl:grid-cols-[28.375rem_15.9375rem_17.8125rem_22.8125rem] xl:justify-between xl:gap-0 xl:pt-105 xl:pb-37">
          <div className="col-span-2 md:col-span-3 xl:col-span-1 xl:border-r xl:border-white/8 xl:pr-40 xl:pb-32">
            <Link href="/" className="inline-block xl:-mt-22 xl:ml-0">
              <Image
                src={site.logoWhite}
                alt={site.name}
                width={1024}
                height={341}
                sizes="(min-width: 1280px) 24vw, 260px"
                className="h-auto w-240 xl:w-418"
              />
            </Link>
            <p className="mt-18 max-w-520 fs-14 leading-23 text-[#e6e6e6] xl:mt-15 xl:max-w-none xl:fs-16 xl:leading-26 xl:whitespace-pre-line">
              {footer.text}
            </p>
          </div>

          <div className="min-w-0 xl:pt-13 xl:pl-40">
            <LinkColumn title={footer.quickLinksTitle} links={footer.quickLinks} />
          </div>
          <div className="min-w-0 xl:pt-13">
            <LinkColumn title={footer.servicesTitle} links={serviceLinks} />
          </div>

          <div className="col-span-2 min-w-0 md:col-span-1 xl:border-l xl:border-white/8 xl:pt-13 xl:pl-50">
            <h3 className="fs-14 font-extrabold tracking-[0.1em] text-white uppercase md:fs-13 md:tracking-[0.08em] lg:fs-14 lg:tracking-[0.1em] xl:fs-17">
              {footer.contactTitle}
            </h3>
            <span className="mt-8 block h-3 w-42 bg-copper md:w-38 lg:w-42 xl:mt-13" />
            <ul className="mt-16 space-y-12 md:mt-14 lg:mt-16 xl:mt-28 xl:space-y-19">
              {contacts.map((contact) => (
                <li key={contact.icon} className="flex items-center gap-20 md:gap-12 lg:gap-20 xl:gap-28">
                  <span className="flex size-44 shrink-0 items-center justify-center border-2 border-copper text-copper-light md:size-38 lg:size-44 xl:size-48">
                    <Icon name={contact.icon} className="size-22 md:size-18 lg:size-22 xl:size-26" />
                  </span>
                  <span className="min-w-0 fs-14 leading-21 break-words md:fs-13 md:leading-20 lg:fs-14 lg:leading-21 xl:fs-17 xl:leading-23">
                    {contact.lines.map((line) => (
                      <a
                        key={line}
                        href={typeof contact.href === "function" ? contact.href(line) : contact.href}
                        target={contact.external ? "_blank" : undefined}
                        rel={contact.external ? "noopener noreferrer" : undefined}
                        className="block cursor-pointer text-[#e6e6e6] transition-colors hover:text-white"
                      >
                        {line}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full">
        <div className="relative border-t border-white/15">
          <span className="absolute -top-px left-0 h-2 w-140 bg-copper" />
          <div className="flex flex-col items-center justify-between gap-18 px-16 py-24 sm:flex-row sm:px-24 lg:px-48 xl:h-102 xl:py-0 xl:px-80">
            <p className="fs-13 text-[#cfcfcf] xl:fs-16">{footer.copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-y-14 sm:justify-end">
              <ul className="flex flex-wrap items-center justify-center">
                {legalLinks.map((link) => (
                  <li key={link.href} className="border-r border-white/20 px-12 last:border-r-0 first:pl-0">
                    <Link href={link.href} className="fs-12 text-[#cfcfcf] transition-colors hover:text-white xl:fs-13">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="ml-14 flex gap-14">
                {footer.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-40 items-center justify-center border-2 border-copper text-copper-light transition-colors hover:bg-copper hover:text-white xl:size-42"
                    >
                      <Icon name={social.icon} className="size-20 xl:size-22" strokeWidth={2} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
