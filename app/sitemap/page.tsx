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
          <div className="border-l-4 border-copper py-6 pl-18 sm:pl-24">
            <p className="font-figtree text-[17px] leading-[28px] text-[#2c3340] sm:text-[18px] sm:leading-[30px] lg:text-[20px] lg:leading-[34px]">
              {sitemap.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Sitemap Sections */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-44">
            
            {/* 1. Main Pages */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins text-[22px] leading-[30px] font-bold text-coal sm:text-[24px] sm:leading-[32px] lg:text-[26px] lg:leading-[34px]">
                <span className="text-copper">1.</span> {sitemap.groups.main.title}
              </h2>
              <p className="mt-10 font-figtree text-[15px] text-[#5e6870] sm:text-[16px] lg:text-[17px] leading-[26px]">
                {sitemap.groups.main.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {mainPages.map((page) => (
                  <li key={page.href + page.label}>
                    <Link
                      href={page.href}
                      className="font-figtree text-[16.5px] font-medium text-coal transition-colors hover:text-copper sm:text-[17.5px] lg:text-[18.5px] leading-[28px]"
                    >
                      • {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Construction Services */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins text-[22px] leading-[30px] font-bold text-coal sm:text-[24px] sm:leading-[32px] lg:text-[26px] lg:leading-[34px]">
                <span className="text-copper">2.</span> {sitemap.groups.services.title}
              </h2>
              <p className="mt-10 font-figtree text-[15px] text-[#5e6870] sm:text-[16px] lg:text-[17px] leading-[26px]">
                {sitemap.groups.services.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {serviceLinks.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="font-figtree text-[16.5px] font-medium text-coal transition-colors hover:text-copper sm:text-[17.5px] lg:text-[18.5px] leading-[28px]"
                    >
                      • {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. Project Categories */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins text-[22px] leading-[30px] font-bold text-coal sm:text-[24px] sm:leading-[32px] lg:text-[26px] lg:leading-[34px]">
                <span className="text-copper">3.</span> {sitemap.groups.projects.title}
              </h2>
              <p className="mt-10 font-figtree text-[15px] text-[#5e6870] sm:text-[16px] lg:text-[17px] leading-[26px]">
                {sitemap.groups.projects.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {projectCategories.map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={cat.href}
                      className="font-figtree text-[16.5px] font-medium text-coal transition-colors hover:text-copper sm:text-[17.5px] lg:text-[18.5px] leading-[28px]"
                    >
                      • {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Blog & Articles */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins text-[22px] leading-[30px] font-bold text-coal sm:text-[24px] sm:leading-[32px] lg:text-[26px] lg:leading-[34px]">
                <span className="text-copper">4.</span> {sitemap.groups.blog.title}
              </h2>
              <p className="mt-10 font-figtree text-[15px] text-[#5e6870] sm:text-[16px] lg:text-[17px] leading-[26px]">
                {sitemap.groups.blog.text}
              </p>
              <ul className="mt-16 space-y-12">
                {blogPosts.map((post, i) => (
                  <li key={i}>
                    <Link
                      href={post.href}
                      className="font-figtree text-[16.5px] font-medium text-coal transition-colors hover:text-copper sm:text-[17.5px] lg:text-[18.5px] leading-[28px]"
                    >
                      • {post.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Legal & Support */}
            <section className="border-t border-[#f0f0f0] pt-32 sm:pt-36">
              <h2 className="font-poppins text-[22px] leading-[30px] font-bold text-coal sm:text-[24px] sm:leading-[32px] lg:text-[26px] lg:leading-[34px]">
                <span className="text-copper">5.</span> {sitemap.groups.support.title}
              </h2>
              <p className="mt-10 font-figtree text-[15px] text-[#5e6870] sm:text-[16px] lg:text-[17px] leading-[26px]">
                {sitemap.groups.support.text}
              </p>
              <ul className="mt-16 grid gap-12 sm:grid-cols-2">
                {supportPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="font-figtree text-[16.5px] font-medium text-coal transition-colors hover:text-copper sm:text-[17.5px] lg:text-[18.5px] leading-[28px]"
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
