import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mt-8 sm:mt-8 mb-28 sm:mb-2">
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
