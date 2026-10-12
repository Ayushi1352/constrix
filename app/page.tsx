import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Process />
      <Testimonials />
      <Cta />
      <Blog limit={3} />
    </>
  );
}
