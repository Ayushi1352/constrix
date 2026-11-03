import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sitemap } from "@/components/sections/Sitemap";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.sitemapBreadcrumb?.seo };

export default function SitemapPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.sitemapBreadcrumb} ui={commonData.globalUI} />
      <Sitemap
        data={sectionData.Sitemap?.variants?.ConstructionSitemap1}
        header={sectionData.Header?.variants?.ConstructionHeader1}
        services={sectionData.Services?.variants?.ConstructionServices1?.items}
        projects={sectionData.Projects?.variants?.ConstructionProjects1}
        posts={sectionData.Blogs?.variants?.ConstructionBlogs1?.posts}
        supportLinks={commonData.Footer.supportLinks}
      />
    </main>
  );
}
