import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import { site as data, pageTitle } from "@/data";
import InfoCards from "./InfoCards";
import ContactForm from "./ContactForm";
import Location from "./Location";

const { title } = data.pages.contactUs;

export const metadata: Metadata = { title: pageTitle(title) };

export default function ContactUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <section className="section-space bg-linear-to-b from-[#fdfdfd] from-10% to-cream to-40% xl:pt-64 xl:pb-213">
        <InfoCards />
        <div className="mx-auto mt-32 flex w-full flex-col gap-32 px-16 sm:px-24 lg:flex-row lg:gap-24 lg:px-48 xl:mt-40 xl:px-80">
          <ContactForm />
          <Location />
        </div>
      </section>
    </>
  );
}
