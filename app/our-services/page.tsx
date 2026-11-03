import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Services } from "@/components/sections/Services";
import { Cta } from "@/components/sections/Cta";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.servicesBreadcrumb?.seo };

export default function OurServicesPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <Services data={sectionData.Services?.variants?.ConstructionServices1} ui={commonData.globalUI} showPagination />
      <Cta data={sectionData.Cta?.variants?.ConstructionCta1} />
    </main>
  );
}
