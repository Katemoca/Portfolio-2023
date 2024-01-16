"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ height = 1 }) {
  return (
    <motion.div
      className="relative w-full mt-10 sm:mt-48 mb-36 sm:mb-48 flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}>
      {/* Left wave */}
      {/* <svg
        className={`absolute w-1/3 h-${height} left-0 top-1/2 transform -translate-y-1/2`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <path
          d="M0 50 C15 25,25 75,50 50 C75 25,85 75,100 50"
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="2"
        />
      </svg> */}
      {/* Left vertical line */}
      <div className="bg-green-300 bg-opacity-45 h-16 w-1 rounded-full mr-4 -translate-y-24 translate-x-10 "></div>

      {/* Flower in the middle */}
      <motion.span
        className="text-4xl"
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

      {/* Right vertical line */}
      <div className="bg-green-300 bg-opacity-45 h-16 w-1 rounded-full ml-4 translate-y-24 -translate-x-10"></div>
      {/* Right wave */}
      {/* <svg
        className={`absolute w-1/3 h-${height} right-0 top-1/2 transform -translate-y-1/2`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <path
          d="M0 50 C15 25,25 75,50 50 C75 25,85 75,100 50"
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="2"
        />
      </svg> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-full h-[100px] text-white text-opacity-80 "
        viewBox="0 0 100 100"
        preserveAspectRatio="none">
        <path
          d="M0 100 C 40 0, 60 0, 100 100 Z"
          className="fill-current"></path>
      </svg> */}
    </motion.div>
  );
}
