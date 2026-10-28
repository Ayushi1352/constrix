import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
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

      <main className="py-48 sm:py-64 lg:py-80 bg-white">
        <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
          
          {/* Top Intro callout with vertical bar */}
          <div className="border-l-4 border-copper py-6 pl-18 sm:pl-24">
            <p className="text-[0.9375rem] leading-[1.75rem] text-[#2c3340] xl:text-[1.0625rem] xl:leading-[1.875rem]">
              {privacy.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Sections */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-44">
            {privacy.items.map((item, index) => (
              <section
                key={item.title}
                className="border-t border-[#f0f0f0] pt-32 sm:pt-36"
              >
                <h2 className="font-main text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:leading-[2rem] lg:leading-[2.125rem]">
                  <span className="text-copper">{index + 1}.</span> {item.title}
                </h2>
                <p className="mt-14 text-[0.9375rem] leading-[1.75rem] text-[#4a5568] sm:mt-16 xl:text-[1.0625rem] xl:leading-[1.875rem]">
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
