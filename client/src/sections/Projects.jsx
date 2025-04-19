// src/components/ProjectsSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Origami } from "lucide-react";
import { GET_PROJECTS } from "../graphql/queries";
import TechPill from "../components/TechPill";
import { TECH_ICON_MAP } from "../components/icon.js";

export default function ProjectsSection() {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  const projects = data?.getProfile?.projects || [];
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const scrollRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const slides = container.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentIdx(Number(entry.target.dataset.index));
          }
        }),
      { root: container, threshold: 0.6 }
    );
    slides.forEach((slide) => observer.observe(slide));
    return () => slides.forEach((slide) => observer.unobserve(slide));
  }, [projects]);

  if (loading) return <p className="text-center text-white">Loading…</p>;
  if (error) return <p className="text-center text-red-500">Error!</p>;

  function openVideo(url) {
    setCurrentVideoUrl(url);
    setIsVideoOpen(true);
  }
  function closeVideo() {
    setIsVideoOpen(false);
    setCurrentVideoUrl("");
  }

  return (
    <>
      {/* Font imports & hide scrollbar */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shuttle+Block:wght@400;700&display=swap');
        .font-minecraft { font-family: 'Minecraft', sans-serif; }
        .font-shuttle   { font-family: 'Shuttle Block', sans-serif; }
        .scroll-container::-webkit-scrollbar { width:0; height:0; }
        .scroll-container { scrollbar-width:none; -ms-overflow-style:none; }
      `}</style>

      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-[20px] text-center text-[#FE4F2D] mb-20 font-minecraft font-bold">
            Projects
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* ← Carousel */}
            <div className="md:w-1/2">
              <div
                ref={scrollRef}
                data-lenis-prevent
                className="scroll-container h-[600px] overflow-y-auto snap-y snap-mandatory sticky top-24"
              >
                <div className="mx-auto flex flex-col gap-y-6 md:gap-y-24 w-full">
                  {projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      data-index={idx}
                      className="project-card snap-start flex w-full h-[600px] relative rounded-2xl overflow-visible"
                      initial={false}
                      animate={{
                        opacity: idx === currentIdx ? 1 : 0,
                        scale: idx === currentIdx ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* 🔴 Red glow */}
                      <div
                        className="
                          absolute -inset-2
                          rounded-2xl lg:rounded-3xl
                          bg-gradient-to-br from-red-800/40 via-red-600/20 to-transparent
                          filter blur-3xl opacity-70
                          pointer-events-none
                        "
                      />

                      <a
                        href={project.projectUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        draggable="false"
                        className="
                          pointer-events-none relative cursor-pointer overflow-hidden
                          rounded-2xl border border-white/15 bg-transparent
                          p-1.5 shadow-2xl md:pointer-events-auto
                          lg:h-[560px] lg:rounded-3xl lg:p-2
                        "
                      >
                        {/* Top gloss stripe */}
                        <div
                          className="absolute inset-x-0 top-0 h-px"
                          style={{
                            background:
                              "linear-gradient(90deg,rgba(0,0,0,0) 5%,rgba(255,255,255,0.8) 35%,#fff 50%,rgba(255,255,255,0.8) 65%,rgba(0,0,0,0) 95%)",
                          }}
                        />

                        {/* Inner content */}
                        <div
                          className="
                            group relative flex h-full flex-col items-center justify-between
                            overflow-hidden rounded-xl lg:rounded-2xl
                            bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0)_100%)]
                            transition-all duration-300
                          "
                        >
                          {/* Thin gloss line */}
                          <div
                            className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                            style={{
                              background:
                                "linear-gradient(90deg,rgba(0,0,0,0)20%,rgb(255,255,255)50%,rgba(0,0,0,0)80%)",
                            }}
                          />

                          {/* Title + arrow (lg) */}
                          <div className="hidden lg:flex w-full items-center justify-between px-12 py-8 text-red-300">
                            <h3 className="text-2xl font-semibold">
                              {project.tagline || project.title}
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-right size-6"
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </div>

                          {/* Screenshot */}
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="
                              lg:group-hover:translate-y-10 w-full max-w-[85%]
                              translate-y-5 -rotate-3 rounded-t-lg
                              border-[1.5px] border-white/20
                              transition-all duration-300 will-change-transform
                              lg:block lg:rotate-0 lg:group-hover:scale-[1.08]
                              lg:group-hover:-rotate-3
                              shadow-[0_0_30px_rgba(220,38,38,0.5)]
                            "
                          />

                          {project.comingSoon && (
                            <div className="
                              absolute bottom-6 right-6
                              bg-black/60 text-white text-xs font-medium
                              px-3 py-1 rounded-full
                            ">
                              Coming Soon
                            </div>
                          )}
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* → Details pane */}
            {projects[currentIdx] && (
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pl-20 font-[Outfit] text-white flex flex-col justify-start space-y-6"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-red-500 inline-block" />
                  {projects[currentIdx].title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-[500] leading-relaxed">
                  {projects[currentIdx].description}
                </p>

                {/* Features list */}
                {projects[currentIdx].features && (
                  <ul className="space-y-3">
                    {projects[currentIdx].features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1 mr-2 size-5 shrink-0 fill-[#FE4F2D]"
                        >
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                        </svg>
                        <span className="text-gray-200 font-normal leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech pills */}
                {projects[currentIdx].technologies && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {projects[currentIdx].technologies.map((tech) => (
                      <TechPill
                        key={tech}
                        name={tech}
                        Icon={TECH_ICON_MAP[tech]}
                      />
                    ))}
                  </div>
                )}

                {/* View buttons */}
                <div className="pt-4">
                  {projects[currentIdx].projectUrl && (
                    <a
                      href={projects[currentIdx].projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 border border-red-500 text-red-500 font-medium rounded-full hover:bg-red-500 hover:text-black transition"
                    >
                      View Demo
                    </a>
                  )}
                  {projects[currentIdx].videoUrl && (
                    <a
                      href={projects[currentIdx].videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block ml-4 px-6 py-2 border border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-500 hover:text-white transition"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-3xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <video
              src={currentVideoUrl}
              controls
              autoPlay
              className="w-full rounded-md shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
