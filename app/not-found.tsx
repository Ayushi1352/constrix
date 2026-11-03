import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

const templateData: ConstructionTemplateData = rawData;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.notFound?.seo };

export default function NotFoundPage() {
  return (
    <main className="flex-1">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
