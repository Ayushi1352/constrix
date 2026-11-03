import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Figtree, Montserrat, Poppins, Rajdhani, Roboto } from "next/font/google";
import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["600", "700"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-rajdhani" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-roboto" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-figtree" });
const fontClasses = [poppins, montserrat, rajdhani, roboto, figtree].map((font) => font.variable).join(" ");

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

const { fonts } = commonData.theme;
const fontVariables = {
  "--font-primary": fonts.primary,
  "--font-heading": fonts.heading,
  "--font-alt": fonts.alt,
  "--font-display": fonts.display,
  "--font-ui": fonts.ui,
  "--font-text": fonts.text,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1280px it follows the viewport width so the 1686px design scales as a whole.
      // Width only: the screen height (short screens, browser zoom) must not shrink the design's font sizes.
      // Everything clickable gets the pointer; with reduced motion turned on nothing scrolls smoothly.
      className={`${fontClasses} scroll-smooth text-[16px] antialiased xl:text-[length:min(16px,calc(100vw/105.375))] [&_:where(a[href],button:not(:disabled),select,[role=button])]:cursor-pointer motion-reduce:scroll-auto`}
    >
      <body className="min-h-screen [&_img]:select-none">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the
          screen, so nothing changes; on wider screens or when the browser is zoomed out the page stays
          in the middle with equal space on both sides instead of stretching.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col overflow-x-clip bg-[var(--color-white)]">
          <Header data={sectionData.Header?.variants?.ConstructionHeader1} company={commonData.company} ui={commonData.globalUI} />
          <ScrollToTop>
            {children}
            <ScrollReveal />
          </ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} services={sectionData.Services?.variants?.ConstructionServices1?.items} />
        </div>
      </body>
    </html>
  );
}
