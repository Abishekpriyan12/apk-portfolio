
import radioWave from "../assets/images/radio-wave.png";
// Your icons
import iconLinkedIn from "../assets/images/linkedln_icon.png";
import iconGitHub from "../assets/images/github.png";
import iconInsta from "../assets/images/instrgram_icon.png";

// If using motion:
import { motion } from "framer-motion";
import illustration from "../assets/images/abi.png"



const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#201F1E] w-full min-h-screen px-2 md:px-10 pt-32 pb-20"
    >
      {/* Centered container with max-width */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-20 gap-40">
        
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 text-white w-full md:w-1/2 max-w-lg"
        >
          <span className="bg-[#3B352F] text-[#D9D598] px-3 py-1 rounded-md text-sm w-max">
            Hey I am,
          </span>

          {/* FIRST LINE */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            ABISHEK PRIYAN
          </h1>
          {/* SECOND LINE: wave + Kabilan */}
          <div className="flex items-center gap-2">
            <img
              src={radioWave}
              alt="radio wave"
              className="h-11 w-50 animate-pulse"
            />
            <span className="text-[#FE4F2D] text-4xl md:text-5xl font-extrabold leading-tight">
              KABILAN
            </span>
          </div>

         

          <p className="text-[#D9D598] font-medium text-lg">
            Web Designer & Developer
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
        
            <img src={iconLinkedIn} alt="LinkedIn" className="w-8 h-8" />
            <img src={iconGitHub} alt="GitHub" className="w-8 h-8" />
            <img src={iconInsta} alt="Instagram" className="w-8 h-8" />
            
          </div>
        </motion.div>

        {/* Right Section - Illustration Reveal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 w-full md:w-1/2 justify-center max-w-lg"
        >
          <div className="w-[380px] h-[380px] rounded-full bg-[#FE4F2D] flex items-center justify-center">
            <img src={illustration} alt="abi" />
          </div>
          <button
            className="
              bg-transparent border border-[#FE4F2D] text-white px-6 py-2 rounded-md 
              hover:bg-[#FE4F2D] hover:text-black 
              transition text-sm font-bold 
              transform hover:scale-105  
              hover:shadow-[0_0_12px_#FE4F2D]
            "
          >
            📞 CONTACT ME
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
