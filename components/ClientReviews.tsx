import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { testimonialsPage: content } = data;

export default function ClientReviews() {
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-[#faf9f7] xl:pb-134">
      <div className="mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <p className="flex items-center justify-center gap-14 font-text text-[0.9375rem] leading-24 font-bold tracking-[0.06em] text-flame uppercase xl:gap-25 xl:text-[1.375rem]">
          <span className="h-18 w-3 bg-flame xl:h-24 xl:w-4" />
          {content.label}
        </p>
        <h2 className="mt-6 text-center font-display text-[2.5rem] leading-44 font-bold text-coal uppercase sm:text-[3.5rem] sm:leading-60 xl:mt-18 xl:text-[5rem] xl:leading-74">
          {content.title} <span className="text-flame">{content.highlight}</span>
        </h2>
        <p className="mx-auto mt-12 max-w-900 text-center font-text text-[1rem] leading-25 text-[#2c3340] xl:mt-3 xl:max-w-none xl:text-[1.375rem] xl:leading-26 xl:whitespace-pre-line">
          {content.text}
        </p>

        <div className="mt-32 grid gap-20 md:grid-cols-2 lg:grid-cols-3 xl:mt-30 xl:gap-x-27 xl:gap-y-21">
          {content.items.map((item) => (
            <article
              key={item.name}

              className="flex flex-col rounded-[4px] border border-[#efefef] bg-white px-22 pt-21 pb-18 font-text xl:px-26 xl:pb-15"
            >
              <div className="flex items-start justify-between">
                <Icon name="quote" className="-mt-6 -ml-4 size-42 text-flame xl:-mt-8 xl:size-46" />
                <span className="mt-4 flex gap-3 text-flame">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Icon key={index} name="starFill" className="size-18 xl:size-21" />
                  ))}
                </span>
              </div>
              <p className="mt-10 max-w-450 flex-1 text-[1rem] leading-25 text-[#1c2e42] xl:mt-6 xl:max-w-none xl:text-[1.1875rem] xl:whitespace-pre-line">{item.quote}</p>
              <div className="mt-16 flex items-center gap-22 border-t border-[#ececec] pt-10 xl:mt-13 xl:ml-3 xl:gap-25">
                <span className="flex size-56 shrink-0 items-center justify-center rounded-full bg-[#feead7] text-[1.125rem] font-bold text-[#1b2330] xl:size-62 xl:text-[1.3125rem]">
                  {item.name.split(" ").map((word) => word[0]).join("")}
                </span>
                <span>
                  <span className="block text-[1.0625rem] leading-24 font-bold text-coal xl:text-[1.1875rem]">{item.name}</span>
                  <span className="block text-[0.9375rem] leading-22 text-[#646b76] xl:text-[1.0625rem]">{item.role}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
