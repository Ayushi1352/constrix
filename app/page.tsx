import rawData from "@/data/templates.json";
import type { ConstructionTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cta } from "@/components/sections/Cta";
import { Blogs } from "@/components/sections/Blogs";

const templateData: ConstructionTemplateData = rawData;
const sectionData = templateData.categories.Construction.sections;
const commonData = templateData.common;

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.ConstructionHero1} ui={commonData.globalUI} />
      <Services data={sectionData.Services?.variants?.ConstructionServices1} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.ConstructionAboutUs1} />
      <Projects data={sectionData.Projects?.variants?.ConstructionProjects1} ui={commonData.globalUI} />
      <Process data={sectionData.Process?.variants?.ConstructionProcess1} />
      <Testimonials data={sectionData.Testimonials?.variants?.ConstructionTestimonials1} ui={commonData.globalUI} />
      <Cta data={sectionData.Cta?.variants?.ConstructionCta1} />
      <Blogs data={sectionData.Blogs?.variants?.ConstructionBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
