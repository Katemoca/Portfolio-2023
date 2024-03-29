"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { softSkillsData, techSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { roboto_mono } from "@/app/fonts";

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
      className={`${roboto_mono.className} mb-28 mt-16 sm:mb-0 sm:mt-8 max-w-[53rem] scroll-mt-28 text-center dark:text-white`}>
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
            className="bg-white borderPurple px-5 py-5 rounded-xl dark:bg-white/20">
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
            className="bg-white borderPurple px-5 py-5 rounded-xl dark:bg-white/20">
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
