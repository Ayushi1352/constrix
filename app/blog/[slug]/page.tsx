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
          { label: data.pages.blog.title, href: "/blog" },
          { label: cleanTitle },
        ]}
      />
      <section className="section-space bg-white xl:pt-67 xl:pb-128">
        <div className="mx-auto flex w-full flex-col gap-48 px-16 sm:px-24 lg:flex-row lg:gap-32 lg:px-48 xl:justify-between xl:gap-48 xl:px-80">
          <Article post={post} />
          <aside className="w-full shrink-0 lg:w-340 xl:w-435">
            <RecentPosts currentSlug={post.slug} />
            <AdviceCard />
          </aside>
        </div>
      </section>
    </>
  );
}
