import type { BlogDetailData, BlogPost } from "@/types/templates.types";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { RecentPosts } from "@/components/sections/RecentPosts";
import { AdviceCard } from "@/components/sections/AdviceCard";

export const BlogDetail = ({ data, post, posts = [] }: { data?: BlogDetailData; post?: BlogPost; posts?: BlogPost[] }) => {
  if (!data || !post) return null;
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-[var(--color-white)] xl:pt-60 xl:pb-100">
      <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-24 sm:px-36 lg:flex-row lg:gap-36 lg:px-64 xl:justify-between xl:gap-48 xl:px-105">
        <BlogArticle data={data} post={post} />
        <aside className="w-full shrink-0 lg:w-340 xl:w-420">
          <RecentPosts title={data.recentTitle} posts={posts} currentId={post.id} />
          <AdviceCard data={data.help} />
        </aside>
      </div>
    </section>
  );
};
