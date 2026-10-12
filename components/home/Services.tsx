import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { LineLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { services } = data;
const cards = services.items.filter((item) => item.showInGrid);

export default function Services() {
  return (
    <section className="section-space relative overflow-hidden bg-[#fcf8f7]">
      {/* soft corner shapes */}
      <span className="absolute top-90 left-0 hidden h-200 w-150 bg-[#f6e3d6]/60 [clip-path:polygon(0_0,100%_50%,0_100%)] xl:block" />
      <span className="absolute top-170 right-0 hidden h-190 w-190 bg-[#f6e3d6]/35 [clip-path:polygon(100%_0,100%_100%,0_100%)] xl:block" />

      <div className="relative mx-auto w-full max-w-1686 px-16 sm:px-24 xl:px-39">
        <LineLabel>{services.label}</LineLabel>
        <h2 className="mt-12 text-center fs-28 leading-34 font-extrabold tracking-[-0.02em] text-coal sm:fs-38 sm:leading-44 xl:mt-3 xl:fs-46 xl:leading-44">
          {services.titleTop}
          <br />
          {services.titleBottom} <span className="text-copper">{services.highlight}</span>
        </h2>
        <p className="mx-auto mt-14 max-w-640 text-center fs-14 leading-22 text-[#3c4347] xl:mt-12 xl:max-w-none xl:fs-16 xl:whitespace-pre-line">
          {services.text}
        </p>

        <div className="mt-28 grid gap-20 sm:grid-cols-2 xl:grid-cols-4 xl:mt-21 xl:gap-x-22 xl:gap-y-21">
          {cards.map((service) => (
            <Link
              key={service.slug}
              href={`/our-services/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-[5px] bg-white shadow-[0_2px_14px_rgba(60,40,20,0.05)] transition-shadow hover:shadow-[0_8px_26px_rgba(60,40,20,0.14)]"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: `${service.imageWidth} / ${service.imageHeight}` }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative flex-1 px-19 pb-18 xl:pb-11">
                <div className="flex items-start gap-15">
                  <span className="relative -mt-11 flex size-56 shrink-0 items-center justify-center rounded-[5px] bg-copper text-white shadow-[0_4px_10px_rgba(200,122,46,0.35)] xl:size-64">
                    <Icon name={service.icon} className="size-30 xl:size-36" strokeWidth={1.3} />
                  </span>
                  <h3 className="mt-10 max-w-170 flex-1 pr-44 xl:pr-0 fs-17 leading-22 font-semibold text-coal xl:fs-19">
                    {service.title}
                  </h3>
                  <span className="absolute top-21 right-18 flex size-38 shrink-0 items-center justify-center rounded-full bg-peach text-copper transition-colors group-hover:bg-copper group-hover:text-white xl:size-42">
                    <Icon name="arrowRight" className="size-18" strokeWidth={2} />
                  </span>
                </div>
                <p className="mt-6 max-w-290 fs-15 leading-21 text-slate xl:mt-4 xl:ml-2 xl:max-w-none xl:fs-16 xl:whitespace-pre-line">{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
