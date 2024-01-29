"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ height = 1 }) {
  return (
    <motion.div
      className="relative w-full mt-10 sm:mt-28 mb-20 sm:mb-28 flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}>
      {/* Flower in the middle */}
      <motion.span
        className="text-6xl"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}>
        💐
      </motion.span>
    </motion.div>
  );
}
