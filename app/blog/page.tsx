import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import Blog from "@/components/home/Blog";

export const metadata: Metadata = { title: "Blog | Constrix" };

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" />
      <Blog />
    </>
  );
}
