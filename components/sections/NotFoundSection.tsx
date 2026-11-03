import Link from "next/link";
import type { NotFoundData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const NotFoundSection = ({ data }: { data?: NotFoundData }) => {
  if (!data) return null;
  return (
    <section className="flex flex-col items-center bg-[var(--color-white)] px-16 py-80 text-center sm:py-100 xl:py-140">
      <p className="font-alt text-[6rem] leading-none font-extrabold tracking-[-0.03em] sm:text-[8rem] xl:text-[11rem]">
        <span className="bg-gradient-to-b from-[var(--color-hero-gradient-2)] to-[var(--color-hero-gradient-1)] bg-clip-text text-transparent">{data.code}</span>
      </p>
      <h1 className="mt-16 font-alt text-[1.875rem] leading-38 font-extrabold tracking-[-0.02em] text-coal sm:text-[2.5rem] sm:leading-48 xl:mt-24 xl:text-[3rem] xl:leading-56">
        {data.title}
      </h1>
      <p className="mt-12 max-w-560 text-[0.9375rem] leading-24 text-[var(--color-text-blog)] xl:mt-16 xl:max-w-640 xl:text-[1.125rem] xl:leading-28">{data.description}</p>
      <Link
        href={data.buttonUrl}
        className="mt-28 inline-flex items-center gap-10 rounded-[4px] border border-copper bg-copper px-24 py-14 text-[0.9375rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-copper xl:mt-36 xl:px-28 xl:py-16 xl:text-[1.0625rem]"
      >
        {data.buttonText}
        <Icon name="LuArrowRight" className="size-18 xl:size-20" strokeWidth={2} />
      </Link>
    </section>
  );
};
