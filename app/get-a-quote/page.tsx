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
      <section className="section-space bg-[#fdfdfd] xl:pt-51 xl:pb-38">
        <div className="mx-auto flex w-full flex-col gap-40 px-16 sm:px-24 lg:flex-row lg:gap-32 lg:px-48 xl:justify-between xl:gap-40 xl:px-80">
          <QuoteIntro />
          <QuoteForm />
        </div>
      </section>
      <Benefits />
    </>
  );
}
