import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;
const { phone, email } = commonData.company;

export const metadata: Metadata = { ...commonData.privacyBreadcrumb?.seo };

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.privacyBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage data={sectionData.PrivacyPolicy?.variants?.ConstructionPrivacyPolicy1} values={{ phone, email }} />
    </main>
  );
}
