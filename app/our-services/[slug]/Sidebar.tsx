import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { serviceDetail, services } = data;

export default function Sidebar({ activeSlug }: { activeSlug: string }) {
  const links = services.items.filter((item) => item.showInMenu || item.slug === activeSlug);
  const { help } = serviceDetail;

  return (
    <aside className="w-full shrink-0 lg:w-300 xl:w-346">
      <h3 className="flex h-54 items-center bg-nav px-22 fs-19 font-semibold text-white xl:h-59 xl:fs-22">
        {serviceDetail.sidebarTitle}
      </h3>
      <ul className="mt-10 xl:mt-11">
        {links.map((item) => {
          const active = item.slug === activeSlug;
          return (
            <li key={item.slug}>
              <Link
                href={`/our-services/${item.slug}`}
                className={`-mt-px flex h-54 items-center justify-between border px-20 fs-15 font-medium transition-colors xl:h-59 xl:px-21 xl:fs-17 ${
                  active
                    ? "relative border-flame bg-flame text-white"
                    : "border-[#ececec] bg-white text-coal hover:relative hover:border-flame hover:bg-flame hover:text-white"
                }`}
              >
                {item.title}
                <Icon name="arrowRight" className="size-20" strokeWidth={2.2} />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-32 border border-[#f0f0f0] bg-mist px-11 pt-20 pb-11 xl:mt-45">
        <div className="flex items-center gap-22">
          <span className="flex size-68 shrink-0 items-center justify-center rounded-[3px] bg-flame text-white xl:size-78">
            <Icon name="headset" className="size-36 xl:size-42" strokeWidth={2} />
          </span>
          <p className="fs-21 font-semibold text-[#111418] xl:fs-25">{help.title}</p>
        </div>
        <p className="mt-14 max-w-320 fs-15 leading-27 text-[#74797f] xl:mt-10 xl:max-w-none xl:fs-17 xl:leading-30 xl:whitespace-pre-line">{help.text}</p>
        <Link
          href={help.button.href}
          className="mt-16 flex h-54 items-center justify-center gap-14 rounded-[2px] border border-flame bg-flame fs-16 font-semibold text-white transition-colors hover:bg-white hover:text-flame xl:mt-18 xl:h-66 xl:fs-17"
        >
          {help.button.label}
          <Icon name="arrowRight" className="size-20" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
}
