import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;
const posts = sectionData.Blogs?.variants?.ConstructionBlogs1?.posts ?? [];
// One common detail page for every blog post: all blog links point here and it shows the first post.
const post = posts[0];

export const metadata: Metadata = { title: post?.title.replace(/\n/g, " "), description: post?.text.replace(/\n/g, " ") };

export default function BlogDetailsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.ConstructionBlogDetail1} post={post} posts={posts} />
    </main>
  );
}
