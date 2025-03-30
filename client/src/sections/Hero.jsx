// ======= src/sections/Hero.jsx =======

import illustration from "../assets/images/abi.png"
const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#201F1E] w-full min-h-screen px-2 md:px-10 pt-32 pb-20"
    >
      {/* Centered container with max-width */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-40">
        {/* Left Section */}
        <div className="flex flex-col gap-4 text-white w-full md:w-1/2 max-w-lg">
          <span className="bg-[#3B352F] text-[#D9D598] px-3 py-1 rounded-md text-sm w-max">
            Hey I am,
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            ABISHEK PRIYAN <br />
            <span className="text-[#FE4F2D]">KABILAN</span>
          </h1>

          {/* Pulse line */}
          <div className="w-24 h-[2px] bg-[#FE4F2D] animate-pulse mt-1 mb-1" />

          <p className="text-[#D9D598] font-medium text-lg">
            Web Designer & Developer
          </p>

          {/* Social icons (later) */}
          <div className="flex gap-4 mt-6"></div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-6 w-full md:w-1/2 justify-center max-w-lg">
          <div className="w-[280px] h-[280px] rounded-full bg-[#FE4F2D] flex items-center justify-center">
            <img src={illustration} alt="" srcset="" />
          </div>
          <button className="bg-transparent border border-[#FE4F2D] text-white px-6 py-2 rounded-md hover:bg-[#FE4F2D] hover:text-black transition text-sm font-bold">
            📞 CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
