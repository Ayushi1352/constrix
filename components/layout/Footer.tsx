import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { site, footer, services } = data;
const serviceLinks = services.items
  .filter((item) => item.showInGrid)
  .map((item) => ({ label: item.title, href: `/our-services/${item.slug}` }));
const legalLinks = footer.supportLinks.filter(
  (link) => link.href === "/privacy-policy" || link.href === "/terms-and-conditions" || link.href === "/sitemap",
);

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="fs-14 font-extrabold tracking-[0.1em] text-white uppercase xl:fs-16">{title}</h3>
      <span className="mt-8 block h-3 w-42 bg-copper xl:mt-7" />
      <ul className="mt-16 space-y-10 xl:mt-20 xl:space-y-10">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-center gap-10 fs-14 leading-21 text-[#e6e6e6] transition-colors hover:text-copper xl:fs-15 xl:leading-21"
            >
              <Icon name="chevronRight" className="-ml-3 size-14 shrink-0 text-copper xl:size-16" strokeWidth={2.6} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address.join(" "))}`;
  const contacts = [
    { icon: "pinFill", lines: footer.address, href: mapHref, external: true },
    { icon: "phoneFill", lines: footer.phones, href: (line: string) => `tel:${line.replace(/[^\d+]/g, "")}` },
    { icon: "mailFill", lines: [footer.email], href: (line: string) => `mailto:${line}` },
  ];

  return (
    <footer className="bg-night font-montserrat">
      <div className="mx-auto w-full max-w-1686 px-20 sm:px-32 xl:pr-56 xl:pl-66">
        <div className="grid gap-x-32 gap-y-32 pt-40 pb-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[28.375rem_15.9375rem_17.8125rem_245px] xl:justify-between xl:gap-0 xl:pt-72 xl:pb-24">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:border-r xl:border-white/8 xl:pr-40 xl:pb-32">
            <Link href="/" className="inline-block xl:ml-5">
              <Image
                src={site.logoWhite}
                alt={site.name}
                width={1024}
                height={341}
                sizes="(min-width: 1280px) 24vw, 260px"
                className="h-auto w-240 xl:w-397"
              />
            </Link>
            <p className="mt-18 max-w-520 fs-14 leading-23 text-[#e6e6e6] xl:mt-20 xl:max-w-none xl:fs-15 xl:leading-22 xl:whitespace-pre-line">
              {footer.text}
            </p>
          </div>

          <div className="xl:pt-13 xl:pl-40">
            <LinkColumn title={footer.quickLinksTitle} links={footer.quickLinks} />
          </div>
          <div className="xl:pt-13">
            <LinkColumn title={footer.servicesTitle} links={serviceLinks} />
          </div>

          <div className="xl:border-l xl:border-white/8 xl:pt-13">
            <h3 className="fs-14 font-extrabold tracking-[0.1em] text-white uppercase xl:fs-16">
              {footer.contactTitle}
            </h3>
            <span className="mt-8 block h-3 w-42 bg-copper xl:mt-7" />
            <ul className="mt-16 space-y-12 xl:mt-20 xl:space-y-12">
              {contacts.map((contact) => (
                <li key={contact.icon} className="flex items-center gap-20 xl:gap-28">
                  <span className="flex size-44 shrink-0 items-center justify-center border-2 border-copper text-copper-light xl:size-48">
                    <Icon name={contact.icon} className="size-22 xl:size-26" />
                  </span>
                  <span className="fs-14 leading-21 break-words xl:fs-15 xl:leading-22">
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

      <div className="mx-auto w-full max-w-1686">
        <div className="relative border-t border-white/15">
          <span className="absolute -top-px left-0 h-2 w-140 bg-copper" />
          <div className="flex flex-col items-center justify-between gap-18 px-20 py-24 sm:flex-row sm:px-32 xl:h-102 xl:py-0 xl:pr-50 xl:pl-66">
            <p className="fs-13 text-[#cfcfcf] xl:fs-14">{footer.copyright}</p>
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
