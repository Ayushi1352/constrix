import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Blog from "@/components/Blog";

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
