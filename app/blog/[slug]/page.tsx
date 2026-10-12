import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import { site as data } from "@/data";
import Article from "./Article";
import RecentPosts from "./RecentPosts";
import AdviceCard from "./AdviceCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = data.blog.posts.find((p) => p.slug === slug);
  const cleanTitle = post ? post.title.replace(/\n/g, " ") : "Blog Details";
  return {
    title: `${cleanTitle} | Constrix`,
  };
}

export function generateStaticParams() {
  return data.blog.posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = data.blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const cleanTitle = post.title.replace(/\n/g, " ");

  return (
    <>
      <PageBanner
        title={cleanTitle}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: cleanTitle },
        ]}
      />
      <section className="section-space bg-white">
        <div className="mx-auto flex w-full max-w-1686 flex-col gap-48 px-20 sm:px-32 lg:flex-row lg:gap-32 xl:gap-37 xl:pr-90 xl:pl-102">
          <Article post={post} />
          <aside className="w-full shrink-0 lg:w-340 xl:w-435">
            <RecentPosts />
            <AdviceCard />
          </aside>
        </div>
      </section>
    </>
  );
}
