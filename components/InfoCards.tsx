import Icon from "@/components/Icon";
import { site as data, contactLines } from "@/data";

export default function InfoCards() {
  return (
    <ul className="mx-auto grid w-full gap-16 px-16 sm:grid-cols-2 xl:grid-cols-4 lg:px-48 xl:gap-24 xl:px-80">
      {data.contact.cards.map((card) => (
        <li
          key={card.title}
          className="flex items-start gap-20 rounded-[4px] border border-[#f2f2f2] bg-[#f9f9f9] p-20 xl:h-150 xl:gap-18 xl:py-26 xl:pr-8 xl:pl-22"
        >
          <span className="flex size-68 shrink-0 items-center justify-center rounded-[4px] bg-panel text-flame shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
            <Icon name={card.icon} className="size-36" strokeWidth={1.8} />
          </span>
          <div className="min-w-0 xl:pt-4">
            <h3 className="text-[1.125rem] leading-28 font-semibold text-[#111418] xl:text-[1.1875rem] xl:leading-28">{card.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-26 break-words text-[#555b64] xl:mt-4 xl:text-[1.0625rem] xl:leading-30 xl:tracking-[-0.01em] xl:whitespace-nowrap">
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
