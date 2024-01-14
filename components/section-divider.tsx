"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 flex justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}>
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg">
        {/* First Wave */}
        <path d="M0 25l10-10c5-5 15-5 20 0l10 10" fill="#007BFF" />
        <path d="M50 0v50" stroke="#007BFF" strokeWidth="3" />
        {/* Second Wave */}
        <path d="M100 25l-10-10c-5-5-15-5-20 0l-10 10" fill="#007BFF" />
      </svg>
    </motion.div>
  );
}
