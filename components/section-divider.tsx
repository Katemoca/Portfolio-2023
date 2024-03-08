"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider({ height = 1 }) {
  //Scroll effect by using FRAMER MOTION and the hook useRef by React.
  const scrollEffectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollEffectRef,
    offset: ["0 1", "1.50 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={scrollEffectRef}
      className="relative w-full mt-10 sm:mt-28 mb-20 sm:mb-28 flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}>
      {/* Flower in the middle */}
      <motion.span
        className="text-9xl dark:opacity-45"
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
