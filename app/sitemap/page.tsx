import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";

export const metadata: Metadata = {
  title: pageTitle(data.sitemap.metaTitle),
  description: data.sitemap.metaDescription,
};

export default function SitemapPage() {
  const { sitemap, nav, services, projects, blog, footer } = data;

  const mainPages = [
    ...nav.map((item) => ({ label: item.label, href: item.href })),
    { label: data.header.button.label, href: data.header.button.href },
    sitemap.testimonialsLink,
  ];

  const serviceLinks = services.items.map((svc) => ({
    label: svc.title,
    href: svc.href,
  }));

  const projectCategories = projects.categories.map((cat) => ({
    label: `${cat} ${sitemap.projectLinkSuffix}`,
    href: sitemap.projectsHref,
  }));

  const blogPosts = blog.posts.map((post) => ({
    label: post.title.replace(/\n/g, " "),
    href: post.href,
  }));

  const supportPages = footer.supportLinks.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  return (
    <>
      <PageBanner title={sitemap.title} />

      <main className="py-48 sm:py-64 lg:py-80 bg-white">
        <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
          
          {/* Top Intro callout with vertical bar */}
          <div className="border-l-4 border-copper py-6 pl-18 sm:pl-24">
            <p className="font-text text-[1.0625rem] leading-[1.75rem] text-[#2c3340] sm:text-[1.125rem] sm:leading-[1.875rem] lg:text-[1.25rem] lg:leading-[2.125rem]">
              {sitemap.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Sitemap Sections */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-44">
            
            {/* 1. Main Pages */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-main text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:text-[1.5rem] sm:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.125rem]">
                <span className="text-copper">1.</span> {sitemap.groups.main.title}
              </h2>
              <p className="mt-10 font-text text-[0.9375rem] text-slate sm:text-[1rem] lg:text-[1.0625rem] leading-[1.625rem]">
                {sitemap.groups.main.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {mainPages.map((page) => (
                  <li key={page.href + page.label}>
                    <Link
                      href={page.href}
                      className="font-text text-[1.03125rem] font-medium text-coal transition-colors hover:text-copper sm:text-[1.09375rem] lg:text-[1.15625rem] leading-[1.75rem]"
                    >
                      • {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Construction Services */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-main text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:text-[1.5rem] sm:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.125rem]">
                <span className="text-copper">2.</span> {sitemap.groups.services.title}
              </h2>
              <p className="mt-10 font-text text-[0.9375rem] text-slate sm:text-[1rem] lg:text-[1.0625rem] leading-[1.625rem]">
                {sitemap.groups.services.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {serviceLinks.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="font-text text-[1.03125rem] font-medium text-coal transition-colors hover:text-copper sm:text-[1.09375rem] lg:text-[1.15625rem] leading-[1.75rem]"
                    >
                      • {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Project Categories */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-main text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:text-[1.5rem] sm:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.125rem]">
                <span className="text-copper">3.</span> {sitemap.groups.projects.title}
              </h2>
              <p className="mt-10 font-text text-[0.9375rem] text-slate sm:text-[1rem] lg:text-[1.0625rem] leading-[1.625rem]">
                {sitemap.groups.projects.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {projectCategories.map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={cat.href}
                      className="font-text text-[1.03125rem] font-medium text-coal transition-colors hover:text-copper sm:text-[1.09375rem] lg:text-[1.15625rem] leading-[1.75rem]"
                    >
                      • {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Blog & Articles */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-main text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:text-[1.5rem] sm:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.125rem]">
                <span className="text-copper">4.</span> {sitemap.groups.blog.title}
              </h2>
              <p className="mt-10 font-text text-[0.9375rem] text-slate sm:text-[1rem] lg:text-[1.0625rem] leading-[1.625rem]">
                {sitemap.groups.blog.text}
              </p>
              <ul className="mt-16 space-y-12">
                {blogPosts.map((post, i) => (
                  <li key={i}>
                    <Link
                      href={post.href}
                      className="font-text text-[1.03125rem] font-medium text-coal transition-colors hover:text-copper sm:text-[1.09375rem] lg:text-[1.15625rem] leading-[1.75rem]"
                    >
                      • {post.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Legal & Support */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-main text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:text-[1.5rem] sm:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.125rem]">
                <span className="text-copper">5.</span> {sitemap.groups.support.title}
              </h2>
              <p className="mt-10 font-text text-[0.9375rem] text-slate sm:text-[1rem] lg:text-[1.0625rem] leading-[1.625rem]">
                {sitemap.groups.support.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {supportPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="font-text text-[1.03125rem] font-medium text-coal transition-colors hover:text-copper sm:text-[1.09375rem] lg:text-[1.15625rem] leading-[1.75rem]"
                    >
                      • {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

          </div>

        </div>
      </main>
    </>
  );
}
