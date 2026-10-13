import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { help } = data.blogDetail;

export default function AdviceCard() {
  return (
    <div className="relative mt-24 sm:mt-28 w-full overflow-hidden rounded-[4px] bg-[#0a1c26] px-24 py-36 text-center shadow-[0_4px_14px_rgba(0,0,0,0.2)] xl:mt-32 xl:px-28 xl:py-40">
      <Image src={help.image} alt="" fill sizes="420px" className="object-cover opacity-20" />
      <div className="relative">
        <h3 className="font-rajdhani text-[28px] sm:text-[32px] font-bold text-white uppercase leading-tight xl:text-[34px]">
          {help.titleTop}
          <br />
          {help.titleMiddle}
          <br />
          <span className="text-[#fb7d1b]">{help.highlight}</span>
        </h3>
        <p className="mt-12 text-[14px] sm:text-[15px] text-white/90 leading-22">
          {help.text}
        </p>
        <div className="mt-20 flex justify-center">
          <Link
            href={help.button.href}
            className="inline-flex h-46 sm:h-50 items-center justify-center gap-10 rounded-[3px] border border-[#fb7d1b] bg-[#fb7d1b] px-24 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-flame"
          >
            {help.button.label}
            <Icon name="arrowRight" className="size-18" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </div>
  );
}
