import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Blog from "@/components/Blog";
import { site as data, pageTitle } from "@/data";

const { title } = data.pages.blog;

export const metadata: Metadata = { title: pageTitle(title) };

export default function BlogPage() {
  return (
    <>
      <PageBanner title={title} />
      <Blog showViewAll={false} pageSize={6} />
    </>
  );
}
