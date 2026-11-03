import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ClientReviews } from "@/components/sections/ClientReviews";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.testimonialsBreadcrumb?.seo };

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <ClientReviews data={sectionData.ClientReviews?.variants?.ConstructionClientReviews1} />
    </main>
  );
}
