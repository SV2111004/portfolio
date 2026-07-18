import { useLenis } from "./hooks/useLenis";
import Preloader from "./components/Preloader";
import AmbientBackground from "./components/AmbientBackground";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import CodingProfiles from "./sections/CodingProfiles";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function App() {
  useLenis();

  return (
    <>
      <Preloader />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-jali-bright)] focus:px-4 focus:py-2 focus:text-[var(--color-ink)]"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
