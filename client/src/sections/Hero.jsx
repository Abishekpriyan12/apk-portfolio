import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import radioWave from "../assets/images/radio-wave.png";
import illustration from "../assets/images/abi.png";
import downArrowLight from "../assets/images/down-arrow.png";
import downArrowDark from "../assets/images/down-arrow-dark.png";

import siteData from "../data/siteData.json";

const Hero = () => {
  const { firstName, lastName, tagline, socialLinks, resumeUrl } = siteData.profile;

  const defaultStats = [
    { label: "Experience", value: 3, suffix: " Years", maxValue: 10 },
    { label: "Projects", value: 6, suffix: "", maxValue: 30 },
    { label: "GitHub Commits", value: 3000, suffix: "+", maxValue: 5000 },
  ];

  const statsFromAPI = defaultStats;
  const [progresses, setProgresses] = useState(statsFromAPI.map(() => 0));

  useEffect(() => {
    const newProgresses = statsFromAPI.map(stat => {
      if (stat.maxValue && stat.maxValue > 0) {
        return (stat.value / stat.maxValue) * 100;
      }
      return 100;
    });
    setTimeout(() => setProgresses(newProgresses), 100);
  }, [statsFromAPI]);

  return (
    <section id="home" className="w-full min-h-screen px-2 md:px-10 pt-32 pb-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-20 gap-40">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 text-white w-full md:w-1/2 max-w-lg"
        >
          <span className="bg-[#3B352F] text-[#D9D598] px-3 py-1 rounded-md text-sm w-max">
            Hey I am,
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {firstName}
          </h1>
          <div className="flex items-center gap-2">
            <img src={radioWave} alt="radio wave" className="h-11 w-50 animate-pulse" />
            <span className="text-[#FE4F2D] text-4xl md:text-5xl font-extrabold leading-tight">
              {lastName}
            </span>
          </div>
          <p className="text-[#D9D598] font-medium text-lg">{tagline}</p>

          {/* Circular Stats */}
          <div className="mt-20 flex flex-row gap-8 items-center justify-start">
            {statsFromAPI.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="w-20 h-20 relative"
              >
                <CircularProgressbar
                  value={progresses[idx]}
                  styles={buildStyles({
                    pathColor: "#FE4F2D",
                    trailColor: "#3B352F",
                    pathTransitionDuration: 2,
                    textSize: "0px",
                  })}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#FDFDFD] font-bold text-sm font-minecraft">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 2 : 0}
                    />
                  </span>
                </div>
                <p className="mt-4 text-left text-xs uppercase tracking-wider text-[#ffff] font-[shuttleblock]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION - Illustration & Download CV */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 w-full md:w-1/2 justify-center max-w-lg"
        >
          <div className="w-[380px] h-[380px] rounded-full bg-[#FE4F2D] flex items-center justify-center">
            <img src={illustration} alt="avatar" />
          </div>
          <a
            href={resumeUrl || "/cv.pdf"}
            target="_blank"
            rel="noreferrer"
            className="
              bg-transparent border border-[#FE4F2D] text-white px-6 py-2 rounded-md
              hover:bg-[#FE4F2D] hover:text-black transition text-sm font-bold
              transform hover:scale-105 hover:shadow-[0_0_12px_#FE4F2D]
              flex items-center gap-2 group
            "
          >
            <div className="flex items-center gap-2">
              <img src={downArrowLight} alt="Download CV Light" className="w-7 h-7 block group-hover:hidden" />
              <img src={downArrowDark} alt="Download CV Dark" className="w-7 h-7 hidden group-hover:block" />
              Download CV
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
