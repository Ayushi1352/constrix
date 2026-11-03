import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;
const faq = sectionData.Faq?.variants?.ConstructionFaq1;

export const metadata: Metadata = { ...commonData.faqBreadcrumb?.seo };

export default function FaqPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage data={faq && { intro: faq.intro, items: faq.items.map((item) => ({ title: item.question, content: item.answer })) }} />
    </main>
  );
}
