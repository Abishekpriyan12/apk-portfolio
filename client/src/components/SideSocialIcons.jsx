import React from "react";
import { motion } from "framer-motion";

// Import your icon images
import iconLinkedIn from "../assets/images/linkedln_icon.png";
import iconGitHub from "../assets/images/github.png";
import iconInsta from "../assets/images/instagram_icon.png";

// Create a map to match link.platform -> icon image
const sideIconMap = {
  GitHub: iconGitHub,
  LinkedIn: iconLinkedIn,
  Instagram: iconInsta,
};

const SideSocialIcons = ({ socialLinks }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed left-4 top-1/2 -translate-y-1/2
        flex flex-col gap-6
        z-50
      "
    >
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={sideIconMap[link.platform]}
            alt={link.platform}
            className="w-5 h-5  hover:scale-110 transition-transform"
          />
        </a>
      ))}
    </motion.div>
  );
};

export default SideSocialIcons;
