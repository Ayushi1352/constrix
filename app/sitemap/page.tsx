import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
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
    href: `/our-services/${svc.slug}`,
  }));

  const projectCategories = projects.categories.map((cat) => ({
    label: `${cat} ${sitemap.projectLinkSuffix}`,
    href: sitemap.projectsHref,
  }));

  const blogPosts = blog.posts.map((post) => ({
    label: post.title.replace(/\n/g, " "),
    href: `/blog/${post.slug}`,
  }));

  const supportPages = footer.supportLinks.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  return (
    <>
      <PageBanner title={sitemap.title} />

      <main className="section-space bg-white">
        <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
          
          {/* Top Intro callout with vertical bar */}
          <div className="border-l-3 border-copper py-4 pl-16 sm:pl-20">
            <p className="font-figtree fs-15 leading-26 text-[#2c3340] sm:fs-17 sm:leading-28">
              {sitemap.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Sitemap Sections */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-40">
            
            {/* 1. Main Pages */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins fs-18 font-bold text-coal sm:fs-20 lg:fs-22">
                <span className="text-copper">1.</span> {sitemap.groups.main.title}
              </h2>
              <p className="mt-10 font-figtree fs-14 text-[#5e6870] sm:fs-15">
                {sitemap.groups.main.text}
              </p>
              <ul className="mt-14 grid gap-10 sm:grid-cols-2">
                {mainPages.map((page) => (
                  <li key={page.href + page.label}>
                    <Link
                      href={page.href}
                      className="font-figtree fs-15 font-medium text-coal transition-colors hover:text-copper sm:fs-16"
                    >
                      • {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Construction Services */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins fs-18 font-bold text-coal sm:fs-20 lg:fs-22">
                <span className="text-copper">2.</span> {sitemap.groups.services.title}
              </h2>
              <p className="mt-10 font-figtree fs-14 text-[#5e6870] sm:fs-15">
                {sitemap.groups.services.text}
              </p>
              <ul className="mt-14 grid gap-10 sm:grid-cols-2">
                {serviceLinks.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="font-figtree fs-15 font-medium text-coal transition-colors hover:text-copper sm:fs-16"
                    >
                      • {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Project Categories */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins fs-18 font-bold text-coal sm:fs-20 lg:fs-22">
                <span className="text-copper">3.</span> {sitemap.groups.projects.title}
              </h2>
              <p className="mt-10 font-figtree fs-14 text-[#5e6870] sm:fs-15">
                {sitemap.groups.projects.text}
              </p>
              <ul className="mt-14 grid gap-10 sm:grid-cols-2">
                {projectCategories.map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={cat.href}
                      className="font-figtree fs-15 font-medium text-coal transition-colors hover:text-copper sm:fs-16"
                    >
                      • {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Blog & Articles */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins fs-18 font-bold text-coal sm:fs-20 lg:fs-22">
                <span className="text-copper">4.</span> {sitemap.groups.blog.title}
              </h2>
              <p className="mt-10 font-figtree fs-14 text-[#5e6870] sm:fs-15">
                {sitemap.groups.blog.text}
              </p>
              <ul className="mt-14 space-y-10">
                {blogPosts.map((post, i) => (
                  <li key={i}>
                    <Link
                      href={post.href}
                      className="font-figtree fs-15 font-medium text-coal transition-colors hover:text-copper sm:fs-16"
                    >
                      • {post.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Legal & Support */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins fs-18 font-bold text-coal sm:fs-20 lg:fs-22">
                <span className="text-copper">5.</span> {sitemap.groups.support.title}
              </h2>
              <p className="mt-10 font-figtree fs-14 text-[#5e6870] sm:fs-15">
                {sitemap.groups.support.text}
              </p>
              <ul className="mt-14 grid gap-10 sm:grid-cols-2">
                {supportPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="font-figtree fs-15 font-medium text-coal transition-colors hover:text-copper sm:fs-16"
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
