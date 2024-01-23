"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { softSkillsData, techSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-28 mt-28 sm:mt-20 mb-28">
      <SectionHeading>My Technical Skills</SectionHeading>
      <ul>
        {techSkillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <SectionHeading>My Soft Skills</SectionHeading>
      <ul>
        {softSkillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
