import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import { site as data, pageTitle } from "@/data";
import ClientReviews from "./ClientReviews";

const { title } = data.pages.testimonials;

export const metadata: Metadata = { title: pageTitle(title) };

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title={title} />
      <ClientReviews />
    </>
  );
}
