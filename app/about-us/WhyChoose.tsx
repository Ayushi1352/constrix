import Image from "next/image";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { whyChoose } = data;

export default function WhyChoose() {
  return (
    <section className="section-space bg-white xl:pt-104 xl:pb-115">
      <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-20 sm:px-32 lg:flex-row lg:items-center lg:gap-48 xl:items-start xl:gap-0 xl:pr-54 xl:pl-116">
        <div className="font-figtree lg:w-1/2 xl:w-761 xl:-translate-x-12">
          <p className="flex items-center gap-12 fs-15 leading-20 font-semibold text-flame uppercase xl:gap-13 xl:fs-20">
            <span className="h-16 w-3 bg-flame xl:h-20" />
            {whyChoose.label}
          </p>
          <h2 className="mt-10 fs-32 leading-38 font-extrabold tracking-[-0.02em] text-coal sm:fs-42 sm:leading-48 xl:mt-11 xl:ml-4 xl:fs-56 xl:leading-57">
            {whyChoose.titleTop}
            <br />
            <span className="text-flame">{whyChoose.highlight}</span> {whyChoose.titleBottom}
          </h2>
          <p className="mt-14 max-w-620 fs-16 leading-25 text-[#51566c] xl:mt-12 xl:ml-4 xl:max-w-none xl:fs-19 xl:whitespace-pre-line">{whyChoose.text}</p>
          <ul className="mt-24 max-w-666 xl:mt-25 xl:ml-4">
            {whyChoose.points.map((point) => (
              <li
                key={point.title}
                className="flex items-center gap-22 border-b border-[#e8e8ea] py-16 first:pt-0 last:border-0 xl:gap-28 xl:py-12"
              >
                <span className="flex size-34 shrink-0 items-center justify-center rounded-[6px] bg-flame text-white xl:size-36">
                  <Icon name="check" className="size-20" strokeWidth={3} />
                </span>
                <span>
                  <span className="block fs-17 leading-24 font-bold text-coal xl:fs-19 xl:leading-22">{point.title}</span>
                  <span className="block fs-15 leading-22 text-[#555a6b] xl:fs-17 xl:leading-25">{point.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-755/494 w-full overflow-hidden rounded-[4px] lg:w-1/2 xl:ml-auto xl:aspect-775/494 xl:w-775 xl:translate-x-16">
          <Image
            src={whyChoose.image}
            alt={whyChoose.imageAlt}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
