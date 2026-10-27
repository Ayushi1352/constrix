import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import InfoCards from "@/components/InfoCards";
import ContactForm from "@/components/ContactForm";
import Location from "@/components/Location";

const { title } = data.pages.contactUs;

export const metadata: Metadata = { title: pageTitle(title) };

export default function ContactUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <section className="py-48 sm:py-64 lg:py-80 bg-linear-to-b from-[#fdfdfd] from-10% to-cream to-40% xl:pt-64 xl:pb-213">
        <InfoCards />
        <div className="mx-auto mt-32 flex w-full flex-col gap-32 px-16 sm:px-24 lg:flex-row lg:gap-24 lg:px-48 xl:mt-40 xl:px-80">
          <ContactForm />
          <Location />
        </div>
      </section>
    </>
  );
}
