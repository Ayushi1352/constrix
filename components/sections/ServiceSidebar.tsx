import Link from "next/link";
import type { ServiceDetailData, ServiceItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const ServiceSidebar = ({ data, services, activeId }: { data: ServiceDetailData; services: ServiceItem[]; activeId: string }) => {
  const links = services.filter((item) => item.showInMenu || item.id === activeId);
  const { help } = data;

  return (
    <aside className="w-full shrink-0 lg:w-300 xl:w-346">
      <h3 className="flex h-50 xl:h-54 items-center bg-ink px-20 text-[1.1875rem] xl:text-[1.375rem] font-bold text-[var(--color-white)] rounded-t-[3px]">{data.sidebarTitle}</h3>
      <ul className="mt-8">
        {links.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <Link
                href={item.url}
                aria-current={active ? "page" : undefined}
                className={`-mt-px flex h-50 xl:h-54 items-center justify-between border px-20 text-[0.9375rem] xl:text-[1.0625rem] font-semibold transition-colors ${
                  active
                    ? "relative border-flame bg-flame text-[var(--color-white)]"
                    : "border-[var(--color-border-soft)] bg-[var(--color-white)] text-coal hover:relative hover:border-flame hover:bg-flame hover:text-[var(--color-white)]"
                }`}
              >
                <span>{item.title}</span>
                <Icon name="LuArrowRight" className="size-18" strokeWidth={2.2} />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-28 xl:mt-32 rounded-[4px] border border-[var(--color-border-sidebar)] bg-[var(--color-sidebar-bg)] p-20 xl:p-24">
        <div className="flex items-center gap-16">
          <span className="flex size-50 xl:size-54 shrink-0 items-center justify-center rounded-[4px] bg-flame text-[var(--color-white)]">
            <Icon name="LuHeadset" className="size-26 xl:size-28" strokeWidth={2} />
          </span>
          <p className="text-[1.3125rem] xl:text-[1.5625rem] font-bold text-[var(--color-heading-card)]">{help.title}</p>
        </div>
        <p className="mt-12 font-text text-[0.9375rem] xl:text-[1.0625rem] leading-22 text-[var(--color-text-service-muted)]">{help.text}</p>
        <Link
          href={help.buttonUrl}
          className="mt-16 flex h-46 xl:h-50 w-full items-center justify-center gap-10 rounded-[3px] border border-flame bg-flame text-[1rem] xl:text-[1.0625rem] font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-flame"
        >
          {help.buttonText}
          <Icon name="LuArrowRight" className="size-18" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
};
