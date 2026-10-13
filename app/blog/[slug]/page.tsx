import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/common/PageBanner";
import { site as data, pageTitle } from "@/data";
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
  const cleanTitle = post ? post.title.replace(/\n/g, " ") : data.pages.blogDetail.title;
  return {
    title: pageTitle(cleanTitle),
  };
}

export function generateStaticParams() {
  return data.blog.posts.map((post) => ({ slug: post.slug }));
}

async function BlogContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = data.blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <section className="section-space bg-white xl:pt-60 xl:pb-100">
      <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-24 sm:px-36 lg:flex-row lg:gap-36 lg:px-64 xl:justify-between xl:gap-48 xl:px-105">
        <Article post={post} />
        <aside className="w-full shrink-0 lg:w-340 xl:w-420">
          <RecentPosts currentSlug={post.slug} />
          <AdviceCard />
        </aside>
      </div>
    </section>
  );
}

export default function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <PageBanner
        title={data.pages.blogDetail.title}
        breadcrumbs={[{ label: data.pages.blogDetail.title }]}
      />
      <Suspense fallback={<div className="min-h-500 bg-white" />}>
        <BlogContent params={params} />
      </Suspense>
    </>
  );
}
