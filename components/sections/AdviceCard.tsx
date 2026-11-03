import Image from "next/image";
import Link from "next/link";
import type { BlogDetailData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const AdviceCard = ({ data: help }: { data: BlogDetailData["help"] }) => {
  return (
    <div className="relative mt-24 sm:mt-28 w-full overflow-hidden rounded-[4px] bg-ink px-24 py-36 text-center shadow-[0_4px_14px_var(--color-shadow-black-20)] xl:mt-32 xl:px-28 xl:py-40">
      <Image src={help.image} alt="" fill sizes="420px" className="object-cover opacity-20" />
      <div className="relative">
        <h3 className="font-display text-[2rem] xl:text-[2.625rem] font-bold text-[var(--color-white)] uppercase leading-tight">
          {help.titleTop}
          <br />
          {help.titleMiddle}
          <br />
          <span className="text-flame">{help.highlight}</span>
        </h3>
        <p className="mt-12 text-[1rem] xl:text-[1.25rem] text-[var(--color-white-90)] leading-22">{help.text}</p>
        <div className="mt-20 flex justify-center">
          <Link
            href={help.buttonUrl}
            className="inline-flex h-46 sm:h-50 items-center justify-center gap-10 rounded-[3px] border border-flame bg-flame px-24 text-[1.0625rem] xl:text-[1.125rem] font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-flame"
          >
            {help.buttonText}
            <Icon name="LuArrowRight" className="size-18" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </div>
  );
};
