import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.blogsBreadcrumb?.seo };

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.ConstructionBlogs1} ui={commonData.globalUI} paged />
    </main>
  );
}
