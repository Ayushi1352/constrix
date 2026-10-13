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
        title={data.pages.serviceDetail.title}
        breadcrumbs={[{ label: data.pages.serviceDetail.title }]}
      />
      <section className="section-space bg-white xl:pt-60 xl:pb-90">
        <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-24 sm:px-36 lg:flex-row lg:gap-36 lg:px-64 xl:justify-between xl:gap-48 xl:px-105">
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
