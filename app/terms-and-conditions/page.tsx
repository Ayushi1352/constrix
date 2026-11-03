import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.termsBreadcrumb?.seo };

export default function TermsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.termsBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage data={sectionData.Terms?.variants?.ConstructionTerms1} />
    </main>
  );
}
