import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import Services from "@/components/home/Services";
import Cta from "@/components/home/Cta";

export const metadata: Metadata = { title: "Our Services | Constrix" };

export default function OurServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <Services />
      <Cta />
    </>
  );
}
