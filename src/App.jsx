import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";

export default function App() {
  // Old multi-page URLs (/projects, /contact, …) land on the matching section.
  // Waits for web fonts so text reflow doesn't move the target mid-scroll.
  useEffect(() => {
    const target = document.getElementById(window.location.pathname.slice(1));
    if (target) document.fonts.ready.then(() => target.scrollIntoView({ behavior: "instant" }));
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </MotionConfig>
  );
}
