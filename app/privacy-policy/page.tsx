import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import { site as data, fillContact, pageTitle } from "@/data";

export const metadata: Metadata = {
  title: pageTitle(data.privacy.metaTitle),
  description: data.privacy.metaDescription,
};

export default function PrivacyPolicyPage() {
  const { privacy } = data;

  return (
    <>
      <PageBanner title={privacy.title} />

      <main className="section-space bg-white">
        <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
          
          {/* Top Intro callout with vertical bar */}
          <div className="border-l-3 border-copper py-4 pl-16 sm:pl-20">
            <p className="font-figtree fs-15 leading-26 text-[#2c3340] sm:fs-17 sm:leading-28">
              {privacy.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Sections */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-40">
            {privacy.items.map((item, index) => (
              <section
                key={item.title}
                className="border-t border-[#f0f0f0] pt-32 sm:pt-36"
              >
                <h2 className="font-poppins fs-18 font-bold text-coal sm:fs-20 lg:fs-22">
                  <span className="text-copper">{index + 1}.</span> {item.title}
                </h2>
                <p className="mt-12 font-figtree fs-15 leading-26 text-[#5e6870] sm:mt-14 sm:fs-16 sm:leading-28">
                  {fillContact(item.content)}
                </p>
              </section>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
