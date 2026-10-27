import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { help } = data.blogDetail;

export default function AdviceCard() {
  return (
    <div className="relative mt-24 sm:mt-28 w-full overflow-hidden rounded-[4px] bg-ink px-24 py-36 text-center shadow-[0_4px_14px_rgba(0,0,0,0.2)] xl:mt-32 xl:px-28 xl:py-40">
      <Image src={help.image} alt="" fill sizes="420px" className="object-cover opacity-20" />
      <div className="relative">
        <h3 className="font-display text-[1.75rem] sm:text-[2rem] font-bold text-white uppercase leading-tight xl:text-[2.125rem]">
          {help.titleTop}
          <br />
          {help.titleMiddle}
          <br />
          <span className="text-flame">{help.highlight}</span>
        </h3>
        <p className="mt-12 text-[0.875rem] sm:text-[0.9375rem] text-white/90 leading-22">
          {help.text}
        </p>
        <div className="mt-20 flex justify-center">
          <Link
            href={help.button.href}
            className="inline-flex h-46 sm:h-50 items-center justify-center gap-10 rounded-[3px] border border-flame bg-flame px-24 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-white hover:text-flame"
          >
            {help.button.label}
            <Icon name="arrowRight" className="size-18" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </div>
  );
}
