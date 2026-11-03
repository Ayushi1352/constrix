"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";
import { Pagination } from "@/components/ui/Pagination";

const Arrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M1 8h21M15 1.500 22 8l-7 6.500" />
  </svg>
);

// Home page: the first `homeCount` posts and a "View All Blogs" button. Blog page (`paged`): every post, paged.
export const Blogs = ({ data: blog, ui, paged = false }: { data?: BlogsData; ui: GlobalUIData; paged?: boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!blog) return null;

  const pageSize = paged ? blog.pageSize : blog.homeCount;
  const totalPages = paged ? Math.ceil(blog.posts.length / pageSize) : 1;
  const safePage = Math.min(currentPage, totalPages || 1);
  const visiblePosts = blog.posts.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-[var(--color-white)] xl:pt-66 xl:pb-94">
      <div className="relative mx-auto w-full px-16 sm:px-24 lg:px-48 xl:px-80">
        <p className="flex items-center justify-center gap-14 text-[0.75rem] font-bold tracking-[0.22em] text-[var(--color-accent-blog)] uppercase xl:text-[0.9375rem]">
          <span className="h-2 w-26 bg-[var(--color-accent-blog)]" />
          {blog.label}
          <span className="h-2 w-26 bg-[var(--color-accent-blog)]" />
        </p>
        <h2 className="mt-8 text-center text-[2rem] leading-40 font-extrabold tracking-[-0.03em] text-[var(--color-heading-navy)] sm:text-[2.625rem] sm:leading-50 xl:mt-1 xl:text-[3.3125rem] xl:leading-64">
          {blog.title} <span className="text-[var(--color-accent-blog-soft)]">{blog.highlight}</span>
        </h2>
        <p className="mx-auto mt-8 max-w-590 text-center text-[0.9375rem] leading-24 text-[var(--color-text-blog)] xl:text-[1.0625rem] xl:leading-26 xl:mt-4 xl:max-w-none xl:whitespace-pre-line">
          {blog.text}
        </p>
        {!paged && (
          <div className="mt-20 flex justify-center xl:absolute xl:top-54 xl:right-55 xl:mt-0">
            <Link
              href={blog.buttonUrl}
              className="inline-flex h-46 w-177 items-center justify-center gap-24 border-[1.5px] border-copper text-[0.875rem] font-semibold text-copper transition-colors hover:bg-copper hover:text-[var(--color-white)]"
            >
              {blog.buttonText}
              <Arrow className="h-16 w-24" />
            </Link>
          </div>
        )}

        <div className="mt-32 grid gap-x-16 gap-y-32 sm:grid-cols-2 lg:grid-cols-3 xl:mt-21 xl:gap-y-61">
          {visiblePosts.map((post) => (
            <article key={post.id} className="group flex flex-col overflow-hidden rounded-[4px] bg-mist shadow-[0_3px_14px_var(--color-shadow-blog)]">
              <Link href={post.url} className="relative block aspect-[519/217] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-16 flex h-65 w-72 flex-col items-center justify-center bg-[var(--color-accent-blog-alt)] text-[var(--color-white)]">
                  <span className="text-[1.875rem] leading-32 font-semibold">{post.day}</span>
                  <span className="text-[0.625rem] leading-14 font-medium tracking-[0.04em] uppercase">{post.monthYear}</span>
                </span>
              </Link>
              <div className="flex flex-1 flex-col px-20 pt-13 pb-22 xl:px-24 xl:pt-10">
                <p className="text-[0.75rem] leading-18 font-bold tracking-[0.12em] text-[var(--color-accent-blog)] uppercase xl:text-[0.8125rem]">{post.category}</p>
                <h3 className="mt-5 max-w-340 text-[1.1875rem] leading-24 xl:mt-2 xl:max-w-none xl:whitespace-pre-line font-bold tracking-[-0.02em] text-coal xl:text-[1.25rem] xl:leading-23">
                  <Link href={post.url} className="transition-colors hover:text-copper">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-10 max-w-440 text-[0.9375rem] leading-24 text-[var(--color-text-blog-soft)] xl:text-[1.0625rem] xl:leading-26 xl:mt-6 xl:max-w-none">{post.text}</p>
                <Link
                  href={post.url}
                  className="mt-auto inline-flex items-center gap-14 self-start border-b border-copper pt-18 pb-1 text-[0.875rem] font-semibold text-coal transition-colors hover:text-copper xl:text-[0.9375rem]"
                >
                  {blog.readMore}
                  <Arrow className="h-14 w-22 text-copper" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {paged && (
          <Pagination
            className="mt-28"
            page={safePage}
            totalPages={totalPages}
            onChange={setCurrentPage}
            previousLabel={ui.previousBlogPage}
            nextLabel={ui.nextBlogPage}
            pageLabel={ui.goToBlogPage}
          />
        )}
      </div>
    </section>
  );
};
