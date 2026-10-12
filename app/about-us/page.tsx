import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Cta from "@/components/home/Cta";
import WhyChoose from "./WhyChoose";

export const metadata: Metadata = { title: "About Us | Constrix" };

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <About detailed />
      <Process />
      <Cta />
      <WhyChoose />
    </>
  );
}
