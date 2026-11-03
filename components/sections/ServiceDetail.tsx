import type { ServiceDetailData, ServiceItem } from "@/types/templates.types";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { ServiceSidebar } from "@/components/sections/ServiceSidebar";

export const ServiceDetail = ({ data, service, services = [] }: { data?: ServiceDetailData; service?: ServiceItem; services?: ServiceItem[] }) => {
  if (!data || !service) return null;
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-[var(--color-white)] xl:pt-60 xl:pb-90">
      <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-24 sm:px-36 lg:flex-row lg:gap-36 lg:px-64 xl:justify-between xl:gap-48 xl:px-105">
        <div className="min-w-0 flex-1">
          <ServiceOverview label={data.overviewLabel} service={service} />
          <ServiceFeatures data={data} title={service.title} />
        </div>
        <ServiceSidebar data={data} services={services} activeId={service.id} />
      </div>
    </section>
  );
};
