import Image from "next/image";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { whyChoose } = data;

export default function WhyChoose() {
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-white xl:pt-104 xl:pb-115">
      <div className="mx-auto flex w-full flex-col gap-40 px-16 sm:px-24 lg:flex-row lg:items-center lg:gap-48 lg:px-80 xl:items-start xl:gap-40 xl:px-150">
        <div className="font-text lg:w-1/2 xl:w-761">
          <p className="flex items-center gap-12 text-[0.9375rem] xl:text-[1.0625rem] leading-20 font-semibold text-flame uppercase xl:gap-13">
            <span className="h-16 w-3 bg-flame xl:h-20" />
            {whyChoose.label}
          </p>
          <h2 className="mt-10 text-[2rem] leading-38 font-extrabold tracking-[-0.02em] text-coal sm:text-[2.625rem] sm:leading-48 xl:mt-10 xl:text-[3rem] xl:leading-52">
            {whyChoose.titleTop}
            <br />
            <span className="text-flame">{whyChoose.highlight}</span> {whyChoose.titleBottom}
          </h2>
          <p className="mt-14 max-w-620 text-[0.9375rem] leading-24 text-[#51566c] xl:mt-12 xl:max-w-none xl:text-[1.0625rem] xl:leading-26 xl:whitespace-pre-line">{whyChoose.text}</p>
          <ul className="mt-24 max-w-666 xl:mt-20">
            {whyChoose.points.map((point) => (
              <li
                key={point.title}
                className="flex items-center gap-22 border-b border-[#e8e8ea] py-16 first:pt-0 last:border-0 xl:gap-24 xl:py-9"
              >
                <span className="flex size-34 shrink-0 items-center justify-center rounded-[6px] bg-flame text-white xl:size-36">
                  <Icon name="check" className="size-20" strokeWidth={3} />
                </span>
                <span>
                  <span className="block text-[1.0625rem] leading-24 font-bold text-coal xl:text-[1.0625rem] xl:leading-22">{point.title}</span>
                  <span className="block text-[0.9375rem] leading-22 text-[#555a6b] xl:text-[1.0625rem] xl:leading-24">{point.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-755/494 w-full overflow-hidden rounded-[4px] lg:w-1/2 xl:ml-auto xl:aspect-775/494 xl:w-775">
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
