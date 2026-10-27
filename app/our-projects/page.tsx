import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Projects from "@/components/Projects";
import { site as data, pageTitle } from "@/data";

const { title } = data.pages.ourProjects;

export const metadata: Metadata = { title: pageTitle(title) };

export default function OurProjectsPage() {
  return (
    <>
      <PageBanner title={title} />
      <Projects rows={2} showViewAll={false} pageSize={8} />
    </>
  );
}
