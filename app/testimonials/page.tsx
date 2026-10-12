import type { Metadata } from "next";
import PageBanner from "@/components/common/PageBanner";
import ClientReviews from "./ClientReviews";

export const metadata: Metadata = { title: "Testimonials | Constrix" };

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title="Testimonials" />
      <ClientReviews />
    </>
  );
}
