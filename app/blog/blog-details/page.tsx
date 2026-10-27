import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogArticle from "@/components/BlogArticle";
import RecentPosts from "@/components/RecentPosts";
import AdviceCard from "@/components/AdviceCard";
import { site as data, pageTitle } from "@/data";

// One common detail page for every blog post: all blog links point here and it shows the first post.
// The banner and breadcrumb carry the common page title from site.json, not the post title.
const post = data.blog.posts[0];
const { title } = data.pages.blogDetail;

export const metadata: Metadata = { title: pageTitle(title) };

export default function BlogDetailsPage() {
  return (
    <>
      <PageBanner title={title} breadcrumbs={[{ label: title }]} />
      <section className="py-48 sm:py-64 lg:py-80 bg-white xl:pt-60 xl:pb-100">
        <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-24 sm:px-36 lg:flex-row lg:gap-36 lg:px-64 xl:justify-between xl:gap-48 xl:px-105">
          <BlogArticle post={post} />
          <aside className="w-full shrink-0 lg:w-340 xl:w-420">
            <RecentPosts currentTitle={post.title} />
            <AdviceCard />
          </aside>
        </div>
      </section>
    </>
  );
}
