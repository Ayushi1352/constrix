import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import { site as data, pageTitle } from "@/data";

export const metadata: Metadata = {
  title: pageTitle(data.terms.metaTitle),
  description: data.terms.metaDescription,
};

export default function TermsPage() {
  const { terms } = data;

  return (
    <>
      <PageBanner title={terms.title} />

      <main className="section-space bg-white">
        <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
          
          {/* Top Intro callout with vertical bar */}
          <div className="border-l-4 border-copper py-6 pl-18 sm:pl-24">
            <p className="font-figtree text-[17px] leading-[28px] text-[#2c3340] sm:text-[18px] sm:leading-[30px] lg:text-[20px] lg:leading-[34px]">
              {terms.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Sections */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-44">
            {terms.items.map((item, index) => (
              <section
                key={item.title}
                className="border-t border-[#f0f0f0] pt-32 sm:pt-36"
              >
                <h2 className="font-poppins text-[22px] leading-[30px] font-bold text-coal sm:text-[24px] sm:leading-[32px] lg:text-[26px] lg:leading-[34px]">
                  <span className="text-copper">{index + 1}.</span> {item.title}
                </h2>
                <p className="mt-14 font-figtree text-[17px] leading-[28px] text-[#4a5568] sm:mt-16 sm:text-[18px] sm:leading-[30px] lg:text-[19px] lg:leading-[34px]">
                  {item.content}
                </p>
              </section>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
