import Image from "next/image";
import Icon from "@/components/Icon";
import { LineLabel } from "@/components/SectionLabel";
import { site as data } from "@/data";

const { process } = data;

export default function Process() {
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-white xl:pt-63 xl:pb-59">
      <div className="mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <LineLabel className="font-semibold!">{process.label}</LineLabel>
        <h2 className="mt-10 text-center text-[1.875rem] leading-38 font-extrabold tracking-[-0.03em] text-[#030f28] sm:text-[2.625rem] sm:leading-50 xl:mt-3 xl:text-[3.9375rem] xl:leading-70">
          {process.title}{" "}
          <span className="bg-linear-to-r from-copper-light to-copper-dark bg-clip-text text-transparent">
            {process.highlight}
          </span>
        </h2>
        <p className="mx-auto mt-10 max-w-610 text-center text-[0.9375rem] xl:text-[1.0625rem] leading-24 text-[#40424f] xl:mt-5 xl:max-w-none xl:leading-26 xl:whitespace-pre-line">
          {process.text}
        </p>

        <ol className="mt-44 grid gap-x-28 gap-y-44 sm:grid-cols-2 lg:grid-cols-4 xl:mt-38 xl:gap-x-92">
          {process.steps.map((step, index) => (
            <li key={step.title} className="relative bg-[#fbfbfb] shadow-[0_6px_24px_rgba(20,30,50,0.05)]">
              <div className="relative aspect-[318/186]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute -top-14 -left-2 flex h-59 w-66 items-center justify-center bg-linear-to-br from-copper-light to-copper-dark text-[1.625rem] font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute -bottom-39 left-22 flex h-77 w-86 items-center justify-center bg-white text-copper shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                  <Icon name={step.icon} className="size-46" strokeWidth={1.1} />
                </span>
              </div>
              <div className="pt-49 pr-16 pb-22 pl-27 xl:pr-0 xl:pb-17">
                <h3 className="text-[1.25rem] xl:text-[1.375rem] leading-28 font-semibold text-coal xl:leading-30 xl:font-bold xl:whitespace-nowrap">
                  {step.title}
                </h3>
                <p className="mt-6 text-[0.9375rem] leading-24 text-[#595e71] xl:text-[1.0625rem] xl:leading-26">{step.text}</p>
              </div>
              {index < process.steps.length - 1 && (
                <span className="absolute top-103 left-full hidden w-92 items-center justify-center text-[#f26a1d] xl:flex">
                  <svg viewBox="0 0 74 18" className="h-18 w-74" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M0 9h62" strokeDasharray="5 4" />
                    <path d="M63 2l7 7-7 7" strokeWidth="2.6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
