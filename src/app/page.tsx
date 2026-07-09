import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Courses } from "@/components/Courses";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
