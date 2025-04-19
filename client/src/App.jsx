// src/App.jsx
import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import Lenis from "@studio-freight/lenis";
import { useQuery } from "@apollo/client";
import { GET_PROFILE, GET_PROJECTS } from "./graphql/queries";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import SideSocialIcons from "./components/SideSocialIcons";
import FullPageLoader from "./components/FullPageLoader";

// Lazy‑loaded sections
const Hero        = lazy(() => import("./sections/Hero"));
const Experience  = lazy(() => import("./sections/ExperienceSection"));
const Services    = lazy(() => import("./sections/services"));
const TechStack   = lazy(() => import("./sections/techstack"));
const Projects    = lazy(() => import("./sections/Projects"));
const Contact     = lazy(() => import("./sections/Contact"));

export default function App() {
  // 1) Enforce a 2‑second minimum display of the loader
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2) Trigger your data fetches (you can remove the `loading` checks,
  //    since data loading will now show inside individual sections or under Suspense)
  useQuery(GET_PROFILE);
  useQuery(GET_PROJECTS);

  // 3) Initialize Lenis for smooth scrolling
  const lenisRef = useRef(null);
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });
    function frame(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, []);

  const socialLinks = [
    { platform: "GitHub",    url: "https://github.com/Abishekpriyan12" },
    { platform: "LinkedIn",  url: "https://www.linkedin.com/in/abishek-priyan/" },
    { platform: "Instagram", url: "https://www.instagram.com/a.b.i._?igsh=cXF6bHNiYnBrdzF5&utm_source=qr" },
  ];

  // 4) While `showLoader` is true, keep showing your gaming loader
  if (showLoader) {
    return <FullPageLoader />;
  }

  // 5) After at least 2 s have passed, render your real app under one Suspense boundary
  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-white font-sans relative">
      {/* Navbar with smooth‑scroll instance */}
      <Navbar lenis={lenisRef.current} />

      {/* Fixed social icons */}
      <SideSocialIcons socialLinks={socialLinks} />

      <main className="pt-20 flex flex-col gap-20">
        {/* All lazy sections—and any suspended data queries—fall back to the same loader */}
        <Suspense fallback={<FullPageLoader />}>
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
