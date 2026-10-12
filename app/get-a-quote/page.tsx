import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import { site as data, pageTitle } from "@/data";
import QuoteIntro from "./QuoteIntro";
import QuoteForm from "./QuoteForm";
import Benefits from "./Benefits";

const { title } = data.pages.getAQuote;

export const metadata: Metadata = { title: pageTitle(title) };

export default function GetAQuotePage() {
  return (
    <>
      <PageBanner title={title} />
      <section className="section-space bg-[#fdfdfd]">
        <div className="mx-auto flex w-full max-w-1686 flex-col gap-40 px-16 sm:px-24 lg:flex-row lg:gap-32 xl:gap-30 xl:pr-60 xl:pl-86">
          <QuoteIntro />
          <QuoteForm />
        </div>
      </section>
      <Benefits />
    </>
  );
}
