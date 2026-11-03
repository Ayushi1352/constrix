import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Projects } from "@/components/sections/Projects";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.projectsBreadcrumb?.seo };

export default function OurProjectsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.projectsBreadcrumb} ui={commonData.globalUI} />
      <Projects data={sectionData.Projects?.variants?.ConstructionProjects1} ui={commonData.globalUI} paged />
    </main>
  );
}
