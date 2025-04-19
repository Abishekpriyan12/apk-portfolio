// src/components/FullPageLoader.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FullPageLoader() {
  const LOADING_TEXT = "LOADING".split("");

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Segmented neon bar */}
      <div className="flex space-x-1 mb-8">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-8 bg-[#FE4F2D] rounded"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.05,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Flickering “LOADING” text */}
      <div className="flex items-center mb-6">
        {LOADING_TEXT.map((char, i) => (
          <motion.span
            key={i}
            className="text-3xl font-minecraft text-[#FE4F2D] mx-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Sweeping fill bar */}
      <div className="w-64 h-2 bg-[#222] rounded overflow-hidden">
        <motion.div
          className="h-full bg-[#FE4F2D]"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear"
          }}
        />
      </div>
    </div>
);
}
