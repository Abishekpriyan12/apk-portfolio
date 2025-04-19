import React from "react";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { GET_PROFILE } from "../graphql/queries";

export default function ExperienceSection() {
  const { data, loading, error } = useQuery(GET_PROFILE);
  if (loading) return <p className="text-center text-white">Loading…</p>;
  if (error)   return <p className="text-center text-red-500">Error!</p>;

  const experience = data.getProfile.experience;

  return (
    <motion.section
      id="experience"
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[20px] font-bold text-center text-[#FE4F2D] mb-12 font-[minecraft]">
          Experience
        </h2>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="hidden md:block absolute top-0 left-12 w-[2px] h-full bg-neutral-700 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="flex justify-start pt-10 md:gap-10 md:pt-40"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Left timeline & header */}
                <div className="sticky top-40 z-40 flex max-w-xs flex-col items-start self-start md:w-full lg:max-w-sm">
                  {/* Circle */}
                  <div className="absolute left-10 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black">
                    <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800" />
                  </div>
                  {/* Desktop header */}
                  <div className="hidden md:block md:pl-20">
                    <div className="mt-2 flex flex-col items-start gap-y-2 text-sm font-light">
                      <span className="uppercase tracking-wide text-neutral-400">
                        {exp.dateRange}
                      </span>
                      <p className="text-xl font-semibold text-white/90 md:text-2xl">
                        {exp.role}
                      </p>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-neutral-300 hover:text-neutral-100 pointer-events-none"
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className="w-5 rounded-[3px]"
                        />
                        <span>{exp.company}</span>
                      </a>
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right content panel */}
                <div className="relative w-full pr-4 pl-20 md:pl-4">
                  {/* Mobile header */}
                  <div className="mb-4 block text-left text-2xl md:hidden">
                    <div className="mt-2 flex flex-col items-start gap-y-2 text-sm font-light">
                      <span className="uppercase tracking-wide text-neutral-400">
                        {exp.dateRange}
                      </span>
                      <p className="text-xl font-semibold text-white/90">
                        {exp.role}
                      </p>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-neutral-300 hover:text-neutral-100"
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className="w-5 rounded-[3px]"
                        />
                        <span>{exp.company}</span>
                      </a>
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description & bullets */}
                  <div className="flex flex-col gap-y-4 text-xs leading-relaxed text-neutral-400 md:text-sm">
                    <p>{exp.summary}</p>
                    <ul className="list-disc pl-5 space-y-2.5">
                      {exp.bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    {/* Tech tags */}
                    {exp.techStack?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
