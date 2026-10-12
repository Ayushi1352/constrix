import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import Projects from "@/components/home/Projects";

export const metadata: Metadata = { title: "Our Projects | Constrix" };

export default function OurProjectsPage() {
  return (
    <>
      <PageBanner title="Our Projects" />
      <Projects rows={2} />
    </>
  );
}
