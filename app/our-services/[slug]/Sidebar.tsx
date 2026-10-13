import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { serviceDetail, services } = data;

export default function Sidebar({ activeSlug }: { activeSlug: string }) {
  const links = services.items.filter((item) => item.showInMenu || item.slug === activeSlug);
  const { help } = serviceDetail;

  return (
    <aside className="w-full shrink-0 lg:w-300 xl:w-346">
      <h3 className="flex h-50 xl:h-54 items-center bg-[#0a1c26] px-20 text-[17px] xl:text-[18px] font-bold text-white rounded-t-[3px]">
        {serviceDetail.sidebarTitle}
      </h3>
      <ul className="mt-8">
        {links.map((item) => {
          const active = item.slug === activeSlug;
          return (
            <li key={item.slug}>
              <Link
                href={`/our-services/${item.slug}`}
                className={`-mt-px flex h-50 xl:h-54 items-center justify-between border px-20 text-[14.5px] xl:text-[15.5px] font-semibold transition-colors ${
                  active
                    ? "relative border-[#fb7d1b] bg-[#fb7d1b] text-white"
                    : "border-[#ececec] bg-white text-coal hover:relative hover:border-[#fb7d1b] hover:bg-[#fb7d1b] hover:text-white"
                }`}
              >
                <span>{item.title}</span>
                <Icon name="arrowRight" className="size-18" strokeWidth={2.2} />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-28 xl:mt-32 rounded-[4px] border border-[#e8e8e8] bg-[#f8f9fa] p-20 xl:p-24">
        <div className="flex items-center gap-16">
          <span className="flex size-50 xl:size-54 shrink-0 items-center justify-center rounded-[4px] bg-[#fb7d1b] text-white">
            <Icon name="headset" className="size-26 xl:size-28" strokeWidth={2} />
          </span>
          <p className="text-[18px] xl:text-[20px] font-bold text-[#111418]">{help.title}</p>
        </div>
        <p className="mt-12 font-figtree text-[13.5px] xl:text-[14px] leading-22 text-[#74797f]">
          {help.text}
        </p>
        <Link
          href={help.button.href}
          className="mt-16 flex h-46 xl:h-50 w-full items-center justify-center gap-10 rounded-[3px] border border-[#fb7d1b] bg-[#fb7d1b] text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-flame"
        >
          {help.button.label}
          <Icon name="arrowRight" className="size-18" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
}
