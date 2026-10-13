import type { Metadata } from "next";
import { Figtree, Montserrat, Poppins, Rajdhani, Roboto } from "next/font/google";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { site } from "@/data";
import "./globals.css";

const poppins = Poppins({
  variable: "--ff-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--ff-montserrat",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--ff-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const roboto = Roboto({
  variable: "--ff-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const figtree = Figtree({
  variable: "--ff-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.site.title,
  description: site.site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${rajdhani.variable} ${roboto.variable} ${figtree.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
