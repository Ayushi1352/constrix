import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import { site as data } from "@/data";
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
    title: service ? `${service.title} | Constrix` : "Service Details | Constrix",
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
          { label: "Our Services", href: "/our-services" },
          { label: service.title },
        ]}
      />
      <section className="section-space bg-white">
        <div className="mx-auto flex w-full max-w-1686 flex-col gap-48 px-20 sm:px-32 lg:flex-row lg:gap-32 xl:gap-42 xl:pr-72 xl:pl-88">
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
