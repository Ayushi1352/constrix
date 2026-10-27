import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";

export const metadata: Metadata = {
  title: pageTitle(data.faq.metaTitle),
  description: data.faq.metaDescription,
};

export default function FaqPage() {
  const { faq } = data;

  return (
    <>
      <PageBanner title={faq.title} />

      <main className="py-48 sm:py-64 lg:py-80 bg-white">
        <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
          
          {/* Top Intro callout with vertical bar */}
          <div className="border-l-4 border-copper py-6 pl-18 sm:pl-24">
            <p className="font-text text-[1.0625rem] leading-[1.75rem] text-[#2c3340] sm:text-[1.125rem] sm:leading-[1.875rem] lg:text-[1.25rem] lg:leading-[2.125rem]">
              {faq.intro}
            </p>
          </div>

          {/* Simple Clean Numbered Q&A List */}
          <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-44">
            {faq.items.map((item, index) => (
              <section
                key={item.question}
                className="border-t border-[#f0f0f0] pt-32 sm:pt-36"
              >
                <h2 className="font-main text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:text-[1.5rem] sm:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.125rem]">
                  <span className="text-copper">{index + 1}.</span> {item.question}
                </h2>
                <p className="mt-14 font-text text-[1.0625rem] leading-[1.75rem] text-[#4a5568] sm:mt-16 sm:text-[1.125rem] sm:leading-[1.875rem] lg:text-[1.1875rem] lg:leading-[2.125rem]">
                  {item.answer}
                </p>
              </section>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
