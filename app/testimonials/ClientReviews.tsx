import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { testimonialsPage: content } = data;

export default function ClientReviews() {
  return (
    <section className="section-space bg-[#faf9f7]">
      <div className="mx-auto w-full max-w-1686 px-16 sm:px-24 xl:pr-45 xl:pl-48">
        <p className="flex items-center justify-center gap-14 font-figtree fs-15 leading-24 font-bold tracking-[0.06em] text-copper uppercase xl:gap-25 xl:fs-21">
          <span className="h-18 w-3 bg-copper xl:h-24 xl:w-4" />
          {content.label}
        </p>
        <h2 className="mt-6 text-center font-rajdhani fs-40 leading-44 font-bold text-coal uppercase sm:fs-56 sm:leading-60 xl:mt-18 xl:fs-78 xl:leading-74">
          {content.title} <span className="text-copper">{content.highlight}</span>
        </h2>
        <p className="mx-auto mt-12 max-w-900 text-center font-figtree fs-16 leading-25 text-[#2c3340] xl:mt-3 xl:max-w-none xl:fs-20 xl:leading-26 xl:whitespace-pre-line">
          {content.text}
        </p>

        <div className="mt-32 grid gap-20 md:grid-cols-2 lg:grid-cols-3 xl:mt-34 xl:gap-x-27 xl:gap-y-21">
          {content.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-[4px] border border-[#efefef] bg-white px-22 pt-21 pb-18 font-figtree xl:px-26 xl:pb-15"
            >
              <div className="flex items-start justify-between">
                <Icon name="quote" className="-mt-6 -ml-4 size-42 text-copper xl:-mt-8 xl:size-46" />
                <span className="mt-4 flex gap-3 text-copper">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Icon key={index} name="starFill" className="size-18 xl:size-21" />
                  ))}
                </span>
              </div>
              <p className="mt-10 max-w-450 flex-1 fs-16 leading-25 text-[#1c2e42] xl:mt-6 xl:max-w-none xl:fs-19 xl:whitespace-pre-line">{item.quote}</p>
              <div className="mt-16 flex items-center gap-22 border-t border-[#ececec] pt-10 xl:mt-13 xl:ml-3 xl:gap-25">
                <span className="flex size-56 shrink-0 items-center justify-center rounded-full bg-[#feead7] fs-18 font-bold text-[#1b2330] xl:size-62 xl:fs-21">
                  {item.initials}
                </span>
                <span>
                  <span className="block fs-17 leading-24 font-bold text-coal xl:fs-19">{item.name}</span>
                  <span className="block fs-15 leading-22 text-[#646b76] xl:fs-17">{item.role}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
