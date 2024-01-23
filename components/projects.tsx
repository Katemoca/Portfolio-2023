"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      className="scroll-mt-28 mt-28 sm:mt-20 mb-28"
      id="projects">
      <SectionHeading>Projects i love</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
