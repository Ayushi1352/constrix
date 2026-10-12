import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Cta from "@/components/home/Cta";
import WhyChoose from "./WhyChoose";
import { site as data, pageTitle } from "@/data";

const { title } = data.pages.aboutUs;

export const metadata: Metadata = { title: pageTitle(title) };

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <About detailed />
      <Process />
      <Cta />
      <WhyChoose />
    </>
  );
}
