import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import Services from "@/components/home/Services";
import Cta from "@/components/home/Cta";
import { site as data, pageTitle } from "@/data";

const { title } = data.pages.ourServices;

export const metadata: Metadata = { title: pageTitle(title) };

export default function OurServicesPage() {
  return (
    <>
      <PageBanner title={title} />
      <Services showPagination />
      <Cta />
    </>
  );
}
