import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutUs } from "@/components/sections/AboutUs";
import { Process } from "@/components/sections/Process";
import { Cta } from "@/components/sections/Cta";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.ConstructionAboutUs1} detailed />
      <Process data={sectionData.Process?.variants?.ConstructionProcess1} />
      <Cta data={sectionData.Cta?.variants?.ConstructionCta1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.ConstructionWhyChooseUs1} />
    </main>
  );
}
