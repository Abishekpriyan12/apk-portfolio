import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const WORD = 'APK';

export default function Intro({ onFinish }) {
  // Auto-hide after animation completes
  useEffect(() => {
    const timeout = setTimeout(onFinish, 2400); // 0.3s initial delay + letter animations + fade
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#111011] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-white text-[6rem] flex font-[Shuttleblock]"
      
      >
        {WORD.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3 + i * 0.1,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}