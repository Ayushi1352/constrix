import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { about } = data;

// `detailed` is the About Us page version: a second paragraph instead of the button.
export default function About({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className={`py-48 sm:py-64 lg:py-80 overflow-hidden bg-white ${detailed ? "xl:pt-100 xl:pb-85" : "xl:pt-73 xl:pb-112"}`}>
      <div className="mx-auto flex w-full flex-col gap-44 px-16 sm:px-24 lg:flex-row lg:items-center lg:gap-40 lg:px-80 xl:items-start xl:px-150">
        <div className="relative lg:w-1/2 xl:w-750 xl:pt-51">
          <span className="pointer-events-none absolute top-0 left-20 hidden font-alt text-[7rem] leading-none font-extrabold whitespace-nowrap text-[#f6f6f6] uppercase select-none xl:top-52 xl:left-20 xl:block xl:text-[6.75rem]">
            {about.label}
          </span>
          <div className="relative">
            <p className="flex items-center gap-14 font-alt text-[0.8125rem] font-medium tracking-[0.25em] text-[#222] uppercase xl:gap-16 xl:text-[1rem] xl:tracking-[0.2em]">
              <span className="h-2 w-40 bg-[#e8923c] xl:w-62" />
              {about.label}
            </p>
            <div className="mt-18 flex gap-34 xl:mt-37">
              <span className="h-2 w-42 bg-[#e8923c]" />
              <span className="h-2 w-42 bg-[#e8923c]" />
            </div>
            <h2 className="mt-14 font-alt text-[2.375rem] leading-44 font-extrabold tracking-[-0.03em] text-[#051328] sm:text-[3.25rem] sm:leading-58 xl:mt-20 xl:text-[4.5625rem] xl:leading-73">
              {about.titleTop}
              <br />
              {about.titleBottom}{" "}
              <span className="bg-linear-to-r from-[#8a4310] via-[#e08a34] to-[#6b310c] bg-clip-text text-transparent">
                {about.highlight}
              </span>
            </h2>
            <p className="mt-18 max-w-680 font-alt text-[0.9375rem] leading-25 text-[#1c2536] xl:mt-15 xl:max-w-none xl:text-[1.1875rem] xl:leading-26 xl:whitespace-pre-line">
              {about.text}
            </p>
            <ul className="mt-22 space-y-12 xl:mt-26 xl:space-y-10">
              {about.points.map((point) => (
                <li key={point} className="flex items-center gap-14 font-alt text-[0.9375rem] leading-24 text-[#1c2536] xl:gap-17 xl:text-[1.1875rem] xl:leading-32">
                  <span className="flex size-26 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#e39a55] to-[#b9621f] text-white xl:size-32">
                    <Icon name="check" className="size-14 xl:size-18" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            {detailed ? (
              <p className="mt-22 max-w-680 font-alt text-[0.9375rem] leading-25 text-[#1c2536] xl:mt-36 xl:max-w-none xl:text-[1.1875rem] xl:leading-26 xl:whitespace-pre-line">
                {about.moreText}
              </p>
            ) : (
              <Link
                href={about.button.href}
                className="group mt-30 inline-flex h-52 items-stretch font-alt text-[0.9375rem] font-medium text-white xl:mt-39 xl:h-61 xl:w-254 xl:text-[1.125rem]"
              >
                <span className="flex flex-1 items-center gap-18 bg-[#111a2c] px-24 transition-colors group-hover:bg-copper xl:gap-20 xl:px-27">
                  {about.button.label}
                  <svg viewBox="0 0 60 10" className="h-10 w-50 xl:w-60" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                    <path d="M0 5h58M54 1.500 58.500 5 54 8.500" />
                  </svg>
                </span>
                <span className="w-16 bg-[#d9761e] transition-colors group-hover:bg-[#111a2c] xl:w-18" />
              </Link>
            )}
          </div>
        </div>

        {/* two photos with the experience badge; positions are % of the 770x715 design box */}
        <div className="@container relative mx-auto aspect-[770/715] w-full max-w-560 lg:w-1/2 xl:mr-0 xl:ml-auto xl:aspect-790/715 xl:w-790 xl:max-w-none">
          <div className="absolute top-0 left-0 h-[96.1%] w-[46.75%] overflow-hidden">
            <Image src={about.imageLeft} alt={about.imageLeftAlt} fill sizes="(min-width: 1024px) 23vw, 46vw" className="object-cover" />
          </div>
          <div className="absolute top-[2.5%] right-0 h-[97.5%] w-[49.5%] overflow-hidden">
            <Image src={about.imageRight} alt={about.imageRightAlt} fill sizes="(min-width: 1024px) 24vw, 49vw" className="object-cover" />
          </div>
          <div className="absolute top-[36.6%] left-[38.9%] flex h-[27.8%] w-[27.6%] flex-col items-center justify-center bg-linear-to-br from-[#e9a755] via-[#d57f2e] to-[#b15a1b] text-center font-alt text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <span className="text-[10cqw] leading-[1] font-extrabold tracking-[-0.02em]">{about.badgeValue}</span>
            <span className="mt-[1.6cqw] max-w-[18cqw] text-[2.45cqw] leading-[1.35] font-medium tracking-[0.03em] uppercase">
              {about.badgeText}
            </span>
            <span className="mt-[1.4cqw] h-px w-[7.8cqw] bg-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
