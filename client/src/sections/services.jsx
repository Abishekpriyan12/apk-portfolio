import React from "react";
import { motion } from "framer-motion";
import ServicesCard from "../../src/components/ServicesCard"; // Adjust path as needed

// Local icon imports
import webProgrammingIcon from "../assets/images/web-programming.png";
import psAiIcon from "../assets/images/ps-ai.png";
import cameraIcon from "../assets/images/camera.png";
import figmaIcon from "../assets/images/figma.png";

// Data for services
const services = [
  {
    title: "Website Development",
    description:
      "Developing fast, responsive, and scalable websites using the MERN stack. Clean code, seamless performance, and modern web standards from front to back.",
    icon: webProgrammingIcon,
  },
  {
    title: "Branding & Design",
    description:
      "Crafting modern, visually appealing brand identities and marketing assets. We blend creativity with strategy to elevate your brand.",
    icon: psAiIcon,
  },
  {
    title: "Photography & Videography",
    description:
      "Capturing high-quality visual content for events, marketing, and social media. Our visuals create engaging stories.",
    icon: cameraIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing smooth, user-friendly interfaces and experiences across platforms. Usability and aesthetics in perfect harmony.",
    icon: figmaIcon,
  },
];

// Variants for the container that controls the staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Delay each card's reveal by 200ms
    },
  },
};

// Variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className=" text-white py-16 px-2 md:px-10"
    >
      {/* Header animated on scroll */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // Re-trigger when in view at 20% visibility
        transition={{ duration: 0.6 }}
        className="text-center text-[20px] text-[#FE4F2D] font-extrabold mb-12 font-[minecraft]"
      >
        MY SERVICES
      </motion.h2>

      {/* Container with staggered children */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <ServicesCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
