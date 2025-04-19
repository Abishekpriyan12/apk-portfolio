import React from "react";
import Tilt from "react-parallax-tilt";

/**
 * ServicesCard
 * A single card with a gradient outline on hover + tilt effect,
 * featuring a dedicated icon tab in the top-right corner.
 */
const ServicesCard = ({ icon, title, description, color = "#FE4F2D" }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={800}
      transitionSpeed={400}
      scale={1.02}
      className="group relative w-full max-w-sm"
    >
      {/* Gradient Outline Container */}
      <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-[#FE4F2D] to-[#FE4F2D] opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Inner Card Content */}
      <div className="relative bg-[#201F1E] backdrop-blur-sm min-h-[230px] p-6 rounded-xl text-start">
        {/* Icon Tab in Top-Right Corner */}
        <div className="absolute -top-4 right-4 w-12 h-12 flex items-center justify-center  shadow-md">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        {/* Card Text */}
        <h3 className="mt-2 text-[16px] font-bold mb-2 font-[shuttleblock] text-white">
          {title}
        </h3>
        <p className="text-[14px] text-[#E5E0E0] leading-relaxed">
          {description}
        </p>
      </div>
    </Tilt>
  );
};

export default ServicesCard;
