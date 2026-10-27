import Icon from "@/components/Icon";
import { site as data } from "@/data";

export default function Benefits() {
  return (
    <div className="pb-48 sm:pb-64 lg:pb-80 bg-white xl:pb-69">
      <section className="bg-[#fcf7f4] py-44 xl:h-287 xl:py-0">
        <ul className="mx-auto grid w-full gap-x-24 gap-y-36 px-16 sm:grid-cols-2 sm:px-24 lg:grid-cols-4 lg:px-48 xl:grid-cols-[25.9375rem_27.5rem_25.3125rem_1fr] xl:gap-0 xl:pt-54 xl:px-80">
          {data.quote.benefits.map((benefit, index) => (
            <li key={benefit.title} className="relative">
              {index > 0 && (
                <span className="absolute top-12 -left-92 hidden h-160 w-[1.5px] bg-flame/40 xl:block" />
              )}
              <Icon name={benefit.icon} className="size-48 text-flame xl:size-58" strokeWidth={2} />
              <h3 className="mt-14 text-[1.25rem] leading-30 font-semibold text-[#111418] xl:mt-12 xl:text-[1.4375rem] xl:leading-34">
                {benefit.title}
              </h3>
              <p className="mt-6 text-[1.0625rem] leading-28 text-[#555b64] xl:mt-10 xl:text-[1.3125rem] xl:leading-35">
                {benefit.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
