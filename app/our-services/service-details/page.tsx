import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { ModernBand } from "@/components/sections/ModernBand";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;
const services = sectionData.Services?.variants?.ConstructionServices1?.items ?? [];
// One common detail page for every service: all service links point here and it shows the first service.
const service = services[0];

export const metadata: Metadata = { title: service?.title, description: service?.detail.text };

export default function ServiceDetailsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} ui={commonData.globalUI} />
      <ServiceDetail data={sectionData.ServiceDetail?.variants?.ConstructionServiceDetail1} service={service} services={services} />
      <ModernBand data={sectionData.ModernBand?.variants?.ConstructionModernBand1} />
    </main>
  );
}
