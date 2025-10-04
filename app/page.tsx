// import Header from "@/components/layout/header";
import Hero from "@/components/landing_page/hero";
import Footer from "@/components/layout/footer";
import About from "@/components/landing_page/about";
import Contact from "@/components/landing_page/contact";
import Projects from "@/components/landing_page/projects";
import Experience from "@/components/landing_page/experience";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* <Header /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
