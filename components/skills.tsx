"use client";

import SectionHeading from "./section-heading";
import { animate, motion } from "framer-motion";
import { softSkillsData, techSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

//Variants in Framer Motion
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 sm:mb-0 sm:mt-8 max-w-[53rem] scroll-mt-28 text-center">
      <SectionHeading>My Technical Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center mb-3 sm:mb-8 p-1 sm:mt-8">
        {techSkillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white borderPurple px-5 py-5 rounded-xl">
            {skill}
          </motion.li>
        ))}
      </ul>
      <SectionHeading>My Soft Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center mb-3 p-1 sm:mt-8">
        {softSkillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white borderPurple px-5 py-5 rounded-xl">
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
