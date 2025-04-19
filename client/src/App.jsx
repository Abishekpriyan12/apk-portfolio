// src/App.jsx
import React, { useEffect, useRef, Suspense, lazy } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideSocialIcons from "./components/SideSocialIcons";

// Lazy load each section
const Hero        = lazy(() => import("./sections/Hero"));
const Experience  = lazy(() => import("./sections/ExperienceSection"));
const Services    = lazy(() => import("./sections/services"));
const TechStack   = lazy(() => import("./sections/techstack"));
const Projects    = lazy(() => import("./sections/Projects"));
const Contact     = lazy(() => import("./sections/Contact"));

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1) Instantiate Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    // 2) Kick off the RAF loop
    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const socialLinks = [
    { platform: "GitHub",    url: "https://github.com/Abishekpriyan12" },
    { platform: "LinkedIn",  url: "https://www.linkedin.com/in/abishek-priyan/" },
    { platform: "Instagram", url: "https://www.instagram.com/a.b.i._?igsh=cXF6bHNiYnBrdzF5&utm_source=qr" },
  ];

  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-white font-sans relative">
      {/* Pass the Lenis instance down so Navbar can use lenis.scrollTo(...) */}
      <Navbar lenis={lenisRef.current} />

      {/* Fixed side social icons */}
      <SideSocialIcons socialLinks={socialLinks} />

      <main className="pt-20 flex flex-col gap-20">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Hero />
          <Experience />
          <Services />
          <TechStack />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
