import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceSidebar from "@/components/ServiceSidebar";
import ModernBand from "@/components/ModernBand";
import { site as data, pageTitle } from "@/data";

// One common detail page for every service: all service links point here and it shows the first service.
// The banner and breadcrumb carry the common page title from site.json, not the service title.
const service = data.services.items[0];
const { title } = data.pages.serviceDetail;

export const metadata: Metadata = { title: pageTitle(title) };

export default function ServiceDetailsPage() {
  return (
    <>
      <PageBanner title={title} breadcrumbs={[{ label: title }]} />
      <section className="py-48 sm:py-64 lg:py-80 bg-white xl:pt-60 xl:pb-90">
        <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-24 sm:px-36 lg:flex-row lg:gap-36 lg:px-64 xl:justify-between xl:gap-48 xl:px-105">
          <div className="min-w-0 flex-1">
            <ServiceOverview service={service} />
            <ServiceFeatures title={service.title} />
          </div>
          <ServiceSidebar activeTitle={service.title} />
        </div>
      </section>
      <ModernBand />
    </>
  );
}
