"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site as data } from "@/data";

const { blog } = data;

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M1 8h21M15 1.500 22 8l-7 6.500" />
    </svg>
  );
}

// `limit` shows only the first posts (home page); the Blog page shows all of them.
export default function Blog({ limit, showViewAll = true, pageSize = 6 }: { limit?: number; showViewAll?: boolean; pageSize?: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const posts = limit ? blog.posts.slice(0, limit) : blog.posts;
  const totalPages = !limit && posts.length > 0 ? Math.ceil(posts.length / pageSize) : 1;
  const safePage = Math.min(currentPage, totalPages || 1);
  const visiblePosts = limit ? posts : posts.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <section className="section-space bg-white">
      <div className="relative mx-auto w-full max-w-1686 px-16 sm:px-24 xl:px-55">
        <p className="flex items-center justify-center gap-14 fs-12 font-bold tracking-[0.22em] text-flame uppercase xl:fs-15">
          <span className="h-2 w-26 bg-flame" />
          {blog.label}
          <span className="h-2 w-26 bg-flame" />
        </p>
        <h2 className="mt-8 text-center fs-32 leading-40 font-extrabold tracking-[-0.03em] text-coal sm:fs-42 sm:leading-50 xl:-mt-2 xl:fs-53 xl:leading-64">
          {blog.title} <span className="text-copper">{blog.highlight}</span>
        </h2>
        <p className="mx-auto mt-8 max-w-590 text-center fs-14 leading-20 text-[#5c6170] xl:mt-6 xl:max-w-none xl:whitespace-pre-line">{blog.text}</p>
        {showViewAll && (
          <div className="mt-20 flex justify-center xl:absolute xl:top-52 xl:right-55 xl:mt-0">
            <Link
              href={blog.button.href}
              className="inline-flex h-46 w-177 items-center justify-center gap-24 border-[1.5px] border-copper fs-14 font-semibold text-copper transition-colors hover:bg-copper hover:text-white"
            >
              {blog.button.label}
              <Arrow className="h-16 w-24" />
            </Link>
          </div>
        )}

        <div className="mt-32 grid gap-x-16 gap-y-32 sm:grid-cols-2 lg:grid-cols-3 xl:mt-24 xl:gap-y-61">
          {visiblePosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-[4px] bg-mist shadow-[0_3px_14px_rgba(15,25,45,0.09)]"
            >
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[519/217] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-16 flex h-65 w-72 flex-col items-center justify-center bg-copper text-white">
                  <span className="fs-30 leading-32 font-semibold">{post.day}</span>
                  <span className="fs-10 leading-14 font-medium tracking-[0.04em] uppercase">{post.monthYear}</span>
                </span>
              </Link>
              <div className="flex flex-1 flex-col px-20 pt-13 pb-22 xl:px-24">
                <p className="fs-12 leading-18 font-bold tracking-[0.12em] text-copper uppercase xl:fs-13">{post.category}</p>
                <h3 className="mt-5 max-w-340 fs-19 leading-24 xl:max-w-none xl:whitespace-pre-line font-bold tracking-[-0.02em] text-coal xl:fs-20">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-copper">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-10 max-w-440 fs-15 leading-20 text-[#707588] xl:mt-5 xl:max-w-none xl:whitespace-pre-line">{post.text}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-14 self-start border-b border-copper pt-18 pb-1 fs-14 font-semibold text-coal transition-colors hover:text-copper xl:fs-15"
                >
                  {blog.readMore}
                  <Arrow className="h-14 w-22 text-copper" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {!limit && totalPages > 1 && (
          <div className="mt-28 flex items-center justify-center gap-10"> 
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className="flex size-40 items-center justify-center rounded-full border border-[#d8dfe6] bg-white text-coal transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous blog page"
            >
              <svg viewBox="0 0 24 16" className="h-16 w-24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M23 8H2M9 1.5 2 8l7 6.5" />
              </svg>
            </button>
            <div className="flex items-center gap-8 fs-15 text-coal">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex size-34 items-center justify-center rounded-full transition-colors ${safePage === page ? "bg-copper text-white" : "bg-[#f7f4f2] text-coal hover:bg-copper hover:text-white"}`}
                  aria-label={`Go to blog page ${page}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
              className="flex size-40 items-center justify-center rounded-full border border-[#d8dfe6] bg-white text-coal transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next blog page"
            >
              <svg viewBox="0 0 24 16" className="h-16 w-24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M1 8h21M15 1.5 22 8l-7 6.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
