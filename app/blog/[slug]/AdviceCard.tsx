import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { help } = data.blogDetail;

export default function AdviceCard() {
  return (
    <div className="relative mt-32 overflow-hidden rounded-[3px] bg-nav px-24 pt-36 pb-36 shadow-[0_4px_14px_rgba(0,0,0,0.2)] xl:mt-54 xl:ml-10 xl:w-425 xl:px-32 xl:pt-49 xl:pb-40">
      <Image src={help.image} alt="" fill sizes="435px" className="object-cover object-right opacity-25" />
      <div className="absolute inset-0 bg-nav/80" />
      <div className="relative">
        <h3 className="font-rajdhani fs-32 leading-36 font-bold text-white uppercase xl:fs-42 xl:leading-40">
          {help.titleTop}
          <br />
          {help.titleMiddle}
          <br />
          <span className="text-flame">{help.highlight}</span>
        </h3>
        <p className="mt-14 max-w-360 fs-16 leading-27 text-white xl:mt-18 xl:max-w-none xl:fs-20 xl:leading-30 xl:whitespace-pre-line">{help.text}</p>
        <Link
          href={help.button.href}
          className="mt-20 inline-flex h-56 items-center justify-center gap-20 rounded-[2px] border border-flame bg-flame px-30 fs-17 font-semibold text-white transition-colors hover:bg-white hover:text-flame xl:mt-22 xl:h-65 xl:w-217 xl:px-0 xl:fs-18"
        >
          {help.button.label}
          <Icon name="arrowRight" className="size-20" strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  );
}
