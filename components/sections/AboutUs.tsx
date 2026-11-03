import Image from "next/image";
import Link from "next/link";
import type { AboutUsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

// `detailed` is the About Us page version: a second paragraph instead of the button.
export const AboutUs = ({ data: about, detailed = false }: { data?: AboutUsData; detailed?: boolean }) => {
  if (!about) return null;
  return (
    <section className={`py-48 sm:py-64 lg:py-80 overflow-hidden bg-[var(--color-white)] ${detailed ? "xl:pt-100 xl:pb-85" : "xl:pt-73 xl:pb-112"}`}>
      <div className="mx-auto flex w-full flex-col gap-44 px-16 sm:px-24 lg:flex-row lg:items-center lg:gap-40 lg:px-80 xl:items-start xl:px-150">
        <div className="relative lg:w-1/2 xl:w-750 xl:pt-16">
          <span className="pointer-events-none absolute top-0 left-20 hidden font-alt text-[7rem] leading-none font-extrabold whitespace-nowrap text-[var(--color-text-about-light)] uppercase select-none xl:top-17 xl:left-20 xl:block">
            {about.label}
          </span>
          <div className="relative">
            <p className="flex items-center gap-14 font-alt text-[0.8125rem] xl:text-[1.0625rem] font-medium tracking-[0.25em] text-[var(--color-text-about-dark)] uppercase xl:gap-16 xl:tracking-[0.2em]">
              <span className="h-2 w-40 bg-[var(--color-accent-bar)] xl:w-62" />
              {about.label}
            </p>
            <div className="mt-18 flex gap-34 xl:mt-24">
              <span className="h-2 w-42 bg-[var(--color-accent-bar)]" />
              <span className="h-2 w-42 bg-[var(--color-accent-bar)]" />
            </div>
            <h2 className="mt-14 font-alt text-[2.375rem] leading-44 font-extrabold tracking-[-0.03em] text-[var(--color-heading-about)] sm:text-[3.25rem] sm:leading-58 xl:mt-16 xl:text-[3.875rem] xl:leading-64">
              {about.titleTop}
              <br />
              {about.titleBottom}{" "}
              <span className="bg-gradient-to-r from-[var(--color-about-gradient-2)] via-[var(--color-about-gradient-6)] to-[var(--color-about-gradient-1)] bg-clip-text text-transparent">
                {about.highlight}
              </span>
            </h2>
            <p className="mt-18 max-w-680 font-alt text-[0.9375rem] leading-25 text-[var(--color-text-about-soft)] xl:mt-14 xl:max-w-none xl:text-[1.0625rem] xl:leading-25 xl:whitespace-pre-line">
              {about.text}
            </p>
            <ul className="mt-22 space-y-12 xl:mt-22 xl:space-y-8">
              {about.points.map((point) => (
                <li key={point} className="flex items-center gap-14 font-alt text-[0.9375rem] leading-24 text-[var(--color-text-about-soft)] xl:gap-15 xl:text-[1.0625rem] xl:leading-30">
                  <span className="flex size-26 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-about-gradient-7)] to-[var(--color-about-gradient-4)] text-[var(--color-white)] xl:size-30">
                    <Icon name="LuCheck" className="size-14 xl:size-16" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            {detailed ? (
              <p className="mt-22 max-w-680 font-alt text-[0.9375rem] leading-25 text-[var(--color-text-about-soft)] xl:mt-24 xl:max-w-none xl:text-[1.0625rem] xl:leading-25 xl:whitespace-pre-line">
                {about.moreText}
              </p>
            ) : (
              <Link
                href={about.buttonUrl}
                className="group mt-30 inline-flex h-52 items-stretch font-alt text-[0.9375rem] font-medium text-[var(--color-white)] xl:mt-30 xl:h-56 xl:text-[1.0625rem] whitespace-nowrap"
              >
                <span className="flex flex-1 items-center gap-18 bg-[var(--color-about-dark-bg)] px-24 transition-colors group-hover:bg-copper xl:gap-20 xl:px-27">
                  {about.buttonText}
                  <svg viewBox="0 0 60 10" className="h-10 w-50 xl:w-60" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                    <path d="M0 5h58M54 1.500 58.500 5 54 8.500" />
                  </svg>
                </span>
                <span className="w-16 bg-[var(--color-accent-about)] transition-colors group-hover:bg-[var(--color-about-dark-bg)] xl:w-18" />
              </Link>
            )}
          </div>
        </div>

        {/* two photos with the experience badge; positions are % of the 770x715 design box */}
        <div className="[container-type:inline-size] relative mx-auto aspect-[770/715] w-full max-w-560 lg:w-1/2 xl:mr-0 xl:ml-auto xl:aspect-[790/715] xl:w-790 xl:max-w-none">
          <div className="absolute top-0 left-0 h-[96.1%] w-[46.75%] overflow-hidden">
            <Image src={about.imageLeft} alt={about.imageLeftAlt} fill quality={90} sizes="(min-width: 1024px) 23vw, 46vw" className="object-cover" />
          </div>
          <div className="absolute top-[2.5%] right-0 h-[97.5%] w-[49.5%] overflow-hidden">
            <Image src={about.imageRight} alt={about.imageRightAlt} fill quality={90} sizes="(min-width: 1024px) 24vw, 49vw" className="object-cover" />
          </div>
          <div className="absolute top-[36.6%] left-[38.9%] flex h-[27.8%] w-[27.6%] flex-col items-center justify-center bg-gradient-to-br from-[var(--color-about-gradient-8)] via-[var(--color-about-gradient-5)] to-[var(--color-about-gradient-3)] text-center font-alt text-[var(--color-white)] shadow-[0_10px_30px_var(--color-shadow-black-25)]">
            <span className="text-[10cqw] leading-[1] font-extrabold tracking-[-0.02em]">{about.badgeValue}</span>
            <span className="mt-[1.6cqw] max-w-[18cqw] text-[2.45cqw] leading-[1.35] font-medium tracking-[0.03em] uppercase">{about.badgeText}</span>
            <span className="mt-[1.4cqw] h-px w-[7.8cqw] bg-[var(--color-white-80)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
