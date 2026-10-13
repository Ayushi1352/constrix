import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import { site as data, pageTitle } from "@/data";
import Overview from "./Overview";
import Features from "./Features";
import Sidebar from "./Sidebar";
import ModernBand from "./ModernBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = data.services.items.find((item) => item.slug === slug);
  return {
    title: pageTitle(service ? service.title : data.pages.serviceDetail.title),
  };
}

export function generateStaticParams() {
  return data.services.items.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = data.services.items.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: data.pages.ourServices.title, href: "/our-services" },
          { label: service.title },
        ]}
      />
      <section className="section-space bg-white xl:pt-55 xl:pb-84">
        <div className="mx-auto flex w-full flex-col gap-48 px-16 sm:px-24 lg:flex-row lg:gap-32 lg:px-48 xl:justify-between xl:gap-48 xl:px-80">
          <div className="min-w-0 flex-1">
            <Overview service={service} />
            <Features title={service.title} />
          </div>
          <Sidebar activeSlug={service.slug} />
        </div>
      </section>
      <ModernBand />
    </>
  );
}
