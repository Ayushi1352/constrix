import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import ClientReviews from "@/components/ClientReviews";

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
