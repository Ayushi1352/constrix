import Icon from "@/components/common/Icon";
import { site as data, contactLines } from "@/data";

export default function InfoCards() {
  return (
    <ul className="mx-auto grid w-full gap-16 px-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-48 xl:gap-26 xl:px-80">
      {data.contact.cards.map((card) => (
        <li
          key={card.title}
          className="flex items-start gap-20 rounded-[4px] border border-[#f2f2f2] bg-[#f9f9f9] p-20 lg:flex-col xl:h-164 xl:flex-row xl:gap-27 xl:py-27 xl:pr-8 xl:pl-26"
        >
          <span className="flex size-68 shrink-0 items-center justify-center rounded-[4px] bg-panel text-flame shadow-[0_4px_10px_rgba(0,0,0,0.15)] xl:size-84">
            <Icon name={card.icon} className="size-36 xl:size-44" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 xl:pt-4">
            <h3 className="fs-18 leading-28 font-semibold text-[#111418] xl:fs-20 xl:leading-30">{card.title}</h3>
            <p className="mt-2 fs-15 leading-26 break-words text-[#555b64] xl:mt-5 xl:fs-18 xl:leading-32 xl:tracking-[-0.01em] xl:whitespace-nowrap">
              {contactLines(card).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
